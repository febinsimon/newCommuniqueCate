import { motion } from "framer-motion";
import { CalendarCheck, Video, ClipboardList, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book an Appointment", desc: "Click 'Book an Appointment' to get started." },
  { icon: Video, title: "Connect Online", desc: "Meet our Speech Language Pathologist for a 30-minute session via video call." },
  { icon: ClipboardList, title: "Discuss Concerns", desc: "Share concerns about speech, fluency, articulation, or language delays." },
  { icon: Lightbulb, title: "Get Expert Insights", desc: "Receive assessment, diagnosis, and recommended management options." },
  { icon: Rocket, title: "Start Your Journey", desc: "Choose to begin sessions with a structured, personalised plan." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">How It Works</h2>
          <p className="text-muted-foreground mt-2 text-lg">Five simple steps to better communication</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-center gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.desc}</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
