import ShowMovies from "@/components/ShowMovies";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 20000 } },
  )
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data")
  }
  const results = data.results

  return (
    <main>
      <ShowMovies results={results} />
    </main>
  );
}
