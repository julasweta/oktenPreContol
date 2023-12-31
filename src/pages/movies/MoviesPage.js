import "../../App.css";
import { MoviesList } from "../../components";

const MoviesPage = () => {
  return (
    <div className="container">
    <div className="lightning"></div>
      <div className="movies">
        <MoviesList />
      </div>
    </div>
  );
};

export { MoviesPage };
