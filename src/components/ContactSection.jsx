import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_o4liz9r",   
        "template_q5tewws",  
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "euAwI6BtrRRN1OXiP"    
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

           <div className="flex items-center gap-4 p-5 rounded-xl bg-card">
  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
    <Mail className="h-5 w-5 text-primary" />
  </div>
  <div className="text-left">
    <h4 className="font-semibold leading-none mb-1">Email</h4>
    <a
      href="mailto:hasinilakshika56@gmail.com"
      className="text-sm text-muted-foreground hover:text-primary"
    >
      hasinilakshika56@gmail.com
    </a>
  </div>
</div>

           <div className="flex items-center gap-4 p-5 rounded-xl bg-card">
  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
    <MapPin className="h-5 w-5 text-primary" />
  </div>
  <div className="text-left">
    <h4 className="font-semibold leading-none mb-1">Location</h4>
    <p className="text-sm text-muted-foreground">
      Yakkala, Sri Lanka
    </p>
  </div>
</div>


            <div>
              <h4 className="font-medium mb-3">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/hasinilakshika" target="_blank">
                  <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-input bg-background"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-input bg-background"
              />

              <textarea
                rows={4}
                name="message"
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-input bg-background resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
