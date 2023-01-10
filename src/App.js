import { useState } from "react";
import Joke from './Joke';
import Stories from './Stories'

function App() {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = event => {
      event.key === 'Enter' ?? searchQuery()
  }

  return (
    <div className="App">
      <h1>Hello Harsh</h1>
      <div className="form">
        <input 
          type="text" 
          value={userQuery} 
          onChange={updateUserQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />

    </div>
  );
}

export default App;
