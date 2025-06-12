import React, { useState } from 'react';
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";
import ContactModal from '../components/ContactModal';

interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  date: string;
  image: string;
  location: string;
}

// events
const events: Event[] = [
  {
    id: 1,
    title: "Youth Conference 2025",
    description: "An evening of music, prayer, and fellowship led by our youth group.",
    time: "10am",
    date: "May 10, 2025",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "Main Auditorium",
  },
  {
    id: 2,
    title: "Praise Night",
    description: "Join us for a night of praise and worship.",
    time: "4pm",
    date: "May 20, 2025",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "City Center, PH",
  },
  {
    id: 3,
    title: "Outreach Program",
    description: "Providing aid to the local community.",
    time: "7pm",
    date: "Jun 10, 2025",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "Faith Hall",
  },
  {
    id: 4,
    title: "Students Outreach Program",
    description: "Providing aid to the Students community.",
    time: "7pm",
    date: "Jun 15, 2025",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "Main Auditorium",
  },
];

// Helper to split into upcoming and past
const today = new Date();
const upcomingEvents = events.filter((e) => new Date(e.date) >= today);
const pastEvents = events.filter((e) => new Date(e.date) < today);

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="min-w-[320px] max-w-xs rounded-2xl shadow-lg overflow-hidden relative">
    <div
      className="h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${event.image})` }}
    ></div>
    <div className="bg-white p-4 flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
      <p className="text-gray-700 text-sm">{event.description}</p>
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <ClockIcon className="h-5 w-5 mr-1 text-blue-500" />
        {event.time} — {new Date(event.date).toLocaleDateString(
          'en-us', {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
        )}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <MapPinIcon className="h-5 w-5 mr-1 text-red-500" />
        {event.location}
      </div>
    </div>
  </div>
);

const ChurchEvents: React.FC = () => {
const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Scheduled Events
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Review our Upcoming and Past Events including Services, Outreach and Concerts
          </p>
        </div>
      </header>

      {/* Events*/}
      <section className="py-16 bg-white">
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <p className="text-gray-600">No upcoming events.</p>
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">Past Events</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <p className="text-gray-600">No past events.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchEvents;
