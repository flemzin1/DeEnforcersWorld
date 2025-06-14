import React, { useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const dropdownRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Mobile menu toggle functionality
    const toggleMobileMenu = () => {
      const mobileMenu = mobileMenuRef.current;
      const button = mobileMenuButtonRef.current;
      
      if (mobileMenu && button) {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
        } else {
          mobileMenu.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      }
    };

    // Dropdown toggle functionality
    const toggleDropdown = (dropdownId: string) => {
      const dropdown = dropdownRefs.current[dropdownId];
      if (dropdown) {
        const isHidden = dropdown.classList.contains('hidden');
        
        // Close all other dropdowns first
        Object.entries(dropdownRefs.current).forEach(([id, dd]) => {
          if (dd && id !== dropdownId) {
            dd.classList.add('hidden');
          }
        });

        if (isHidden) {
          dropdown.classList.remove('hidden');
        } else {
          dropdown.classList.add('hidden');
        }
      }
    };

    // Event handlers
    const handleMobileMenuClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    };

    const handleAboutClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown('dropdownNavbarAbout');
    };

    const handleProgramsClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown('dropdownNavbarPrograms');
    };

    // Add event listeners
    const mobileButton = mobileMenuButtonRef.current;
    const aboutButton = document.getElementById('dropdownNavbarAboutButton');
    const programsButton = document.getElementById('dropdownNavbarProgramsButton');

    if (mobileButton) {
      mobileButton.addEventListener('click', handleMobileMenuClick);
    }

    if (aboutButton) {
      aboutButton.addEventListener('click', handleAboutClick);
    }

    if (programsButton) {
      programsButton.addEventListener('click', handleProgramsClick);
    }

    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Close mobile menu if clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target) && 
          mobileMenuButtonRef.current && !mobileMenuButtonRef.current.contains(target)) {
        mobileMenuRef.current.classList.add('hidden');
        if (mobileMenuButtonRef.current) {
          mobileMenuButtonRef.current.setAttribute('aria-expanded', 'false');
        }
      }

      // Close dropdowns if clicking outside
      Object.entries(dropdownRefs.current).forEach(([id, dropdown]) => {
        const buttonId = id.replace('dropdownNavbar', 'dropdownNavbar') + 'Button';
        const button = document.getElementById(buttonId);
        if (dropdown && !dropdown.contains(target) && button && !button.contains(target)) {
          dropdown.classList.add('hidden');
        }
      });
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      if (mobileButton) {
        mobileButton.removeEventListener('click', handleMobileMenuClick);
      }
      if (aboutButton) {
        aboutButton.removeEventListener('click', handleAboutClick);
      }
      if (programsButton) {
        programsButton.removeEventListener('click', handleProgramsClick);
      }
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Set refs for dropdowns
  const setDropdownRef = (id: string) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[id] = el;
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-white-900 dark:border-gray-700 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="Truth Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">De Enforcers World</span>
        </a>
        
        <button
          ref={mobileMenuButtonRef}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        <div 
          ref={mobileMenuRef}
          className="hidden w-full md:block md:w-auto" 
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-900 md:dark:bg-white-900 dark:border-white-700">
            <li>
              <a 
                href="/" 
                className="block py-2 px-3 text-gray rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
              >
                Home
              </a>
            </li>
            
            <li className="relative">
              <button
                id="dropdownNavbarAboutButton"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:focus:text-gray dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                About Us
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              
              <div
                ref={setDropdownRef('dropdownNavbarAbout')}
                id="dropdownNavbarAbout"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-1"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li><a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a></li>
                  <li><a href="/founder" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Founder</a></li>
                  <li><a href="/organograms" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Organograms</a></li>
                  <li><a href="/about?tab=Ministries" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ministries</a></li>
                  <li><a href="/about?tab=Service Units" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Service Units</a></li>
                  <li><a href="/about?tab=Covenant Partners" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Covenant Partners</a></li>
                </ul>
              </div>
            </li>
            
            <li className="relative">
              <button
                id="dropdownNavbarProgramsButton"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:focus:text-gray dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Programs
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              
              <div
                ref={setDropdownRef('dropdownNavbarPrograms')}
                id="dropdownNavbarPrograms"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 mt-1"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li><a href="/events" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Events</a></li>
                  <li><a href="/outreach" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Outreach</a></li>
                  <li><a href="/blogs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blogs</a></li>
                </ul>
              </div>
            </li>
            
            <li>
              <a href="/messages" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Messages</a>
            </li>
            
            <li>
              <a href="/satellite-centers" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Satellite Centers</a>
            </li>
            
            <li>
              <a href="/give" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Kingdom Agendas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;