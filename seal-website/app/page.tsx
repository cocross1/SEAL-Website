import Image from "next/image";
import SectionHeading from "./components/SectionHeader";
import HeroSection from "./components/HeroSection";
import { motion } from 'framer-motion';
import AboutSection from "./components/AboutSection";
import MediaSection from "./components/MediaSection";
import InitiativesSection from "./components/InitiativesSection";
import PartnersSection from "./components/PartnersSection";
import EventSection from "./components/Events";

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
        </div>
  );
}
