// impoto il contesto globale  
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

// importo il componente card 
import MovieCard from "./MovieCard"


export default function FilmComponent() {

    // destrutturo l'esecuzione del useContext
    const { movies } = useContext(GlobalContext)

    return (
        <>
            <div className="section">
                {/* titolo sezione */}
                <h1 className="titolo">Risultati per i Film</h1>


                {/* ciclo map per stampare tutti i film */}
                <div className="cardSection">
                    {
                        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>
            </div>

        </>
    )
}
