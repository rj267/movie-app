import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By using MovieMax, you agree to these Terms of Service. If you do not agree, please do not use our service.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
          <p>MovieMax grants you a limited license to use this service for personal, non-commercial purposes only.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Disclaimer</h2>
          <p>MovieMax is provided "as is" without any warranties. We are not responsible for any damages arising from use of the service.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p>MovieMax shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service indicates acceptance of changes.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;