import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const Client = lazy(() => import("./Pages/Client"));
const Work = lazy(() => import("./Pages/Work"));
const ContactUS = lazy(() => import("./Pages/ContactUs"));
const Career = lazy(() => import("./Pages/Career.jsx"));
const SignUp = lazy(() => import("./Pages/SignUp.jsx"));

// Company
const Aboutus = lazy(() => import("./Pages/CompanyDetails/Aboutus"));
const FaqSection = lazy(() => import("./Pages/CompanyDetails/FAQ"));
const Gallery = lazy(() => import("./Pages/CompanyDetails/Gallery"));
const WhyUs = lazy(() => import("./Pages/CompanyDetails/WhyUS"));

// Services
const DomainHosting = lazy(() => import("./Pages/Services/DomainHosting"));
const Intern = lazy(() => import("./Pages/Services/InternShip.jsx"));
const MobileDev = lazy(() => import("./Pages/Services/MobileDev"));
const SecurityAudit = lazy(() => import("./Pages/Services/SecurityAudit"));
const WebDev = lazy(() => import("./Pages/Services/WebDev"));
const Workshop = lazy(() => import("./Pages/Services/Workshop"));

export default function RoutSetup() {
    return (
        <BrowserRouter>
            {/* Suspense shows fallback while a page is loading */}
            <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clients" element={<Client />} />
                    <Route path="/works" element={<Work />} />
                    <Route path="/contact" element={<ContactUS />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/register" element={<SignUp />} />

                    {/* Company */}
                    <Route path="/company/about" element={<Aboutus />} />
                    <Route path="/company/gallery" element={<Gallery />} />
                    <Route path="/company/why-us" element={<WhyUs />} />
                    <Route path="/company/faq" element={<FaqSection />} />
                    <Route path="/company/career" element={<Career />} />

                    {/* Services */}
                    <Route path="/services/domain-hosting" element={<DomainHosting />} />
                    <Route path="/services/Workshop" element={<Workshop />} />
                    <Route path="/services/internship" element={<Intern />} />
                    <Route path="/services/mobile-dev" element={<MobileDev />} />
                    <Route path="/services/web-dev" element={<WebDev />} />
                    <Route path="/services/security-audit" element={<SecurityAudit />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
