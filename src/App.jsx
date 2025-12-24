import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

import { fetchSalesData } from './services/api';
import SalesChart from './components/SalesChart';
import SalesLineChart from './components/SalesLineChart';
import SalesTable from './components/SalesTable';

function App() {
  const [salesData, setSalesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchSalesData();
        setSalesData(data);
        setFilteredData(data);
      } catch (err) {
        setError('The service is temporarily unavailable. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (selectedBranch === 'ALL') {
      setFilteredData(salesData);
    } else {
      setFilteredData(
        salesData.filter(
          (item) => item[Object.keys(item)[0]] === selectedBranch
        )
      );
    }
  }, [selectedBranch, salesData]);

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  const labelKey = Object.keys(filteredData[0])[0];
  const valueKey =
    Object.keys(filteredData[0]).find(
      (key) => typeof filteredData[0][key] === 'number'
    ) || Object.keys(filteredData[0])[1];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Sales Comparison Report
        </Typography>
        <Typography color="text.secondary">
          Structured analysis of sales data retrieved from a live backend API.
        </Typography>
      </Paper>

      {/* Filter */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Select Branch</InputLabel>
          <Select
            value={selectedBranch}
            label="Select Branch"
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <MenuItem value="ALL">All Branches</MenuItem>
            {salesData.map((item, index) => (
              <MenuItem key={index} value={item[labelKey]}>
                {item[labelKey]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      {/* Insights */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Total Records</Typography>
            <Typography variant="h6">{filteredData.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2">Maximum Value</Typography>
            <Typography variant="h6">
              {Math.max(...filteredData.map((d) => d[valueKey]))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Graphical Analysis
      </Typography>

      <SalesChart
        data={filteredData}
        title="Sales Performance - Bar Chart"
        dataKey={labelKey}
        valueKey={valueKey}
      />

      <SalesLineChart
        data={filteredData}
        title="Sales Trends - Line Chart"
        dataKey={labelKey}
        valueKey={valueKey}
      />

      {/* Table */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
        Tabular Data
      </Typography>

      <SalesTable data={filteredData} />
    </Container>
  );
}

export default App;
