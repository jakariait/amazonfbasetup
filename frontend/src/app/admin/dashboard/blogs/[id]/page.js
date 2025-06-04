"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { Box, Typography, Chip, Button, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import AuthAdminStore from "@/store/AuthAdminStore";
import ImageComponent from "@/components/ImageComponent";

const CustomTextField = React.memo(
	({
		label,
		value,
		onChange,
		required,
		multiline,
		rows,
		placeholder,
		margin = "normal",
	}) => {
		return (
			<div className={`mb-${margin === "normal" ? "4" : "2"}`}>
				{label && (
					<label className="block text-sm font-medium text-gray-700 mb-1">
						{label}
						{required && <span className="text-red-500 ml-1">*</span>}
					</label>
				)}
				{multiline ? (
					<textarea
						value={value}
						onChange={onChange}
						rows={rows}
						placeholder={placeholder}
						className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
					/>
				) : (
					<input
						type="text"
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						required={required}
						className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
					/>
				)}
			</div>
		);
	}
);

CustomTextField.displayName = "CustomTextField";

const EditBlog = () => {
	const { id: blogId } = useParams();
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const { token } = AuthAdminStore();

	const [formData, setFormData] = useState({
		name: "",
		author: "",
		longDesc: "",
		metaTitle: "",
		metaDescription: "",
		metaKeywords: [],
		searchTags: [],
	});
	const [keywordInput, setKeywordInput] = useState("");
	const [tagInput, setTagInput] = useState("");
	const [thumbnailImage, setThumbnailImage] = useState(null);
	const [imagePreview, setImagePreview] = useState("");

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success");

	const fileInputRef = useRef(null);

	const handleInputChange = useCallback(
		(field) => (e) => {
			setFormData((prev) => ({
				...prev,
				[field]: e.target.value,
			}));
		},
		[]
	);

	const handleDeleteTag = useCallback((tag) => {
		setFormData((prev) => ({
			...prev,
			searchTags: prev.searchTags.filter((t) => t !== tag),
		}));
	}, []);

	const handleDeleteKeyword = useCallback((keyword) => {
		setFormData((prev) => ({
			...prev,
			metaKeywords: prev.metaKeywords.filter((k) => k !== keyword),
		}));
	}, []);

	const handleAddTag = useCallback(
		(e) => {
			if (e.key === "Enter" && tagInput.trim()) {
				e.preventDefault();
				if (!formData.searchTags.includes(tagInput.trim())) {
					setFormData((prev) => ({
						...prev,
						searchTags: [...prev.searchTags, tagInput.trim()],
					}));
				}
				setTagInput("");
			}
		},
		[tagInput, formData.searchTags]
	);

	const handleAddKeyword = useCallback(
		(e) => {
			if (e.key === "Enter" && keywordInput.trim()) {
				e.preventDefault();
				if (!formData.metaKeywords.includes(keywordInput.trim())) {
					setFormData((prev) => ({
						...prev,
						metaKeywords: [...prev.metaKeywords, keywordInput.trim()],
					}));
				}
				setKeywordInput("");
			}
		},
		[keywordInput, formData.metaKeywords]
	);

	useEffect(() => {
		if (blogId && token && apiUrl) {
			const fetchBlog = async () => {
				try {
					const { data } = await axios.get(`${apiUrl}/blog/${blogId}`, {
						headers: { Authorization: `Bearer ${token}` },
					});

					const blog = data.data;
					setFormData({
						name: blog.name,
						author: blog.author,
						longDesc: blog.longDesc,
						metaTitle: blog.metaTitle,
						metaDescription: blog.metaDescription,
						searchTags: blog.searchTags || [],
						metaKeywords: blog.metaKeywords || [],
					});
					setImagePreview(blog.thumbnailImage || null);
				} catch (error) {
					setSnackbarMessage("Failed to load blog data");
					setSnackbarSeverity("error");
					setSnackbarOpen(true);
				}
			};

			fetchBlog();
		}
	}, [blogId, token, apiUrl]);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setThumbnailImage(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const submitData = new FormData();

		submitData.append("name", formData.name);
		submitData.append("author", formData.author);
		submitData.append("longDesc", formData.longDesc);
		submitData.append("metaTitle", formData.metaTitle);
		submitData.append("metaDescription", formData.metaDescription);
		formData.searchTags.forEach((tag) => submitData.append("searchTags", tag));
		formData.metaKeywords.forEach((kw) =>
			submitData.append("metaKeywords", kw)
		);
		if (thumbnailImage instanceof File) {
			submitData.append("thumbnailImage", thumbnailImage);
		}

		try {
			await axios.patch(`${apiUrl}/blog/${blogId}`, submitData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setSnackbarMessage("Blog updated successfully!");
			setSnackbarSeverity("success");
			setSnackbarOpen(true);
			router.push("/admin/dashboard/blogs");
		} catch (err) {
			setSnackbarMessage("Failed to update blog.");
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
		}
	};

	const handleSnackbarClose = () => setSnackbarOpen(false);

	if (!blogId) {
		return <Typography>Loading...</Typography>;
	}

	return (
		<form onSubmit={handleSubmit} className="shadow rounded-lg p-4 xl:container xl:mx-auto">
			<Typography variant="h5" className="mb-4">
				Edit Blog
			</Typography>
			<div className={"grid grid-cols-2 gap-4 items-center"}>
				<div>
					<CustomTextField
						label="Title"
						value={formData.name}
						onChange={handleInputChange("name")}
						required
					/>
					<CustomTextField
						label="Author"
						value={formData.author}
						onChange={handleInputChange("author")}
						required
					/>
				</div>
				<Box mt={2}>
					<Typography variant="subtitle1">Thumbnail Image</Typography>
					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						onChange={handleImageChange}
					/>
					{imagePreview && (
						<Box mt={1}>
							<ImageComponent imageName={imagePreview} className={"w-96"} />
						</Box>
					)}
				</Box>
			</div>

			<Box my={2}>
				<Typography variant="subtitle1">Blog Content</Typography>
				<Editor
					value={formData.longDesc}
					onTextChange={(e) =>
						setFormData((prev) => ({ ...prev, longDesc: e.htmlValue }))
					}
					style={{ height: "260px" }}
				/>
			</Box>

			<Box mb={2}>
				<Typography variant="subtitle1">Tags</Typography>
				<Box display="flex" flexWrap="wrap" gap={1} mb={1}>
					{formData.searchTags.map((tag, i) => (
						<Chip
							key={i}
							label={tag}
							onDelete={() => handleDeleteTag(tag)}
							size="small"
						/>
					))}
				</Box>
				<CustomTextField
					placeholder="Type a tag and press Enter"
					value={tagInput}
					onChange={(e) => setTagInput(e.target.value)}
					onKeyDown={handleAddTag}
				/>
			</Box>

			<Box mb={2}>
				<Typography variant="subtitle1">Meta Keywords</Typography>
				<Box display="flex" flexWrap="wrap" gap={1} mb={1}>
					{formData.metaKeywords.map((kw, i) => (
						<Chip
							key={i}
							label={kw}
							onDelete={() => handleDeleteKeyword(kw)}
							size="small"
						/>
					))}
				</Box>
				<CustomTextField
					placeholder="Type a keyword and press Enter"
					value={keywordInput}
					onChange={(e) => setKeywordInput(e.target.value)}
					onKeyDown={handleAddKeyword}
				/>
			</Box>

			<CustomTextField
				label="Meta Title"
				value={formData.metaTitle}
				onChange={handleInputChange("metaTitle")}
			/>
			<CustomTextField
				label="Meta Description"
				value={formData.metaDescription}
				onChange={handleInputChange("metaDescription")}
				multiline
				rows={3}
			/>

			<Box mt={3}>
				<Button variant="contained" color="primary" type="submit">
					Update Blog
				</Button>
			</Box>

			<Snackbar
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={handleSnackbarClose}
			>
				<Alert
					onClose={handleSnackbarClose}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</form>
	);
};

export default EditBlog;
