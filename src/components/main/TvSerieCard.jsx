
export default function TvSerieCard(props) {

    // destructoring dell'ggetto props
    const { serie } = props;

    return (
        <>
            <div className="section">
                <div className="card">
                    <h3>{serie.name}</h3>
                    <h4>{serie.original_name}</h4>
                    <span>{serie.original_language}</span>
                    <h4>{serie.vote_average}</h4>
                </div>
            </div>
        </>
    )

}
