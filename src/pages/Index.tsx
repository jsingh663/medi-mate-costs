import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { CostCard } from "@/components/CostCard";
import { ChatInput } from "@/components/ChatInput";
import { InfoPanel } from "@/components/InfoPanel";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  type?: "text" | "cost-card";
  costData?: {
    treatment: string;
    priceRange: string;
    location: string;
    explanation: string;
  };
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hey there! 👋 I'm PSIP Navigator, your guide to understanding the Penn Student Insurance Plan.\n\nI can help you understand your benefits, what's covered, and how to navigate your healthcare needs. What would you like to know about your insurance plan?",
      type: "text"
    }
  ]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      type: "text"
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      // Example response with cost card
      if (content.toLowerCase().includes("x-ray") || content.toLowerCase().includes("xray")) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: "I can help with that! Here's what an X-ray typically costs in your area:",
          type: "text"
        };
        
        const costMessage: Message = {
          id: (Date.now() + 2).toString(),
          role: "ai",
          content: "",
          type: "cost-card",
          costData: {
            treatment: "Standard X-Ray",
            priceRange: "$120 - $250",
            location: "Philadelphia, PA area",
            explanation: "Costs vary based on the body part being examined, your insurance coverage, and whether you visit an urgent care, hospital, or imaging center. Imaging centers are typically less expensive than hospitals."
          }
        };
        
        setMessages(prev => [...prev, aiMessage, costMessage]);
        
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 3).toString(),
            role: "ai",
            content: "Would you like me to compare costs at nearby facilities, or do you have questions about what your insurance might cover?",
            type: "text"
          };
          setMessages(prev => [...prev, followUp]);
        }, 800);
      } else {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: "I understand you need help with that. Could you tell me a bit more about the specific treatment or condition? For example:\n\n• What symptoms are you experiencing?\n• Do you know what type of test or treatment you need?\n• Do you have a diagnosis already?\n\nThis will help me give you the most accurate cost estimate!",
          type: "text"
        };
        setMessages(prev => [...prev, aiMessage]);
      }
    }, 1000);
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <div className="flex flex-col flex-1 overflow-hidden">
        <ChatHeader />
        
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id}>
                {message.type === "cost-card" && message.costData ? (
                  <CostCard {...message.costData} />
                ) : (
                  <ChatMessage role={message.role} content={message.content} />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <ChatInput onSend={handleSendMessage} />
      </div>
      
      <InfoPanel />
    </div>
  );
};

export default Index;
