import { HelpCircle, Settings } from "lucide-react";
import { Button } from "./ui/button";

export const ChatHeader = () => {
  return (
    <header className="relative border-b bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 px-6 py-6 flex items-center justify-between overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur opacity-40" />
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-xl">M</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            MediMate
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30">
              Beta
            </span>
          </h1>
          <p className="text-sm text-muted-foreground font-medium">Healthcare Cost Transparency</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 relative z-10">
        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10">
          <HelpCircle className="h-5 w-5 text-primary" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10">
          <Settings className="h-5 w-5 text-primary" />
        </Button>
      </div>
    </header>
  );
};
