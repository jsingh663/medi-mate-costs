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
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-primary font-semibold text-sm">M</span>
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-3",
        isUser 
          ? "bg-[hsl(var(--chat-user))] text-[hsl(var(--chat-user-foreground))]"
          : "bg-[hsl(var(--chat-ai))] text-[hsl(var(--chat-ai-foreground))] border border-border"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
        )}
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-primary-foreground font-semibold text-sm">U</span>
        </div>
      )}
    </div>
  );
};
