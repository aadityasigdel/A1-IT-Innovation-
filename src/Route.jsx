import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageWrapper from "./components/PageWrapper";

// Import pages normally (no lazy loading)
import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Work from "./Pages/Work";
import ContactUS from "./Pages/ContactUs";
import Career from "./Pages/Career.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";

// Company
import Aboutus from "./Pages/CompanyDetails/Aboutus";
import FaqSection from "./Pages/CompanyDetails/FAQ";
import Gallery from "./Pages/CompanyDetails/Gallery";
import WhyUs from "./Pages/CompanyDetails/WhyUS";
import Terms from "./Pages/CompanyDetails/Terms";
import Policy from "./Pages/CompanyDetails/PrivacyPolicy";

// Founder profile
import SandipChapagain from "./Pages/SandipChapagain";

// Courses
import DigitalMarketing from "./Pages/Courses/DigitalMarketing";
import Cybersecurity from "./Pages/Courses/Cybersecurity";
import DevOpsCourse from "./Pages/Courses/DevOpsCourse";
import SystemDesign from "./Pages/Courses/SystemDesign";

// Services
import DomainHosting from "./Pages/Services/DomainHosting";
import Intern from "./Pages/Services/InternShip.jsx";
import MobileDev from "./Pages/Services/MobileDev";
import SecurityAudit from "./Pages/Services/SecurityAudit";
import DigitalMarketingService from "./Pages/Services/DigitalMarketing";
import WebDev from "./Pages/Services/WebDev";
import Workshop from "./Pages/Services/Workshop";
import DevOps from "./Pages/Services/DevOps";

// Internship certificate (download / verify) + A1 admin panel (backend: User-Service com.userservice.a1)
import InternshipCertificate from "./Pages/Internship/Certificate";
import InternshipAdmin from "./Pages/Admin/InternshipAdmin";

// Offers
import LifetimeWebsite from "./Pages/Offers/LifetimeWebsite";

// Products
import A1Scanner from "./Pages/Products/A1Scanner/A1Scanner";
import A1ScannerPrivacyPolicy from "./Pages/Products/A1Scanner/PrivacyPolicy";
import A1ScannerTerms from "./Pages/Products/A1Scanner/Terms";
import TwinLanePrivacyPolicy from "./Pages/Products/TwinLane/PrivacyPolicy";
import TwinLaneTerms from "./Pages/Products/TwinLane/Terms";
import PaisaAayoPrivacyPolicy from "./Pages/Products/PaisaAayo/PrivacyPolicy";
import PaisaAayoTerms from "./Pages/Products/PaisaAayo/Terms";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RouteContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Client />} />
      <Route path="/works" element={<Work />} />
      <Route path="/contact" element={<ContactUS />} />
      <Route path="/career" element={<Career />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* Company */}
      <Route path="/company/about" element={<Aboutus />} />
      <Route path="/company/gallery" element={<Gallery />} />
      <Route path="/company/why-us" element={<WhyUs />} />
      <Route path="/company/faq" element={<FaqSection />} />
      <Route path="/company/career" element={<Career />} />
      <Route path="/company/terms" element={<Terms />} />
      <Route path="/company/policy" element={<Policy />} />

      {/* Founder */}
      <Route path="/sandip-chapagain" element={<SandipChapagain />} />

      {/* Courses */}
      <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/courses/cybersecurity"     element={<Cybersecurity />} />
      <Route path="/courses/devops"            element={<DevOpsCourse />} />
      <Route path="/courses/system-design"     element={<SystemDesign />} />

      {/* Services */}
      <Route path="/services/domain-hosting" element={<DomainHosting />} />
      <Route path="/services/Workshop" element={<Workshop />} />
      <Route path="/services/internship" element={<Intern />} />
      <Route path="/services/mobile-dev" element={<MobileDev />} />
      <Route path="/services/web-dev" element={<WebDev />} />
      <Route path="/services/security-audit" element={<SecurityAudit />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
      <Route path="/services/devops" element={<DevOps />} />

      {/* Internship certificate + admin */}
      <Route path="/internship/certificate" element={<InternshipCertificate />} />
      <Route path="/internship/verify" element={<InternshipCertificate />} />
      <Route path="/admin/internships" element={<InternshipAdmin />} />

      {/* Offers */}
      <Route path="/offers/lifetime-website" element={<LifetimeWebsite />} />

      {/* Products */}
      <Route path="/products/a1-scanner" element={<A1Scanner />} />
      <Route path="/products/a1-scanner/privacy-policy" element={<A1ScannerPrivacyPolicy />} />
      <Route path="/products/a1-scanner/terms-and-conditions" element={<A1ScannerTerms />} />
      <Route path="/products/twin-lane/privacy-policy" element={<TwinLanePrivacyPolicy />} />
      <Route path="/products/twin-lane/terms-and-conditions" element={<TwinLaneTerms />} />
      <Route path="/products/paisa-aayo/privacy-policy" element={<PaisaAayoPrivacyPolicy />} />
      <Route path="/products/paisa-aayo/terms-and-conditions" element={<PaisaAayoTerms />} />
    </Routes>
  );
}

export default function RoutSetup() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <PageWrapper>
              <RouteContent />
            </PageWrapper>
        </BrowserRouter>
    );
}
