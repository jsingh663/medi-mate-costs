import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur opacity-40" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground">PSIP Navigator</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8">
            <span className="text-sm font-semibold text-primary">For Penn Students</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your guide to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              understanding and using your Penn Student Insurance Plan
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Navigating health insurance doesn't have to be confusing. PSIP Navigator is a simple, interactive tool designed to help University of Pennsylvania students make sense of their Penn Student Insurance Plan—what's covered, how to access care, and how to make the most of your benefits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all text-lg px-8 py-7 rounded-2xl group"
            >
              Start Chat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-md">
                <Zap className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Understand Your Benefits</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get a clear breakdown of how your health benefits work. Learn the structure of your plan—deductibles, copays, out-of-pocket maximums—and what those terms really mean for you.
              </p>
            </div>
          </div>

          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-md">
                <Shield className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Find Out What's Covered</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quickly explore services covered (from annual checkups to specialist visits), prescription coverage (what medications are included and how to fill them), and external benefits like digital health programs and mental health support.
              </p>
            </div>
          </div>

          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-md">
                <TrendingUp className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Navigate Referrals with Confidence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not sure when you need a referral? The Navigator helps you understand when to see your PCP first and how to get a referral for specialists, labs, or imaging—saving you time and avoiding unexpected costs.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm rounded-3xl p-12 border-2 border-primary/20 shadow-xl mb-12">
          <h2 className="text-4xl font-bold text-foreground text-center mb-6">Coming Soon</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            We're actively expanding our platform to cover more of your healthcare needs, including:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                Cost estimates for appointments, labs, and services
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                In-network provider information
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                Guidance on disputing claims
              </p>
            </div>
          </div>

          <div className="text-center p-4 bg-accent/10 rounded-2xl border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Our chatbot doesn't yet support these questions and won't provide responses related to them—stay tuned as we continue to roll out new capabilities.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all text-lg px-10 py-7 rounded-2xl"
            >
              Try PSIP Navigator Now
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© 2024 PSIP Navigator. Built for Penn students.</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
