import ChatUI from "@/components/chat/ui";
import { generateChatId } from "@/hooks/use-uuid";

export default function ChatPage() {
  return <ChatUI id={generateChatId()} />;
}
