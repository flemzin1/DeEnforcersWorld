import React, { useState } from 'react';
import { MapPinIcon } from "@heroicons/react/24/solid";
import ContactModal from '../components/ContactModal';

interface OutreachEvent {
  id: number;
  title: string;
  description: string;
  time: string;
  date: string;
  image: string;
  location: string;
}

const outreachEvents: OutreachEvent[] = [
  {
    id: 1,
    title: "Community Food Drive",
    description: "Distribute food and essentials to families in need.",
    time: "9:00 AM",
    date: new Date("2025-07-15").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "Community Hall",
  },
  {
    id: 2,
    title: "Hospital Visitation",
    description: "Encourage patients and offer prayers in the hospital.",
    time: "11:00 AM",
    date: new Date("2025-06-20").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/image-2.jpg",
    location: "Faith Hospital Wing B",
  },
  {
    id: 3,
    title: "Youth Street Evangelism",
    description: "Youth outreach on the streets with gospel and support.",
    time: "4:00 PM",
    date: new Date("2025-06-10").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg ",
    location: "Downtown Square",
  },
];

const OutreachPage: React.FC = () => {
const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Scheduled Outreach
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Review our outreach prograns committed towards the community.
          </p>
        </div>
      </header>

      {/*outreach */}
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
          <h2 className="text-3xl font-bold mb-6 text-center">Outreach Programs</h2> 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outreachEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-100"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-text-gray-600">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-700 text-sm mt-1">{event.description}</p>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 7a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414L11 12.414V8a1 1 0 011-1z" />
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    </svg>
                    {event.time}, {event.date}
                  </p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-600 flex items-center">
                    <MapPinIcon className="h-5 w-5 text-red-500 mr-1" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutreachPage;
