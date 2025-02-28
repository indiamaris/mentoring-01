import { Outlet } from 'react-router-dom';
import { NavTo } from '../../../components/link/NavTo';
import styles from './syllabus-css.module.css'
export const SyllabusCss = () => {

    return (
        <>

            <div className={styles.containerFluid}> 
                <div className={styles.navContainer}>       
                <NavTo address={'position'} label={'positions'}/>
                </div>
            <br />

                <div className={styles.cssContent}>
                <Outlet/>
                </div>
        
            </div > </>
     );
}