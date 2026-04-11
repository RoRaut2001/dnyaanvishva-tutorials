import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";
import banner1 from "@/assets/DT-Classes10x20-2022-final-scaled.jpg";
import banner2 from "@/assets/DT-12TH-15-june-25-scaled.jpg";
import banner3 from "@/assets/DT-10TH-15-june-25-1-scaled.jpg";
import banner4 from "@/assets/DT-Classes10x20-2022-final-scaled.jpg";
import banner5 from "@/assets/DT-Classes-jun-2023-advt-a4-2N-scaled.jpg";
import banner6 from "@/assets/DT-TOPPERS-2022-NEW-scaled.jpg";
import banner7 from "@/assets/DT__24-July-20_FINAL-OK-1-scaled.jpg";
import banner8 from "@/assets/DT_SIDE-1_6-DEC2-0-scaled.jpg";
import banner9 from "@/assets/ज्ञानविश्व-ट्युटोरियल्स_advt_Sneha.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const banners = [banner6, banner7, banner8, banner9, banner1, banner2, banner3, banner4, banner5,];
const students = [
  {
    name: "Aryan Kulkarni",
    img: student1,
    badge: "JEE RANK 42",
    badgeColor: "bg-secondary",
    quote:
        "The personalized mentorship at Dnyaanvishva changed how I approached Mathematics entirely.",
  },
  {
    name: "Siddhi Deshmukh",
    img: student2,
    badge: "NEET 680/720",
    badgeColor: "bg-primary",
    quote:
        "Concept clarity was my biggest win here. I never felt I was just memorizing.",
  },
  {
    name: "Rahul Mehta",
    img: student3,
    badge: "CET 99.5%",
    badgeColor: "bg-foreground",
    quote:
        "The test series reflected the actual difficulty perfectly. It built my confidence.",
  },
];


const ResultsSection = () => {
  return (
      <section className=" md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Success Gallery
            </h2>
            <p className="text-primary font-semibold text-sm">
              Stories of Grit and Excellence
            </p>
          </div>
        </div>

        {/* ✅ FULL WIDTH SLIDER */}
        <div className="container mx-auto px-4 mb-20 ">
          <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              autoHeight={true}
              className="w-full"
          >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <img
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                  />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✅ Student Cards */}
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((s) => (
                <div
                    key={s.name}
                    className="group relative rounded-2xl overflow-hidden h-[420px] shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                    className={`inline-block ${s.badgeColor} text-primary-foreground text-xs font-bold px-3 py-1 rounded mb-3`}
                >
                  {s.badge}
                </span>

                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {s.name}
                    </h3>

                    <p className="text-primary-foreground/80 text-sm italic">
                      "{s.quote}"
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </section>
  );
};

export default ResultsSection;