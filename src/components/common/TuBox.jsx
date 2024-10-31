import * as styles from './TuBox.css'
import { Link } from 'react-router-dom'
import { Button } from 'sync-compo-test-round2'


const TuBox = ({ title, content, link, linkTo }) => {
  return (
    <div className={styles.boxSetting}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <p className={styles.boxPara}>{content}</p>
      {link && (<div className={styles.boxButton}>
        <Button className={styles.linkHero} path={linkTo} text={link} variant="default">{link}</Button>
      </div>
      )}
    </div>
  )
}

export default TuBox