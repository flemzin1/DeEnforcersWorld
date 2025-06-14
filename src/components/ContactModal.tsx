import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <form className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Stay Updated with our latest events, messages and posts
          </h2>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" className="block text-left">Your Name</Label>
            </div>
            <TextInput id="name" type="text" placeholder="Your Name" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" className="block text-left">Your email</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@mail.com" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="tel" className="block text-left">Phone Number</Label>
            </div>
            <TextInput id="tel" type="tel" placeholder="Your Phone Number" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="General" defaultChecked />
              <Label htmlFor="General" className="block text-left">General Announcements </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="Blog" />
              <Label htmlFor="Blog" className="block text-left">Monthly Newsletter/Blog</Label>
            </div>
          </div>

          <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors items-center bg-gradient-to-br from-blue-600 via-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
