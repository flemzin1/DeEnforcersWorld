import React, { useState, useRef, useEffect } from 'react';
import { Play, Calendar, User, Search, Filter, X, Pause, BookOpen, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
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
    textContent?: string;
}

const Messages: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSeries, setSelectedSeries] = useState('All');
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [videoDurations, setVideoDurations] = useState<{ [key: number]: number }>({});
    const [lastTapTime, setLastTapTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Function to get video duration
    const getVideoDuration = (videoUrl: string, messageId: number) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        
        video.onloadedmetadata = () => {
            setVideoDurations(prev => ({
                ...prev,
                [messageId]: video.duration
            }));
        };
        
        video.src = videoUrl;
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
            thumbnail: '/vid/testn.jpg',
            videoUrl: '/vid/test2.mp4',
        },
        {
            id: 4,
            title: 'Love is Beyond',
            speaker: 'Pastor Zerubabbel',
            date: '2025-06-12',
            duration: '24 min',
            description: 'How Love is beyond our expectation and the power of love',
            series: 'Love Series',
            thumbnail: 'none',
            videoUrl: '',
            textContent: `Love is indeed beyond our human understanding and expectations. In this profound message, we explore how God's love transcends all boundaries and limitations we might place upon it.

The scripture tells us in 1 Corinthians 13:4-8 that "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails."

When we think about love in our human terms, we often limit it to what we can understand or what we've experienced. But God's love is far beyond anything we could imagine. It's a love that sent His only Son to die for us while we were still sinners. It's a love that pursues us even when we run away. It's a love that forgives the unforgivable and restores the irreparable.

The power of love is transformative. When we truly understand and receive God's love, it changes everything about how we see ourselves, others, and the world around us. It gives us the capacity to love others in ways we never thought possible. It breaks down walls, heals wounds, and creates bridges where there were once divisions.

Let us never underestimate the power of love. It's not just an emotion or a feeling - it's the very essence of who God is. As 1 John 4:8 tells us, "God is love." When we walk in love, we walk in God Himself.

May this message encourage you to experience God's boundless love more deeply and to let that love flow through you to touch the lives of others around you.`,
        },
        {
            id: 2,
            title: 'The Power of Prayer',
            speaker: 'Pastor Zerubabbel',
            date: '2024-02-10',
            duration: '42 min',
            description: 'How prayer can transform your life and bring peace in chaos.',
            series: 'Prayer Series',
            thumbnail: '/images/prayer-thumbnail.jpg',
            videoUrl: '/vid/power-of-prayer.mp4',
        },
        {
            id: 3,
            title: 'Hope in Hard Times',
            speaker: 'Pastor Mike Johnson',
            date: '2024-03-05',
            duration: '38 min',
            description: 'Finding hope and strength through scripture in difficult seasons.',
            series: 'Hope Series',
            thumbnail: '/vid/testb.jpg',
            videoUrl: '/vid/test2.mp4',
        },
    ];

    // Load video durations on component mount
    useEffect(() => {
        messages.forEach(message => {
            if (message.videoUrl && !videoDurations[message.id]) {
                getVideoDuration(message.videoUrl, message.id);
            }
        });
    }, []);

    // Pause video when modal closes
    useEffect(() => {
        if (!openModal && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
            setCurrentTime(0);
        }
        // Stop text-to-speech when modal closes
        if (!openModal && speechSynthesisRef.current) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, [openModal]);

    // Auto-start video when modal opens for video messages
    useEffect(() => {
        if (openModal && selectedMessage && !isTextMessage(selectedMessage) && videoRef.current) {
            setTimeout(() => {
                videoRef.current?.play();
                setIsPlaying(true);
            }, 100);
        }
    }, [openModal, selectedMessage]);

    const openVideo = (message: Message) => {
        setSelectedMessage(message);
        setOpenModal(true);
        setIsPlaying(false);
        setIsSpeaking(false);
        setCurrentTime(0);
    };

    const closeModal = () => {
        setOpenModal(false);
        if (speechSynthesisRef.current) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
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

    const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (!videoRef.current) return;

        const currentTime = Date.now();
        const timeDiff = currentTime - lastTapTime;

        if (timeDiff < 300) { // Double tap detected
            const rect = videoRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;

            if (x < width / 2) {
                // Left side - go back 10 seconds
                skipBackward();
            } else {
                // Right side - go forward 10 seconds
                skipForward();
            }
        } else {
            // Single tap - play/pause
            handlePlayPause();
        }

        setLastTapTime(currentTime);
    };

    const skipBackward = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    };

    const skipForward = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = Math.min(videoDuration, videoRef.current.currentTime + 10);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setVideoDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!videoRef.current) return;
        const seekTime = parseFloat(e.target.value);
        videoRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleTextToSpeech = () => {
        if (!selectedMessage?.textContent) return;

        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(selectedMessage.textContent);
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            speechSynthesisRef.current = utterance;
            window.speechSynthesis.speak(utterance);
        }
    };

    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const isTextMessage = (message: Message) => {
        return !message.videoUrl || message.videoUrl === '';
    };

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
        <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
            {/* Header */}
            <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
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
                            {isTextMessage(message) ? (
                                // Text Message Layout
                                <div className="h-48 relative group rounded-t-lg overflow-hidden bg-white">
                                    <img
                                        src={message.thumbnail}
                                        alt={message.title}
                                        className="w-full h-full object-contain object-center"
                                        style={{ width: '100%', height: '100%' }}
                                        onError={(e) => {
                                            // Fallback to gradient if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.style.background = 'linear-gradient(to right, #fb7185, #f472b6)';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity" />
                                    <div className="absolute inset-0 p-4">
                                        <div className="relative z-10 h-full flex flex-col">
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-white text-sm leading-relaxed">
                                                    {truncateText(message.textContent || message.description)}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <button
                                                    onClick={() => openVideo(message)}
                                                    className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                    aria-label={`Read ${message.title}`}
                                                >
                                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                                </button>
                                                <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-mono">
                                                    {message.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Video Message Layout with Image Thumbnail
                                <div className="h-48 relative group rounded-t-lg overflow-hidden bg-white">
                                    <img
                                        src={message.thumbnail}
                                        alt={message.title}
                                        className="w-full h-full object-contain object-center"
                                        style={{ width: '100%', height: '100%' }}
                                        onError={(e) => {
                                            // Fallback to gradient if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6)';
                                        }}
                                    />
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
                                        {videoDurations[message.id] ? formatTime(videoDurations[message.id]) : message.duration}
                                    </div>
                                </div>
                            )}

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
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        {isTextMessage(message) ? (
                                            <>
                                                <BookOpen className="h-4 w-4 mr-2" />
                                                Read More
                                            </>
                                        ) : (
                                            <>
                                                <Play className="h-4 w-4 mr-2" />
                                                Watch Now
                                            </>
                                        )}
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
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors items-center bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Load More Messages
                    </button>
                </div>
            </section>

            {/* Video/Text Playback Modal */}
            <Modal show={openModal} onClose={closeModal} dismissible>
                <div className="relative p-4 bg-gradient-to-r from-indigo-600 via-gray-700">
                    {/* X Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white z-10"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {selectedMessage?.title}
                    </h3>

                    {selectedMessage && (
                        <>
                            {isTextMessage(selectedMessage) ? (
                                // Text Content Modal
                                <div className="bg-white dark:bg-gray-800 rounded-md p-6 max-h-96 overflow-y-auto">
                                    <div className="prose dark:prose-invert max-w-none">
                                        <div className="whitespace-pre-line text-gray-900 dark:text-gray-100 leading-relaxed">
                                            {selectedMessage.textContent}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {selectedMessage.speaker} •{' '}
                                            {new Date(selectedMessage.date).toLocaleDateString()} • {selectedMessage.duration}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Enhanced Video Content Modal
                                <>
                                    <div className="relative">
                                        <video
                                            ref={videoRef}
                                            src={selectedMessage.videoUrl}
                                            className="w-full rounded-md bg-black cursor-pointer"
                                            onClick={handleVideoClick}
                                            onTimeUpdate={handleTimeUpdate}
                                            onLoadedMetadata={handleLoadedMetadata}
                                            onPlay={() => setIsPlaying(true)}
                                            onPause={() => setIsPlaying(false)}
                                        />

                                        {/* Double-tap indicators */}
                                        <div className="absolute inset-0 pointer-events-none flex">
                                            <div className="flex-1 flex items-center justify-center">
                                                <div className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded opacity-0 transition-opacity">
                                                    ←← 10s
                                                </div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center">
                                                <div className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded opacity-0 transition-opacity">
                                                    10s →→
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Video Controls */}
                                    <div className="mt-4 space-y-3">
                                        {/* Progress Bar */}
                                        <div className="w-full">
                                            <input
                                                type="range"
                                                min="0"
                                                max={videoDuration || 0}
                                                value={currentTime}
                                                onChange={handleSeek}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                            <div className="flex justify-between text-sm text-gray-400 mt-1">
                                                <span>{formatTime(currentTime)}</span>
                                                <span>{formatTime(videoDuration)}</span>
                                            </div>
                                        </div>

                                        {/* Control Buttons */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={skipBackward}
                                                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                    aria-label="Skip backward 10 seconds"
                                                >
                                                    <SkipBack className="h-4 w-4" />
                                                </button>

                                                <button
                                                    onClick={handlePlayPause}
                                                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                                >
                                                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                                                </button>

                                                <button
                                                    onClick={skipForward}
                                                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                    aria-label="Skip forward 10 seconds"
                                                >
                                                    <SkipForward className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {selectedMessage.speaker} •{' '}
                                                {new Date(selectedMessage.date).toLocaleDateString()} • {selectedMessage.duration}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {selectedMessage.description}
                                </p>

                                {isTextMessage(selectedMessage) && (
                                    <button
                                        onClick={handleTextToSpeech}
                                        className="ml-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 flex-shrink-0"
                                        aria-label={isSpeaking ? 'Stop text-to-speech' : 'Start text-to-speech'}
                                    >
                                        {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default Messages;