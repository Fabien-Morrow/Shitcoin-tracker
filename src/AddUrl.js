
import React from "react"
import { nanoid } from "nanoid"

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
        <div>
            <div>
                <label htmlFor="urlToTrack">Add url to track</label>
                <input
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
                <label htmlFor="urlLabel">Label :</label>
                <input
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
                <button onClick={packUrlAndReset}>Add</button>
            </div>
        </div>
    )
}