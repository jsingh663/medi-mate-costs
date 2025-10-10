import { DollarSign } from "lucide-react";

interface CostCardProps {
  treatment: string;
  priceRange: string;
  location: string;
  explanation: string;
}

export const CostCard = ({ treatment, priceRange, location, explanation }: CostCardProps) => {
  return (
    <div className="bg-[hsl(var(--cost-card))] border-2 border-[hsl(var(--cost-card-border))] rounded-2xl p-4 space-y-3 message-enter">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
          <DollarSign className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{treatment}</h3>
          <div className="text-2xl font-bold text-accent mb-1">{priceRange}</div>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      
      <div className="bg-card/50 rounded-lg p-3">
        <p className="text-sm text-foreground/80 leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
};
