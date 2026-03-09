import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vidhya",
    text: "Her improvement under your direction has been nothing short of extraordinary. Your commitment, therapy style, and constant encouragement have been invaluable. You taught me how to train her at home using play-based learning and functional communication.",
  },
  {
    name: "Divya S.",
    text: "My daughter was 2.4 years old and completely non-verbal — not even using gestures or making eye contact. By the time she turned 3.2, she was fully verbal, and we were joyfully discharged from therapy. Truly an angel in our lives.",
  },
  {
    name: "Esther",
    text: "Initially he had only one-two words but now he has started with sentences. He enjoys coming for sessions and has been given different activities which he is interested in. He has improved a lot from the initial to now.",
  },
  {
    name: "Amala",
    text: "She gave us a clear picture about our child's problem and counselled us on different ways to communicate. She made us realise how a holistic approach is important for the future development of our child.",
  },
  {
    name: "Siddharth",
    text: "He was once dismissed from a play school because at the age of four he was unable to understand or speak. After the therapist took over my child's care, we saw a difference within three to four weeks.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Why They Love Us</h2>
          <p className="text-muted-foreground text-lg mb-10">Real stories from real families</p>
        </motion.div>

        <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-sm min-h-[260px] flex flex-col justify-center">
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <p className="mt-6 font-bold text-primary text-lg">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
