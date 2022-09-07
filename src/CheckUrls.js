import React from "react"

import styles from "./CheckUrls.module.css"

export default function CheckUrls(props) {
    return (
        <button className={styles.button} onClick={props.checkAll}>Check all !</button>
    )
}