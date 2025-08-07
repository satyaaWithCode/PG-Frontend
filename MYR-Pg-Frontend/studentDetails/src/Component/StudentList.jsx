

import React, { useEffect, useState } from "react";
import { getAllStudents } from "../api/getAllStudents";
import downloadFile from "../api/downloadFile";
import deleteStudent from "../api/deleteStudent";
import useWebSocket from "../api/useWebSocket";

import {
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableContainer,
  Paper,
  Typography,
  Box,
  useMediaQuery,
  Tooltip,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentList = () => {
  useWebSocket();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const loadStudents = () => {
    getAllStudents()
      .then((res) => {
        setStudents(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id)
        .then(() => {
          toast.success("Student deleted successfully!");
          loadStudents();
        })
        .catch(() => toast.error("Failed to delete student!"));
    }
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress size={50} thickness={5} />
      </Box>
    );

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        align="center"
        sx={{ fontWeight: 700, color: "#BB86FC" }}
      >
        PG Student List
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#1e1e1e",
          boxShadow: "0px 0px 12px rgba(0,0,0,0.7)",
          borderRadius: 2,
        }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {[
                "Name",
                "Permanent Address",
                "Aadhar No",
                "Phone",
                "Email",
                "Current Address",
                "Aadhar File",
                "Actions",
              ].map((heading) => (
                <TableCell
                  key={heading}
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    backgroundColor: "#2b2b2b",
                    borderBottom: "2px solid #444",
                    fontSize: "0.9rem",
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#1a1a1a" : "#212121",
                  "&:hover": {
                    backgroundColor: "#333",
                    transition: "background-color 0.3s ease-in-out",
                  },
                }}
              >
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                  {student.studentName}
                </TableCell>
                <TableCell sx={{ color: "#ccc" }}>
                  {student.permanentAddress}
                </TableCell>
                <TableCell sx={{ color: "#ccc" }}>
                  {student.aadharCardNumber}
                </TableCell>
                <TableCell sx={{ color: "#ccc" }}>
                  {student.phoneNumber}
                </TableCell>
                <TableCell sx={{ color: "#ccc" }}>{student.gmail}</TableCell>
                <TableCell sx={{ color: "#ccc" }}>
                  {student.currentAddress}
                </TableCell>
                <TableCell>
                  <Tooltip title="Download Aadhar" arrow>
                    <Button
                      variant="outlined"
                      startIcon={<CloudDownloadIcon />}
                      size="small"
                      sx={{
                        color: "#03DAC6",
                        borderColor: "#03DAC6",
                        "&:hover": {
                          borderColor: "#00c4b4",
                          backgroundColor: "rgba(3, 218, 198, 0.1)",
                        },
                      }}
                      onClick={() =>
                        downloadFile(
                          `/api/pg/file/files/${encodeURIComponent(
                            student.aadharFileName
                          )}`,
                          student.aadharFileName
                        )
                      }
                    >
                      File
                    </Button>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Delete Student" arrow>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      size="small"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#ff44441a",
                        },
                      }}
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentList;
