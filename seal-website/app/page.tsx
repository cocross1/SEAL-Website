import Image from "next/image";
import SectionHeading from "./components/SectionHeader";
import HeroSection from "./components/HeroSection";
import { motion } from 'framer-motion';
import AboutSection from "./components/AboutSection";
import InitiativesSection from "./components/InitiativesSection";

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
                {/* Content for Initiatives */}
            </section>
            <section id="team">
                <SectionHeading title="Team" />
                {/* Content for Team */}
            </section>
            <section id="partners">
                <SectionHeading title="Partners" />
                {/* Content for Partners */}
            </section>
            <section id="media">
                <SectionHeading title="Media" />
                {/* Content for Media */}
            </section>
            <section id="contact">
                <SectionHeading title="Contact Us" />
                {/* Content for Contact Us */}
            </section>
        </div>
  );
}
