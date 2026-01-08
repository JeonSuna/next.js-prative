import Link from "next/link";

export default function Movie({ movie }) {
  return (
    <li
      key={movie.id}
      className=" hover:scale-105  rounded-xl items-center justify-center text-center  bg-gray-200 "
    >
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="relative z-10 rounded-t-xl"
      />
      <Link prefetch href={`/movies/${movie.id}`} className="">
        {movie.title}
      </Link>
    </li>
  );
}
