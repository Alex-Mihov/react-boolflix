// impoto il contesto globale  
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

// importo il componente TvSerieCard
import TvSerieCard from "./TvSerieCard";

export default function TvSeriesComponent() {

    // destrutturo l'esecuzione del useContext
    const { series } = useContext(GlobalContext)

    return (
        <>

            <div className="section">
                {/* titolo sezione */}
                {series.length === 0 ? <h2></h2> : <h2 className="titoloRicerca">Risultati per Serie Tv</h2>}


                {/* ciclo map per stampare tutti i film */}
                <div className="cardSection">
                    {
                        series.map(serie => <TvSerieCard key={serie.id} serie={serie} />)
                    }
                </div>
            </div>

        </>
    )
}
