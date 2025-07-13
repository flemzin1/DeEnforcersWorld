import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from '@dr.pogodin/react-helmet';
import { User, Users, Heart, Award, BookOpen, Target } from 'lucide-react';

const tabMeta: Record<string, { title: string; description: string }> = {
  Ministries: {
    title: 'Ministries | About | De Enforcers World',
    description: 'Discover the various ministries that empower lives at De Enforcers World.'
  },
  'Service Units': {
    title: 'Service Units | About | De Enforcers World',
    description: 'Explore our dedicated service units shaping our community work.'
  },
  'Covenant Partners': {
    title: 'Covenant Partners | About | De Enforcers World',
    description: 'Meet our Covenant Partners who support the mission of De Enforcers World.'
  }
};

const About: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Ministries");
  const tabSectionRef = useRef<HTMLElement | null>(null);

  // Set tab from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    const validTabs = Object.keys(tabMeta);

    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam);

      setTimeout(() => {
        tabSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.search]);

  // Tab metadata
  const { title, description } = tabMeta[activeTab] || {
    title: 'About | De Enforcers World',
    description: 'Learn more about our vision, ministries, and the people driving our mission.'
  };

  // Update tab and URL
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`?tab=${encodeURIComponent(tab)}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://deenforcersworld.com/about?tab=${encodeURIComponent(activeTab)}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://deenforcersworld.com/about?tab=${encodeURIComponent(activeTab)}`} />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Learn about our church family, mission, and the people who make it all possible
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Founded in faith and built on love, Grace Community Church has been serving our community
              for over 25 years. We believe in the transformative power of God's love and are committed
              to sharing that message with everyone we meet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Church Image Placeholder</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To glorify God by making disciples of Jesus Christ, building a community of faith,
                hope, and love, and serving our neighbors with compassion and grace.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                Seeing the truth is embraced and enforced in our deliberately and willing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Worship</h4>
                    <p className="text-gray-600">Celebrating God's goodness together</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Community</h4>
                    <p className="text-gray-600">Building meaningful relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Service</h4>
                    <p className="text-gray-600">Serving others with Christ's love</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              Living and doer of the truth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scripture</h3>
              <p className="text-gray-600">God's Word as our foundation and guide</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Love</h3>
              <p className="text-gray-600">Showing Christ's love in all we do</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unity</h3>
              <p className="text-gray-600">Building authentic community together</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Honoring God with our best efforts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated team serving our church family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Pastor Zerubabbel</h3>
              <p className="text-gray-600 mb-2">Senior Pastor</p>
              <p className="text-sm text-gray-500">
                Leading our congregation with wisdom and compassion for over 15 years
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Pastor Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Associate Pastor</p>
              <p className="text-sm text-gray-500">
                Passionate about discipleship and community outreach ministries
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Mark Davis</h3>
              <p className="text-gray-600 mb-2">Worship Pastor</p>
              <p className="text-sm text-gray-500">
                Creating meaningful worship experiences that connect hearts to God
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="my-8 px-4 bg-gradient-to-r from-indigo-600 via-gray-700" ref={tabSectionRef}>
        {/* Mobile Dropdown */}
        <div className="sm:hidden mb-4">
          <label htmlFor="tabs" className="sr-only">Select a section</label>
          <select
            id="tabs"
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white"
          >
            {Object.keys(tabMeta).map((tab) => (
              <option key={tab}>{tab}</option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 rounded-lg overflow-hidden shadow-sm dark:text-gray-400 border-b dark:border-gray-700">
          {Object.keys(tabMeta).map((tab) => (
            <li className="w-full" key={tab}>
              <button
                onClick={() => handleTabChange(tab)}
                className={`inline-block w-full p-4 transition-all duration-200 relative
                  ${activeTab === tab
                    ? "text-blue-600 bg-gray-100 dark:bg-gray-700 dark:text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600"
                    : "bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded shadow bg-gradient-to-r from-indigo-600 via-gray-700">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{activeTab}</h3>
          <p className="text-gray-600 dark:text-gray-300">{tabMeta[activeTab]?.description || 'Tab description not found.'}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
