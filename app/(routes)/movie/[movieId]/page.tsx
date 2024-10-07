import React from "react";

const MovieIdPage = ({ params }: { params: { movieId: string } }) => {
  return <div>
    <h1>MovieIdPage</h1>
    <p>movieId: {params.movieId}</p>
  </div>;
};

export default MovieIdPage;
