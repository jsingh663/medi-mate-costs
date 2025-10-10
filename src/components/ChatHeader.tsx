import { HelpCircle, Settings } from "lucide-react";
import { Button } from "./ui/button";

export const ChatHeader = () => {
  return (
    <header className="border-b bg-card px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">M</span>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground flex items-center gap-2">
            MediMate
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              Beta
            </span>
          </h1>
          <p className="text-xs text-muted-foreground">Healthcare Cost Transparency</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
