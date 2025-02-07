import { useUser } from "@/contexts/UserContext";
import NameInput from "./NameInput";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function Chat() {
  //1: saber o nome do usuário

  const userCtx = useUser();

  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  //2: historico de mensagens
  //3: input de add mensagens

  return (
    <div className="border border-white/30 rounded-md">
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatMessages />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={"Bot"} />
      </div>
    </div>
  );
}
