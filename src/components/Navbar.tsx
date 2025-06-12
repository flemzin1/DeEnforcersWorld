import React, { useState } from 'react';

const Navbar: React.FC = () => {

  return (

    <nav className="bg-white border-gray-200 dark:bg-white-900 dark:border-gray-700 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="Truth Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-800">De Enforcers World</span>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
            <li>
              <a href="/" className="block py-2 px-3 text-gray rounded-sm md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 dark:bg-gray-600 hover:text-blue-600 md:dark:bg-transparent transition-colors" aria-current="page">Home</a>
            </li>
            <li>
              <button id="dropdownNavbarAboutButton" data-dropdown-toggle="dropdownNavbarAbout" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray md:dark:hover:text-blue-500 dark:focus:text-gray dark:border-gray-700 dark:hover:bg-gray-300 md:dark:hover:bg-transparent">About Us <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              {/* Header */}
              <div id="dropdownNavbarAbout" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                  </li>
                  <li>
                    <a href="/founder" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Founder</a>
                  </li>
                  <li>
                    <a href="/organograms" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Organograms</a>
                  </li>
                  <a href="/about?tab=Ministries" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" > 
                    Ministries
                  </a>
                  <a href="/about?tab=Service Units" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" > 
                    Service Units
                  </a>
                  <a href="/about?tab=Covenant Partners" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" > 
                    Covenant Partners
                  </a>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarProgramsButton" data-dropdown-toggle="dropdownNavbarPrograms" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray md:dark:hover:text-blue-500 dark:focus:text-gray dark:border-gray-700 dark:hover:bg-gray-300 md:dark:hover:bg-transparent">Programs <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              {/* Header */}
              <div id="dropdownNavbarPrograms" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/events" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Events</a>
                  </li>
                  <li>
                    <a href="/outreach" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Outreach</a>
                  </li>
                  <li>
                    <a href="/blogs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blogs</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/messages" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-blue md:dark:hover:bg-transparent">Messages</a>
            </li>
            <li>
              <a href="/satellite-centers" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-blue md:dark:hover:bg-transparent">Satellite Centers</a>
            </li>
            <li>
              <a href="/give" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-blue md:dark:hover:bg-transparent">Kingdom Agendas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;