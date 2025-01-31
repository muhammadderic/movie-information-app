import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import ShowMovies from "@/components/ShowMovies";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending"

  const res = await fetch(
    `https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } },
  )
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data")
  }
  const results = data.results

  return (
    <main>
      <Navbar />
      <SearchBox />
      <ShowMovies results={results} />
    </main>
  );
}
