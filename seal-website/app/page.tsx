import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MediaSection from "./components/MediaSection";
import InitiativesSection from "./components/InitiativesSection";
import PartnersSection from "./components/PartnersSection";
import EventSection from "./components/Events";
import ConnectSection from "./components/ConnectSection";
import Transition from "./components/Transition";

export default function Home() {
    return (
        <div>
            <section id="main">
                <HeroSection />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <section id="initiatives">
                <InitiativesSection />
            </section>
            <section id="partners">
                <PartnersSection />
            </section>
            <section id="media">
                <MediaSection />
            </section>
            <section id="events">
                <EventSection />
            </section>
            <div>
                <Transition color1="white" color2="#BFDBFE" />  {/* Using hex value for blue-200 */}
            </div>
            <section id="connect">
                <ConnectSection />
            </section>
        </div>
    );
}
