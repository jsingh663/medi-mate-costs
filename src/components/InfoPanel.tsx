import { Info, FileText, HelpCircle } from "lucide-react";
import { Card } from "./ui/card";

const infoItems = [
  {
    icon: Info,
    title: "Why do prices vary?",
    content: "Healthcare costs differ based on insurance coverage, provider type, location, and test complexity."
  },
  {
    icon: FileText,
    title: "What's a CPT code?",
    content: "Current Procedural Terminology codes are standardized codes used to describe medical procedures."
  },
  {
    icon: HelpCircle,
    title: "How accurate are estimates?",
    content: "Our estimates are based on recent data, but actual costs may vary. Always confirm with your provider."
  }
];

export const InfoPanel = () => {
  return (
    <div className="relative w-80 border-l bg-gradient-to-b from-info-panel to-white p-6 space-y-5 overflow-y-auto">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      <h2 className="font-bold text-xl text-foreground mb-4 relative z-10">Learn More</h2>
      
      {infoItems.map((item, index) => (
        <Card key={index} className="relative p-5 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-primary/10 hover:border-primary/30 rounded-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary rounded-xl blur opacity-20" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          </div>
        </Card>
      ))}
      
      <div className="pt-6 mt-6 border-t-2 border-primary/10 relative z-10">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 border border-primary/20">
          <p className="text-xs text-foreground leading-relaxed font-medium">
            MediMate helps college students understand healthcare costs. We're continuously improving our estimates.
          </p>
        </div>
      </div>
    </div>
  );
};
