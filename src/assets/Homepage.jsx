import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Heart, Users, BookOpen, ArrowRight, Play, Star, ChevronDown, Phone, Calendar } from 'lucide-react';

const Homepage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Sarah M.", text: "This church has become my spiritual home. The community is so welcoming!", rating: 5 },
    { name: "David L.", text: "The messages here have truly transformed my walk with God.", rating: 5 },
    { name: "Maria C.", text: "I've found my purpose through the amazing ministries here.", rating: 5 }
  ];

  const messages = [
    {
      title: "Walking in Faith",
      description: "Discover what it means to trust God completely in every season of life.",
      gradient: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
      date: "Dec 15, 2024"
    },
    {
      title: "The Power of Prayer",
      description: "Understanding how prayer transforms both our hearts and circumstances.",
      gradient: "linear-gradient(45deg, #10b981, #3b82f6)",
      date: "Dec 8, 2024"
    },
    {
      title: "Living with Purpose",
      description: "Finding and fulfilling God's unique calling on your life.",
      gradient: "linear-gradient(45deg, #8b5cf6, #ec4899)",
      date: "Dec 1, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        style={isScrolled ? {} : { background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Truth Enforcers
            </div>
            <div className={`hidden md:flex space-x-6 transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <a href="#home" className="hover:text-blue-500 transition-colors cursor-pointer">Home</a>
              <a href="#about" className="hover:text-blue-500 transition-colors cursor-pointer">About</a>
              <a href="#ministries" className="hover:text-blue-500 transition-colors cursor-pointer">Ministries</a>
              <a href="#messages" className="hover:text-blue-500 transition-colors cursor-pointer">Messages</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors cursor-pointer">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #312e81, #7c3aed, #db2777)',
        }}
      >
        {/* Animated Background Overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ animation: 'fadeInUp 1s ease-out' }}
          >
            Welcome to
            <span 
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Truth Enforcers
            </span>
            Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Where faith meets community, and every heart finds its home in God's love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #2563eb, #7c3aed)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #3b82f6, #8b5cf6)';
              }}
            >
              <span className="flex items-center justify-center">
                Visit Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <span className="flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Online
              </span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Service Times */}
      <section 
        id="ministries" 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #f9fafb, #dbeafe)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Worship
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience God's presence in community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Sunday Service", time: "8:00 AM & 10:30 AM", gradient: "linear-gradient(45deg, #3b82f6, #06b6d4)" },
              { icon: BookOpen, title: "Bible Study", time: "Wednesday 7:00 PM", gradient: "linear-gradient(45deg, #8b5cf6, #ec4899)" },
              { icon: Users, title: "Youth Fellowship", time: "Friday 6:00 PM", gradient: "linear-gradient(45deg, #10b981, #059669)" }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div 
                  className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:shadow-2xl border border-gray-100"
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300"
                    style={{ background: service.gradient }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-lg text-center">{service.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our{' '}
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Truth Enforcers Church, we are committed to spreading the gospel of Jesus Christ 
                and building a community where every person can grow in their faith, find their purpose, 
                and make a lasting impact in the world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in the power of truth to transform lives, strengthen families, 
                and build communities that reflect God's love and grace.
              </p>
              <button 
                className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}
              >
                <span className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
            </div>
            
            <div 
              className="p-8 rounded-3xl shadow-xl border border-gray-100"
              style={{ background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)' }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h3>
              <div className="space-y-6">
                {[
                  { icon: Heart, title: "Love", description: "Showing Christ's love in all we do", color: "#ef4444" },
                  { icon: BookOpen, title: "Truth", description: "Living according to God's Word", color: "#3b82f6" },
                  { icon: Users, title: "Community", description: "Building strong relationships together", color: "#10b981" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start group">
                    <div 
                      className="mr-4 mt-1 transition-transform duration-300"
                      style={{ color: value.color }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Messages */}
      <section 
        id="messages" 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #f9fafb, #faf5ff)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Messages
            </h2>
            <p className="text-xl text-gray-600">
              Be encouraged by God's Word
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:shadow-2xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ background: message.gradient }}
                >
                  <Play 
                    className="h-16 w-16 text-white cursor-pointer transition-all duration-300"
                    style={{ opacity: 0.8 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{message.date}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{message.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {message.description}
                  </p>
                  <button className="group text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center cursor-pointer">
                    Watch Message
                    <ArrowRight 
                      className="ml-2 h-4 w-4 transition-transform duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0px)';
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What People Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our church family
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div 
                      className="p-8 rounded-3xl shadow-lg max-w-2xl mx-auto"
                      style={{ background: 'linear-gradient(135deg, #dbeafe, #faf5ff)' }}
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                          style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600">Church Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're new to faith or looking to grow deeper, we're here to support you on your journey with Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              <span className="flex items-center justify-center">
                Plan Your Visit
                <Calendar className="ml-2 h-5 w-5" />
              </span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center">
                Connect With Us
                <Heart className="ml-2 h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Church Street\nPort Harcourt, Rivers State\nNigeria",
                color: "#60a5fa"
              },
              {
                icon: Clock,
                title: "Service Times",
                content: "Sunday: 8:00 AM & 10:30 AM\nWednesday: 7:00 PM\nFriday: 6:00 PM",
                color: "#34d399"
              },
              {
                icon: Phone,
                title: "Connect",
                content: "info@truthenforcers.church\n+234 (0) 123-456-7890",
                color: "#a78bfa"
              }
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="mb-4 mx-auto transition-transform duration-300"
                  style={{ color: contact.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <contact.icon className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{contact.title}</h3>
                <p className="text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                  {contact.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Truth Enforcers Church. All rights reserved. | 
              <span className="text-blue-400"> Spreading God's love and truth in our community.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Add keyframe animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;