import { Heart, Instagram, Facebook, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-3xl text-primary-foreground">Communiquecate</p>
        <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for every child's voice
        </p>
        <div className="flex flex-col items-center gap-3">

  <div className="flex gap-6">
    <a href="#home" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Home</a>
    <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Services</a>
    <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Contact</a>
  </div>

  <div className="flex gap-4">
    <a href="https://www.instagram.com/comm_unique_cate?igsh=MWpwbmdwbHFweGI4cg%3D%3D" target="_blank" rel="noopener noreferrer">
      <Instagram className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
    </a>

    <a href="https://www.facebook.com/communiquecate" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
    </a>

    <a href="https://www.linkedin.com/in/communiquecate" target="_blank" rel="noopener noreferrer">
      <Linkedin className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
    </a>
  </div>

</div>
      </div>
    </footer>
  );
};

export default Footer;
