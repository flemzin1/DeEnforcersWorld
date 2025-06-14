import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Users, Calendar } from 'lucide-react';
import ContactModal from '../components/ContactModal';

interface SatelliteCenter {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  pastor: string;
  serviceTime: string;
  description: string;
  established: string; 
  members: number;
}

const SatelliteCenters: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const centers: SatelliteCenter[] = [
    {
      id: 1,
      name: "De Enforcers World - Northside",
      address: "1234 North Street, Port Harcourt, Rivers State",
      phone: "+234 801 234 5678",
      email: "northside@denforcersworld.com",
      pastor: "Pastor Michael Adebo",
      serviceTime: "Sunday 9:00 AM & 11:00 AM",
      description: "Serving the Northside community with love and faith since 2018",
      established: "2018",
      members: 450
    },
    {
      id: 2,
      name: "De Enforcers World - Eastside",
      address: "5678 East Avenue, Port Harcourt, Rivers State",
      phone: "+234 802 345 6789",
      email: "eastside@denforcersworld.com",
      pastor: "Pastor Grace Okoro",
      serviceTime: "Sunday 8:30 AM & 10:30 AM",
      description: "A vibrant community focused on youth and family ministries",
      established: "2020",
      members: 320
    },
    {
      id: 3,
      name: "De Enforcers World - Westside",
      address: "9012 West Road, Port Harcourt, Rivers State",
      phone: "+234 803 456 7890",
      email: "westside@denforcersworld.com",
      pastor: "Pastor David Nwosu",
      serviceTime: "Sunday 9:30 AM & 11:30 AM",
      description: "Committed to community outreach and social impact programs",
      established: "2019",
      members: 380
    },
    {
      id: 4,
      name: "De Enforcers World - Downtown",
      address: "3456 Central Plaza, Port Harcourt, Rivers State",
      phone: "+234 804 567 8901",
      email: "downtown@denforcersworld.com",
      pastor: "Pastor Jennifer Eze",
      serviceTime: "Sunday 10:00 AM & 12:00 PM",
      description: "Reaching professionals and urban families in the city center",
      established: "2021",
      members: 280
    }
  ];

  return (
    <div className="min-h- bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Satellite Centers</h1>
            {/* <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Connecting communities across Port Harcourt with the love of Christ
            </p> */}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One Church, Multiple Locations</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our satellite centers allow us to serve communities throughout Port Harcourt while
              maintaining our unified mission and vision. Each location offers the same quality
              worship experience and community support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1,430+ Members</h3>
              <p className="text-gray-600">Across all our satellite centers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4 Locations</h3>
              <p className="text-gray-600">Strategically placed across the city</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Services</h3>
              <p className="text-gray-600">Convenient worship times for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Satellite Centers List */}
      <section className="py-16 bg-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {centers.map((center) => (
              <div key={center.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{center.name}</h3>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Est. {center.established}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{center.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{center.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Service Times</p>
                        <p className="text-gray-600">{center.serviceTime}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Lead Pastor</p>
                        <p className="text-gray-600">{center.pastor}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`tel:${center.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                          {center.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`mailto:${center.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                          {center.email}
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Church Members</span>
                        <span className="font-semibold text-gray-900">{center.members}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium ">
                      Visit Us
                    </button>
                    <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors bg-gradient-to-br from-blue-600 via-white-900 hover:bg-gradient-to-bl">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Church Home</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to any of our satellite centers. Each location offers
            the same warm community and powerful worship experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="border border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </button>
            <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} />

          </div>
        </div>
      </section>
    </div>
  );
};

export default SatelliteCenters;