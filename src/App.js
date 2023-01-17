import { useState } from "react";
import Joke from './Joke';
import Stories from './Stories'
import Tasks from "./Tasks";
import Gallery from './Gallery'

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [showGallery, setShowGallery] = useState(true)

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = event => {
      event.key === 'Enter' ?? searchQuery()
  }

  const toggleGallery = () => {
    setShowGallery(!showGallery)
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
      <Tasks />
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleGallery}>
          {showGallery ? "Hide" : "Show"} Gallery
        </button>
      </div>
      <hr />
      <Stories />
    </div>
  );
}

export default App;
