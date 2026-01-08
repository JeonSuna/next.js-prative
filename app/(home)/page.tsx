import Link from "next/link";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovieData = async () => {
  console.log("백엔드에서 발생");
  const res = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });
  const movieData = await res.json();
  return movieData;
};

export default async function Partice() {
  const data = await getMovieData();
  console.log(data);
  return (
    <div className="flex  flex-col items-center justify-center ">
      <p className="mb-20 mt-2 font-bold">마음에 드는 영화를 골라보세요💖</p>
      <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-center justify-center ">
        {data.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </ul>
    </div>
  );
}
