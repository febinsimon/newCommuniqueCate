import { motion } from "framer-motion";
import { Check } from "lucide-react";

const beneficiaries = [
  "Children experiencing delayed speech development or unclear pronunciation.",
  "Adults facing challenges like stuttering, voice issues, or speech difficulties following a stroke.",
  "Individuals with autism, ADHD, or other communication disorders seeking support.",
  "Parents and caregivers looking for expert advice to support their loved one's speech journey.",
  "Anyone unsure about whether speech therapy is the right step.",
];

const WhoCanBenefit = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Who Can Benefit?</h2>
          <p className="text-muted-foreground mt-2 text-lg">Our free consultation offers professional insight and a clear path forward</p>
        </motion.div>

        <div className="grid gap-4">
          {beneficiaries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-secondary" />
              </div>
              <p className="text-foreground/80">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanBenefit;
