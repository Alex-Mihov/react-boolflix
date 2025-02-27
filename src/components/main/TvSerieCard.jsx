
export default function TvSerieCard(props) {

    // destructoring dell'ggetto props
    const { serie } = props;

    return (
        <>
            <div className="section">
                <div className="card">
                    <h3>Titolo: {serie.name}</h3>
                    <h4>Titolo orinale: {serie.original_name}</h4>
                    <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={serie.name} />
                    <br />
                    <span>Lingua: {serie.original_language}</span>
                    <h4>Valutazione: {serie.vote_average.toFixed(0)}</h4>
                </div>
            </div>
        </>
    )

}
