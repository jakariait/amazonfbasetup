// "use client"; // If using App Router
//
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Snackbar,
//   Alert,
//   Box,
// } from "@mui/material";
// import axios from "axios";
// import useAuthAdminStore from "@/store/AuthAdminStore";
// import Link from "next/link"; // ✅ Next.js Link
//
// const AdminList = () => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   const { token } = useAuthAdminStore();
//
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//
//   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//   const [selectedAdminId, setSelectedAdminId] = useState(null);
//
//   useEffect(() => {
//     fetchAdmins();
//   }, []);
//
//   const fetchAdmins = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${apiUrl}/admin/getall`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAdmins(response.data.admins);
//     } catch (error) {
//       showSnackbar("error", "Failed to fetch admins");
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const handleDeleteClick = (adminId) => {
//     setSelectedAdminId(adminId);
//     setOpenDeleteDialog(true);
//   };
//
//   const handleDeleteConfirm = async () => {
//     try {
//       await axios.delete(`${apiUrl}/admin/${selectedAdminId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       showSnackbar("success", "Admin deleted successfully");
//       fetchAdmins();
//     } catch (error) {
//       showSnackbar("error", "Failed to delete admin");
//     } finally {
//       setOpenDeleteDialog(false);
//       setSelectedAdminId(null);
//     }
//   };
//
//   const handleSnackbarClose = (_, reason) => {
//     if (reason === "clickaway") return;
//     setSnackbarOpen(false);
//   };
//
//   const showSnackbar = (severity, message) => {
//     setSnackbarSeverity(severity);
//     setSnackbarMessage(message);
//     setSnackbarOpen(true);
//   };
//
//   // Custom styles for Material-UI components
//   const tableHeaderStyle = {
//     backgroundColor: '#f97316', // orange-500
//     '& .MuiTableCell-head': {
//       color: '#000000',
//       fontWeight: 'bold',
//     }
//   };
//
//   const tableRowStyle = {
//     '&:nth-of-type(odd)': {
//       backgroundColor: '#fff7ed', // orange-50
//     },
//     '&:hover': {
//       backgroundColor: '#fed7aa', // orange-200
//     },
//     '& .MuiTableCell-root': {
//       color: '#000000',
//     }
//   };
//
//   const editButtonStyle = {
//     borderColor: '#f97316',
//     color: '#f97316',
//     '&:hover': {
//       borderColor: '#ea580c',
//       backgroundColor: '#fff7ed',
//       color: '#ea580c',
//     }
//   };
//
//   const deleteButtonStyle = {
//     borderColor: '#dc2626',
//     color: '#dc2626',
//     '&:hover': {
//       borderColor: '#b91c1c',
//       backgroundColor: '#fef2f2',
//       color: '#b91c1c',
//     }
//   };
//
//   const dialogStyle = {
//     '& .MuiDialog-paper': {
//       border: '2px solid #f97316',
//     },
//     '& .MuiDialogTitle-root': {
//       backgroundColor: '#f97316',
//       color: '#000000',
//       fontWeight: 'bold',
//     },
//     '& .MuiDialogContent-root': {
//       color: '#000000',
//     }
//   };
//
//   if (loading) {
//     return (
//       <Box sx={{ textAlign: "center", mt: 5 }}>
//         <CircularProgress sx={{ color: '#f97316' }} size={60} />
//       </Box>
//     );
//   }
//
//   return (
//     <Paper sx={{
//       p: 3,
//       boxShadow: '0 10px 25px rgba(249, 115, 22, 0.1)',
//       border: '1px solid #fed7aa'
//     }}>
//       <h1
//         className="mb-6 pl-2 text-lg font-semibold text-black"
//         style={{
//           borderLeft: '4px solid #f97316' // orange-500 border
//         }}
//       >
//         View and Create Admins
//       </h1>
//
//       <div className="flex justify-center mb-6">
//         <Link
//           href="/admin/dashboard/create-admin"
//           className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md cursor-pointer font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
//         >
//           Create Admin
//         </Link>
//       </div>
//
//       <TableContainer sx={{
//         border: '2px solid #f97316',
//         borderRadius: '8px',
//         overflow: 'hidden'
//       }}>
//         <Table>
//           <TableHead sx={tableHeaderStyle}>
//             <TableRow>
//               <TableCell>SL</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {admins.map((admin, index) => (
//               <TableRow key={admin._id} sx={tableRowStyle}>
//                 <TableCell sx={{ fontWeight: 'medium' }}>{index + 1}</TableCell>
//                 <TableCell sx={{ fontWeight: 'medium' }}>{admin.name}</TableCell>
//                 <TableCell>{admin.email}</TableCell>
//                 <TableCell>
//                   {new Date(admin.createdAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex gap-2">
//                     <Link href={`/admin/edit/${admin._id}`} passHref>
//                       <Button
//                         variant="outlined"
//                         sx={editButtonStyle}
//                         size="small"
//                       >
//                         Edit
//                       </Button>
//                     </Link>
//                     <Button
//                       variant="outlined"
//                       sx={deleteButtonStyle}
//                       onClick={() => handleDeleteClick(admin._id)}
//                       size="small"
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//
//       {/* Delete Dialog */}
//       <Dialog
//         open={openDeleteDialog}
//         onClose={() => setOpenDeleteDialog(false)}
//         sx={dialogStyle}
//       >
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ color: '#000000' }}>
//             Are you sure you want to delete this admin? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ padding: '16px 24px' }}>
//           <Button
//             onClick={() => setOpenDeleteDialog(false)}
//             sx={{
//               color: '#6b7280',
//               '&:hover': {
//                 backgroundColor: '#f3f4f6',
//               }
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDeleteConfirm}
//             sx={{
//               backgroundColor: '#dc2626',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#b91c1c',
//               }
//             }}
//             variant="contained"
//           >
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//
//       {/* Snackbar */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={4000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbarSeverity}
//           sx={{
//             width: "100%",
//             backgroundColor: snackbarSeverity === 'success' ? '#f97316' : undefined,
//             color: snackbarSeverity === 'success' ? '#000000' : undefined,
//             '& .MuiAlert-icon': {
//               color: snackbarSeverity === 'success' ? '#000000' : undefined,
//             }
//           }}
//           variant="filled"
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Paper>
//   );
// };
//
// export default AdminList;

