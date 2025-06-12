import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const giveOptions = [
  {
    id: 'offering',
    title: 'Offering',
    details: 'You can give your offering to the church through the account below.',
    account: {
      name: import.meta.env.VITE_OFFERING_NAME,
      number: import.meta.env.VITE_OFFERING_NUMBER,
      bank: import.meta.env.VITE_OFFERING_BANK
    }
  },
  {
    id: 'donation',
    title: 'Donation',
    details: 'Support our ministry and outreaches through your donations.',
    account: {
      name: import.meta.env.VITE_DONATION_NAME,
      number: import.meta.env.VITE_DONATION_NUMBER,
      bank: import.meta.env.VITE_DONATION_BANK
    }
  },
  {
    id: 'tithes',
    title: 'Tithes',
    details: 'Give your 10% to honor the Lord and support His work.',
    account: {
      name: import.meta.env.VITE_TITHES_NAME,
      number: import.meta.env.VITE_TITHES_NUMBER,
      bank: import.meta.env.VITE_TITHES_BANK
    }
  },
  {
    id: 'seed',
    title: 'Seed Faith',
    details: 'Plant a seed of faith and trust God for a harvest.',
    account: {
      name: import.meta.env.VITE_SEED_NAME,
      number: import.meta.env.VITE_SEED_NUMBER,
      bank: import.meta.env.VITE_SEED_BANK
    }
  }
];

const Give: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('offering');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(prev => (prev === id ? '' : id));
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Give</h2>
      <div className="space-y-4">
        {giveOptions.map(item => (
          <div key={item.id} className="border rounded-lg shadow overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
            >
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="text-2xl font-bold transform duration-200">
                {openItem === item.id ? '×' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {openItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="p-4">
                    <p className="text-gray-700 mb-2">{item.details}</p>
                    <div className="bg-gray-100 p-4 rounded space-y-2">
                      <p><strong>Account Name:</strong> {item.account.name}</p>
                      <div className="flex items-center justify-between">
                        <p><strong>Account Number:</strong> {item.account.number}</p>
                        <button
                          onClick={() => copyToClipboard(item.account.number, item.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          {copiedId === item.id ? <Check size={16} /> : <ClipboardCopy size={16} />}
                          {copiedId === item.id ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <p><strong>Bank:</strong> {item.account.bank}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Give;
