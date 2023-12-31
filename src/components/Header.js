import React, { useEffect, useState } from "react";
import { apiService } from "../services/ApiService";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { GenreBadge } from "./GenreBadge";

const Header = ({ activeGenre, setActiveGenre, page, setPage }) => {
  const [genres, setGenres] = useState();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const axiosGet = async () => {
      setGenres(await apiService.genres());
    };
    axiosGet();
  }, []);

  const resetAll = () => {
    setActiveGenre(null);
    setPage(1);
    setShowMenu(false);
    setActiveBtn('all');
  };

  const [activeBtn, setActiveBtn] = useState();
  const onAll = () => {
    setActiveGenre(null);
    setActiveBtn('all');
  }

  const onGenres = () => {
    setShowMenu(!showMenu);
    setPage(1);
  }

  return (
    <div className="header">
      <Link className="menu-button home-btn" to={`/`} onClick={resetAll}>
        The Movies
      </Link>
      <Link to={'/'} className="menu-button" onClick={onGenres}>
        Genres
      </Link>
      {showMenu && (
        <div className="genres">
          <Link className={activeBtn === 'all'? 'red' : 'genre'} onClick={onAll} to={`/`}>
            All
          </Link>
          {genres &&
            genres.map((genre) => (
              <GenreBadge
                genre={genre}
                key={genre.id}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}
              />
            ))}
        </div>
      )}
      <Link to={'/userinfo'} className="menu-button" onClick={()=>setShowMenu(false)} >UserInfo</Link>
    </div>
  );
};

export { Header };
