import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Modal, Button } from 'flowbite-react';
import ContactModal from '../components/ContactModal';
import EmptyState from "../components/EmptyState";

interface BlogPost {
    id: number;
    title: string;
    content: string;
    summary: string;
    date: string;
    category: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    // {
    //     id: 1,
    //     title: 'Sunday Service Recap',
    //     summary: 'Catch up on the highlights from our last Sunday service...',
    //     content: 'We had an amazing time of worship and teaching from Pastor John on the topic of faith and perseverance...',
    //     date: '2025-06-08',
    //     category: 'Services',
    //     image: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
    // },
    // {
    //     id: 2,
    //     title: 'Youth Outreach Success',
    //     summary: 'Our youth ministry reached over 300 students during the outreach!',
    //     content: 'The outreach was packed with fun, games, gospel presentations, and lots of food. We are so proud of the youth leaders...',
    //     date: '2025-05-28',
    //     category: 'Outreach',
    //     image: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/image-2.jpg',
    // },
    // {
    //     id: 3,
    //     title: 'Upcoming Praise Night',
    //     summary: 'Get ready for our monthly praise night. Here’s what you need to know...',
    //     content: 'Praise night is back! Join us for a powerful time of worship. This month we’ll be led by guest ministers from the city...',
    //     date: '2025-06-15',
    //     category: 'Events',
    //     image: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
    // },
];

const ChurchBlog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Dynamically get unique categories from posts
    const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    // Filter logic
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || post.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Enforcers Blogs Windows
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Take a moment to review our posts and blogs with recent Information.
                    </p>
                </div>
            </header>

            {/* Blogs*/}
            <section className="py-16 bg-white dark:bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col sm:flex-row gap-4 block justify-end mb-4 mx-10">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="text-white bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Subscribe
                        </button>
                        <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} />

                    </div>
                    <h1 className="text-3xl font-bold mb-6">Church Window</h1>

                    <section className="py-6 mb-6">
                        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Search */}
                            <div className="w-full max-w-md relative">
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search blog posts..."
                                    className="block w-full pl-10 pr-10 h-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-3 top-2.5 text-gray-800 hover:text-gray-600"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}

                            </div>

                            {/* Filter */}
                            <div className="flex items-center gap-2">
                                <Filter className="h-5 w-5 text-gray-500" />
                                <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white text-gray-900 dark:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.length ? (
                            filteredPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                                    <div className="p-4">
                                        <p className="text-sm text-gray-500">
                                            {new Date(post.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}{' '}
                                            · {post.category}
                                        </p>
                                        <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                                        <p className="text-sm mt-1">{post.summary}</p>
                                        <Button
                                            onClick={() => {
                                                setSelectedPost(post);
                                                setIsModalOpen(true);
                                            }}
                                            className="mt-3 text-white bg-gradient-to-br from-blue-600 via-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                                // <p className="text-gray-900 dark:text-white-900">No Blogs Available.</p>
                            <EmptyState />
                        )}
                    </div>

                    {/* Modal */}
                    {selectedPost && (
                        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <div className="p-6 bg-white">
                                <h3 className="text-lg font-bold mb-2">{selectedPost.title}</h3>
                                <img src={selectedPost.image} alt={selectedPost.title} className="rounded mb-4" />
                                <p className="text-sm text-gray-500 mb-2">
                                    {new Date(selectedPost.date).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}{' '}
                                    · {selectedPost.category}
                                </p>
                                <p>{selectedPost.content}</p>
                                <div className="mt-4 text-right">
                                    <Button className='text-white bg-gradient-to-br from-blue-600 via-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 dark:focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setIsModalOpen(false)}>Close</Button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ChurchBlog;
