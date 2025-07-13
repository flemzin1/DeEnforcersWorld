import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Messages from './pages/Messages';
import Give from './pages/Give';
import SatelliteCenters from './pages/SateliteCenters';
import OurFounder from './pages/OurFounder';
import Organograms from './pages/Organograms';
import ChurchEvents from './pages/EventsPage';
import OutreachPage from './pages/Outreach';
import ChurchBlog from './pages/Blogs';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    setCanonicalUrl(`https://deenforcersworld.com${location.pathname}`);
  }, [location]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<OurFounder />} />
          <Route path="/organograms" element={<Organograms />} />
          {/* <Route path="/ministries" element={<Ministries />} /> */}
          <Route path="/events" element={<ChurchEvents />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/blogs" element={<ChurchBlog />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/give" element={<Give />} />
          <Route path="/satellite-centers" element={<SatelliteCenters />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};


const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;