"use client"; // If using App Router

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import axios from "axios";
import useAuthAdminStore from "@/store/AuthAdminStore";
import Link from "next/link"; // ✅ Next.js Link

const AdminList = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = useAuthAdminStore();

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  // Edit dialog states
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [editFormErrors, setEditFormErrors] = useState({});
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/admin/getall`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmins(response.data.admins);
    } catch (error) {
      showSnackbar("error", "Failed to fetch admins");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (adminId) => {
    setSelectedAdminId(adminId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`${apiUrl}/admin/${selectedAdminId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      showSnackbar("success", "Admin deleted successfully");
      fetchAdmins();
    } catch (error) {
      showSnackbar("error", "Failed to delete admin");
    } finally {
      setOpenDeleteDialog(false);
      setSelectedAdminId(null);
    }
  };

  // Edit dialog handlers
  const handleEditClick = (admin) => {
    setEditingAdmin(admin);
    setEditFormData({
      name: admin.name,
      email: admin.email,
      password: "", // Keep password empty for security
    });
    setEditFormErrors({});
    setOpenEditDialog(true);
  };

  const handleEditFormChange = (field) => (event) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

    // Clear error for this field when user starts typing
    if (editFormErrors[field]) {
      setEditFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateEditForm = () => {
    const errors = {};

    if (!editFormData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!editFormData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(editFormData.email)) {
      errors.email = "Email is invalid";
    }

    // Check if email is already taken by another admin
    const emailExists = admins.some(
      (admin) =>
        admin.email === editFormData.email && admin._id !== editingAdmin._id,
    );
    if (emailExists) {
      errors.email = "Email is already taken";
    }

    setEditFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditSubmit = async () => {
    if (!validateEditForm()) {
      return;
    }

    setEditLoading(true);
    try {
      const updateData = {
        name: editFormData.name,
        email: editFormData.email,
      };

      // Only include password if it's provided
      if (editFormData.password.trim()) {
        updateData.password = editFormData.password;
      }

      await axios.put(`${apiUrl}/admin/${editingAdmin._id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSnackbar("success", "Admin updated successfully");
      setOpenEditDialog(false);
      fetchAdmins();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to update admin";
      showSnackbar("error", errorMessage);
    } finally {
      setEditLoading(false);
    }
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setEditingAdmin(null);
    setEditFormData({ name: "", email: "", password: "" });
    setEditFormErrors({});
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const showSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  // Custom styles for Material-UI components
  const tableHeaderStyle = {
    backgroundColor: "#f97316", // orange-500
    "& .MuiTableCell-head": {
      color: "#000000",
      fontWeight: "bold",
    },
  };

  const tableRowStyle = {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff7ed", // orange-50
    },
    "&:hover": {
      backgroundColor: "#fed7aa", // orange-200
    },
    "& .MuiTableCell-root": {
      color: "#000000",
    },
  };

  const editButtonStyle = {
    borderColor: "#f97316",
    color: "#f97316",
    "&:hover": {
      borderColor: "#ea580c",
      backgroundColor: "#fff7ed",
      color: "#ea580c",
    },
  };

  const deleteButtonStyle = {
    borderColor: "#dc2626",
    color: "#dc2626",
    "&:hover": {
      borderColor: "#b91c1c",
      backgroundColor: "#fef2f2",
      color: "#b91c1c",
    },
  };

  const dialogStyle = {
    "& .MuiDialog-paper": {
      border: "2px solid #f97316",
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: "#f97316",
      color: "#000000",
      fontWeight: "bold",
    },
    "& .MuiDialogContent-root": {
      color: "#000000",
    },
  };

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d1d5db",
      },
      "&:hover fieldset": {
        borderColor: "#f97316",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f97316",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#6b7280",
      "&.Mui-focused": {
        color: "#f97316",
      },
    },
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress sx={{ color: "#f97316" }} size={60} />
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        p: 3,
        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.1)",
        border: "1px solid #fed7aa",
      }}
    >
      <h1
        className="mb-6 pl-2 text-lg font-semibold text-black"
        style={{
          borderLeft: "4px solid #f97316", // orange-500 border
        }}
      >
        View and Create Admins
      </h1>

      <div className="flex justify-center mb-6">
        <Link
          href="/admin/dashboard/create-admin"
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md cursor-pointer font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Create Admin
        </Link>
      </div>

      <TableContainer
        sx={{
          border: "2px solid #f97316",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={tableHeaderStyle}>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin, index) => (
              <TableRow key={admin._id} sx={tableRowStyle}>
                <TableCell sx={{ fontWeight: "medium" }}>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: "medium" }}>
                  {admin.name}
                </TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>
                  {new Date(admin.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      sx={editButtonStyle}
                      onClick={() => handleEditClick(admin)}
                      size="small"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      sx={deleteButtonStyle}
                      onClick={() => handleDeleteClick(admin._id)}
                      size="small"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog
        open={openEditDialog}
        onClose={handleEditDialogClose}
        maxWidth="sm"
        fullWidth
        sx={dialogStyle}
      >
        <DialogTitle>Edit Admin</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Grid container spacing={3} sx={{ pt: 5 }}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                value={editFormData.name}
                onChange={handleEditFormChange("name")}
                error={!!editFormErrors.name}
                helperText={editFormErrors.name}
                sx={textFieldStyle}
                disabled={editLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={editFormData.email}
                onChange={handleEditFormChange("email")}
                error={!!editFormErrors.email}
                helperText={editFormErrors.email}
                sx={textFieldStyle}
                disabled={editLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Password (optional)"
                type="password"
                fullWidth
                value={editFormData.password}
                onChange={handleEditFormChange("password")}
                error={!!editFormErrors.password}
                helperText={
                  editFormErrors.password ||
                  "Leave empty to keep current password"
                }
                sx={textFieldStyle}
                disabled={editLoading}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ padding: "16px 24px" }}>
          <Button
            onClick={handleEditDialogClose}
            disabled={editLoading}
            sx={{
              color: "#6b7280",
              "&:hover": {
                backgroundColor: "#f3f4f6",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleEditSubmit}
            disabled={editLoading}
            sx={{
              backgroundColor: "#f97316",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#ea580c",
              },
              "&:disabled": {
                backgroundColor: "#d1d5db",
                color: "#9ca3af",
              },
            }}
            variant="contained"
          >
            {editLoading ? (
              <>
                <CircularProgress size={16} sx={{ mr: 1, color: "#9ca3af" }} />
                Updating...
              </>
            ) : (
              "Update Admin"
            )}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        sx={dialogStyle}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#000000" }}>
            Are you sure you want to delete this admin? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "16px 24px" }}>
          <Button
            onClick={() => setOpenDeleteDialog(false)}
            sx={{
              color: "#6b7280",
              "&:hover": {
                backgroundColor: "#f3f4f6",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            sx={{
              backgroundColor: "#dc2626",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#b91c1c",
              },
            }}
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            backgroundColor:
              snackbarSeverity === "success" ? "#f97316" : undefined,
            color: snackbarSeverity === "success" ? "#000000" : undefined,
            "& .MuiAlert-icon": {
              color: snackbarSeverity === "success" ? "#000000" : undefined,
            },
          }}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AdminList;
