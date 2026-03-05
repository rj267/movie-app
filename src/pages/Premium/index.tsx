import React from "react";

const Premium = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Premium</h1>
      
      <p className="mb-4">Upgrade to Premium for an ad-free experience and exclusive features!</p>
      
      <div className="space-y-4 mt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Premium Features</h2>
          <ul className="list-disc list-inside">
            <li>Ad-free browsing</li>
            <li>Save favorite movies</li>
            <li>Personalized recommendations</li>
            <li>Priority support</li>
          </ul>
        </div>
        
        <div>
          <p>Premium subscription is coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;