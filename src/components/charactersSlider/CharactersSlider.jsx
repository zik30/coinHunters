import React from 'react'
import styles from './CharactersSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import AkjolImg from '@assets/images/front/Akjol.jpg';
import BakstybekImg from '@assets/images/front/Bakstybek.jpg';
import EgorImg from '@assets/images/front/Egor.jpg';
import FelixImg from '@assets/images/front/Felix.jpg';
import KiselevImg from '@assets/images/front/Kiselev.jpg';
import NurdinImg from '@assets/images/front/Nurdin.jpg';

import AkjolC from '@assets/images/front/AkjolC.png';
// import BakstybekC from '@assets/images/front/BakstybekC.png';
import EgorC from '@assets/images/front/EgorC.png';
import FelixC from '@assets/images/front/FelixC.png';
import KiselevC from '@assets/images/front/KiselevC.png';
import NurdinC from '@assets/images/front/NurdinC.png';


const characters = [
  {
    name: 'Акжол',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (3 месяц)',
    img: AkjolImg,
    character: AkjolC,
  },
  {
    name: 'Бактыбек',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (2 месяц)',
    img: BakstybekImg,
    character: null,
  },
  {
    name: 'Егор',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (2 месяц)',
    img: EgorImg,
    character: EgorC,
  },
  {
    name: 'Феликс',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (1 месяц)',
    img: FelixImg,
    character: FelixC,
  },
  {
    name: 'Киселев',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (3 месяц)',
    img: KiselevImg,
    character: KiselevC,
  },
  {
    name: 'Нурдин',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (4 месяц)',
    img: NurdinImg,
    character: NurdinC,
  },
];

const CharactersSlider = () => {
  return (
    <div className={styles.main}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className={styles.swiper}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <div className={styles.card}>
                <img src={char.img} alt={char.name} className={styles.avatar} />
                {
                  char.character && (
                    <div className={styles.character}>
                      <img src={char.character} alt="teacher character sprite" />
                    </div>
                  )
                }
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardName}>{char.name}</div>
              <div className={styles.cardSurname}>{char.surname}</div>
              <div className={styles.cardRole}>{char.role}</div>
              <div className={styles.cardExp}>{char.exp}</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CharactersSlider