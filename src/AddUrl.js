
import React from "react"
import { nanoid } from "nanoid"

import styles from "./AddUrl.module.css"


export default function Addurl(props) {
    const [urlToAdd, setUrlToAdd] = React.useState({ label: "", url: "" })

    function packUrlAndReset() {
        let packedUrl = {
            ...urlToAdd,
            id: nanoid(),
        }
        if (packedUrl.url.slice(0, 8) !== "https://") {
            packedUrl.url = "https://" + packedUrl.url
        }
        setUrlToAdd({ label: "", url: "" })
        props.handle(packedUrl)
    }

    return (
        <div className={styles.addUrlContainer}>
            <div className={styles.addurl}>
                <label className={styles.label} htmlFor="urlToTrack">Add url to track : </label>
                <input
                    className={styles.input}
                    type="text"
                    id="urlToTrack"
                    name="urlToTrack"
                    value={urlToAdd.url}
                    onChange={event => setUrlToAdd(old => {
                        return {
                            ...old,
                            url: event.target.value
                        }
                    })}
                />
            </div>
            <div className={styles.addurl}>
                <label className={styles.label} htmlFor="urlLabel">Label : </label>
                <input
                    className={styles.input}
                    type="text"
                    id="urlLabel"
                    name="urlLabel"
                    value={urlToAdd.label}
                    onChange={event => setUrlToAdd(old => {
                        return {
                            ...old,
                            label: event.target.value
                        }
                    })}
                />
            </div>
            <button className={styles.button} onClick={packUrlAndReset}>Add url</button>
        </div>
    )
}