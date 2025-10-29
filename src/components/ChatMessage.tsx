import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "ai";
  content: string;
  timestamp?: string;
}

export const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  const isUser = role === "user";
  
  return (
    <div className={cn(
      "flex gap-3 message-enter",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="relative flex-shrink-0 mt-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-sm opacity-30" />
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-3xl px-5 py-4 shadow-sm",
        isUser 
          ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground"
          : "bg-[hsl(var(--chat-ai))] text-[hsl(var(--chat-ai-foreground))] border-2 border-primary/20"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
        )}
      </div>
      
      {isUser && (
        <div className="relative flex-shrink-0 mt-1">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent rounded-2xl blur-sm opacity-30" />
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-md">
            <span className="text-accent-foreground font-bold text-sm">U</span>
          </div>
        </div>
      )}
    </div>
  );
};
