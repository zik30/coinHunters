import React from 'react'
import styles from './CharactersSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const characters = [
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
    img: '../../../assets/images/front/Felix.jpg',
  },
  
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
    img: '../../../assets/images/front/Felix.jpg',
  },
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
  },
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
  },
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
  },
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
  },
  {
    name: 'Феликс',
    surname: 'Мардонкулов',
    role: 'преподаватель Front-End',
    exp: '1 месяц',
  }
];

const CharactersSlider = () => {
  return (
    <div className={styles.main}>
      <Swiper
        slidesPerView={4}
        spaceBetween={37}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <img src={char.img} alt={char.name} className={styles.avatar} />
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