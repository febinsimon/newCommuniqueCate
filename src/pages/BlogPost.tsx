import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, { title: string; author: string; date: string; category: string; image: string; content: string }> = {
  "1": {
    title: "Understanding Speech Delays in Toddlers",
    author: "Dr. Priya Sharma",
    date: "March 5, 2026",
    category: "Speech Development",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop",
    content: `Speech development is one of the most exciting milestones in a child's early years. However, every child develops at their own pace, and it's natural for parents to wonder if their little one is on track.

## Key Milestones to Watch

**By 12 months**, most children can say a few simple words like "mama" or "dada" and understand simple instructions like "come here."

**By 18 months**, a child's vocabulary typically includes around 20 words, and they begin to combine words into short phrases.

**By 2 years**, children usually have a vocabulary of about 50 words and start forming two-word sentences like "want milk" or "go park."

**By 3 years**, most children can speak in short sentences and be understood by familiar adults about 75% of the time.

## When to Seek Help

While every child develops differently, there are some signs that may indicate a speech delay:

- **No babbling** by 12 months
- **No single words** by 16 months
- **No two-word phrases** by 24 months
- **Loss of previously acquired speech** at any age
- **Difficulty being understood** by familiar people after age 3

## What Causes Speech Delays?

Speech delays can result from various factors including hearing issues, oral-motor problems, developmental disorders, or simply a slower pace of development. In many cases, early intervention through speech therapy can make a tremendous difference.

## The Importance of Early Intervention

Research consistently shows that the earlier a speech delay is identified and addressed, the better the outcomes. Children's brains are incredibly adaptable in the early years, making it the ideal time to build strong communication foundations.

If you have concerns about your child's speech development, don't hesitate to reach out to a qualified speech-language pathologist. A professional evaluation can provide clarity and, if needed, a tailored therapy plan to help your child thrive.

---

*At CommUniqueCate, we specialize in early intervention and are here to support your child's communication journey every step of the way.*`,
  },
  "2": {
    title: "5 Fun Activities to Boost Your Child's Language Skills",
    author: "Anita Desai",
    date: "February 20, 2026",
    category: "Tips & Activities",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=1200&h=600&fit=crop",
    content: `Building language skills doesn't have to feel like work! Here are five engaging activities you can incorporate into your daily routine.

## 1. Narrate Your Day

Talk about everything you're doing as you go through your day. "Now we're washing the apples. The water is cold! Let's put them in the blue bowl." This constant exposure to language helps children learn new words in context.

## 2. Read Together Every Day

Reading is one of the most powerful tools for language development. Point to pictures, ask questions, and let your child turn the pages. Don't worry about finishing the story — the interaction matters more than the plot.

## 3. Sing Songs and Nursery Rhymes

Music and rhythm are natural language teachers. Songs with repetitive phrases and actions (like "Wheels on the Bus" or "Head, Shoulders, Knees and Toes") help children learn patterns, vocabulary, and pronunciation.

## 4. Play Pretend

Imaginative play encourages children to use language creatively. Set up a pretend kitchen, doctor's office, or shop. Take turns being different characters and model new vocabulary during play.

## 5. Expand Their Words

When your child says a word or short phrase, expand on it. If they say "dog," you might respond, "Yes! A big brown dog. The dog is running fast!" This technique, called expansion, naturally introduces more complex language.

## Bonus Tip: Follow Their Lead

Let your child choose the activity or topic. Children learn best when they're engaged and interested. If they're fascinated by trucks, talk about trucks! Use that natural motivation to build language skills.

---

*Remember, consistency matters more than perfection. Even a few minutes of focused language play each day can make a meaningful difference.*`,
  },
  "3": {
    title: "What is AAC and How Can It Help?",
    author: "Dr. Priya Sharma",
    date: "February 10, 2026",
    category: "AAC",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=600&fit=crop",
    content: `Augmentative and Alternative Communication (AAC) refers to methods and tools that supplement or replace spoken language for individuals who have difficulty communicating verbally.

## Types of AAC

### Low-Tech AAC
- Picture boards and communication books
- Symbol cards
- Letter boards

### High-Tech AAC
- Tablet-based communication apps
- Dedicated speech-generating devices
- Eye-tracking communication systems

## Who Benefits from AAC?

AAC can help children and adults with a variety of conditions including autism spectrum disorder, cerebral palsy, Down syndrome, apraxia of speech, and other conditions that affect verbal communication.

## Common Myths About AAC

**Myth: AAC will prevent a child from learning to speak.**
Fact: Research shows that AAC actually supports and often enhances verbal speech development.

**Myth: A child must have certain skills before starting AAC.**
Fact: There are no prerequisites for AAC. Everyone can benefit from having a way to communicate.

**Myth: AAC is only for children who can't speak at all.**
Fact: AAC can benefit anyone who needs support with communication, even those who have some verbal abilities.

## Getting Started with AAC

If you think your child might benefit from AAC, a speech-language pathologist can conduct an assessment and recommend the most appropriate system. The goal is always to find the best way for your child to express themselves and connect with others.

---

*At CommUniqueCate, we have extensive experience with AAC systems and can guide your family through the process of finding the right communication solution.*`,
  },
  "4": {
    title: "The Role of Parents in Speech Therapy",
    author: "Meera Kapoor",
    date: "January 28, 2026",
    category: "Parent Guidance",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&h=600&fit=crop",
    content: `Parents are the most important people in a child's communication journey. While speech therapists provide expert guidance, the real magic happens at home.

## Why Parental Involvement Matters

Children spend the majority of their time with family. The strategies practiced during therapy sessions need to be reinforced throughout the week to see the best results. Studies show that children whose parents actively participate in therapy make significantly faster progress.

## How You Can Help

### Create a Language-Rich Environment
Fill your home with opportunities for communication. Talk, sing, read, and play together as much as possible.

### Practice Without Pressure
Incorporate therapy strategies into natural, everyday activities. Mealtimes, bath time, and car rides are all opportunities for practice.

### Celebrate Small Wins
Every new sound, word, or sentence is a victory. Positive reinforcement builds confidence and motivation.

### Be Patient
Progress in speech therapy isn't always linear. Some weeks will show big leaps, others may seem slower. Trust the process.

### Communicate with Your Therapist
Share what's working at home and what's challenging. Your observations help the therapist adjust the plan for the best outcomes.

## You're Not Alone

It's natural to feel overwhelmed or unsure. A good speech therapist will coach you, answer your questions, and provide resources to make home practice manageable and enjoyable.

---

*At CommUniqueCate, we believe in a collaborative approach. We partner with parents to create lasting communication skills that extend far beyond the therapy room.*`,
  },
  "5": {
    title: "Stuttering in Children: Myths vs Facts",
    author: "Dr. Priya Sharma",
    date: "January 15, 2026",
    category: "Fluency",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1200&h=600&fit=crop",
    content: `Stuttering affects about 5% of all children at some point in their development. Understanding the facts can help parents respond with confidence and compassion.

## Common Myths

**Myth: Stuttering is caused by anxiety or nervousness.**
Fact: Stuttering is a neurological condition related to how the brain processes speech. While stress can worsen stuttering, it doesn't cause it.

**Myth: You should tell a child to "slow down" or "take a breath."**
Fact: These well-meaning instructions can actually increase pressure and make stuttering worse. Instead, model slow, relaxed speech yourself.

**Myth: Children will always outgrow stuttering.**
Fact: While many children do outgrow developmental stuttering, about 1% continue to stutter into adulthood. Early intervention improves outcomes.

**Myth: Stuttering is the parent's fault.**
Fact: Stuttering is not caused by parenting style. It has a strong genetic component and is related to brain differences in speech processing.

## What You Can Do

- **Listen patiently** without finishing their sentences
- **Maintain eye contact** and show you're engaged
- **Reduce time pressure** in conversations
- **Speak at a relaxed pace** yourself
- **Seek professional help** if stuttering persists for more than 6 months

## When to See a Speech Therapist

Consider an evaluation if your child shows signs of tension or struggle while speaking, avoids talking situations, or if stuttering is causing frustration or anxiety.

---

*Our fluency specialists at CommUniqueCate use evidence-based approaches to help children communicate with confidence and ease.*`,
  },
  "6": {
    title: "How Teletherapy is Changing Speech Pathology",
    author: "Anita Desai",
    date: "January 3, 2026",
    category: "Teletherapy",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&h=600&fit=crop",
    content: `The rise of teletherapy has transformed how speech pathology services are delivered, making quality care accessible to families regardless of their location.

## Benefits of Teletherapy

### Convenience
No travel time, no waiting rooms. Sessions happen from the comfort of your home, which can also help children feel more relaxed and engaged.

### Accessibility
Families in rural or underserved areas can access top-quality speech therapy that may not be available locally.

### Flexibility
Scheduling is often more flexible with teletherapy, making it easier to fit sessions into busy family routines.

### Natural Environment
Practicing speech skills in the home environment can lead to better generalization of skills to everyday life.

## Is Teletherapy Effective?

Research shows that teletherapy is just as effective as in-person therapy for many speech and language disorders. Children often engage well with the interactive digital tools and activities used in virtual sessions.

## Tips for Successful Teletherapy

- **Set up a quiet, distraction-free space** for sessions
- **Test your technology** beforehand (internet connection, camera, microphone)
- **Have materials ready** that your therapist requests
- **Stay nearby** (especially for younger children) to assist when needed
- **Follow through** with home practice assignments

## The Future of Speech Therapy

Teletherapy isn't replacing in-person care — it's expanding options. Many families now use a hybrid approach, combining virtual and in-person sessions for the best of both worlds.

---

*CommUniqueCate offers both in-person and teletherapy options to ensure every child receives the support they need, wherever they are.*`,
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-16 px-4 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button variant="ghost" asChild className="mb-6 text-primary">
              <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog</Link>
            </Button>

            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8"
            />

            <div className="prose prose-lg max-w-none text-foreground/85 
              prose-headings:font-display prose-headings:text-foreground 
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:mb-4 prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-ul:my-4 prose-li:my-1
              prose-hr:my-8 prose-hr:border-border">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
                if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
                if (line.startsWith('---')) return <hr key={i} />;
                if (line.startsWith('- **')) {
                  const match = line.match(/- \*\*(.+?)\*\*\s*(.*)/);
                  if (match) return <li key={i}><strong>{match[1]}</strong> {match[2]}</li>;
                }
                if (line.startsWith('- ')) return <li key={i}>{line.slice(2)}</li>;
                if (line.startsWith('**') && line.endsWith('**')) return <p key={i}><strong>{line.slice(2, -2)}</strong></p>;
                if (line.startsWith('**')) {
                  const match = line.match(/\*\*(.+?)\*\*\s*(.*)/);
                  if (match) return <p key={i}><strong>{match[1]}</strong> {match[2]}</p>;
                }
                if (line.startsWith('*') && line.endsWith('*')) return <p key={i}><em>{line.slice(1, -1)}</em></p>;
                if (line.trim() === '') return null;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
