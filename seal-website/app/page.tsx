import Image from "next/image";
import SectionHeading from "./components/SectionHeader";

export default function Home() {
  return (
        <div>
            <section id="about">
                <SectionHeading title="About" />
                {/* Content for About */}
            </section>
            <section id="initiatives">
                <SectionHeading title="Initiatives" />
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
