"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { Box, Typography, Chip, Button, Snackbar, Alert, Switch, FormControlLabel } from "@mui/material";
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
     onKeyDown,
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
            onKeyDown={onKeyDown}
            rows={rows}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
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
    isActive: true,
  });
  const [keywordInput, setKeywordInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isEditorReady, setIsEditorReady] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    },
    []
  );

  // Fixed editor change handler with proper condition check
  const handleEditorChange = useCallback((e) => {
    // Only update if the editor is ready and the change is from user interaction
    if (isEditorReady && e.htmlValue !== formData.longDesc) {
      setFormData((prev) => ({
        ...prev,
        longDesc: e.htmlValue || ""
      }));
    }
  }, [isEditorReady, formData.longDesc]);

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
          setIsEditorReady(false); // Disable editor updates during data loading

          const { data } = await axios.get(`${apiUrl}/blog/${blogId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const blog = data.data;
          setFormData({
            name: blog.name || "",
            author: blog.author || "",
            longDesc: blog.longDesc || "",
            metaTitle: blog.metaTitle || "",
            metaDescription: blog.metaDescription || "",
            searchTags: blog.searchTags || [],
            metaKeywords: blog.metaKeywords || [],
            isActive: blog.isActive !== undefined ? blog.isActive : true,
          });
          setImagePreview(blog.thumbnailImage || "");

          // Enable editor updates after a short delay to ensure content is loaded
          setTimeout(() => {
            setIsEditorReady(true);
          }, 100);

        } catch (error) {
          console.error("Error fetching blog:", error);
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
    submitData.append("isActive", formData.isActive);
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
      console.error("Error updating blog:", err);
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
          {/* Status Toggle */}
          <Box mb={3}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isActive}
                  onChange={(e) => setFormData(prev => ({...prev, isActive: e.target.checked}))}
                  color="primary"
                />
              }
              label={
                <Typography variant="subtitle1" color={formData.isActive ? "primary" : "textSecondary"}>
                  {formData.isActive ? "Active" : "Inactive"}
                </Typography>
              }
            />
          </Box>
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
              <ImageComponent imageName={imagePreview} />
            </Box>
          )}
        </Box>
      </div>

      <Box my={2}>
        <Typography variant="subtitle1">Blog Content</Typography>
        <Editor
          ref={editorRef}
          value={formData.longDesc}
          onTextChange={handleEditorChange}
          style={{ height: "660px" }}
        />
      </Box>

      <div className={"grid grid-cols-3 gap-4 "}>
        <Box>
          <Typography variant="subtitle1">Tags</Typography>
          <CustomTextField
            placeholder="Type a tag and press Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
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
        </Box>
        <Box>
          <Typography variant="subtitle1">Meta Keywords</Typography>
          <CustomTextField
            placeholder="Type a keyword and press Enter"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyDown={handleAddKeyword}
          />
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
        </Box>
        <Box>
          <Typography variant="subtitle1">Meta Title</Typography>
          <CustomTextField
            placeholder="Meta Title"
            value={formData.metaTitle}
            onChange={handleInputChange("metaTitle")}
          />
        </Box>
      </div>

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