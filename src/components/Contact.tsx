import { format } from "date-fns";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { personalInfo, socialLinks, emailJSConfig } from "@/data/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const { firstName, lastName, email, subject, message } = formData;

    // TEMPLATE PARAMS - Match these with your EmailJS template variables
    const templateParams = {
      to_name: personalInfo.name,
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      subject: subject,
      message: message,
      // Adding common redundant fields to ensure they match user's template
      name: `${firstName} ${lastName}`,
      email: email,
      reply_to: email,
      date: format(new Date(), "PPpp"),
      submitted_at: format(new Date(), "PPpp"),
    };

    try {
      // Keys from config
      const SERVICE_ID = emailJSConfig.serviceId;
      const TEMPLATE_ID = emailJSConfig.templateId;
      const PUBLIC_KEY = emailJSConfig.publicKey;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      const errorMessage =
        error && typeof error === 'object' && 'text' in error
          ? String(error.text)
          : error && typeof error === 'object' && 'message' in error
            ? String(error.message)
            : "Failed to send message";
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinksData = [
    ...(socialLinks.github ? [{
      icon: Github,
      label: "GitHub",
      href: socialLinks.github,
      color: "border-secondary text-secondary hover:bg-secondary/10"
    }] : []),
    ...(socialLinks.linkedin ? [{
      icon: Linkedin,
      label: "LinkedIn",
      href: socialLinks.linkedin,
      color: "border-accent text-accent hover:bg-accent/10"
    }] : []),
    ...(socialLinks.facebook ? [{
      icon: Facebook,
      label: "Facebook",
      href: socialLinks.facebook,
      color: "border-blue-600 text-blue-600 hover:bg-blue-600/10"
    }] : []),
    ...(socialLinks.instagram ? [{
      icon: Instagram,
      label: "Instagram",
      href: socialLinks.instagram,
      color: "border-pink-500 text-pink-500 hover:bg-pink-500/10"
    }] : []),
    ...(socialLinks.whatsapp ? [{
      icon: Phone,
      label: "WhatsApp",
      href: socialLinks.whatsapp,
      color: "border-green-500 text-green-500 hover:bg-green-500/10"
    }] : []),
    ...(personalInfo.email ? [{
      icon: Mail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      color: "border-primary text-primary hover:bg-primary/10"
    }] : [])
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a friendly chat about technology and development.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-card-glass/50 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-primary`}>
                      <contact.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-heading font-semibold mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {socialLinksData.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                      disabled={isSending}
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                      disabled={isSending}
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                    disabled={isSending}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                    disabled={isSending}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    required
                    disabled={isSending}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  disabled={isSending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;