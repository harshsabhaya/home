import React, { useEffect, useState} from "react";

const API_ADDRESS = "https://official-joke-api.appspot.com"
function Joke () {
    const [joke, setJoke] = useState({})

    useEffect(() => {
        fetch(`${API_ADDRESS}/jokes/random`)
            .then(response => response.json())
            .then(json => setJoke(json))
            .catch(error => alert(`Error Occured in official-joke-api.appspot.com: ${error.message} `))
    }, [])

    const { setup, punchline } = joke 
    return (
        <div>
            <h3>Joke of the Session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke