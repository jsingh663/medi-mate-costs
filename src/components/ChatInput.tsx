import { useState } from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

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
    <div className="relative border-t-2 border-primary/10 bg-gradient-to-t from-primary/5 to-white px-6 py-5 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="flex gap-3 items-end relative z-10">
        <Button variant="ghost" size="icon" className="flex-shrink-0 rounded-2xl hover:bg-primary/10 border-2 border-transparent hover:border-primary/20">
          <Paperclip className="h-5 w-5 text-primary" />
        </Button>
        
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your condition or treatment..."
            className="min-h-[56px] max-h-[120px] resize-none pr-12 rounded-3xl border-2 border-primary/20 focus:border-primary shadow-sm bg-white"
          />
        </div>
        
        <Button 
          onClick={handleSend}
          disabled={!message.trim()}
          className="flex-shrink-0 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all px-6 py-6"
        >
          <Send className="h-5 w-5 mr-2" />
          Send
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center font-medium relative z-10">
        Estimates are approximate. Always verify with your provider.
      </p>
    </div>
  );
};
