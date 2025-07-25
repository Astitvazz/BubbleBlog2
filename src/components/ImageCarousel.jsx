import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function ImageCarousel({ images }) {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      className="rounded-lg "
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`Slide ${i}`} className="w-full h-[300px] sm:h-[300px] md:h-[450px] rounded-2xl object-cover" loading='lazy' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ImageCarousel;