import {
  hamburger_url,
  logo_url,
  suggestions_api,
  user_Icon,
} from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toogleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { addSuggestion } from "./utils/searchCacheSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cacheItems = useSelector((store) => store.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheItems[searchQuery]) {
        setSuggestions(cacheItems[searchQuery]);
      } else {
        FetchSuggestionApi();
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const FetchSuggestionApi = async () => {
    const data = await fetch(suggestions_api + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    console.log(json[1]);
    dispatch(addSuggestion({ [searchQuery]: json[1] }));
  };
  const handleClick = () => {
    //toogle the state
    dispatch(toogleMenu());
  };
  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex">
        <img
          onClick={handleClick}
          className="w-10 p-2"
          src={hamburger_url}
        ></img>
        <Link to="/">
          <img className="w-20 h-30" src={logo_url}></img>
        </Link>
      </div>
      <div>
        <div>
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="w-96 h-10 border border-gray-800 bg-gray-300 rounded-l-full"
          ></input>
          <button className="h-10 border border-gray-800 rounded-r-full px-4">
            🔎
          </button>
        </div>
        <div className="">
          {suggestions.map((suggestion) => (
            <div className="w-96 border border-gray-500 rounded-b-lg">
              {suggestion}
            </div>
          ))}
        </div>
      </div>
      <img className="w-10" src={user_Icon}></img>
    </div>
  );
};

export default Header;
