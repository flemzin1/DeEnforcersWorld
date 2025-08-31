import React from 'react';
import { Calendar, Award, BookOpen, Heart, Users } from 'lucide-react';

const OurFounder: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-600 via-gray-700">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Founder</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet the visionary leader who established Truth Enforcers Bible Church Intl
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center mb-6">
                {/* <User className="h-32 w-32 text-gray-400" /> */}
                <img
                src="/img/zeru1.jpg"
                alt="Rev Zerubabbel G.W"
                className="flex items-center justify-center mx-auto h-96 w-96  mb-4  rounded-lg object-cover border-4 border-gray-400"
              />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Pastor Dr. Zerubabbel</h2>
                <p className="text-gray-600 text-lg">Founder, General Overseer and Presiding Bishop</p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">A Heart for God's People</h3>
              <p className="text-lg text-gray-600 mb-6">
                Pastor Dr. Zerubabbel founded De Enforcers World in 1998 with a vision
                to create a place where people could encounter God's love, grow in faith, and serve their community with purpose and passion.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Born and raised in Rivers, Nigeria, Pastor Zerubabbel felt God's call to ministry
                at an early age. After completing his theological education and serving in
                various ministerial roles, he moved to Port Harcourt with his family to
                establish what would become Truth Enforcers Bible Church Intl.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Founded Church</p>
                    <p className="text-gray-600">1998</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Years in Ministry</p>
                    <p className="text-gray-600">30+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white dark:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Credentials</h2>
            <p className="text-xl text-gray-600">
              A well-equipped servant leader with extensive theological training
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Academic Qualifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Doctor of Divinity - African Christian University</li>
                <li>• Master of Science - Lagos Sciene Education</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Recognition & Awards</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Outstanding Pastor Award - Nigeria Church Council (2020)</li>
                <li>• Community Service Recognition - Rivers State Government</li>
                <li>• Excellence in Ministry - African Pastors Association</li>
                <li>• Honorary Fellow - West African Seminary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white dark:bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">His Vision for the Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pastor Emmanuel's heart for ministry is reflected in his vision for Grace Community Church
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Love-Centered Ministry</h3>
              <p className="text-gray-600">
                "Every person who walks through our doors should experience the
                unconditional love of Christ through our community."
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-gray-600">
                "The church exists not just for itself, but to be a transformative
                force in our community and beyond."
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Biblical Foundation</h3>
              <p className="text-gray-600">
                "Everything we do must be grounded in Scripture and guided by
                the Holy Spirit's wisdom and direction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-16 bg-white dark:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-100 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Family & Personal Life</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Family Photo Placeholder</p>
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  Pastor Zerubabbel is married to his beloved wife, Dr. Zerubabbel, who serves
                  alongside him in ministry as the Director of Women's Ministry. Together, they
                  have been blessed with four children, all of whom are actively involved in
                  church ministry.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  When not shepherding the congregation, Pastor Zerubabbel enjoys reading,
                  mentoring young pastors, and spending quality time with his children.
                  He is also passionate about education and serves on the board of several
                  Christian schools in the region.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  He is the Founder of MEGED ACADEMY, A school with upright oustanding recognition.
                </p>
                <p className="text-lg text-gray-600">
                  His favorite scripture verse is Jeremiah 29:11: "For I know the plans I have
                  for you," declares the Lord, "plans to prosper you and not to harm you,
                  to give you hope and a future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-16 bg-white dark:bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">A Lasting Legacy</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Under Pastor Zerubabbel's leadership, De Enforcers World has grown from a small
            fellowship of 15 people to a thriving multi-campus church family of over 1,400 members,
            touching countless lives and transforming communities across Port Harcourt.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Years of Ministry</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,400+</div>
              <div className="text-blue-100">Church Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-100">Satellite Centers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Ministries & Programs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFounder;