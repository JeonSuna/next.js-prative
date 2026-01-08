import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
//movie id로 data 가져오기
async function getMovie(id: string) {
  console.log(`fetching data  ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`${API_URL}/${id}`);

  const data = await res.json();
  return data;
}

//movie 예고편 가져오기

async function getVideos(id: string) {
  console.log(`fetching data videos ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`${API_URL}/${id}/videos`);

  const videoData = await res.json();
  return videoData;
}

//movie id
const MovieDetailPage = async ({ params, searchParams }) => {
  const { id } = await params;
  //   const params2 = await searchParams;

  /*
   const movie = await getMovie(id);
   const video = await getVideos(id);  // videos와 movie를 두개 다 가져오려면 시간이 걸림 => promise All 사용
*/
  //   console.log("---------------------");
  //   console.log("start fetching");
  //   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  /*suspense사용=> 2가지 동시에 fetch가능 => 하나의 요청이 완료되면 component가 render됨.*/

  return (
    <div>
      <Suspense fallback={<h1>movie detil loading fallback</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>movie viedos loading fallback</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
