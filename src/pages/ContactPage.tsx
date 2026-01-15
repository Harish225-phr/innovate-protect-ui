import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Clock, Calendar } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Protect Your{" "}
                <span className="gradient-text">Innovation</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Schedule a free consultation with our patent experts and discover how we can safeguard your intellectual property.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">For general inquiries</p>
                  <a href="mailto:contact@contriveinsight.com" className="text-primary hover:underline">
                    contact@contriveinsight.com
                  </a>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">Mon-Fri, 9am-6pm PST</p>
                  <a href="tel:+15551234567" className="text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">Our headquarters</p>
                  <p className="text-foreground">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">Schedule a Consultation</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and one of our IP specialists will get back to you within 24 hours.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <Input
                          placeholder="John"
                          className="bg-secondary/50 border-border focus:border-primary h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <Input
                          placeholder="Doe"
                          className="bg-secondary/50 border-border focus:border-primary h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          className="bg-secondary/50 border-border focus:border-primary h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-secondary/50 border-border focus:border-primary h-12"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <Input
                        placeholder="Your Company Inc."
                        className="bg-secondary/50 border-border focus:border-primary h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                      <select className="w-full h-12 px-4 rounded-lg bg-secondary/50 border border-border focus:border-primary text-foreground">
                        <option value="">Select a service</option>
                        <option value="filing">Patent Filing</option>
                        <option value="search">Patent Search & Analysis</option>
                        <option value="portfolio">Portfolio Management</option>
                        <option value="strategy">IP Strategy Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Project</label>
                      <Textarea
                        placeholder="Describe your invention or IP needs..."
                        rows={5}
                        className="bg-secondary/50 border-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button variant="hero" size="xl" className="w-full group">
                      Submit Request
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
