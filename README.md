# Sales Comparison Report

A single-page React application that displays sales comparison data in a professional analytical report format. This application fetches real-time data from an API and presents it using Material UI components and interactive charts.

## 🎯 Project Overview

This is a beginner-friendly React application built as part of an internship assignment. It demonstrates:

- **React Functional Components** - Modern React with hooks
- **Material UI (MUI)** - Professional UI components
- **Axios** - HTTP client for API calls
- **Recharts** - Beautiful and responsive charts
- **Clean Code Structure** - Well-organized, commented code for learning

## 📁 Project Structure

```
react-blog/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── SalesTable.jsx   # Table component for displaying data
│   │   ├── SalesChart.jsx   # Bar chart component
│   │   └── SalesLineChart.jsx # Line chart component
│   ├── services/            # API and external service logic
│   │   └── api.js          # API service for fetching data
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install:
   - React and React DOM
   - Material UI and Emotion (for styling)
   - Axios (for API calls)
   - Recharts (for charts)
   - Vite (build tool)

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)

## 📊 Features

- ✅ **Real-time Data Fetching** - Fetches data from live API endpoint
- ✅ **Loading Indicator** - Shows spinner while data is being fetched
- ✅ **Error Handling** - Displays user-friendly error messages
- ✅ **Data Table** - Formatted table with proper number formatting
- ✅ **Interactive Charts** - Two charts (Bar and Line) for data visualization
- ✅ **Responsive Design** - Works on different screen sizes
- ✅ **Professional Layout** - Clean, analytical report style

## 🔌 API Endpoint

The application fetches data from:
```
GET http://74.225.26.105:8000/salecomparison/lmtd/gsm
```

**Note:** If the API structure is different than expected, you may need to adjust the `dataKey` and `valueKey` props in `App.jsx` for the chart components.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Generating PDF Report

To generate a PDF of the report:

1. **Open the application** in your browser (using `npm run dev`)

2. **Wait for data to load** completely

3. **Open browser print dialog:**
   - **Windows/Linux:** Press `Ctrl + P`
   - **Mac:** Press `Cmd + P`

4. **Configure print settings:**
   - Select "Save as PDF" as the destination
   - Choose "More settings" and set:
     - Margins: Minimum or None
     - Scale: 100%
     - Background graphics: Enabled (to show colors)
     - Paper size: A4 or Letter

5. **Click "Save"** to download the PDF

**Tip:** For best results, use Chrome or Edge browser.

## 🌐 Deployment

### Deploy to Netlify

1. **Install Netlify CLI** (optional, or use web interface)
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project first**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```
   Follow the prompts to login and configure.

   **OR use the web interface:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Your app will be live** at a URL like `your-project.netlify.app`

### Important Notes for Deployment

- Both Vercel and Netlify automatically detect Vite projects
- The build output goes to the `dist` folder
- Make sure your API endpoint allows CORS requests from your deployed domain
- If you face CORS issues, you may need to configure the API server or use a proxy

## 📝 Code Explanation

### How It Works

1. **App.jsx** - Main component that:
   - Manages state (data, loading, error)
   - Fetches data when component loads
   - Renders UI based on state

2. **api.js** - Service file that:
   - Makes HTTP request to the API
   - Returns data or throws error

3. **Components** - Reusable pieces:
   - `SalesTable` - Displays data in a table
   - `SalesChart` - Shows bar chart
   - `SalesLineChart` - Shows line chart

### Key React Concepts Used

- **useState** - For managing component state
- **useEffect** - For fetching data on component mount
- **Props** - For passing data to child components
- **Conditional Rendering** - For showing different UI based on state

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Material UI Documentation](https://mui.com)
- [Recharts Documentation](https://recharts.org)
- [Axios Documentation](https://axios-http.com)

## 📧 Support

If you encounter any issues:

1. Check that all dependencies are installed (`npm install`)
2. Verify the API endpoint is accessible
3. Check browser console for errors
4. Ensure Node.js version is 14 or higher

## 📄 License

This project is created for educational purposes as part of an internship assignment.

---

**Built with ❤️ using React + Material UI**
