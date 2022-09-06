import React from "react"
import app from "./app.module.css"

import AddUrl from "./AddUrl"
import UrlLabel from "./UrlLabel"
import CheckUrls from "./CheckUrls"

function App() {
  const [trackedUrls, setTrackedUrls] = React.useState([])
  const [firstTime, setFirstTime] = React.useState()

  const wrappedUrls = trackedUrls.map(urlObject => {
    return <UrlLabel key={urlObject.id} urlObject={urlObject} remove={removeUrlToTrack} />
  })


  function removeUrlToTrack(urlIdToRemove) {
    setTrackedUrls(prevUrls => prevUrls.filter(urlObject => urlObject.id !== urlIdToRemove))
  }

  function addUrlToTrack(urlToAdd) {
    setTrackedUrls(prevUrls => [...prevUrls, urlToAdd])
  }


  async function checkUrl(url) {
    const corsUrl = "https://cors-anywhere.herokuapp.com/" + url
    const result = await fetch(corsUrl)
      .then(response => response.ok)
    return result
  }

  async function checkAll() {
    const newTrackedUrls = await Promise.all(trackedUrls.map(async urlObject => {
      let isReachable = await checkUrl(urlObject.url)
      const newUrlObject = {
        ...urlObject,
        isReachable: isReachable
      }
      return newUrlObject
    }))
    setTrackedUrls(newTrackedUrls)
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
      <AddUrl handle={addUrlToTrack} />
      <CheckUrls checkAll={checkAll} />
      <div>
        {trackedUrls.length && wrappedUrls}
      </div>
    </div>
  );
}

export default App;
