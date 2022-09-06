import React from "react"

export default function UrlLabel(props) {
    return (
        <div key={props.urlObject.id}>
            <a href={props.urlObject.url} target="_blank" rel="noopener noreferrer">{props.urlObject.label}</a>
            <button onClick={() => props.remove(props.urlObject.id)}>remove</button>
        </div>
    )
}

