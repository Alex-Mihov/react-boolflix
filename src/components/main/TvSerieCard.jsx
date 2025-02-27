import Flag from "react-world-flags";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function TvSerieCard(props) {

    // destructoring dell'ggetto props
    const { serie } = props;

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
    const voto = Math.ceil(serie.vote_average.toFixed(0) / 2);

    return (
        <>
            <div className="section">
                <div className="card">
                    {/* titoli */}
                    <h3>Titolo: {serie.name}</h3>
                    <h4>Titolo orinale: {serie.original_name}</h4>
                    {/* immagine */}
                    <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={serie.name} />
                    <br />
                    {/* badiera in base alla lingua */}
                    <span>
                        Lingua:
                        <Flag code={getFlagCode(serie.original_language)} style={{ width: '24px', height: '16px' }} />
                    </span>
                    {/* valutazione */}
                    <h4>
                        <div>
                            {voto >= 1 ? (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
                            )}
                            {voto >= 2 ? (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
                            )}
                            {voto >= 3 ? (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
                            )}
                            {voto >= 4 ? (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
                            )}
                            {voto >= 5 ? (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffffff' }} />
                            )}
                        </div>
                    </h4>
                </div>
            </div >
        </>
    )

}
