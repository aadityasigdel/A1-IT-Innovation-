import React from "react";
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const images = [
  {
    src: "/gallery/1.jpg",
    alt: "Participants attending a tech workshop",
    caption: "Tech Workshop",
  },
  {
    src: "/gallery/2.jpg",
    alt: "Group photo from the annual tech meetup",
    caption: "Annual Meetup",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Award ceremony for best project",
    caption: "Project Awards",
  },
  {
    src: "/gallery/4.jpg",
    alt: "Guest speaker delivering keynote address",
    caption: "Keynote Session",
  },
  {
    src: "/gallery/5.jpg",
    alt: "Live demo of IoT project",
    caption: "IoT Demo",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Students presenting at hackathon",
    caption: "Hackathon",
  },
];

export default function Gallery() {
  return (
    <>
  <Navigation/>
      <main className="m-0 md:mb-20">
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center p-4 md:justify-between">
          <div className="mt-5 md:mt-0 flex flex-col gap-6 max-w-lg text-center md:text-left md:max-w-none md:w-1/2">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-extrabold">Gallery</h1>
              <p className="mt-2 md:text-xl text-gray-600">
                From stunning workshops to outstanding events and participation
                highlights – dive into the visual showcase of our club’s vibrant
                journey.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:w-1/2">
            {images.map((img, idx) => (
              <figure
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  fetchpriority="low"
                  className="object-cover w-full h-56"
                />
                {/* Uncomment below for captions */}
                {/* <figcaption className="p-2 text-sm text-center text-gray-700">{img.caption}</figcaption> */}
              </figure>
            ))}
          </div>
        </section>
      </main>
       <Footer/>
    </>
  );
}
