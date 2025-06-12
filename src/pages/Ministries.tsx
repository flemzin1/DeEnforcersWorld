import React, { useState } from 'react';
import { Users, Heart, Music, BookOpen, Baby, Briefcase, Home, Globe, Utensils, GraduationCap, Shield, Star } from 'lucide-react';

interface Ministry {
  id: number;
  name: string;
  description: string;
  leader: string;
  meetingTime: string;
  location: string;
  icon: React.ReactNode;
  category: 'age-group' | 'special-interest' | 'service' | 'outreach';
  image?: string;
}
 
const Ministries: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const ministries: Ministry[] = [
    {
      id: 1,
      name: "Children's Ministry",
      description: "Nurturing young hearts to know and love Jesus through age-appropriate activities, Bible stories, and fun learning experiences.",
      leader: "Pastor Lisa Brown",
      meetingTime: "Sunday 9:00 AM & 11:00 AM",
      location: "Children's Wing",
      icon: <Baby className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 2,
      name: "Youth Ministry (Teens)",
      description: "Empowering teenagers to grow in faith, build friendships, and discover their purpose in God's plan.",
      leader: "Pastor David Wilson",
      meetingTime: "Friday 6:00 PM",
      location: "Youth Center",
      icon: <Star className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 3,
      name: "Young Adults Ministry",
      description: "Supporting young professionals and college students in their faith journey and life transitions.",
      leader: "Pastor Mike Chen",
      meetingTime: "Saturday 4:00 PM",
      location: "Fellowship Hall",
      icon: <GraduationCap className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 4,
      name: "Men's Ministry",
      description: "Building strong Christian men through fellowship, accountability, and service to God and family.",
      leader: "James Anderson",
      meetingTime: "Saturday 7:00 AM",
      location: "Men's Center",
      icon: <Shield className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 5,
      name: "Women's Ministry",
      description: "Encouraging women to grow in their relationship with Christ and support one another in life's journey.",
      leader: "Dr. Grace Adeyemi",
      meetingTime: "Tuesday 10:00 AM",
      location: "Women's Fellowship Hall",
      icon: <Heart className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 6,
      name: "Singles Ministry",
      description: "Creating community and support for single adults to thrive in their faith and personal growth.",
      leader: "Peter Okafor",
      meetingTime: "Sunday 2:00 PM",
      location: "Conference Room A",
      icon: <Users className="h-8 w-8" />,
      category: 'special-interest'
    },
    {
      id: 7,
      name: "Couples & Marriage Ministry",
      description: "Strengthening marriages and relationships through biblical principles and practical guidance.",
      leader: "Mr. & Mrs. Eze",
      meetingTime: "Monthly - 2nd Saturday",
      location: "Sanctuary",
      icon: <Home className="h-8 w-8" />,
      category: 'special-interest'
    },
    {
      id: 8,
      name: "Senior Adults Ministry",
      description: "Honoring and supporting our senior members through fellowship, care, and meaningful activities.",
      leader: "Elder John Smith",
      meetingTime: "Thursday 11:00 AM",
      location: "Senior Adults Room",
      icon: <BookOpen className="h-8 w-8" />,
      category: 'age-group'
    },
    {
      id: 9,
      name: "Worship Ministry",
      description: "Leading the congregation in Spirit-filled worship through music, vocals, and technical excellence.",
      leader: "Pastor Mark Davis",
      meetingTime: "Thursday 7:00 PM (Practice)",
      location: "Sanctuary",
      icon: <Music className="h-8 w-8" />,
      category: 'service'
    },
    {
      id: 10,
      name: "Community Outreach",
      description: "Serving our local community through food banks, charity drives, and neighborhood assistance programs.",
      leader: "Grace Nwankwo",
      meetingTime: "Saturday 9:00 AM",
      location: "Community Center",
      icon: <Globe className="h-8 w-8" />,
      category: 'outreach'
    },
    {
      id: 11,
      name: "Hospitality Ministry",
      description: "Welcoming visitors and members with warmth, refreshments, and genuine Christian hospitality.",
      leader: "Sarah Okon",
      meetingTime: "Sunday Services",
      location: "Main Entrance/Lobby",
      icon: <Utensils className="h-8 w-8" />,
      category: 'service'
    },
    {
      id: 12,
      name: "Business & Professional Ministry",
      description: "Supporting Christian professionals and entrepreneurs in integrating faith with their careers and business practices.",
      leader: "Dr. Emmanuel Okorie",
      meetingTime: "1st Thursday 6:30 PM",
      location: "Conference Room B",
      icon: <Briefcase className="h-8 w-8" />,
      category: 'special-interest'
    }
  ];

  const categoryColors = {
    'age-group': 'bg-blue-100 text-blue-800',
    'special-interest': 'bg-green-100 text-green-800',
    'service': 'bg-purple-100 text-purple-800',
    'outreach': 'bg-orange-100 text-orange-800'
  };

  const categoryNames = {
    'age-group': 'Age Group',
    'special-interest': 'Special Interest',
    'service': 'Service Ministry',
    'outreach': 'Outreach'
  };

  const categories = ['all', 'age-group', 'special-interest', 'service', 'outreach'] as const;

  const filteredMinistries = selectedCategory === 'all' 
    ? ministries 
    : ministries.filter(ministry => ministry.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover how you can serve and grow in your faith through our various ministry opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Ministries' : categoryNames[category as keyof typeof categoryNames]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinistries.map((ministry) => (
              <div key={ministry.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-green-600">
                      {ministry.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[ministry.category]}`}>
                      {categoryNames[ministry.category]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{ministry.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Led by: {ministry.leader}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{ministry.meetingTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{ministry.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                      Join Ministry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't find the right ministry for you? We'd love to help you discover where God is calling you to serve.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Ministry Leaders
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ministries;