

export default function MovieCard(props) {

    // destructoring dell'ggetto props
    const { movie } = props;

    return (
        <>
            <div className="section">
                {/* card */}
                <div className="card">
                    <h3>Titolo: {movie.title}</h3>
                    <h4>Titolo orinale: {movie.original_title}</h4>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt={movie.name} />
                    <br />
                    <span>Lingua: {movie.original_language}</span>
                    <h4>Valutazione: {movie.vote_average.toFixed(0)}</h4>
                </div>
            </div>
        </>
    )
}

