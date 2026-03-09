import { motion } from "framer-motion";
import { Heart, Target, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "We meet every child and family with empathy, patience, and respect at every step of therapy.",
  },
  {
    icon: Target,
    title: "Goal-Led Care",
    description:
      "Each therapy plan is customized with clear milestones, practical home strategies, and measurable progress.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Practice",
    description:
      "Our methods are grounded in current speech-language therapy standards and adapted to each child.",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description:
      "Parents and caregivers are active partners, so growth continues outside every session.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About Us | CommUniqueCate"
        description="Learn about CommUniqueCate's mission, vision, and values in delivering child-centered online speech therapy and family guidance."
        canonicalPath="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About CommUniqueCate",
          url: "https://communiquecate.in/about",
          description:
            "CommUniqueCate's mission, vision, and values for online speech therapy support.",
        }}
      />
      <Navbar />

      <section className="pt-28 pb-14 px-4 gradient-peach">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl text-foreground"
          >
            About CommUniqueCate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We help children build confident communication through structured online
            speech therapy, family coaching, and practical support tailored to each
            child&apos;s unique needs.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-7 shadow-sm"
          >
            <h2 className="font-display text-4xl text-foreground mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To make high-quality speech therapy accessible and actionable for families
              everywhere by combining clinical expertise with warm, child-friendly care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-7 shadow-sm"
          >
            <h2 className="font-display text-4xl text-foreground mb-3">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A future where every child has the tools, voice, and confidence to express
              themselves fully in home, school, and social life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding gradient-peach">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg mt-2">
              Principles that guide every consultation and therapy session.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-8 shadow-sm">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Book a consultation and get a clear plan for your child&apos;s communication
            growth.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full px-8">
            <Link to="/#contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
