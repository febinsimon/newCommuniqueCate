import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      <div className="relative w-full">
        <img
          src={heroBanner}
          alt="Speech therapy centre — empowering every expression"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-28">
          
          <motion.div
           
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  className="absolute bottom-0 sm:bottom-6 md:bottom-16"
>
          
            <Button
              size="lg"
              asChild
              className="text-sm md:text-base px-9 md:px-8 py-3 md:py-5 rounded-full shadow-lg"
            >
              <a href="#contact">Book a Free Consultation</a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;