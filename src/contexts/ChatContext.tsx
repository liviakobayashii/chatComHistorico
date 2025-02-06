import { Message } from "@/types/message";
import { createContext, ReactNode } from "react";

type ChatContextType = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

export default function ChateProvider({ children }: { children: ReactNode }) {
  return <ChatContext.Provider value={}>{children}</ChatContext.Provider>;
}
