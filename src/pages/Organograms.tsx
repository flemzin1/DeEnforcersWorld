// src/components/Organogram.tsx

import React from 'react';
import {
  Users,
  Heart,
  BookOpen,
} from 'lucide-react';

interface Position {
  title: string;
  name: string;
  level: number;
  department?: string; 
  imageUrl?: string;
}

const leadership: Position[] = [
  {
    title: 'Senior Pastor/Founder',
    name: 'Dr. Zerubabbel',
    level: 1,
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    title: 'Associate Pastor',
    name: 'Dr. Mrs Zerubabbel',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    title: 'Worship Pastor',
    name: 'Mark Davis',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    title: 'Youth Pastor',
    name: 'David Wilson',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    title: "Children's Pastor",
    name: 'Lisa Brown',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
  },
];

const administration: Position[] = [
  {
    title: 'Church Administrator',
    name: 'Robert Taylor',
    level: 1,
    imageUrl: 'https://randomuser.me/api/portraits/men/49.jpg',
  },
  {
    title: 'Finance Manager',
    name: 'Jennifer Lee',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/49.jpg',
  },
  {
    title: 'Operations Manager',
    name: 'Michael Chen',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    title: 'Communications Director',
    name: 'Amanda White',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const ministryLeads: Position[] = [
  {
    title: "Men's Ministry Leader",
    name: 'James Anderson',
    level: 1,
    department: "Men's Ministry",
    imageUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    title: "Women's Ministry Leader",
    name: 'Dr. Grace Adeyemi',
    level: 1,
    department: "Women's Ministry",
    imageUrl: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    title: 'Singles Ministry Leader',
    name: 'Peter Okafor',
    level: 1,
    department: 'Singles Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    title: 'Couples Ministry Leader',
    name: 'Mr. & Mrs. Eze',
    level: 1,
    department: 'Couples Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    title: 'Senior Adults Leader',
    name: 'Elder John Smith',
    level: 1,
    department: 'Senior Adults',
    imageUrl: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
  {
    title: 'Community Outreach Leader',
    name: 'Grace Nwankwo',
    level: 1,
    department: 'Outreach',
    imageUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
];

const elders = [
  'Elder Samuel Okoye',
  'Elder Mary Adebayo',
  'Elder Thomas Nwosu',
  'Elder Ruth Okoro',
  'Elder Paul Eze',
  'Elder Elizabeth Bala',
];

const Organogram: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Church Organogram
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our organizational structure reflects our commitment to effective
            leadership and ministry
          </p>
        </div>
      </header>

      {/* Senior Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Senior Leadership Team
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            The pastoral team that provides spiritual leadership and vision for
            our church
          </p>

          <div className="flex flex-col items-center">
            {/* Senior Pastor */}
            <div className="mb-8">
              <div className="bg-blue-600 text-white rounded-lg p-6 text-center max-w-xs mx-auto">
                <img
                  src={leadership[0].imageUrl}
                  alt={leadership[0].name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover border-4 border-blue-400"
                />
                <h3 className="font-bold text-lg">{leadership[0].title}</h3>
                <p className="text-blue-100">{leadership[0].name}</p>
              </div>
            </div>

            {/* Associate Pastors */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 w-full max-w-5xl">
              {leadership.slice(1).map((position, index) => (
                <div
                  key={index}
                  className="bg-indigo-500 text-white rounded-lg p-4 text-center"
                >
                  <img
                    src={position.imageUrl}
                    alt={position.name}
                    className="mx-auto mb-3 h-16 w-16 rounded-full object-cover border-2 border-indigo-300"
                  />
                  <h4 className="font-semibold text-sm">{position.title}</h4>
                  <p className="text-indigo-100 text-sm">{position.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Administrative Team
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            The administrative professionals who ensure smooth church operations
          </p>

          <div className="flex flex-col items-center">
            {/* Church Administrator */}
            <div className="mb-8">
              <div className="bg-green-600 text-white rounded-lg p-6 text-center max-w-xs mx-auto">
                <img
                  src={administration[0].imageUrl}
                  alt={administration[0].name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover border-4 border-green-400"
                />
                <h3 className="font-bold text-lg">
                  {administration[0].title}
                </h3>
                <p className="text-green-100">{administration[0].name}</p>
              </div>
            </div>

            {/* Department Managers */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
              {administration.slice(1).map((position, index) => (
                <div
                  key={index}
                  className="bg-green-500 text-white rounded-lg p-4 text-center"
                >
                  <img
                    src={position.imageUrl}
                    alt={position.name}
                    className="mx-auto mb-3 h-16 w-16 rounded-full object-cover border-2 border-green-300"
                  />
                  <h4 className="font-semibold text-sm">{position.title}</h4>
                  <p className="text-green-100 text-sm">{position.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ministry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Dedicated leaders serving various ministry areas and community
            groups
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {ministryLeads.map((position, index) => (
              <div
                key={index}
                className="bg-purple-100 border border-purple-200 rounded-lg p-6 text-center"
              >
                <img
                  src={position.imageUrl}
                  alt={position.name}
                  className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border-4 border-purple-400"
                />
                <h4 className="font-semibold text-gray-900 mb-1">
                  {position.title}
                </h4>
                <p className="text-purple-600 font-medium mb-2">{position.name}</p>
                {position.department && (
                  <p className="text-gray-600 text-sm">{position.department}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Elders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Board of Elders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Spiritual oversight and governance for the church body
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {elders.map((elder, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
              >
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900">{elder}</h4>
                <p className="text-gray-600 text-sm">Church Elder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Principles</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            Our organizational structure is built on biblical principles of
            leadership and service
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
              <h3 className="text-xl font-semibold mb-2">Servant Leadership</h3>
              <p className="text-indigo-100">
                Following Christ&apos;s example of leading through service and
                humility
              </p>
            </div>
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Ministry</h3>
              <p className="text-indigo-100">
                Working together as one body with diverse gifts and callings
              </p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
              <h3 className="text-xl font-semibold mb-2">Biblical Foundation</h3>
              <p className="text-indigo-100">
                Grounding all leadership decisions in Scripture and prayer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organogram;
