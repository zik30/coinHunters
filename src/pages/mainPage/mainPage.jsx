import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
import Instruction from '../../components/instruction/Instruction.jsx';
import RegistrationModal from '../registrationPage/RegistrationPage.jsx';
import Header from '../../components/header/Header.jsx';
const MainPage = () => {
    const [modal, setModal] = useState(false)
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setModal(true);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, []);

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
                    <p>играй, собирай коины и развивай софт скиллы</p>
                    <div className={styles.buttons}>
                        <Link to="/game">
                            <button>play</button>
                        </Link>
                        {/* <Link to="#">
                            <Instruction />
                        </Link> */}

                    </div>
                </main>
            </div>
            <div className={styles.geeksBlock}>
      <div className={styles.geeksLogoWrapper}>
        <div className={styles.geeksLogoBg}></div>
        <div className={styles.geeksLogo}>G</div>
      </div>
      <div className={styles.geeksTextBlock}>
        <h3 className={styles.geeksTitle}>ОКУНИСЬ В УВЛЕКАТЕЛЬНУЮ АТМОСФЕРУ GEEKS</h3>
        <p className={styles.geeksSubtitle}>
          Выбери себе своего персонажа-учителя, открывай себе новые направления, начни понимать систему работы менторов
        </p>
      </div>
    </div>
            <RegistrationModal modal={modal} onClose={onCloseModal}/>
        </div>
    </>
  )
}

export default MainPage