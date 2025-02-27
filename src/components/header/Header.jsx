import { useState } from "react"

export default function Header() {

    const titleMovieForm = {
        wantedTitle: ""
    }

    // useState per gestire info form
    const [formData, setFormData] = useState(titleMovieForm)

    return (
        <>

            <form className="d-flex" role="search">
                <input
                    type="text"
                    placeholder="Cerca">

                </input>
                <button>Cerca</button>
            </form>

        </>

    )
}
