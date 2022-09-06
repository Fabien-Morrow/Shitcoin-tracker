import React from "react"
import app from "./app.module.css"

import UrlLabel from "./UrlLabel"

function App() {
    const [trackedUrls, setTrackedUrls] = React.useState([])

    console.log(trackedUrls.length)
    const wrappedUrls = trackedUrls.length
        ?
        trackedUrls.map(urlObject => {
            console.log("im in map", trackedUrls.length)
            return (<UrlLabel urlObject={urlObject} />)
        })
        :
        <div></div>

    function removeUrlToTrack(urlIdToRemove) {
        setTrackedUrls(prevUrls => prevUrls.filter(urlObject => urlObject.id !== urlIdToRemove))
    }

    React.useEffect(() => {
        console.log(trackedUrls)
        // load localstorage if needed
        if (trackedUrls.length === 0) {
            if (JSON.parse(localStorage.getItem("trackedUrls"))) {
                setTrackedUrls(JSON.parse(localStorage.getItem("trackedUrls")))
            }
        } else {
            // trackedUrls has changed, store it to localstorage
            localStorage.setItem("trackedUrls", JSON.stringify(trackedUrls))
        }
    }, [trackedUrls])

    return (
        <div className={app.appContainer}>
            <div>
                {wrappedUrls}
            </div>

        </div>
    );
}

export default App;
