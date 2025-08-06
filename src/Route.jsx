import { BrowserRouter, Route, Routes } from "react-router-dom"

import Career from "./Pages/Career.jsx"
import Client from "./Pages/Client"
import Aboutus from "./Pages/CompanyDetails/Aboutus"
import FaqSection from "./Pages/CompanyDetails/FAQ"
import Gallery from "./Pages/CompanyDetails/Gallery"
import WhyUs from "./Pages/CompanyDetails/WhyUS"
import ContactUS from "./Pages/ContactUs"
import Home from "./Pages/Home"
import DomainHosting from "./Pages/Services/DomainHosting"
import Intern from "./Pages/Services/InternShip.jsx"
import MobileDev from "./Pages/Services/MobileDev"
import SecurityAudit from "./Pages/Services/SecurityAudit"
import WebDev from "./Pages/Services/WebDev"
import Workshop from "./Pages/Services/Workshop"
import SignUp from "./Pages/SignUp.jsx"
import Work from "./Pages/Work"


export default function RoutSetup() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/works" element={<Work />} />
                <Route path="/contact" element={<ContactUS />} />
                <Route path="/career" element={<Career />} />
                <Route path="/register" element={<SignUp />} />

                {/* company*/}
                <Route path="/company/about" element={<Aboutus />} />
                <Route path="/company/gallery" element={<Gallery />} />
                <Route path="/company/why-us" element={<WhyUs />} />
                <Route path="/company/faq" element={<FaqSection />} />
                <Route path="/company/career" element={<Career />} />

                {/* service*/}
                <Route path="/services/domain-hosting" element={<DomainHosting />} />
                <Route path="/services/Workshop" element={<Workshop />} />
                <Route path="/services/internship" element={<Intern />} />
                <Route path="/services/mobile-dev" element={<MobileDev />} />
                <Route path="/services/web-dev" element={<WebDev />} />
                <Route path="/services/security-audit" element={<SecurityAudit />} />
                
            </Routes>
        </BrowserRouter>
    )
}