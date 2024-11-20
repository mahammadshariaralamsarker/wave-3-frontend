
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import bgimg2 from './../assets/images/3.jpg';
import bgimg3 from './../assets/images/2.jpg';
import bgimg1 from './../assets/images/1.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'


export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper spaceBetween={30} centeredSlides={true} loop={true} autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide image={bgimg1} text='Get Your Mobile Service Done in 10 minutes' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg2} text='Motor Servicing Point and Retrailer' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg3} text='Laptop Servicing Center' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
