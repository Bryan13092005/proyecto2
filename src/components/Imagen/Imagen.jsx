import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Imagen.css'

import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.png'

export default function Imagen() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      fadeEffect={{ crossFade: true }}
      className="imagen-swiper"
    >
      <SwiperSlide>
        <img src={imagen1} alt="programador 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={imagen2} alt="programador 2" />
      </SwiperSlide>
    </Swiper>
  )
}
