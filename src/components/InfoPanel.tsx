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
    <div className="w-80 border-l bg-[hsl(var(--info-panel))] p-6 space-y-4 overflow-y-auto">
      <h2 className="font-semibold text-foreground mb-4">Learn More</h2>
      
      {infoItems.map((item, index) => (
        <Card key={index} className="p-4 bg-card hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          </div>
        </Card>
      ))}
      
      <div className="pt-4 mt-4 border-t">
        <p className="text-xs text-muted-foreground leading-relaxed">
          MediMate helps college students understand healthcare costs. We're continuously improving our estimates.
        </p>
      </div>
    </div>
  );
};
