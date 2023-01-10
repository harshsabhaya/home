import React from "react";
import { useFetch } from "./hooks";

const API_ADDRESS = "https://official-joke-api.appspot.com"
function Joke () {
    const { setup, punchline } = useFetch(`${API_ADDRESS}/jokes/random`, {})
    return (
        <div>
            <h3>Joke of the Session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke