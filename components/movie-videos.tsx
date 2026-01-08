import { API_URL } from "../app/(home)/page";

/*비디오 함수*/
async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

//UI만 갖기
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
