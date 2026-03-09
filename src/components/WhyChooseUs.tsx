import { motion } from "framer-motion";
import { Award, DollarSign, FileText, Gamepad2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Licensed Speech Experts",
    desc: "Certified pathologists with expertise in speech clarity, language development, and more — delivered with care, online.",
  },
  {
    icon: DollarSign,
    title: "No Fees to Start",
    desc: "Book a zero-cost session to understand if therapy is needed — no obligations, just honest insights.",
  },
  {
    icon: FileText,
    title: "Custom Action Plan",
    desc: "Get a clear plan with therapy goals, home routines, and progress tracking tailored for you.",
  },
  {
    icon: Gamepad2,
    title: "Interactive Learning",
    desc: "Access guided speech exercises, real-time tools, and supportive language games — all from home.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding gradient-peach">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Why Choose Us?</h2>
          <p className="text-muted-foreground mt-2 text-lg">Your partner in communication growth — online & hassle-free</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-5 items-start bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>
                <p className="text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
