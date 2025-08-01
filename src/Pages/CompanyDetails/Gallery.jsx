import GalleryIllus from "../../assets/Gallery/gallery-illus.avif";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Img1 from "../../assets/Gallery/1.jpg";
import Img2 from "../../assets/Gallery/2.jpg";
import Img3 from "../../assets/Gallery/3.jpg";
import Img4 from "../../assets/Gallery/4.jpg";
import Img5 from "../../assets/Gallery/5.jpg";
import Img6 from "../../assets/Gallery/6.jpg";
import Img7 from "../../assets/Gallery/7.jpg";
import Img8 from "../../assets/Gallery/8.jpg";
import Img9 from "../../assets/Gallery/9.jpg";
import Img10 from "../../assets/Gallery/10.jpg";
import Img11 from "../../assets/Gallery/11.jpg";
import Img12 from "../../assets/Gallery/12.jpg";
import Img13 from "../../assets/Gallery/13.jpg";
import Img14 from "../../assets/Gallery/14.jpg";
import Img15 from "../../assets/Gallery/15.jpg";
import Img16 from "../../assets/Gallery/16.jpg";
import Img17 from "../../assets/Gallery/17.jpg";
import Img18 from "../../assets/Gallery/18.jpg";
import Img19 from "../../assets/Gallery/19.jpg";
import Img20 from "../../assets/Gallery/20.jpg";
import Img21 from "../../assets/Gallery/21.jpg";
import Img22 from "../../assets/Gallery/22.jpg";
import Img23 from "../../assets/Gallery/23.jpg";
import Img24 from "../../assets/Gallery/24.jpg";
import Img25 from "../../assets/Gallery/25.jpg";
import Img26 from "../../assets/Gallery/26.jpg";

const images = [
  { src: Img1, alt: "Participants attending a tech workshop", caption: "Tech Workshop" },
  { src: Img2, alt: "Group photo from the annual tech meetup", caption: "Annual Meetup" },
  { src: Img3, alt: "Award ceremony for best project", caption: "Project Awards" },
  { src: Img4, alt: "Guest speaker delivering keynote address", caption: "Keynote Session" },
  { src: Img5, alt: "Live demo of IoT project", caption: "IoT Demo" },
  { src: Img6, alt: "Students presenting at hackathon", caption: "Hackathon" },
  { src: Img7, alt: "Club members during team-building exercise", caption: "Team Building" },
  { src: Img8, alt: "Exhibition of student innovation", caption: "Innovation Expo" },
  { src: Img9, alt: "Interactive coding bootcamp", caption: "Coding Bootcamp" },
  { src: Img10, alt: "Evening networking session", caption: "Networking Night" },
  { src: Img11, alt: "Student explaining AI model", caption: "AI Presentation" },
  { src: Img12, alt: "Web dev crash course", caption: "Web Development" },
  { src: Img13, alt: "Judges evaluating projects", caption: "Project Judging" },
  { src: Img14, alt: "Volunteers preparing event", caption: "Event Setup" },
  { src: Img15, alt: "Tech talk on cybersecurity", caption: "Cybersecurity Talk" },
  { src: Img16, alt: "Mentorship session in progress", caption: "Mentorship Session" },
  { src: Img17, alt: "Creative UI/UX workshop", caption: "UI/UX Workshop" },
  { src: Img18, alt: "Discussion panel with experts", caption: "Expert Panel" },
  { src: Img19, alt: "Night event with lighting", caption: "Evening Highlights" },
  { src: Img20, alt: "Students participating in quiz", caption: "Tech Quiz" },
  { src: Img21, alt: "Cultural performance at event", caption: "Cultural Show" },
  { src: Img22, alt: "Outdoor team activity", caption: "Outdoor Activity" },
  { src: Img23, alt: "Coding challenge leaderboard", caption: "Leaderboard" },
  { src: Img24, alt: "Event sponsors booth", caption: "Sponsor Booth" },
  { src: Img25, alt: "Closing ceremony celebration", caption: "Closing Ceremony" },
  { src: Img26, alt: "Volunteers group photo", caption: "Volunteers" },
];

export default function Gallery() {
  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-white to-gray-100">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                 Gallery
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 font-medium">Explore Our Visual Works</p>
              <p className="text-md md:text-xl text-gray-800  leading-relaxed max-w-2xl mx-auto md:mx-0">
                Immerse yourself in a showcase of our latest works and conducts. From stunning workshops to outstanding events and partcipation highlights our dedication to IT events.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={GalleryIllus}
                alt="Illustration of tech event"
                className="w-full h-auto max-h-[400px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <figure
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  fetchpriority="low"
                  className="object-cover w-full h-60"
                />
                <figcaption className="p-3 text-center text-base font-semibold text-gray-700">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
