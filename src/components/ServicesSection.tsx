import { motion } from "framer-motion";
import { MessageCircle, Brain, Smartphone, Users, BookOpen, Sparkles, Laptop } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Speech Support",
    description: "Helping children pronounce sounds clearly so others can understand them better.",
    color: "bg-peach",
  },
  {
    icon: BookOpen,
    title: "Language Development",
    description: "Building skills to understand instructions, form sentences, and express ideas step by step.",
    color: "bg-blush",
  },
  {
    icon: Brain,
    title: "Neurodivergent Support",
    description: "Supporting autistic and neurodivergent children to communicate and build independence with respect.",
    color: "bg-muted",
  },
  {
    icon: Smartphone,
    title: "Augmentative and Alternative Communication",
    description: "Introducing communication boards or devices for non-speaking and speaking children alike.",
    color: "bg-peach",
  },
  {
    icon: Users,
    title: "Parent Guidance",
    description: "Guiding parents on how to support communication at home in everyday situations.",
    color: "bg-blush",
  },
  {
    icon: Laptop,
    title: "Teletherapy",
    description: "Provide online therapy sessions that are structured, interactive, and effective, allowing your child to receive support from the comfort of home.",
    color: "bg-blush",
  },
  
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
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
