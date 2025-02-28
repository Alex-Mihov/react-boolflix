import { useContext, useState } from "react"
import GlobalContext from "../../contexts/GlobalContext";

export default function Header() {


    // useState per gestire info form
    const [formData, setFormData] = useState("")

    // useContext per impostare il valore dell'input a livelo globale
    const { setQuery } = useContext(GlobalContext);

    // console.log(formData);

    // gestione aggiornamento stato
    function handleFormData(e) {
        setFormData(e.target.value);
    }


    // gestione dell'invio del form 
    function handleSubmit(e) {
        // impediamo il comportamento di default del form
        e.preventDefault();

        setQuery(formData);
    }

    return (
        <>
            <header>
                <div className="headerTitle">
                    <h1>BOOLFLIX</h1>
                </div>

                <div className="headerSearch">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="wantedTitle"
                            onChange={handleFormData}
                            value={formData}
                            placeholder="Cerca">
                        </input>

                        <button>Cerca</button>
                    </form>
                </div>
            </header>




        </>

    )
}
