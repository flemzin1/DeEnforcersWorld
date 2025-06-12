import React, { useState, useRef, useEffect } from 'react';
import { Play, Calendar, User, Search, Filter, X, Pause } from 'lucide-react';
import { Modal } from 'flowbite-react';
import ContactModal from '../components/ContactModal';

interface Message {
  id: number;
  title: string;
  speaker: string;
  date: string;
  duration: string; 
  description: string;
  series: string; 
  thumbnail: string;
  videoUrl: string;
}

const Messages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Pause video when modal closes
  useEffect(() => {
    if (!openModal && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [openModal]);

  const openVideo = (message: Message) => {
    setSelectedMessage(message);
    setOpenModal(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const messages: Message[] = [
    {
      id: 1,
      title: 'Walking in Faith',
      speaker: 'Pastor Zerubabbel',
      date: '2024-01-15',
      duration: '35 min',
      description: 'Discover what it means to trust God completely in every season of life.',
      series: 'Faith Series',
      thumbnail: 'bg-gradient-to-r from-blue-400 via-purple-500',
      videoUrl: '/videos/walking-in-faith.mp4',
    },
    {
      id: 4,
      title: 'Love is Beyond',
      speaker: 'Pastor Zerubabbel',
      date: '2025-06-12',
      duration: '24 min',
      description: 'How Lovw is beyond our expectation and the power of love',
      series: 'Love Series',
      thumbnail: 'bg-gradient-to-r from-orange-400 to-blue-500',
      videoUrl: '',
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      speaker: 'Pastor Zerubabbel',
      date: '2024-02-10',
      duration: '42 min',
      description: 'How prayer can transform your life and bring peace in chaos.',
      series: 'Prayer Series',
      thumbnail: 'bg-gradient-to-r from-green-400 to-teal-500',
      videoUrl: '/videos/power-of-prayer.mp4',
    },
    {
      id: 3,
      title: 'Hope in Hard Times',
      speaker: 'Pastor Mike Johnson',
      date: '2024-03-05',
      duration: '38 min',
      description: 'Finding hope and strength through scripture in difficult seasons.',
      series: 'Hope Series',
      thumbnail: 'bg-gradient-to-r from-red-400 to-pink-500',
      videoUrl: '/videos/hope-in-hard-times.mp4',
    },

  ];

  const series = ['All', ...Array.from(new Set(messages.map(msg => msg.series)))];

  const filteredMessages = messages.filter(message => {
    const matchesSearch =
      message.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSeries = selectedSeries === 'All' || message.series === selectedSeries;

    return matchesSearch && matchesSeries;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Messages</h1>
          <p className="text-xl md:text-2xl">Be encouraged by God's Word</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="w-full max-w-md relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-10 h-10 text-sm text-gray-900 dark:text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-gray-800 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white text-gray-900 dark:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {series.map(seriesName => (
                <option key={seriesName} value={seriesName}>
                  {seriesName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Messages Grid */}
      <section className="py-8 bg-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 block justify-end mb-4 mx-10">
          <button
            onClick={() => setModalOpen(true)}
            className="text-white bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Subscribe
          </button>
          <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} />

        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMessages.map(message => (
            <div
              key={message.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className={`h-48 ${message.thumbnail} relative group rounded-t-lg overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => openVideo(message)}
                    className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label={`Play ${message.title}`}
                  >
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-mono">
                  {message.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{message.series}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(message.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{message.title}</h3>
                <div className="flex items-center mb-3 text-gray-600 dark:text-gray-300">
                  <User className="h-4 w-4 mr-2" />
                  <span>{message.speaker}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{message.description}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openVideo(message)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </button>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{new Date(message.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>No messages found matching your search criteria.</p>
          </div>
        )}

        <div className="max-w-7xl mx-auto py-5 px-4 text-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => alert('Load More Messages clicked!')}
          >
            Load More Messages
          </button>
        </div>
      </section>

      {/* Video Playback Modal */}
      <Modal show={openModal} onClose={closeModal} dismissible>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">{selectedMessage?.title}</h3>
          {selectedMessage && (
            <>
              <video
                ref={videoRef}
                src={selectedMessage.videoUrl}
                className="w-full rounded-md bg-black"
                controls={false}
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedMessage.speaker} •{' '}
                  {new Date(selectedMessage.date).toLocaleDateString()} • {selectedMessage.duration}
                </p>
                <button
                  onClick={handlePlayPause}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{selectedMessage.description}</p>
            </>
          )}
        </div>
      </Modal>

    </div>
  );
};

export default Messages;
