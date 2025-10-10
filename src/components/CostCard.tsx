import { DollarSign } from "lucide-react";

interface CostCardProps {
  treatment: string;
  priceRange: string;
  location: string;
  explanation: string;
}

export const CostCard = ({ treatment, priceRange, location, explanation }: CostCardProps) => {
  return (
    <div className="relative bg-gradient-to-br from-cost-card to-white border-2 border-[hsl(var(--cost-card-border))] rounded-3xl p-6 space-y-4 message-enter shadow-md overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-2xl blur opacity-40" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
            <DollarSign className="h-7 w-7 text-accent-foreground" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-2">{treatment}</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-2">{priceRange}</div>
          <p className="text-sm text-muted-foreground font-medium">{location}</p>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-primary/10 relative z-10">
        <p className="text-sm text-foreground leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
};
