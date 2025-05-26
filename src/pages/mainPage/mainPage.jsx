
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
import Instruction from '../../components/instruction/Instruction.jsx';
import Header from '../../components/header/Header.jsx';
const MainPage = () => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const onCloseModal = ()=>{
        setModal(false)
    }
  return (
    <>
    <div className={styles.videoWrapper}>
{/*
    <video autoPlay loop muted className={styles.video}>
        <source src="./images/video.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video> */}
    </div>
     <div className={styles.bgc}>
            <Header/>
            <div className={styles.container}>
                <main>
                    <h2>COINHUNTERS</h2>
                    <p>Исследуй карту и открывай новые способности</p>
                    <div className={styles.buttons}>

                        <Link to="/registration">

                            <button>Играть</button>
                        </Link>
                        <Link to="#">
                            <Instruction />
                        </Link>
                    </div>
                </main>
            </div>

        </div>
    </>
  )
}

export default MainPage