import React, { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">De Enforcers World</a>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button onClick={() => toggleDropdown('about')} className="hover:text-blue-600">
              About Us
            </button>
            {openDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded w-48 z-50">
                <DropdownLink href="/about" close={closeAll}>About</DropdownLink>
                <DropdownLink href="/founder" close={closeAll}>Our Founder</DropdownLink>
                <DropdownLink href="/organograms" close={closeAll}>Organograms</DropdownLink>
                <DropdownLink href="/about?tab=Ministries" close={closeAll}>Ministries</DropdownLink>
                <DropdownLink href="/about?tab=Service Units" close={closeAll}>Service Units</DropdownLink>
                <DropdownLink href="/about?tab=Covenant Partners" close={closeAll}>Covenant Partners</DropdownLink>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown('programs')} className="hover:text-blue-600">
              Programs
            </button>
            {openDropdown === 'programs' && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded w-48 z-50">
                <DropdownLink href="/events" close={closeAll}>Our Events</DropdownLink>
                <DropdownLink href="/outreach" close={closeAll}>Outreach</DropdownLink>
                <DropdownLink href="/blogs" close={closeAll}>Blogs</DropdownLink>
              </div>
            )}
          </div>

          <a href="/messages" onClick={closeAll} className="hover:text-blue-600">Messages</a>
          <a href="/satellite-centers" onClick={closeAll} className="hover:text-blue-600">Satellite Centers</a>
          <a href="/give" onClick={closeAll} className="hover:text-blue-600">Kingdom Agendas</a>
        </div>
      </div>

      {/* Mobile dropdowns */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <MobileDropdown label="About Us" isOpen={openDropdown === 'about'} toggle={() => toggleDropdown('about')}>
            <DropdownLink href="/about" close={closeAll}>About</DropdownLink>
            <DropdownLink href="/founder" close={closeAll}>Our Founder</DropdownLink>
            <DropdownLink href="/organograms" close={closeAll}>Organograms</DropdownLink>
            <DropdownLink href="/about?tab=Ministries" close={closeAll}>Ministries</DropdownLink>
            <DropdownLink href="/about?tab=Service Units" close={closeAll}>Service Units</DropdownLink>
            <DropdownLink href="/about?tab=Covenant Partners" close={closeAll}>Covenant Partners</DropdownLink>
          </MobileDropdown>

          <MobileDropdown label="Programs" isOpen={openDropdown === 'programs'} toggle={() => toggleDropdown('programs')}>
            <DropdownLink href="/events" close={closeAll}>Our Events</DropdownLink>
            <DropdownLink href="/outreach" close={closeAll}>Outreach</DropdownLink>
            <DropdownLink href="/blogs" close={closeAll}>Blogs</DropdownLink>
          </MobileDropdown>

          <a href="/messages" onClick={closeAll} className="block hover:text-blue-600">Messages</a>
          <a href="/satellite-centers" onClick={closeAll} className="block hover:text-blue-600">Satellite Centers</a>
          <a href="/give" onClick={closeAll} className="block hover:text-blue-600">Kingdom Agendas</a>
        </div>
      )}
    </nav>
  );
};

// Reusable link for dropdowns
const DropdownLink: React.FC<{ href: string; close: () => void; children: React.ReactNode }> = ({ href, close, children }) => (
  <a
    href={href}
    onClick={close}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {children}
  </a>
);

// Mobile dropdown wrapper
const MobileDropdown: React.FC<{
  label: string;
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}> = ({ label, isOpen, toggle, children }) => (
  <div>
    <button onClick={toggle} className="w-full text-left py-2 hover:text-blue-600 font-medium">
      {label}
    </button>
    {isOpen && <div className="pl-4 space-y-1">{children}</div>}
  </div>
);

export default Navbar;
