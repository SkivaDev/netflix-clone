import { Navbar } from "@/components/shared/Navbar";
import { SliderVideo } from "./(home)/components/SliderVideo";

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export default async function Home() {


  const session = await auth()

  if(!session || !session.user || !session.user.id) return redirect('/login')

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id
    }
  })

  const movies = await db.movie.findMany();

  const trendingMovies = await db.popularMovie.findMany({
    orderBy: {
      ranking: 'asc'
    }
  });

  

  return (
    <div className="relaive bg-zinc-900">
      <Navbar users={userNetflix}/>
      <SliderVideo />

      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
      <p>Section</p>
      <div className="h-screen"/>
    </div>
  );
}
