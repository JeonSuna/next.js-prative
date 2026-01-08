import Link from "next/link";

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
        {data.map((movie) => (
          <li
            key={movie.id}
            className=" hover:scale-105 h-20 rounded-xl items-center justify-center text-center  bg-gray-200 "
          >
            <Link href={`/movies/${movie.id}`} className="">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
