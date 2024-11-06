"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatUI() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div className="flex flex-col h-screen">
      <header className="h-12 flex items-center justify-between px-4">
        {/* Header用のスペース */}
      </header>

      <main className="flex-1 overflow-hidden px-4">
        <ScrollArea className="h-full">
          <div className="max-w-4xl mx-auto py-8 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
                {m.content}
              </div>
            ))}
          </div>
        </ScrollArea>
      </main>

      <footer className="p-2 pb-0 print:hidden">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message here."
              className="p-4"
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                <span>Send</span>
              </Button>
            </div>
          </form>
        </div>
        <p className="my-2 text-center text-xs text-muted-foreground hidden sm:block">
          AI can make mistakes. Check important info.
        </p>
      </footer>
    </div>
  );
}
