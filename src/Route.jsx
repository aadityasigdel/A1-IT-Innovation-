import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import Client from "./Pages/Client"
import Work from "./Pages/Work"
import Aboutus from "./Pages/CompanyDetails/Aboutus"
import Gallery from "./Pages/CompanyDetails/Gallery"
import WhyUs from "./Pages/CompanyDetails/WhyUS"
import FaqSection from "./Pages/CompanyDetails/FAQ"
import ContactUS from "./Pages/ContactUs"

export default function RoutSetup() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clients" element = {<Client/>}/>
                <Route path="/works" element = {<Work/>}/>
                <Route path="company/about" element = {<Aboutus/>}/>
                <Route path="company/gallery" element = {<Gallery/>}/>
                <Route path="company/why-us" element = {<WhyUs/>}/>
                <Route path="company/faq" element = {<FaqSection/>}/>
                <Route path="/contact" element = {<ContactUS/>}/>
            </Routes>
        </BrowserRouter>
    )
}