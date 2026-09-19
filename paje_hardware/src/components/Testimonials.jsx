import profile1Image from "../assets/img/profile1.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Khamiar Mshimba",
    role: "Customer",
    text: "Huduma nzuri sana na vifaa vya ujenzi vinapatikana kwa bei nzuri. Wafanyakazi wana ushirikiano mzuri na wanasaidia kuchagua bidhaa sahihi. Nashauri sana MSHIMBA HARDWARE.",
    img: profile1Image,
  },
  {
    id: 2,
    name: "Hilda Mshimba",
    role: "Customer",
    text: "Very reliable hardware store with good customer care. I found everything I needed quickly, and the service was fast and organized.",
    img: profile1Image,
  },
  {
    id: 3,
    name: "Fatma Abbas",
    role: "Customer",
    text: "Top quality building materials with fair price. Very satisfied.",
    img: profile1Image,
  },
  {
    id: 4,
    name: "Aniceth Mapande",
    role: "Customer",
    text: "Keep moving forward with more success.",
    img: profile1Image,
  },
  {
    id: 5,
    name: "Ali Karim",
    role: "Customer",
    text: "Good things.",
    img: profile1Image,
  },
  {
    id: 6,
    name: "Muhamed Rashid",
    role: "Customer",
    text: "Nice shop. Bigup Mshimba SOS.",
    img: profile1Image,
  },
  {
    id: 7,
    name: "Muhammed Kombo",
    role: "Customer",
    text: "Mashallah.",
    img: profile1Image,
  },
  {
    id: 8,
    name: "Secilia Abdul",
    role: "Customer",
    text: "Thank you for supporting Mshimba Hardware. We truly appreciate your review and welcome you again anytime.",
    img: profile1Image,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Happy Customers</span>
          <h2 className="stitle">
            What People <span>Say</span>
          </h2>
          <div className="sline"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={22}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="tesSwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="tescard">
                <div className="tesq">"</div>
                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testxt">{t.text}</p>
                <div className="tesauth">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <div className="tesnm">{t.name}</div>
                    <div className="tesrl">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
