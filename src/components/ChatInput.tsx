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
    <div className="border-t bg-card px-6 py-4">
      <div className="flex gap-3 items-end">
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your condition or treatment..."
            className="min-h-[50px] max-h-[120px] resize-none pr-12 rounded-2xl"
          />
        </div>
        
        <Button 
          onClick={handleSend}
          disabled={!message.trim()}
          className="flex-shrink-0 rounded-xl"
        >
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Estimates are approximate. Always verify with your provider.
      </p>
    </div>
  );
};
