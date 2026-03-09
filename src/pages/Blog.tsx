import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Speech Delays in Toddlers",
    excerpt: "Learn about the key milestones in speech development and when to seek professional help for your little one.",
    author: "Dr. Priya Sharma",
    date: "March 5, 2026",
    category: "Speech Development",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "5 Fun Activities to Boost Your Child's Language Skills",
    excerpt: "Simple, everyday activities that can make a huge difference in your child's communication abilities.",
    author: "Anita Desai",
    date: "February 20, 2026",
    category: "Tips & Activities",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "What is AAC and How Can It Help?",
    excerpt: "Augmentative and Alternative Communication devices open doors for children who struggle with verbal speech.",
    author: "Dr. Priya Sharma",
    date: "February 10, 2026",
    category: "AAC",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "The Role of Parents in Speech Therapy",
    excerpt: "Discover how parental involvement can accelerate progress and create a supportive environment at home.",
    author: "Meera Kapoor",
    date: "January 28, 2026",
    category: "Parent Guidance",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Stuttering in Children: Myths vs Facts",
    excerpt: "Debunking common misconceptions about stuttering and understanding evidence-based treatment approaches.",
    author: "Dr. Priya Sharma",
    date: "January 15, 2026",
    category: "Fluency",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "How Teletherapy is Changing Speech Pathology",
    excerpt: "Virtual speech therapy sessions are making quality care accessible to families everywhere.",
    author: "Anita Desai",
    date: "January 3, 2026",
    category: "Teletherapy",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Speech Therapy Blog | CommUniqueCate"
        description="Read practical tips, expert guidance, and evidence-based insights on children's speech and language development."
        canonicalPath="/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CommUniqueCate Blog",
          url: "https://communiquecate.in/blog",
          description:
            "Insights and guidance on speech and language development from speech-language experts.",
        }}
      />
      <Navbar />
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights, tips, and stories from our Speech Language Pathologists to help your child thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl text-foreground mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <Button variant="ghost" asChild className="mt-3 w-full justify-between text-primary">
                      <Link to={`/blog/${post.id}`}>Read More <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
