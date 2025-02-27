// impoto il contesto globale  
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

// importo il componente card 
import MovieCard from "./MovieCard"


export default function FilmComponent() {

    // destrutturo  l'esecuzione del useContext
    const { movies } = useContext(GlobalContext)

    return (
        <>
            {/* ciclo map per stampare tutti i film */}
            <div>
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </>
    )
}
