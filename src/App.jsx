import Main from "./components/main/Main"
import Header from "./components/header/Header";
import GlobalContext from "./contexts/GlobalContext";

// importo lo useState e lo useEffect
import { useState, useEffect } from "react";
// importo axios
import axios from "axios";

function App() {

  // utilizzo dello useState per gestire i dati
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=a656c9d2486eeeb806449b024d6cb0c8&query=ritorno+al+futuro")
      .then(res => {

        setMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }

  useEffect(fetchMovies, []);



  return (
    <>
      {/* utilizzo GlobalCntext.Provider per redndere i dati della chiamata a livello globale */}
      <GlobalContext.Provider value={{ movies }}>
        <Header />
        <Main />
      </GlobalContext.Provider>


    </>
  )
}

export default App
