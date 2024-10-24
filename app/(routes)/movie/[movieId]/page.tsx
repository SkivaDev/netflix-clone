import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import { NavbarFilm } from "./components/NavbarFilm";
import { MovieVideo } from "./components/MovieVideo";

const MovieIdPage = async ({ params }: { params: { movieId: string } }) => {
  const movieFilm = await db.movie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  const popularMovie = await db.popularMovie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  if (!movieFilm && !popularMovie) {
    redirect("/");
  }

  const currentMovie = movieFilm
    ? movieFilm.movieVideo
    : popularMovie
    ? popularMovie.movieVideo
    : "";

  const titleMovie = movieFilm
    ? movieFilm.title
    : popularMovie
    ? popularMovie.title
    : "";

  return <div className="h-screen w-full bg-black">
    <NavbarFilm titleMovie={titleMovie} />

    <MovieVideo currentMovie={currentMovie} />
  </div>;
};

export default MovieIdPage;
