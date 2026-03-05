import React from "react";
import { Loader, Error } from "@/common";
import { useGetShowsQuery } from "@/services/TMDB";
import { maxWidth } from "@/styles";
import { cn } from "@/utils/helper";

const TopIMDB = () => {
  const { data, isLoading, isError } = useGetShowsQuery({
    category: "movie",
    type: "top_rated",
    page: 1,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error="Unable to fetch top-rated movies!" />;
  }

  return (
    <div className={cn(maxWidth, "py-8")}>
      <h1 className="text-3xl font-bold mb-6">Top IMDB Ratings</h1>
      
      <p className="mb-6">Browse the highest-rated movies and TV shows according to IMDB ratings.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results?.map((movie: any) => (
          <div key={movie.id} className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">{movie.title || movie.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-lg font-bold">{movie.vote_average.toFixed(1)}</span>
              <span className="text-gray-400 text-sm">({movie.vote_count} votes)</span>
            </div>
            <p className="text-gray-300 text-sm line-clamp-3">{movie.overview}</p>
            {movie.release_date && (
              <p className="text-gray-400 text-sm mt-2">Release: {movie.release_date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopIMDB;