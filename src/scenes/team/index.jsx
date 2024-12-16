import { DeleteOutline, Edit } from "@mui/icons-material";
import {
  Box,
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Header } from "../../components";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  // Hàm mở modal
  const handleEditClick = (row) => {
    setEditData(row); // Lưu dữ liệu row vào state để edit
    setOpenModal(true);
  };

  // Hàm đóng modal
  const handleClose = () => {
    setOpenModal(false);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="120px"
            p={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
            borderRadius={1}
          >
            <DeleteOutline />
            <Edit
              style={{ cursor: "pointer" }}
              onClick={() => handleEditClick(row)}
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <Box mt="20px" sx={{ width: "80vw", maxWidth: "100%" }}>
        <Box
          p="10px"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            maxWidth: "100%",
            backgroundColor: "transparent",
          }}
        >
          <Header title="Account" subtitle="Managing accounts" />
          <Box
            mt="20px"
            height="75vh"
            flex={1}
            maxWidth="100%"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                border: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.primary[600],
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[600],
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: colors.primary[600],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-iconSeparator": {
                color: colors.primary[100],
              },
            }}
          >
            <DataGrid
              rows={mockDataTeam}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10, 20, 50]}
              checkboxSelection
              onSelectionModelChange={(newSelection) => {
                setSelectedRows(newSelection);
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Modal (Dialog) */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "12px", // Thêm border radius cho modal
          },
        }}
      >
        <DialogTitle variant="h4">Edit Account</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Age"
            fullWidth
            value={editData.age}
            onChange={(e) => setEditData({ ...editData, age: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            value={editData.phone}
            onChange={(e) =>
              setEditData({ ...editData, phone: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={editData.email}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Team;
