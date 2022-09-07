import React from "react"

import styles from "./UrlLabel.module.css"

export default function UrlLabel(props) {
    return (
        <div
            key={props.urlObject.id}
            className={props.urlObject.isReachable ? styles.reachable : styles.notReachable}
        >
            <a href={props.urlObject.url} target="_blank" rel="noopener noreferrer">{props.urlObject.label}</a>
            <button onClick={() => props.remove(props.urlObject.id)}>remove</button>
        </div>
    )
}

