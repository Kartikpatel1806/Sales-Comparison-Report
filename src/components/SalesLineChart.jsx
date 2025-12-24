import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Paper, Typography } from '@mui/material';

const SalesLineChart = ({ data, title, dataKey, valueKey }) => {
  /* Handle empty data state */
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          No data available for chart.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      {/* Chart Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {/* Responsive chart container */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey={dataKey}
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip
            formatter={(value) =>
              typeof value === 'number'
                ? value.toLocaleString()
                : value
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey={valueKey}
            stroke="#d32f2f"
            strokeWidth={2}
            name={valueKey.replace(/_/g, ' ')}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SalesLineChart;
