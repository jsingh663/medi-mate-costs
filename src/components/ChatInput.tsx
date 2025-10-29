import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  
  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="border-t border-border/50 bg-card px-6 py-4 shadow-lg">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="flex gap-3 items-center">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your health plan benefits..."
            className="flex-1 h-12 rounded-xl border-input bg-card"
          />
          
          <Button 
            onClick={handleSend}
            disabled={!message.trim()}
            size="icon"
            className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          AI-powered assistant for navigating your health plan documents
        </p>
      </div>
    </div>
  );
};
