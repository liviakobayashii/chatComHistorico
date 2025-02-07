import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

export default function ChatInput({ name }: { name: string }) {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState("");

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLocaleLowerCase() === "enter") {
      if (textInput.trim() !== "") {
        chatCtx?.addMessage(name, textInput.trim());
        setTextInput("");
      }
    }
  };

  return (
    <input
      type="text"
      className="w-full bg-transparent text-white text-md outline-none"
      placeholder={`${name}, digite uma mensagem e aperte ENTER`}
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      onKeyUp={handleKeyUpAction}
    />
  );
}
