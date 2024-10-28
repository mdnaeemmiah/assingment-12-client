// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '.././assets/images/contest-speech-bubble-banner-business-marketing-advertising-vector-illustration-banner-business-marketing-advertising_602351-1277.avif';
import img2 from '.././assets/images/240_F_940629236_L7iyBur0jKCNUl6tB6wmQrLCGWZcIsuA.jpg';
import img3 from '.././assets/images/240_F_979434553_pEXkT81D4f7125ptsxBm518Nwnpt1K27.jpg';
import img4 from '.././assets/images/240_F_997874595_Ex4guFBx3TgUNCKIozzy8k6C16SA1SsU.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';


export default function Carousel() {
  return (
    <div className='container mx-auto px-5 py-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider image={img1} pos='1st' text='Cricket is a bat-and-ball game where two teams take turns batting and fielding'  ></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img2} pos='2nd' text='Football is a team sport where players aim to score by getting the ball into the opposing team'></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img3} pos='3rd' text='Hockey is a fast-paced team sport played on ice (or field) where players use sticks '></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={img4} pos='4th' text='A car is a motorized vehicle with wheels, designed for road transport and typically.'></Slider>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
