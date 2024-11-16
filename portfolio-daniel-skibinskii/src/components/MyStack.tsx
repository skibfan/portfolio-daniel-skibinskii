import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box} from "@mui/material";
import javascriptimg from '../assets/stack_icons/JavaScript.png'
import htmlimg from '../assets/stack_icons/HTMLLogo.png'
import cssimg from '../assets/stack_icons/CSSLogo.png'
import nodeimg from '../assets/stack_icons/nodeLogo.png'
import reactimg from '../assets/stack_icons/ReactLogo.png'
import tsimg from '../assets/stack_icons/TSLogo.png'
import pgadminimg from '../assets/stack_icons/PGAdminLogo.png'
import flutterimg from '../assets/stack_icons/FlutterLogo.png'
import swiftimg from '../assets/stack_icons/SwiftLogo.png'
import gitimg from '../assets/stack_icons/gitLogo.png'
import { Autoplay, Pagination } from "swiper/modules"; 

const stack = [reactimg, tsimg, nodeimg, javascriptimg, htmlimg, cssimg, gitimg, pgadminimg, swiftimg, flutterimg ]
const MyStack = () => {
  return (
    <Box sx={{ maxWidth: {xs:'600px', md: '900px'}, overflow: 'hidden', padding: '0 40px' }}>
      <Swiper
      className="stack-swiper"
        spaceBetween={10}
        slidesPerView={3} 
        centeredSlides
        loop
        autoplay={{ delay: 2500 }} 
        
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        pagination={{
            clickable: true, 
            dynamicBullets: true, 
          }}
          modules={[Autoplay, Pagination]}
      >
        {stack.map((elem) => (
          <SwiperSlide key={elem}
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Box
                component="img"
                src={elem}
                alt={"JS"}
                sx={{
                  width: {xs: '60px', md: '100px'},
                  height: {xs: '60px', md: '100px'},
                  marginBottom: 5,

                  objectFit: 'cover', 
                  p: 1
                }}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MyStack;