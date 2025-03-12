import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    { id: 1, title: "Wicked", release_date: "2024" },
    { id: 2, title: "The Matrix", release_date: "1999" },
    { id: 3, title: "Up", release_date: "2009" },
    { id: 4, title: "Terminator", release_date: "1984" },
  ];

  const handleSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
