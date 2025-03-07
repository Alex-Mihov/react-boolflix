import Flag from "react-world-flags";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function MovieCard(props) {

    // destructoring dell'ggetto props
    const { movie } = props;

    // Funzione per mappare il codice della lingua al codice del paese per la bandiera
    const getFlagCode = (languageCode) => {
        // Mappa dei codici lingua ai codici dei paesi
        const languageToCountry = {
            'en': 'US',
            'it': 'IT',
            'fr': 'FR',
            'es': 'ES',
            'de': 'DE',
            'pt': 'PT',
        };

        // Se non troviamo la lingua, ritorniamo il codice 'US' di default
        return languageToCountry[languageCode] || 'US';
    }

    // salvo il valore del voto in una costante 
    const voto = Math.ceil(movie.vote_average.toFixed(0) / 2);
    // funzione per generare le stelle
    const valutazioneFinale = (valutazione) => {

        // creazione costante vuota per le stelle 
        const stelle = [];

        // ciclo for per fare il push nella costante stelle
        for (let i = 1; i <= 5; i++) {
            stelle.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i <= valutazione ? '#FFD43B' : '#ffffff' }}
                />
            );
        }
        return stelle;
    }

    return (
        <>
            <div className="containerCard">
                <div className="card">
                    <div className="card-image">
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    </div>

                    <div className="card-content">
                        {/* titoli */}
                        <h3>Titolo: {movie.title}</h3>
                        <h4>Titolo orinale: {movie.original_title}</h4>
                        <br />
                        {/* badiera in base alla lingua */}
                        <span>
                            Lingua:
                            <Flag code={getFlagCode(movie.original_language)} style={{ width: '24px', height: '16px' }} />
                        </span>
                        {/* valutazione */}
                        <h4>
                            <div>
                                {valutazioneFinale(voto)}
                            </div>
                        </h4>

                        <p>
                            Overview:
                            <br />{movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

