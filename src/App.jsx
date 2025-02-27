import Main from "./components/main/Main"
import Header from "./components/header/Header";
import GlobalContext from "./contexts/GlobalContext";

// importo lo useState e lo useEffect
import { useState, useEffect } from "react";
// importo axios
import axios from "axios";

function App() {




  // stato per la query
  const [query, setQuery] = useState("");

  // utilizzo dello useState per gestire i dati dei film
  const [movies, setMovies] = useState([]);

  ;

  function fetchMovies(query) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a656c9d2486eeeb806449b024d6cb0c8&query=${query}`)
      .then(res => {

        setMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => { fetchMovies(query) }, [query]);


  // utilizzo dello useState per gestire i dati delle serie
  const [series, setSeries] = useState([])

  function fetchSeries(query) {
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=a656c9d2486eeeb806449b024d6cb0c8&query=${query}`)
      .then(res => {

        setSeries(res.data.results);
        // console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => { fetchSeries(query) }, [query]);

  return (
    <>
      {/* utilizzo GlobalCntext.Provider per redndere i dati della chiamata a livello globale */}
      <GlobalContext.Provider value={{ movies, series, setQuery }}>
        <Header />
        <Main />
      </GlobalContext.Provider>


    </>
  )
}

export default App
