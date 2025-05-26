import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
import Instruction from '../../components/instruction/Instruction.jsx';
import RegistrationModal from '../registrationPage/RegistrationPage.jsx';
import Header from '../../components/header/Header.jsx';
import CharactersSlider from '../../components/charactersSlider/CharactersSlider.jsx';
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
       <div className={styles.headerFixed}>
            <Header/>
        </div>
            <section className={styles.heroSection}>
                <div className={styles.heroBg}>
                    {/* Можно добавить <video> или <img> для фона, если нужно */}
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>CoinHunters</h1>
                    <p className={styles.heroSubtitle}>играй, собирай коины и развивай софт скиллы</p>
                    
                        <Link to="/game" className={styles.heroBtn}>Играть</Link>
                   
                </div>
            </section>
            <section className={styles.sliderSection}>
                <h2 className={styles.sliderTitle}>Geeks персонажи</h2>
                <p className={styles.sliderSubtitle}>персонажами являются реальные преподаватели/менторы GeeksAcademy</p>
                <CharactersSlider />
            </section>
            <section className={styles.instructionSection}>
                <h2 className={styles.instructionTitle}>Управление</h2>
                <Instruction />
            </section>
            <footer>
                <p>made by css Ninjas</p>
            </footer>
            <RegistrationModal modal={modal} onClose={onCloseModal}/>
        
        
    </>
  )
}

export default MainPage