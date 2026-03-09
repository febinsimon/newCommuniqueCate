import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Brain, Smartphone, Users, BookOpen, ChevronDown } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Speech and Language Intervention",
    description: "Helping children pronounce sounds clearly so others can understand them better.",
    color: "bg-peach",
  },
  {
    icon: BookOpen,
    title: "Occupational Therapy",
    description: "Building skills to understand instructions, form sentences, and express ideas step by step.",
    color: "bg-blush",
  },
  {
    icon: Brain,
    title: "Behavioral Therapy",
    description: "Supporting autistic and neurodivergent children to communicate and build independence with respect.",
    color: "bg-muted",
  },
  {
    icon: Smartphone,
    title: "Special Education",
    description: "Introducing communication boards or devices for non-speaking and speaking children alike.",
    color: "bg-peach",
  },
  {
    icon: Users,
    title: "Physiotherapy",
    description: "Guiding parents on how to support communication at home in everyday situations.",
    color: "bg-blush",
  },
  
];

const speechAndLanguageMainServices = [
  "Speech Support",
  "Language Development",
  "Neurodivergent Support",
  "Augmentative and Alternative Communication",
  "Parent Guidance",
  "Teletherapy",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicesSection = () => {
  const [isSpeechDropdownOpen, setIsSpeechDropdownOpen] = useState(false);

  return (
    <section id="services" className="section-padding gradient-peach">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Our Services</h2>
          <p className="text-muted-foreground mt-2 text-lg">Comprehensive care for every child's unique needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-foreground/70" />
              </div>
              {service.title === "Speech and Language Intervention" ? (
                <button
                  type="button"
                  onClick={() => setIsSpeechDropdownOpen((prev) => !prev)}
                  className="w-full text-left flex items-center justify-between gap-2 mb-2"
                  aria-expanded={isSpeechDropdownOpen}
                >
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isSpeechDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              )}
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>

              {service.title === "Speech and Language Intervention" && (
                <AnimatePresence initial={false}>
                  {isSpeechDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 overflow-hidden rounded-xl border border-border bg-background/60"
                    >
                      {speechAndLanguageMainServices.map((item) => (
                        <li
                          key={item}
                          className="px-4 py-2 text-sm text-foreground/85 border-b border-border last:border-b-0"
                        >
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
