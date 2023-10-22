import { getMovie } from "@/services/movie";
import React from "react";
import { useState, useCallback, useEffect } from "react";

export default function movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = useCallback(async () => {
    const data = await getMovie();
    setMovieList(data);
  }, [getMovie]);

  useEffect(() => {
    getMovieList();
  }, []);
  return <div>movie</div>;
}
