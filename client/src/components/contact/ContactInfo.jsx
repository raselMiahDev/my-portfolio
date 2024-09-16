import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className=" p-8">
      {/* Address */}
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt size={30} className="text-blue-500 mr-4" />
        <div>
          <h3 className="text-lg font-medium text-gray-700">Address</h3>
          <p className="text-gray-600">
            Tangail, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex items-center mb-4">
        <FaPhoneAlt size={30} className="text-blue-500 mr-4" />
        <div>
          <h3 className="text-lg font-medium text-gray-700">Phone Number</h3>
          <p className="text-gray-600">+8801715972211</p>
        </div>
      </div>

      {/* Email Address */}
      <div className="flex items-center mb-4">
        <FaEnvelope size={30} className="text-blue-500 mr-4" />
        <div>
          <h3 className="text-lg font-medium text-gray-700">Email</h3>
          <p className="text-gray-600">raselmiahdev@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
