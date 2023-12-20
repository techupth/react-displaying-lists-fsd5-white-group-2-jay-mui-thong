import movies from "/src/data/movies";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function MovieList() {
  return (
    <section
      className="movie-list-section"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;
      `}
    >
      <h1
        css={css`
          font-size: 40px;
          font-family: "Kanit", sans-serif;
          color: black;
          text-align: center;
          font-weight: 400;
          margin-top: 70px;
        `}
      >
        Movie List Section
      </h1>
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            css={css`
              width: 510px;
              height: 250px;
              background-color: white;
              border: none;
              border-radius: 10px;
              box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
              color: #181818;
              font-size: 20px;
              font-family: "Kanit", sans-serif;
              position: relative;
            `}
          >
            <div className="movie-img">
              <img
                src={item.image}
                alt={item.title}
                css={css`
                  width: 102px;
                  height: 100px;
                  border-radius: 10px;
                  object-fit: cover;
                  position: absolute;
                  margin: 18px;
                `}
              />
            </div>
            <div
              className="movie-details"
              css={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: absolute;
                margin-left: 135px;
                margin-top: 17px;
                gap: 13px;
              `}
            >
              <span>Title: {item.title}</span>
              <span>Year: {item.year}</span>
              <span>Runtime: {item.runtime}</span>
              <div
                className="genres-movies-list"
                css={css`
                  display: flex;
                  flex-direction: row;
                `}
              >
                Genres:
                {item.genres.map((genre, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        width: 90px;
                        height: 27px;
                        background-color: #eaac99;
                        border-radius: 10px;
                        font-size: 16px;
                        text-align: center;
                        margin-left: 7px;
                      `}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
              <span>IMDB Ratings: {item.imdbRating}</span>
              <span>IMDB Votes: {item.imdbVotes}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MovieList;
