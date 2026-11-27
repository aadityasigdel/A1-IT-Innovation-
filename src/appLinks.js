// Our apps on Google Play. One place, so every page links to the same listing.
import internshipNepalIcon from "./assets/internship-nepal-logo.png";
import gigfineIcon from "./assets/gigfine-icon.webp";

const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;

export const APPS = {
  internshipNepal: {
    name: "Internship Nepal",
    icon: internshipNepalIcon,
    url: play("np.com.a1itinnovation.internship_nepal"),
    desc: "Apply for our free remote IT internship, follow your application, do daily tasks and get your certificate.",
  },
  gigfine: {
    name: "GigFine",
    icon: gigfineIcon,
    url: play("com.gigfine.app"),
    desc: "Report ride-sharing problems, get garage help nearby and chat with the garage.",
  },
  gigfineRentals: {
    name: "GigFine Rentals",
    icon: gigfineIcon,
    url: play("com.gigfine.rental"),
    desc: "Rooms and flats in Nepal you can trust. Book a visit or list your house.",
  },
};
