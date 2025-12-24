import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

/* Utility function to format numeric values for better readability */
const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) {
    return 'N/A';
  }
  return Number(num).toLocaleString('en-US');
};

const SalesTable = ({ data }) => {
  /* Handle empty or missing data */
  if (!data || data.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        No data available to display.
      </Typography>
    );
  }

  /* Dynamically extract column names from API response */
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column}
                sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}
              >
                {column
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} hover>
              {columns.map((column) => (
                <TableCell key={column}>
                  {typeof row[column] === 'number'
                    ? formatNumber(row[column])
                    : row[column] || 'N/A'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
