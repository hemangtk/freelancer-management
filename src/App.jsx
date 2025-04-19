import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ProjectsClients from './pages/ProjectsClients';
import TimeTracker from './pages/TimeTracker';
import Invoices from './pages/Invoices';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectsClients />} />
            <Route path="/time-tracker" element={<TimeTracker />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;