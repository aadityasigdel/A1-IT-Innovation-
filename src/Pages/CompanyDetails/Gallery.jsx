import GalleryIllus from "../../assets/Gallery/gallery-illus.avif";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

// Import all images
import Img1 from "../../assets/Gallery/1.jpg";
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
import Img2 from "../../assets/Gallery/2.jpg";
import Img20 from "../../assets/Gallery/20.jpg";
import Img21 from "../../assets/Gallery/21.jpg";
import Img22 from "../../assets/Gallery/22.jpg";
import Img23 from "../../assets/Gallery/23.jpg";
import Img24 from "../../assets/Gallery/24.jpg";
import Img25 from "../../assets/Gallery/25.jpg";
import Img26 from "../../assets/Gallery/26.jpg";
import Img3 from "../../assets/Gallery/3.jpg";
import Img4 from "../../assets/Gallery/4.jpg";
import Img5 from "../../assets/Gallery/5.jpg";
import Img6 from "../../assets/Gallery/6.jpg";
import Img7 from "../../assets/Gallery/7.jpg";
import Img8 from "../../assets/Gallery/8.jpg";
import Img9 from "../../assets/Gallery/9.jpg";

//include image sources
const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
  Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19,
  Img20, Img21, Img22, Img23, Img24, Img25, Img26,
];

export default function Gallery() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="w-full h-screen py-20 flex justify-center items-stretch bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                Gallery
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 font-medium">Explore Our Visual Works</p>
              <p className="text-md md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Immerse yourself in a showcase of our latest works and conducts. From stunning workshops to outstanding events and participation highlights our dedication to IT events.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={GalleryIllus}
                alt=""
                className="w-full h-auto max-h-[400px] object-contain "
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="object-cover w-full h-60"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
