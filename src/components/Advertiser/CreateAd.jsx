import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateAd = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    campaignName: '',
    budget: '',
    startDate: '',
    endDate: '',
    targetAudience: '',
    adFormat: '',
    adDetails: {},
  });

  const renderAdDetailsForm = () => {
    switch (formData.adFormat) {
      case 'banner':
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="imageURL"
              placeholder="Banner Image URL"
              value={formData.adDetails.imageURL || ''}
              onChange={handleAdDetailChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <input
              type="text"
              name="redirectURL"
              placeholder="Redirect URL"
              value={formData.adDetails.redirectURL || ''}
              onChange={handleAdDetailChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </motion.div>
        );
      case 'video':
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="videoURL"
              placeholder="Video URL"
              value={formData.adDetails.videoURL || ''}
              onChange={handleAdDetailChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <input
              type="text"
              name="thumbnailURL"
              placeholder="Thumbnail URL"
              value={formData.adDetails.thumbnailURL || ''}
              onChange={handleAdDetailChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </motion.div>
        );
      default:
        return null;
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleAdDetailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      adDetails: {
        ...prevState.adDetails,
        [name]: value,
      },
    }));
  };
  

  return (
    <div className="w-screen mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Create Ad Campaign
      </motion.h1>
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <button
            key={stepNumber}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 transform hover:scale-110 ${
              step >= stepNumber ? 'bg-blue-800' : 'bg-gray-300'
            }`}
            onClick={() => setStep(stepNumber)}
          >
            {stepNumber}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="campaignName"
              placeholder="Campaign Name"
              value={formData.campaignName}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="budget"
              placeholder="Budget (in tokens)"
              value={formData.budget}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={formData.endDate}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="targetAudience"
              placeholder="Target Audience"
              value={formData.targetAudience}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="adFormat"
              value={formData.adFormat}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Ad Format</option>
              <option value="banner">Banner</option>
              <option value="video">Video</option>
              {/* <option value="native">Native</option> */}
            </select>
            {renderAdDetailsForm()}
          </motion.div>
        )}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-300"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Create Campaign
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateAd;