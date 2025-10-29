import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const ChatHeader = () => {
  return (
    <div className="relative border-b border-border/50 bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur opacity-40" />
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-lg font-bold text-foreground">
              PSIP Navigator
            </h1>
            <p className="text-xs text-muted-foreground">
              Ask Nelly about your benefits
            </p>
          </div>
        </div>

        <Button variant="outline" className="gap-2 rounded-lg">
          <span className="text-sm">Nelly 1.0</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
