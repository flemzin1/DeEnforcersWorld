import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

import { User, Users, Award, BookOpen } from 'lucide-react';

// update the tabMeta to contain information of an array of lists
const tabMeta: Record<string, { title: string; description: string; lists: Array<{ name: string; subdescription: string }> }> = {
  'Service Units': {
    title: 'Service Units | About | De Enforcers World',
    description: 'Explore our godly and dedicated service units shaping our believers to serve God within their reach,\nWe are called to serve the lord Lord with all we all or have. To serve is to live as a Christian.\nBelow are the various departments and service groups.',
    lists: [
      { name: 'Press and Media', subdescription: 'This unit is devoted to printing and publishing the monthly and regular publications of the church from print to social media platforms. They man our Television and Radio programmes.' },
      { name: 'Sanitation and Decoration', subdescription: 'This department is invested with the responsibility to ensure that the church hall is kept and well decorated to suit every season and occasion.' },
      { name: 'Ushers', subdescription: 'These are group of persons trained by the church to serve as greeters and waiters to maintain orderliness and organised setting for  goodly atmosphere.' },
      { name: 'Protocol', subdescription: 'These are active and smart persons who are trained to  work as church security and secret police.' },
      { name: 'Maternity', subdescription: 'These are mainly women who are called to serve any pregnant woman through their maternity period to when they are back to church services.' },
      { name: 'Technical and Works', subdescription: 'The department for all technical and civil maintenance works around the church.' },
      { name: 'Children Church', subdescription: 'The group of adult with specially identified  love and conern to care for children in the church.' },
      { name: 'Welfare', subdescription: 'Dedicated believers who have the burden to help the less privileged within the church. This they do to encourage everyone to serve God without excuses, They devote their resources to support  and meet needs in the lives of identified brethren.' },
      { name: 'Music', subdescription: 'Comprising of the band and choir, all committed to singing.' },
    ],
  },
  'Covenant Partners': {
    title: 'Covenant Partners | About | De Enforcers World',
    description: 'Meet our Covenant Partners who support the mission of De Enforcers World.',
    lists: [
      { name: '', subdescription: '' },
    ],
  },
};

