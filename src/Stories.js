import React, { useEffect, useState } from 'react'


const NEWS_PROXY_API = "https://news-proxy-230704.appspot.com";

function Stories () {
    const [stories,  setStories] = useState([])

    useEffect(() => {
        fetch(`${NEWS_PROXY_API}/topstories`)
        .then(response => response.json()
        .then(json => setStories(json)))
        .catch(error => alert(`Error Occured in news-proxy-230704.appspot.com: ${error.message} `))
    }, [])

    return (
        <div className='Stories'>
            <h3>Stories</h3>
            {stories.length > 0 && stories.map(story => {
                const { id, by, url, title, time } = story
                return (
                    <div key={id}>
                        <a href={url} target="_blank">{title}</a>
                        <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Stories