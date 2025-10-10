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
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground">MediMate</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/chat')}
            className="rounded-xl hover:bg-primary/10 font-semibold"
          >
            Sign In
          </Button>
        </header>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8">
            <span className="text-sm font-semibold text-primary">Built for Students</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Understand your healthcare costs{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              before you step into the clinic
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Get instant, AI-powered cost estimates for common treatments in your area.
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
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-7 rounded-2xl border-2 border-primary/30 hover:bg-primary/5"
            >
              How It Works
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
              <h3 className="text-xl font-bold text-foreground mb-3">Instant Estimates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get cost ranges in seconds. No waiting, no confusion—just clarity.
              </p>
            </div>
          </div>

          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-md">
                <Shield className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Reliable Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Based on real healthcare pricing data from providers in your area.
              </p>
            </div>
          </div>

          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-md">
                <TrendingUp className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Easy to Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Just chat naturally. No forms, no jargon—describe what you need.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm rounded-3xl p-12 border-2 border-primary/20 shadow-xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">How It Works</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Describe Your Situation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tell MediMate what treatment you need or symptoms you're experiencing—just like texting a friend.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Get Instant Estimates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive cost ranges based on your location, insurance, and local provider data.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Make Informed Decisions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compare options, understand cost factors, and choose the best care for your budget.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl transition-all text-lg px-10 py-7 rounded-2xl"
            >
              Try MediMate Now
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© 2024 MediMate. Built for students, by students.</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
