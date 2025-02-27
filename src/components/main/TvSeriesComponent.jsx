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
            <div>
                {/* titolo sezione */}
                <h1 className="titolo">Risultati per i le Serie</h1>


                {/* ciclo map per stampare tutti i film */}
                <div>
                    {
                        series.map(serie => <TvSerieCard key={serie.id} serie={serie} />)
                    }
                </div>
            </div>

        </>
    )
}
