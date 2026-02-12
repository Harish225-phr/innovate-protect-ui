import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Contact Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Info */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Protect Your Innovation?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Schedule a free consultation with our patent experts and discover how we can safeguard your intellectual property.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a href="tel:+917015189070" className="text-foreground font-medium hover:text-primary transition-colors block">+91 70151 89070</a>
                    <a href="tel:+918295348595" className="text-foreground font-medium hover:text-primary transition-colors block">+91 82953 48595</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:nihal@contriveinsight.com" className="text-foreground font-medium hover:text-primary transition-colors">nihal@contriveinsight.com</a>
                    <br />
                    <a href="mailto:info@contriveinsight.com" className="text-foreground font-medium hover:text-primary transition-colors">info@contriveinsight.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground font-medium">Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                <Textarea
                  placeholder="Tell us about your invention or IP needs..."
                  rows={4}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
                <Button variant="hero" className="w-full group">
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="ContriveInsight" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold text-foreground">
                  Contrive<span className="text-primary">Insight</span>
                </span>
              </Link>
              <span className="text-muted-foreground text-sm">
                © 2025 ContriveInsight. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-6 text-sm">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/process" className="text-muted-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
