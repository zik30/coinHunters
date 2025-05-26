import React from 'react'
import styles from './CharactersSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import AkjolImg from '../../assets/images/front/Akjol.jpg';
import BakstybekImg from '../../assets/images/front/Bakstybek.jpg';
import EgorImg from '../../assets/images/front/Egor.jpg';
import FelixImg from '../../assets/images/front/Felix.jpg';
import KiselevImg from '../../assets/images/front/Kiselev.jpg';
import NurdinImg from '../../assets/images/front/Nurdin.jpg';

const characters = [
  {
    name: 'Акжол',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (3 месяц)',
    img: AkjolImg,
  },
  {
    name: 'Бактыбек',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (2 месяц)',
    img: BakstybekImg,
  },
  {
    name: 'Егор',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (2 месяц)',
    img: EgorImg,
  },
  {
    name: 'Феликс',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (1 месяц)',
    img: FelixImg,
  },
  {
    name: 'Киселев',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (3 месяц)',
    img: KiselevImg,
  },
  {
    name: 'Нурдин',
    surname: '',
    role: '',
    exp: 'Преподаватель по Frontend (4 месяц)',
    img: NurdinImg,
  },
];

const CharactersSlider = () => {
  return (
    <div className={styles.main}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <div className={styles.card}>
                <img src={char.img} alt={char.name} className={styles.avatar} />

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