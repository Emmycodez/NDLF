import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
// import { BorderBeam } from "../magicui/border-beam";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import HeroSection from "./_components/HeroSection";
import AboutUs from "./_components/AboutUs";
import OurVision from "./_components/OurVision";
import OurPrograms from "./_components/OurPrograms";
import GetInvolved from "./_components/GetInvolved";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";

const SitePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OurVision/>
      <OurPrograms/>
      <GetInvolved/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default SitePage;

// Hero Section: A prominent area at the top of the homepage featuring a compelling image or video, accompanied by a concise headline and subheadline that encapsulate the foundation's mission.

// About Us:

// Mission and Vision: Clearly articulate the foundation's purpose and long-term goals.
// History: Provide a brief overview of the foundation's background and evolution.
// Leadership Team: Introduce key team members with short bios and photos to build trust and transparency.
// Programs and Services:

// Overview: Summarize the main programs and services offered.
// Detailed Descriptions: Provide individual pages or sections for each program, outlining objectives, target audiences, and outcomes.
// Success Stories:

// Testimonials: Share personal stories from individuals who have benefited from the foundation's programs.
// Impact Metrics: Present data and statistics that highlight the foundation's achievements and community impact.
// Get Involved:

// Volunteer Opportunities: List ways individuals can contribute their time and skills.
// Donation Information: Provide details on how to make financial contributions, including one-time and recurring options.
// Fundraising Events: Announce upcoming events and initiatives that supporters can participate in.
// Resources:

// Blog: Publish articles related to the foundation's mission, success stories, and relevant news.
// Educational Materials: Offer guides, videos, and other resources that inform and engage the audience.
// News and Updates:

// Press Releases: Share official announcements and statements.
// Media Coverage: Highlight articles and features about the foundation from external sources.
// Contact Us:

// Contact Form: Enable visitors to send inquiries directly through the website.
// Location and Directions: Provide the foundation's address with a map and directions.
// Social Media Links: Include icons linking to the foundation's social media profiles.
// Frequently Asked Questions (FAQ): Address common inquiries about the foundation's programs, involvement opportunities, and other pertinent topics.

// Privacy Policy and Terms of Use: Ensure compliance with legal requirements by outlining how user data is handled and the terms governing website use.
