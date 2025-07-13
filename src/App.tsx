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

const helmetData: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'De Enforcers World | Empowering Christains Through Gods\'s truth.',
    description: 'Welcome to De Enforcers World — inspiring Christains and spiritual growth.',
  },
  '/about': {
    title: 'About Us | De Enforcers World',
    description: 'Learn about the vision and values of De Enforcers World.',
  },
  '/founder': {
    title: 'Our Founder | De Enforcers World',
    description: 'Meet the founder and discover the mission driving De Enforcers World.',
  },
  '/organograms': {
    title: 'Organograms | De Enforcers World Structure',
    description: 'Explore our organizational structure and leadership teams.',
  },
  '/events': {
    title: 'Church Events | De Enforcers World',
    description: 'Discover upcoming events and community engagements.',
  },
  '/outreach': {
    title: 'Outreach Programs | De Enforcers World',
    description: 'See how De Enforcers World impacts communities through outreach.',
  },
  '/blogs': {
    title: 'Church Blog | De Enforcers World',
    description: 'Read reflections and teachings from our blog.',
  },
  '/messages': {
    title: 'Sermons & Messages | De Enforcers World',
    description: 'Access powerful teachings and sermons.',
  },
  '/give': {
    title: 'Give & Support | De Enforcers World',
    description: 'Support our mission and contribute to positive change.',
  },
  '/satellite-centers': {
    title: 'Satellite Centers | De Enforcers World',
    description: 'Find and engage with our satellite centers globally.',
  },
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const { title, description } = helmetData[location.pathname] || {
    title: 'De Enforcers World',
    description: 'Empowering Life through Teachings and spiritual development Of God\'s Truth.',
  };

  useEffect(() => {
    setCanonicalUrl(`https://deenforcersworld.com${location.pathname}`);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<OurFounder />} />
          <Route path="/organograms" element={<Organograms />} />
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
