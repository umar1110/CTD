import React from 'react'
import ContactUs from '../LandingPagecomponents/ContactUs';
import DockGuide from '../LandingPagecomponents/DockGuide';
import DownBody from '../LandingPagecomponents/DownBody';
import GuideCards from '../LandingPagecomponents/GuideCards';
import LocationSlider from '../LandingPagecomponents/LocationSlider';
import UpperBody from '../LandingPagecomponents/UpperBody';
import Footer from '../LandingPagecomponents/Footer';

export default function LandingPage() {
    return (
        <>
            <div className="landing-page h-fit relative">

                <UpperBody />
                <DownBody />
                <LocationSlider />
                <DockGuide />
                <GuideCards />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}