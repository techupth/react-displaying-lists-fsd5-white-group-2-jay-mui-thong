import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <span>Movie Lists Section</span>
      <section className="movie-list-section">
        {movies.map((item, index) => {
          return (
            <div className="box-list-movies" key={index}>
              <img
                className="movies-images"
                src={item.image}
                alt="movies-image"
              />
              <div className="infomation-movies">
                <span>Title: {item.title}</span>
                <span>Year: {item.year}</span>
                <span>Runtime: {item.runtime}</span>
                <div className="genres-moives-list">
                  Genres:
                  {item.genres.map((genre, index) => (
                    <div className="genres-moives-catagory" key={index}>
                      {genre}
                    </div>
                  ))}
                </div>
                <span>IMDB Ratings: {item.imdbRating}</span>
                <span>IMDB Votes: {item.imdbVotes}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
