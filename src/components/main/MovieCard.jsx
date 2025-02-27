

export default function MovieCard(props) {

    // destructoring dell'ggetto props
    const { movie } = props;

    return (
        <>
            <div className="section">
                {/* card */}
                <div className="card">
                    <h3>{movie.title}</h3>
                    <h4>{movie.original_title}</h4>
                    <span>{movie.original_language}</span>
                    <h4>{movie.vote_average}</h4>
                </div>
            </div>
        </>
    )
}

