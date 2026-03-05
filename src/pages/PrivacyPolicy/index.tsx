import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
          <p>MovieMax collects minimal user data. We may collect your search queries and viewing preferences to improve your experience.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Third-Party Data</h2>
          <p>MovieMax uses The Movie Database (TMDB) API to fetch movie and TV show information. Please refer to TMDB's privacy policy for their data practices.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p>We use cookies to store your preferences like theme selection. These are stored locally on your device.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>For privacy concerns, please contact us at 267.rijin.johnson@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;