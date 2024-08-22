import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Profile = () => {
  const [userAddress, setUserAddress] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [adCount, setAdCount] = useState(0);
  const [balance, setBalance] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  

  return (
    <motion.div 
      className="min-h-screen w-screen bg-gray-200 text-white flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="bg-white text-blue-800 rounded-lg shadow-2xl p-8 max-w-md w-full"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-3xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Advertiser Profile
        </motion.h1>
        <motion.div className="space-y-4" variants={itemVariants}>
          <ProfileItem label="Address" value={userAddress} />
          <ProfileItem label="Username" value={username} />
          <ProfileItem label="Bio" value={bio} />
          <ProfileItem label="Number of Ads" value={adCount} />
          <ProfileItem label="Balance" value={`${balance} ETH`} />
        </motion.div>
        <motion.div 
          className="mt-8 space-y-4"
          variants={itemVariants}
        >
          <ActionButton onClick={() => console.log('Edit profile')}>
            Edit Profile
          </ActionButton>
          <ActionButton onClick={() => console.log('Create new ad')}>
            Create New Ad
          </ActionButton>
          <ActionButton onClick={() => console.log('View my ads')}>
            View My Ads
          </ActionButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProfileItem = ({ label, value }) => (
  <motion.div 
    className="flex justify-between items-center"
    variants={itemVariants}
  >
    <span className="font-semibold">{label}:</span>
    <span className="text-blue-600">{value}</span>
  </motion.div>
);

const ActionButton = ({ children, onClick }) => (
  <motion.button
    className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

export default Profile;