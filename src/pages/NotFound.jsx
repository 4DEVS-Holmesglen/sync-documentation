import * as styles from './NotFound.css'
import { Link } from "react-router-dom"
import { RiEmotionUnhappyLine } from "react-icons/ri";


const NotFound = () => {
  return (
    <div className={styles.notFoundBox}>
      <div className={styles.twinBox}>
        <Link to="/">This page could not be found</Link>
      </div>
    </div>
  )
}

export default NotFound