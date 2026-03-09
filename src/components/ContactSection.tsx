import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Consultation Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Concern:
${formData.message}`;

    const whatsappUrl =
      "https://wa.me/918138892731?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding gradient-peach">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Book your free consultation today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-sm"
          >
            <h3 className="font-bold text-xl mb-6">Send us a message</h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
              />

              <textarea
                name="message"
                placeholder="Tell us about your concerns..."
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted border-none outline-none text-foreground placeholder:text-muted-foreground resize-none focus:ring-2 focus:ring-primary/30"
              />

              <Button type="submit" size="lg" className="rounded-full mt-2">
                Book Appointment
              </Button>

            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center shrink-0">
                <a href="tel:+918138892731">
                  <Phone className="w-5 h-5 text-primary" />
                </a>
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <a href="tel:+918138892731" className="text-muted-foreground hover:text-primary">
                  +91 8138892731
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center shrink-0">
                <a href="mailto:communiquecate7@gmail.com">
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
              <div>
                <p className="font-bold">Email</p>
                <a
                  href="mailto:communiquecate7@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  communiquecate7@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-muted-foreground">
                  Online sessions available worldwide
                </p>
              </div>
            </div>

            <div className="mt-4 bg-card rounded-2xl p-6 shadow-sm">
              <p className="font-bold text-lg text-secondary mb-2">
                🎉 Free First Consultation!
              </p>
              <p className="text-muted-foreground text-sm">
                Connect with our licensed Speech Language Pathologist for a complimentary 30-minute assessment session.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;