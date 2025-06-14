import React, { useState, useRef, useEffect } from 'react';
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

const today = new Date();
const upcomingEvents = events.filter((e) => new Date(e.date) >= today);
const pastEvents = events.filter((e) => new Date(e.date) < today);

function useScrollState(ref: React.RefObject<HTMLDivElement | null>) {
  const [state, setState] = useState({ scrollable: false, canScrollLeft: false, canScrollRight: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const checkScroll = () => {
      if (!el) return;
      setState({
        scrollable: el.scrollWidth > el.clientWidth + 1,
        canScrollLeft: el.scrollLeft > 0,
        canScrollRight: el.scrollLeft + el.clientWidth < el.scrollWidth - 1,
      });
    };

    const delayedCheck = () => setTimeout(checkScroll, 50);
    delayedCheck();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [ref]);

  return state;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="min-w-[320px] max-w-xs snap-start rounded-2xl shadow-lg overflow-hidden">
    <div
      className="h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${event.image})` }}
    />
    <div className="bg-white p-4 flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-gray-900 ">{event.title}</h3>
      <p className="text-gray-700 text-sm">{event.description}</p>
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <ClockIcon className="h-5 w-5 mr-1 text-blue-500" />
        {event.time} — {new Date(event.date).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}
      </div>
      <div className="flex items-center text-sm text-gray-600 ">
        <MapPinIcon className="h-5 w-5 mr-1 text-red-500" />
        {event.location}
      </div>
    </div>
  </div>
);

const ScrollControls: React.FC<{
  refEl: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}> = ({ refEl, canScrollLeft, canScrollRight }) => {
  const scrollBy = (amount: number) => {
    if (refEl.current) {
      refEl.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {canScrollLeft && (
        <button
          onClick={() => scrollBy(-300)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scrollBy(300)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  );
};


const ChurchEvents: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const upcomingRef = useRef<HTMLDivElement | null>(null);
  const pastRef = useRef<HTMLDivElement | null>(null);

  const upcomingState = useScrollState(upcomingRef);
  const pastState = useScrollState(pastRef);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      <header className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Scheduled Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Review our Upcoming and Past Events including Services, Outreach and Concerts
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="text-white bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Subscribe
            </button>
          </div>
          <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} />

          {/* Upcoming */}
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Upcoming Events</h2>
          <div className="relative w-full">
            {/* Scrollable container */}
            <div
              ref={upcomingRef}
              className="flex snap-x snap-mandatory scroll-smooth space-x-6 overflow-x-auto pb-4 pr-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
            >
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Floating scroll controls */}
            {upcomingState.scrollable && (
              <ScrollControls
                refEl={upcomingRef}
                canScrollLeft={upcomingState.canScrollLeft}
                canScrollRight={upcomingState.canScrollRight}
              />
            )}
          </div>



          {/* Past */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-10 mb-4">Past Events</h2>
          <div className="relative w-full">
            {/* Scrollable container */}
            <div
              ref={pastRef}
              className="flex snap-x snap-mandatory scroll-smooth space-x-6 overflow-x-auto pb-4 pr-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700"
            >
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Floating scroll buttons */}
            {pastState.scrollable && (
              <ScrollControls
                refEl={pastRef}
                canScrollLeft={pastState.canScrollLeft}
                canScrollRight={pastState.canScrollRight}
              />
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ChurchEvents;
