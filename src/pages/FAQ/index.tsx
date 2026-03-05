import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Is MovieMax free?</h2>
          <p>Yes, MovieMax is completely free to use. You can browse, search, and watch trailers without any subscription.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">What movies are available?</h2>
          <p>MovieMax provides access to thousands of movies and TV shows from The Movie Database (TMDB). Our catalog is constantly updated.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Can I watch full movies?</h2>
          <p>MovieMax shows trailers and information about movies. For full movies, you'll need to visit streaming services like Netflix, Amazon Prime, etc.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I search for a movie?</h2>
          <p>Use the search feature in the Catalog page to find any movie or TV show by title.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;