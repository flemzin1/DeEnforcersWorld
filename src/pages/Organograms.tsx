// src/components/Organogram.tsx

import React from 'react';
import {
  Users,
  Heart,
  BookOpen,
  Church,
} from 'lucide-react';

interface Position {
  title: string;
  name: string;
  level: number;
  department?: string;
  imageUrl?: string;
}
interface Elders {
  title: string;
  name: string;
  imageUrl?: string;
}

const leadership: Position[] = [
  {
    title: 'Founder, General Overseer and Presiding Bishop',
    name: 'His Grace: RT. Rev Zerubabbel',
    level: 1,
    imageUrl: '/img/img1.jpg',
  },
  {
    title: 'Associate Pastor',
    name: 'Lady Pastor Mary Zerubabbel O.',
    level: 2,
    imageUrl: '/img/img2.jpg',
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
    title: 'Worship Minister',
    name: 'Jennifer Lee',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/49.jpg',
  },
  {
    title: 'Youth Pastor',
    name: 'Michael Chen',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    title: 'Children Church',
    name: 'Amanda White',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    title: 'Resident/Operational Pastor',
    name: 'Amanda White',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    title: 'Vision 2030 Pastor',
    name: 'Amanda White',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    title: 'Media and Press Director',
    name: 'Amanda White',
    level: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const ministryLeads: Position[] = [
  {
    title: "Men-Eagles Ministry Leader",
    name: 'James Anderson',
    level: 1,
    department: "Men/Brother's Ministry",
    imageUrl: '/img/img1.jpg',
  },
  {
    title: "Women-Excellent Ministry Leader",
    name: 'Dr. Grace Adeyemi',
    level: 1,
    department: "Women/Sister's Fellowship",
    imageUrl: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    title: 'Dynamic Youth Ministry Leader',
    name: 'Peter Okafor',
    level: 1,
    department: 'Youth Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    title: 'Couples Ministry Leader',
    name: 'Mr. & Mrs. Eze',
    level: 1,
    department: 'True-Love Network/Couples Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    title: 'Evangelism Leader',
    name: 'Elder John Smith',
    level: 1,
    department: 'Evangelical and Outreach',
    imageUrl: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
  {
    title: 'Protocol Leader',
    name: 'Grace Nwankwo',
    level: 1,
    department: 'Protocol and Security',
    imageUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    title: 'Decoration Leader',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Decoration and Sanitation',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    title: 'Technical Leader',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Technical and Works',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    title: 'Welfare Ministry Leader',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Welfare Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    title: 'Youth Miinistry Co-ordinator',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Youth Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    title: 'Geronto-Fellowship Leader',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Adults Fellowship',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    title: 'Maternity Ministry Co-ordinator',
    name: 'Edet Nwankwo',
    level: 1,
    department: 'Maternity Ministry',
    imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
];

const elders: Elders[] = [
  {
    title: "Marriage Counselor Leader",
    name: "Elder Samuel Okoye",
    imageUrl: "/img/img1.jpg",
  },
  {
    title: "Reconciliation Ministry Leader",
    name: "Elder Mary Adebayo",
    imageUrl: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    title: "Church Property Leader",
    name: "Elder Thomas Nwosu",
    imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    title: "SDS-Coordinator",
    name: "Elder Ruth Okoro",
    imageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    title: "Fellowship Team Leader",
    name: "Elder Paul Eze",
    imageUrl: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    title: "Prayer Band Leader",
    name: "Elder Elizabeth Bala",
    imageUrl: "https://randomuser.me/api/portraits/women/56.jpg",
  },
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
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Leadership Team
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            The pastoral team that provides spiritual leadership and vision for
            our church
          </p>

          <div className="flex flex-col items-center ">
            {/* Core Pastor */}
            <div className="mb-8 grid md:grid-cols-2 gap-6 w-full max-w-5xl">
              {leadership.map((position, index) => (
                <div key={index} className="bg-green-600 text-white rounded-lg p-6 text-center w-full max-w-xs mx-auto">
                  <img
                    src={position.imageUrl}
                    alt={position.name}
                    className="mx-auto mb-4 h-24 w-24 rounded-full object-cover border-4 border-green-400"
                  />
                  <h3 className="font-bold text-lg text-blue-100">{position.title}</h3>
                  <p className="text-white font-bold">{position.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Administration */}
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Concentrated Administrative Team
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            The administrative professionals who ensure smooth church operations
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {administration.map((position, index) => (
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


      {/* Ministry Leaders */}
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ministry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Dedicated leaders serving various ministry areas and community
            groups
          </p>


          <div className={`grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ${ministryLeads.length > 8 ? "max-h-[600px] overflow-y-auto overscroll-auto" : ""}`}>
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
            Board of Elders/Counselors
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
                <img
                  src={elder.imageUrl}
                  alt={elder.name}
                  className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border-4 border-gray-400"
                />
                <h4 className="font-semibold text-gray-900">{elder.name}</h4>
                <p className="text-gray-600 text-sm">{elder.title}</p>
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
            Our Organizational structure is built on biblical principles of servant leadership and result oriented service
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <Church className="h-12 w-12 mx-auto mb-4 text-indigo-200" />
              <h3 className="text-xl font-semibold mb-2">Divine Priority</h3>
              <p className="text-indigo-100">
                Putting God first and his mandate next before ours
              </p>
            </div>
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
