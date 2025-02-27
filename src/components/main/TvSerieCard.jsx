import Flag from "react-world-flags";

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

    return (
        <>
            <div className="section">
                <div className="card">
                    <h3>Titolo: {serie.name}</h3>
                    <h4>Titolo orinale: {serie.original_name}</h4>
                    <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={serie.name} />
                    <br />
                    <span>
                        Lingua:
                        <Flag code={getFlagCode(serie.original_language)} style={{ width: '24px', height: '16px' }} />
                    </span>
                    <h4>Valutazione: {serie.vote_average.toFixed(0)}</h4>
                </div>
            </div>
        </>
    )

}
