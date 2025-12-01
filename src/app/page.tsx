"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Chef, Heart, Home, Leaf } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612801355-mi1qmtzd.jpg"
          logoAlt="Kris Kellaway's Delicious Meals"
          brandName="Kris Kellaway"
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Authentic Italian Flavors in the Heart of Rome"
          description="Experience traditional Roman cuisine crafted with passion and the finest ingredients. Welcome to Kris Kellaway's Delicious Meals."
          tag="Since 2015"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612802217-349behzi.jpg"
          imageAlt="Elegant Italian restaurant dining room"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "View Menu", href: "featured" },
            { text: "Reserve Now", href: "contact" }
          ]}
        />
      </div>
      
      <div id="featured" data-section="featured">
        <ProductCardThree
          title="Our Signature Dishes"
          description="Discover the flavors that define our restaurant. Each dish is a masterpiece of tradition and innovation."
          tag="House Specialties"
          products={[
            {
              id: "1",
              name: "Fresh Tagliatelle al Ragù",
              price: "€18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612802986-mrbm3sqr.jpg",
              imageAlt: "Fresh tagliatelle pasta with traditional ragù sauce"
            },
            {
              id: "2",
              name: "Creamy Mushroom Risotto",
              price: "€16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612803686-qecz3lei.jpg",
              imageAlt: "Creamy mushroom risotto with truffle oil"
            },
            {
              id: "3",
              name: "Authentic Tiramisu",
              price: "€8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612804500-l4io06f9.jpg",
              imageAlt: "Traditional tiramisu with cocoa powder"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in celebrating the art of Italian cuisine with every plate we serve. Our team is dedicated to bringing authentic Roman traditions to your table with the freshest ingredients and timeless recipes."
          features={[
            {
              icon: Leaf,
              title: "Fresh Ingredients",
              description: "We source the finest locally-sourced Italian ingredients daily from trusted suppliers across Rome."
            },
            {
              icon: Chef,
              title: "Expert Chefs",
              description: "Our passionate team brings decades of culinary expertise to every dish prepared in our kitchen."
            },
            {
              icon: Home,
              title: "Warm Atmosphere",
              description: "Experience the comfort of a true Roman trattoria with traditional ambiance and personal service."
            },
            {
              icon: Heart,
              title: "Made with Love",
              description: "Every meal is prepared with dedication and care, honoring Italian culinary traditions."
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from real diners who love our restaurant"
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Marco",
              handle: "@marco_rome",
              testimonial: "The best pasta I've had in years. Kris Kellaway's takes me back to my nonna's kitchen. Absolutely wonderful!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612806016-in28mbnl.jpg",
              imageAlt: "Marco's portrait"
            },
            {
              id: "2",
              name: "Elena",
              handle: "@elena_travel",
              testimonial: "A hidden gem in Rome. The atmosphere, the service, and especially the food - everything is perfect. Will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612806748-pv45np46.jpg",
              imageAlt: "Elena's portrait"
            },
            {
              id: "3",
              name: "Giovanni",
              handle: "@giovanni_chef",
              testimonial: "As a chef myself, I appreciate the attention to detail and authentic techniques. Highly recommended for true Italian dining.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612807271-zh5k4oku.jpg",
              imageAlt: "Giovanni's portrait"
            },
            {
              id: "4",
              name: "Lucia",
              handle: "@lucia_foodie",
              testimonial: "Every visit is special. The risotto, the wine selection, the hospitality - it's an unforgettable experience. Grazie!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612808297-02z1si0k.jpg",
              imageAlt: "Lucia's portrait"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Make Your Reservation"
          description="Join us for an unforgettable dining experience. Reserve your table today and let us serve you authentic Italian cuisine in the heart of Rome."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Any special requests or dietary requirements?", rows: 5, required: false }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612808948-nh6lhmam.jpg"
          imageAlt="Elegant restaurant table setting"
          mediaPosition="right"
          buttonText="Reserve Table"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "featured" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: +39 06 1234 5678", href: "tel:+390612345678" },
                { label: "Email: info@kriskellaway.it", href: "mailto:info@kriskellaway.it" },
                { label: "Via Roma 123, Rome", href: "#" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Monday-Thursday: 12pm-11pm", href: "#" },
                { label: "Friday-Saturday: 12pm-12am", href: "#" },
                { label: "Sunday: 1pm-10pm", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Kris Kellaway's Delicious Meals. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}