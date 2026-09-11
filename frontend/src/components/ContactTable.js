"use client";

import { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import useAuthAdminStore from "@/store/AuthAdminStore";

const columns = [
  { id: "serialNumber", label: "S.No.", minWidth: 50, align: "center" },
  { id: "createdAt", label: "Date", minWidth: 100 },
  { id: "fullName", label: "Name", minWidth: 120 },
  { id: "emailAddress", label: "Email", minWidth: 150 },
  { id: "companyName", label: "Company", minWidth: 120 },
  { id: "marketplace", label: "Marketplace", minWidth: 110 },
  { id: "service", label: "Service", minWidth: 150 },
  { id: "served", label: "Status", minWidth: 100, align: "center" },
  { id: "actions", label: "Actions", minWidth: 150, align: "center" },
];

const ContactTable = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = useAuthAdminStore();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [detailTarget, setDetailTarget] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${apiUrl}/contacts`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setContacts(sortedData);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchContacts();
  }, [apiUrl, token]);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleToggleServed = async (id) => {
    const contact = contacts.find((c) => c._id === id);
    if (!contact) return;

    const updated = { ...contact, served: !contact.served };

    try {
      const res = await fetch(`${apiUrl}/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updated),
      });

      if (!res.ok) throw new Error("Failed to update status");

      setContacts((prev) => prev.map((c) => (c._id === id ? updated : c)));
    } catch (err) {
      alert(err.message);
    }
  };

  const confirmDelete = async () => {
    if (!token || !deleteTarget) return;

    try {
      const res = await fetch(`${apiUrl}/contacts/${deleteTarget._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete contact");
      setContacts((prev) => prev.filter((c) => c._id !== deleteTarget._id));
      setDeleteTarget(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Paper
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.1)",
        border: "1px solid #fed7aa",
        m: { xs: 1, sm: 2 },
      }}
    >
      <h1 className="border-l-4 border-orange-500 mb-6 pl-2 text-lg font-semibold">
        Contact Inquiries
      </h1>

      {loading ? (
        <div className="flex justify-center p-4">
          <CircularProgress />
        </div>
      ) : (
        <>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell
                      key={col.id}
                      align={col.align}
                      style={{ minWidth: col.minWidth }}
                      sx={{ fontWeight: "bold", bgcolor: "#fff7ed" }}
                    >
                      {col.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.length > 0 ? (
                  contacts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((contact, i) => (
                      <TableRow key={contact._id} hover>
                        {columns.map((col) => {
                          const value =
                            col.id === "serialNumber"
                              ? page * rowsPerPage + i + 1
                              : col.id === "createdAt"
                                ? formatDate(contact.createdAt)
                                : contact[col.id];

                          if (col.id === "served") {
                            return (
                              <TableCell key={col.id} align="center">
                                <Button
                                  variant="contained"
                                  color={value ? "success" : "error"}
                                  size="small"
                                  onClick={() =>
                                    handleToggleServed(contact._id)
                                  }
                                >
                                  {value ? "Served" : "Pending"}
                                </Button>
                              </TableCell>
                            );
                          }

                          if (col.id === "actions") {
                            return (
                              <TableCell key={col.id} align="center">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 1,
                                    justifyContent: "center",
                                  }}
                                >
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => setDetailTarget(contact)}
                                  >
                                    View
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    onClick={() => setDeleteTarget(contact)}
                                  >
                                    Delete
                                  </Button>
                                </Box>
                              </TableCell>
                            );
                          }

                          return (
                            <TableCell key={col.id} align={col.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No contact inquiries available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 30, 50, 100]}
            component="div"
            count={contacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}

      {/* Detail View Dialog */}
      <Dialog
        open={!!detailTarget}
        onClose={() => setDetailTarget(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ bgcolor: "#fff7ed", fontWeight: "bold" }}>
          Contact Inquiry Details
        </DialogTitle>
        <DialogContent dividers>
          {detailTarget && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
              <DetailRow label="Full Name" value={detailTarget.fullName} />
              <DetailRow label="Business Email" value={detailTarget.emailAddress} />
              <DetailRow label="Company / Brand" value={detailTarget.companyName} />
              <DetailRow label="Country" value={detailTarget.country} />
              <DetailRow label="Phone Number" value={detailTarget.phoneNumber || "Not provided"} />
              <DetailRow label="Amazon Marketplace" value={detailTarget.marketplace} />
              <DetailRow label="Service Required" value={detailTarget.service} />
              <DetailRow label="Seller Type" value={detailTarget.sellerType || "Not provided"} />
              <DetailRow label="Preferred Contact" value={detailTarget.preferredContact || "Not provided"} />
              <DetailRow label="Submitted" value={formatDate(detailTarget.createdAt)} />
              <DetailRow
                label="Status"
                value={
                  <Chip
                    label={detailTarget.served ? "Served" : "Pending"}
                    color={detailTarget.served ? "success" : "error"}
                    size="small"
                  />
                }
              />
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Message
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5, whiteSpace: "pre-wrap" }}>
                  {detailTarget.message}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDetailTarget(null)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the inquiry from{" "}
            <strong>{deleteTarget?.fullName}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

const DetailRow = ({ label, value }) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1" sx={{ mt: 0.5 }}>
      {value}
    </Typography>
  </Box>
);

export default ContactTable;
