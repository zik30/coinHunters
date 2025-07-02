
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
import Instruction from '../../components/instruction/Instruction.jsx';
import Header from '../../components/header/Header.jsx';
import CharactersSlider from '../../components/charactersSlider/CharactersSlider.jsx';
import img from '/icons/Vector.png'
import video from './ui/video_2.mp4'

const MainPage = () => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setModal(true);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, []);

  return (
    <>
       <div className={styles.headerFixed}>
            <Header/>
        </div>
            <section className={styles.heroSection}>
                <div className={styles.heroBg}>
                    {/* Можно добавить <video> или <img> для фона, если нужно */}
                    <video autoPlay loop muted className={styles.heroVideo}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>CoinHunters</h1>
                    <p className={styles.heroSubtitle}>играй, собирай коины и развивай софт скиллы</p>
                    
                        <Link to="/registration" className={styles.heroBtn}>Играть</Link>
                   
                </div>
            </section>
            <section className={styles.aboutSection}>
                <div className={styles.logo}>
                    <img src={img} alt="Geeks logo two" />
                </div>
                <div className={styles.text}>
                    <h2>Окунись в увлекательную атмосферу GEEKS</h2>
                    <p>Выбери себе своего персонажа-учителя, открывай себе новые направления, начни понимать систему работы менторов</p>
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
            <section className={styles.challengeSection}>
                <h2>Готов к испытанию?</h2>
                <p>Зарегистрируйся, соревнуйся в таблице лидеров и докажи, что достоин Коинов!</p>
                <button >
                    <Link to="/registration" className={styles.btn} >Играть</Link>
                </button>
            </section>
            <footer>
                <p>made by css Ninjas</p>
            </footer>        
        
    </>
  )
}

export default MainPage