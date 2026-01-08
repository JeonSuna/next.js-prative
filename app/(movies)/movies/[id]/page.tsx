const MovieDetailPage = async ({ params, searchParams }) => {
  const { id } = await params;
  const params2 = await searchParams;

  console.log(id);
  console.log(params2);

  return <div>Movie : {id}</div>;
};

export default MovieDetailPage;