const About: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('Service Units');
  const tabSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    const validTabs = Object.keys(tabMeta);

    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam);
      setTimeout(() => {
        tabSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.search]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`?tab=${encodeURIComponent(tab)}`);
  };

  const helmetContent = activeTab ? tabMeta[activeTab] : {
    title: 'About | De Enforcers World',
    description: 'Learn more about our mission, ministries, and the people who make it all possible.',
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      <Helmet>
        <title>{helmetContent.title}</title>
        <meta name="description" content={helmetContent.description} />
        <link
          rel="canonical"
          href={`https://deenforcersworld.com/about${activeTab ? `?tab=${encodeURIComponent(activeTab)}` : ''}`}
        />
        <meta property="og:title" content={helmetContent.title} />
        <meta property="og:description" content={helmetContent.description} />
        <meta property="og:url" content={`https://deenforcersworld.com/about${activeTab ? `?tab=${encodeURIComponent(activeTab)}` : ''}`} />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Learn about our church family, mission, and the people who make it all possible.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600  text-left">
              The Truth Enforcers Bible church Int'l is a mission based church which is positioned to meet needs. <br /> Every Enforcer must understand this and begin serving God by identifying the various areas God is calling you to meet need. <br />The church is the hope of the world today. As the light of the world we must shine otherwise the entire world returns to full control of darkness, Except the Saints would rise to her place of duty, several cities in and around the world would be uninhabitable. <br />It is time for every child of God to rise to divine mandate and responsibility. God is waiting for the church to act on earth with prexisting backup from heaven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Church Image Placeholder</p>
            </div>
            <div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 mb-2">
                  Truth Enforcers Bible Church is built upon the three fold in one vision, to raise congregation believers where we are committed to doing these three: <span className='font-semibold text-gray-900'>Learn</span>, <span className='font-semibold text-gray-900'>Love</span> and <span className='font-semibold text-gray-900'>live</span> the <span className='font-semibold text-gray-900'>Truth</span>, To achieve this we all have the picture to be a community of worshippers where the true love of God is preached and lived.
                </p>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Our Vision Statement</h4>
                <p className="text-gray-600 mb-2">
                  Save the lost at all cost, Helping believers reach their best potentials in life irrespective of who and where you are.
                </p>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Basic Elements of vision</h4>
                <p className="text-gray-600 mb-4">Three fold in one vision is anchored these three G's in our mission</p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 mb-2">As a church on the road, to be a mission based church which is committed to the ministry of our Lord Jesus Christ by doing these:</p>
              <ol className='list-decimal list-inside'>
                <li className="text-gray-600 mb-2"><span className='font-semibold text-gray-900'>GO</span> and preach the <span className='font-semibold text-gray-900'>TRUTH</span> to the world</li>
                <li className="text-gray-600 mb-2"><span className='font-semibold text-gray-900'>GATHER</span> them that believed the <span className='font-semibold text-gray-900'>TRUTH</span> together and in this gathering, God meets all needs</li>
                <li className="text-gray-600 mb-2"><span className='font-semibold text-gray-900'>GAZE</span> upon them until rapture</li>
              </ol>
              <h4 className="text-xl font-semibold text-gray-700 mb-1">Our Mission Statement</h4>
              <p className="text-gray-600 mb-2">Called out to meet the needs of our world within our time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white dark:bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              Living and doer of the truth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scripture</h3>
              <p className="text-gray-600">We believe, teach and practice Jesus Chris.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unity</h3>
              <p className="text-gray-600">We live and overcome by the truth.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">With the God of truth,<br /> There is no impossibility before us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white dark:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated team serving our church family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/img/zeru1.jpg"
                alt="Rev Zerubabbel G.W"
                className="flex items-center justify-center mx-auto mb-4 h-32 w-32 rounded-full object-cover border-4 border-gray-400"
              />
              <h3 className="text-xl font-semibold mb-1">His Grace: RT. Rev Zerubabbel G.W</h3>
              <p className="text-gray-600 mb-2">Founder, General Overseer and Presiding Bishop</p>
              <p className="text-sm text-gray-500">
                Leading our congregation with wisdom and compassion for over 15 years
              </p>
            </div>
            <div className="text-center">
              <img
                src="/img/mary1.jpg"
                alt="Lady Pastor Mary"
                className="flex items-center justify-center mx-auto mb-4 h-32 w-32 rounded-full object-cover border-4 border-gray-400"
              />
              <h3 className="text-xl font-semibold mb-1">Lady Pastor Mary Zerubabbel O.</h3>
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
          <select
            id="tabs"
            value={activeTab || ''}
            onChange={(e) => handleTabChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="" disabled>Select a section</option>
            {Object.keys(tabMeta).map((tab) => (
              <option key={tab} value={tab}>{tab}</option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 rounded-lg overflow-hidden shadow-sm dark:text-gray-400 border-b dark:border-gray-700">
          {Object.keys(tabMeta).map((tab) => (
            <li className="w-full" key={tab}>
              <button
                onClick={() => handleTabChange(tab)}
                className={`inline-block w-full p-4 transition-all duration-200 relative ${activeTab === tab
                  ? 'text-blue-600 bg-gray-100 dark:bg-gray-700 dark:text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-600'
                  : 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded shadow bg-gradient-to-r from-indigo-600 via-gray-700 overflow-auto max-h-60">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            {activeTab}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabMeta[activeTab].description.includes('\n')
              ? tabMeta[activeTab].description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))
              : tabMeta[activeTab].description}
          </p>
          {tabMeta[activeTab].lists.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              {tabMeta[activeTab].lists.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold text-gray-600 dark:text-white">{item.name}:</span> {item.subdescription}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;