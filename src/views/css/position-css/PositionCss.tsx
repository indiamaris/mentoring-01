
import styles from './positionCss.module.css'
export const PositionCss = () => {
    return (

        <div className={styles.containerCssPosition}>            
            <div className={styles.cssRelative}>relative</div>
            <div className={styles.cssStatic}>static</div>
            {/* <div className={styles.cssSticky}>sticky</div>
            <div className={styles.cssAbsolute}> absolute</div> */}
         
      
    </div> );
}