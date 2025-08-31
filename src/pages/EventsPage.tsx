import React, { useState, useRef, useEffect } from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";
import ContactModal from "../components/ContactModal";
import { Card, Modal, Button } from "flowbite-react";
import EmptyState from "../components/EmptyState";


interface Event {
  id: number;
  title: string;
  theme: string;
  description: string;
  eventsType: "Annual" | "Weekly" | "Monthly";
  time: string;
  startDate: string;
  enddate: string;
  image: string;
  location: string;
}


const eventsByDate: Event[] = [
  {
    id: 1,
    title: "Doubled Grace Atmosphere",
    theme: "7 Covenant Keys",
    description: "2025 Annual International Missionary Convention",
    eventsType: "Annual",
    time: "4:30pm",
    startDate: "Aug 28 2025",
    enddate: "Aug 31, 2025",
    image: "/img/annual-aug2025.jpg",
    location: "Land of Springs/nI-Point Junction Choba Extension By 1st Mechanic Bus-Stop Off UPTH East-West Road PH",
  },
  {
    id: 2,
    title: "Free Medical Service",
    theme: "Medical Service",
    description: "Come and Get Free Medical Service Which is in partnership with our 2025 Annual International Missionary Convention",
    eventsType: "Annual",
    time: "4pm",
    startDate: "Aug 28 2025",
    enddate: "Aug 31, 2025",
    image: "/img/medic.jpg",
    location: "Land of Springs/nI-Point Junction Choba Extension By 1st Mechanic Bus-Stop Off UPTH East-West Road PH",
  },
];

const eventsByType: Event[] = [
  {
    id: 1,
    title: "Annual TakeOver Feast",
    theme: "",
    description: "Annual TakeOver Feast for all members.",
    eventsType: "Annual",
    time: "January",
    startDate: "",
    enddate: "",
    image: "/img/annual-aug2025.jpg",
    location: "",
  },
  {
    id: 2,
    title: "Marriage And Family Ministrations",
    theme: "",
    description: "Marriage And Family Ministrations.",
    eventsType: "Annual",
    time: "February",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 4,
    title: "Easter Week And Cultural Ministration",
    theme: "",
    description: "Easter Week.",
    eventsType: "Annual",
    time: "April",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 5,
    title: "Children's Day Celebration/Widows Ministry",
    theme: "",
    description: "Children's Day Celebration/Widows Ministry.",
    eventsType: "Annual",
    time: "May",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 6,
    title: "God's Heartbeat with free Medical facility",
    theme: "",
    description: "God's Heartbeat with free Medical facility.",
    eventsType: "Annual",
    time: "June",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 7,
    title: "Youth Anniversary with Empowerment",
    theme: "",
    description: "Youth Anniversary with Empowerment.",
    eventsType: "Annual",
    time: "July",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 8,
    title: "Covenant Fast and Missionary Convention",
    theme: "",
    description: "Covenant Fast and Missionary Convention.",
    eventsType: "Annual",
    time: "August",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 9,
    title: "Men Anniversary with Business Summit",
    theme: "",
    description: "A summit focused on empowering men in business.",
    eventsType: "Annual",
    time: "September",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 10,
    title: "Women Anniversary",
    theme: "",
    description: "A conference aimed at empowering women in various fields.",
    eventsType: "Annual",
    time: "October",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 11,
    title: "Annual Harvest & Thanksgiving service",
    theme: "",
    description: "A celebration of gratitude and abundance.",
    eventsType: "Annual",
    time: "November",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 12,
    title: "Celebration Grace",
    theme: "",
    description: "A time to celebrate grace and blessings.",
    eventsType: "Annual",
    time: "December",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 13,
    title: "Covenant Day Of Prayers",
    theme: "",
    description: "A day dedicated to prayer and intercession.",
    eventsType: "Monthly",
    time: "1st Day of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 14,
    title: "General Pastors/Hunters/Workers Meeting",
    theme: "",
    description: "A meeting for all pastors, hunters, and workers to discuss church matters.",
    eventsType: "Monthly",
    time: "1st Saturday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 15,
    title: "Thanksgiving/Blood Battle",
    theme: "",
    description: "A day dedicated to gratitude and reflection.",
    eventsType: "Monthly",
    time: "1st Sunday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 16,
    title: "General Hunting For Souls",
    theme: "",
    description: "Dedicated to soul-winning efforts.",
    eventsType: "Monthly",
    time: "Every Friday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 17,
    title: "Dedications And Testimony services",
    theme: "",
    description: "A time to share personal testimonies and dedication services of the Lord Doings.",
    eventsType: "Monthly",
    time: "2nd Sunday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 18,
    title: "Healing and Miracles Service",
    theme: "",
    description: "A day dedicated to healing and miracles.",
    eventsType: "Monthly",
    time: "2nd Sunday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 19,
    title: "Special Annual Programmes For the Month",
    theme: "",
    description: "A day of special programs and activities.",
    eventsType: "Monthly",
    time: "3rd Sunday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 13,
    title: "Cultural Heritage Celebration",
    theme: "",
    description: "A day dedicated to celebrating our cultural heritage.",
    eventsType: "Monthly",
    time: "5th Sunday of Each Month",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 26,
    title: "Counseling Services",
    theme: "",
    description: "Providing aid to the church community.",
    eventsType: "Weekly",
    time: "Tuesdays",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  },
  {
    id: 27,
    title: "Midweek Service and Discipleship Training",
    theme: "",
    description: "A weekly gathering for prayer and intercession.",
    eventsType: "Weekly",
    time: "Wednesdays",
    startDate: "",
    enddate: "",
    image: "https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg",
    location: "",
  }
];


