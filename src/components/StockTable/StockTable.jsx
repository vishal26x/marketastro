import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./StockTable.scss";
import millify from "millify";
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";

const columns = [
  {
    field: "symbol",
    headerName: "NAME",
    width: "140",
    headerClassName: "headerCell",
    cellClassName: "nameCell",
  },
  {
    field: "pChange",
    headerName: "% CHANGE",
    renderCell: (params) => `${params.value}%`,
    headerClassName: "headerCell",
    cellClassName: (params) => {
      return Math.sign(params.value) === -1 ? "negative" : "positive";
    },
  },
  {
    field: "lastPrice",
    headerName: "PRICE",
    headerClassName: "headerCell",
  },
  {
    field: "change",
    headerName: "CHANGE",
    headerClassName: "headerCell",
  },
  {
    field: "previousClose",
    headerName: "PREV CLOSE",
    headerClassName: "headerCell",
  },
  {
    field: "dayHigh",
    headerName: "D HIGH",
    headerClassName: "headerCell",
  },
  {
    field: "dayLow",
    headerName: "D LOW",
    headerClassName: "headerCell",
  },
  {
    field: "yearHigh",
    headerName: "Y HIGH",
    headerClassName: "headerCell",
  },
  {
    field: "yearLow",
    headerName: "Y LOW",
    headerClassName: "headerCell",
  },
  {
    field: "perChange30d",
    headerName: "M CHNG",
    width: "100",
    renderCell: (params) => `${params.value}%`,
    headerClassName: "headerCell",
  },
  {
    field: "perChange365d",
    headerName: "Y CHNG",
    width: "100",
    renderCell: (params) => `${params.value}%`,
    headerClassName: "headerCell",
  },
  {
    field: "totalTradedVolume",
    headerName: "VOL",
    width: "100",
    headerClassName: "headerCell",
    renderCell: (params) => millify(params.value),
  },
  {
    field: "totalTradedValue",
    headerName: "₹ TRADED",
    width: "100",
    headerClassName: "headerCell",
    renderCell: (params) => `₹${millify(params.value)}`,
  },
];

export const StockTable = ({ data, loadingState }) => {

  return (
    <Box
      className="stock-table"
      sx={{
        "& .headerCell": {
          fontWeight: "600",
        },
        "& .negative": {
          color: "#FF5E5D",
        },
        "& .positive": {
          color: "#1ecc97",
        },
      }}
    >
      <DataGrid
        sx={{ color: "#03314b" }}
        rows={data}
        columns={columns}
        getRowId={(row) => row.identifier}
        components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
        loading={loadingState}
        hideFooter
        scrollbarSize={5}
      />
    </Box>
  );
};
