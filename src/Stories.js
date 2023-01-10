import React from 'react'
import { useFetch } from './hooks';

const NEWS_PROXY_API = "https://news-proxy-230704.appspot.com";

function Stories () {

    const stories = useFetch(`${NEWS_PROXY_API}/topstories`, [])
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