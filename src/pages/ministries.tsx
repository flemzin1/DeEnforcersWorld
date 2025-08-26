import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';

interface Ministry {
    id: number;
    title: string;
    description: string;
    src: string;
}

const Ministries: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const ministries: Ministry[] = [
        {
            id: 1,
            title: 'Christain Education Ministry',
            description: 'The ministry which internally works as Spiritual Development Studies (SDS) where member\'s Potentails, Life purposed and Gifts are identified, developed and equiped for the purpose of excellence in ministry.',
            src: ''
        },
        {
            id: 2,
            title: 'Prayer And Evangelical Ministry',
            description: 'The ministry which prepares every member to be on the go and to be champion intercessors that are ready to manage whatever life would present through the word of God and Prayers',
            src: '/img/'
        },
        {
            id: 3,
            title: 'Marriage And Family Building Ministry',
            description: 'The ministry is devoted to building godly homes where children are raised in the fear of God as future ambassadors of Christ as long as Christ tarries, Annually blesses the world around us, every February',
            src: ''
        },
        {
            id: 4,
            title: 'Men Ministry',
            description: 'This is a group of all the married men and matured men in the church. Also opened to all matured single brothers who are willing to serve God among the men.',
            src: ''
        },
        {
            id: 5,
            title: 'Women Ministry',
            description: 'This is a group of married female sisters or those who are matured singles, who may have been divorced, separated, widowed or are still unmarried due to one challenge or the other',
            src: ''
        },
        {
            id: 6,
            title: 'Youth Ministry',
            description: 'A ministry for all matured singles in the church irrespective of their gender variations, This ministry provides a room for brethren to mingle and freely serve the Lord as youths, This is actually the period of their life when their strength is maximized for the service of the Lord.',
            src: ''
        },
        {
            id: 7,
            title: 'Children Church Ministry',
            description: 'This ministry is grouped into three sections:\nJesus Stars: From the ages of ten to sixteen\nCandle Roll: From the ages of four to ten\nNursery Dept: Those below the ages of four',
            src: ''
        },
    ];


    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
            {/* Header */}
            <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
                <div className="max-w-7xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Ministries</h1>
                    <p className="text-xl md:text-xl">Our ministries that effectively achieve our visions and mission</p>
                </div>
            </section>

            {/* Ministries Grid */}
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

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ministries.map((ministry) => (
                        <div  key={ministry.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <div className="h-48 relative group rounded-t-lg overflow-hidden bg-white">
                                <img src={ministry.src} alt="" className="w-full h-full object-contain object-center" />
                                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{ministry.title}</h3>
                                <p className="md:text-sm text-gray-600 dark:text-gray-300 mb-4">{ministry.description.includes('\n')
                                ? ministry.description.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))
                                : ministry.description
                                    }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Ministries;