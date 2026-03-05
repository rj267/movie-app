import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-2">Name: Rijin Johnson</p>
      <p className="mb-2">Creator of this website</p>
      <p className="mb-2">
        MovieMax is a demo project built using React, Tailwind CSS, and TMDB API
        to fetch movie information. The application allows users to search and
        view details about their favorite movies and TV shows.
      </p>
      <p>Thank you for visiting!</p>
    </div>
  );
};

export default About;