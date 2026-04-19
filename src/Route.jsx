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
import WebDev from "./Pages/Services/WebDev";
import Workshop from "./Pages/Services/Workshop";
import DevOps from "./Pages/Services/DevOps";

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
      <Route path="/services/devops" element={<DevOps />} />
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