function useScrollState(ref: React.RefObject<HTMLDivElement>) {
  const [state, setState] = useState({
    scrollable: false,
    canScrollLeft: false,
    canScrollRight: false,
  });

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

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [ref]);

  return state;
}

const EventCard: React.FC<{ event: Event; fromType?: boolean }> = ({ event, fromType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <div className="min-w-[320px] max-w-xs snap-start">
      {fromType ? (
        //  Card by Type (annual, monthly, weekly)
        <Card
          className="flex flex-col h-[400px] bg-dark dark:bg-white rounded-2xl shadow-lg overflow-hidden"
          renderImage={() => (
            <div className="w-full aspect-[3/2] flex items-center justify-center bg-white">
              <img
                src={event.image}
                alt={event.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        >
          {/* Title zone with fixed height */}
          <div className=" flex flex-col flex">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 ">
              {event.title}
            </h3>
          </div>
          <Button
            onClick={() => {
              setSelectedEvent(event);
              setIsModalOpen(true);
            }}
            className="mt-3 text-white bg-gradient-to-br from-blue-600 via-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            More
          </Button>
        </Card>
      ) : (
        // Card by Date (upcoming, ongoing, past)
        <Card className="flex flex-col h-[420px] bg-dark dark:bg-white rounded-2xl shadow-lg overflow-hidden"
          renderImage={() => (
            <div className="w-full aspect-[3/2] flex items-center justify-center bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        >
          <div className="flex flex-col flex-1 px-2 py-2">
            <div className="min-h-[72px] max-h-[72px]">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {event.theme}
              </h3>
              <p className="text-gray-700 text-sm line-clamp-2">
                {event.title}
              </p>
            </div>
            <div className="mt-auto space-y-1 min-h-[48px] max-h-[48px]">
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="h-5 w-5 mr-1 text-blue-500" />

                <span>
                  {event.time} ·{" "}
                  {new Date(event.startDate).toLocaleDateString("en-us", {
                    month: "short",
                    day: "numeric",
                  })}

                  {new Date(event.startDate).getMonth() === new Date(event.enddate).getMonth() &&
                    new Date(event.startDate).getFullYear() === new Date(event.enddate).getFullYear() ? (
                    <>
                      {" - "}
                      {new Date(event.enddate).getDate()},{" "}
                      {new Date(event.enddate).getFullYear()}
                    </>
                  ) : (
                    <>
                      {" - "}
                      {new Date(event.enddate).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </>
                  )}
                </span>
              </div>
              <Button
                onClick={() => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
                className="mt-3 text-white bg-gradient-to-br from-blue-600 via-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Read More
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Modal for detailed view */}
      {selectedEvent && (
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-6 bg-gray-800 dark:bg-white">
            <h3 className="text-lg font-bold mb-2">{selectedEvent.theme}</h3>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="rounded mb-4" />
            <h4 className="text-lg font-semibold mb-2">{selectedEvent.title}</h4>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            {/* for type */}
            {fromType ? (
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="h-5 w-5 mr-1 text-blue-500" />

                <span>Every Month at {event.time}</span>
              </div>
            ) : (
              <><div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="h-5 w-5 mr-1 text-blue-500" />

                <span>
                  {event.time} ·{" "}
                  {new Date(event.startDate).toLocaleDateString("en-us", {
                    month: "short",
                    day: "numeric",
                  })}

                  {new Date(event.startDate).getMonth() === new Date(event.enddate).getMonth() &&
                    new Date(event.startDate).getFullYear() === new Date(event.enddate).getFullYear() ? (
                    <>
                      {" - "}
                      {new Date(event.enddate).getDate()},{" "}
                      {new Date(event.enddate).getFullYear()}
                    </>
                  ) : (
                    <>
                      {" - "}
                      {new Date(event.enddate).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </>
                  )}
                </span>
              </div><div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-1 text-red-500" />
                  <span className="">{event.location}</span>

                </div></>
            )}
            <div className="mt-4 text-right">
              <Button className='text-white bg-gradient-to-br from-blue-600 via-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 dark:focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setIsModalOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

const ScrollControls: React.FC<{
  refEl: React.RefObject<HTMLDivElement>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}> = ({ refEl, canScrollLeft, canScrollRight }) => {
  const scrollBy = (amount: number) => {
    if (refEl.current) {
      refEl.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
      {canScrollLeft && (
        <button
          onClick={() => scrollBy(-300)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg"
        >
          {"<"}
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scrollBy(300)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg"
        >
          {">"}
        </button>
      )}
    </>
  );
};


const ChurchEvents: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  /* Date-based tabs */
  const dateTabs = ["Upcoming", "Ongoing", "Past"] as const;
  const [activeDateTab, setActiveDateTab] = useState<typeof dateTabs[number]>("Upcoming");
  const today = new Date();

  const filterByDate = (tab: typeof dateTabs[number]) => {
    if (tab === "Upcoming") return eventsByDate.filter((e) => new Date(e.startDate) > today);
    if (tab === "Ongoing") {
      return eventsByDate.filter((e) => {
        const start = new Date(e.startDate);
        const end = new Date(e.enddate);

        // Normalize all to midnight
        const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return todayDay >= startDay && todayDay <= endDay;
      });
    }

    if (tab === "Past") return eventsByDate.filter((e) => {
      const end = new Date(e.enddate);
      const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      return endDay < todayDay;
    });
    return [];
  };

  const upcomingRef = useRef<HTMLDivElement>(null!);
  const upcomingState = useScrollState(upcomingRef);

  /* Type-based tabs */
  const typeTabs = ["Annual", "Monthly", "Weekly"] as const;
  const [activeTypeTab, setActiveTypeTab] = useState<typeof typeTabs[number]>("Annual");
  const typeRef = useRef<HTMLDivElement>(null!);
  const typeState = useScrollState(typeRef);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      <header className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Scheduled Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Review our Upcoming, Ongoing, Past and All Types of Events
          </p>
        </div>
      </header>

      <section className="py-8 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Subscribe */}
          <div className="flex justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="text-white bg-gradient-to-br from-blue-600 via-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Subscribe
            </button>
          </div>
          <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} />

          {/* Date-based */}
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Events Schedule
          </h2>
          <ul className="flex justify-center gap-4 mb-6">
            {dateTabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveDateTab(tab)}
                  className={`px-4 py-2 rounded-lg ${activeDateTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                    }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative w-full mb-10">
            <div
              ref={upcomingRef}
              className="flex snap-x snap-mandatory scroll-smooth space-x-6 overflow-x-auto pb-4"
            >
              {filterByDate(activeDateTab).length ? (
                filterByDate(activeDateTab).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                // <p className="text-gray-900 dark:text-white-900">No {activeDateTab} events.</p>
                <EmptyState />
              )}
            </div>
            {upcomingState.scrollable && (
              <ScrollControls
                refEl={upcomingRef}
                canScrollLeft={upcomingState.canScrollLeft}
                canScrollRight={upcomingState.canScrollRight}
              />
            )}
          </div>

          {/* Type-based */}
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Events Category
          </h2>
          <ul className="flex justify-center gap-4 mb-6">
            {typeTabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTypeTab(tab)}
                  className={`px-4 py-2 rounded-lg ${activeTypeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800"
                    }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative w-full">
            <div
              ref={typeRef}
              className="flex snap-x snap-mandatory scroll-smooth space-x-6 overflow-x-auto pb-4"
            >
              {eventsByType
                .filter((e) => e.eventsType === activeTypeTab)
                .map((event) => (
                  <EventCard key={event.id} event={event} fromType />
                ))}
            </div>
            {typeState.scrollable && (
              <ScrollControls
                refEl={typeRef}
                canScrollLeft={typeState.canScrollLeft}
                canScrollRight={typeState.canScrollRight}
              />
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ChurchEvents;
