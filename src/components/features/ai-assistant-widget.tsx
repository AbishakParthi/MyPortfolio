"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { useChat, UIMessage } from "@ai-sdk/react"

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [localInput, setLocalInput] = React.useState("")
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    messages: [
      { id: '1', role: "assistant", parts: [{ type: 'text', text: "Hi there! I'm Abishake's AI assistant. Ask me anything about his skills, experience, or projects!" }] }
    ] as UIMessage[]
  })

  const isLoading = status === 'submitted' || status === 'streaming';

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localInput.trim()) return;
    
    sendMessage({ role: 'user', parts: [{ type: 'text', text: localInput }] });
    setLocalInput("");
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-electric-blue to-purple-600 rounded-full text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          key="chat-window"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-medium text-white">AI Assistant</span>
              </div>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-purple-600 text-white rounded-br-none" 
                        : "bg-white/10 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {/* @ts-ignore: Handle both legacy content and new parts API */}
                    {msg.content || msg.parts?.filter(p => p.type === 'text').map(p => (p as any).text).join('')}
                  </div>
                </div>
              ))}
              {error && (
                <div className="flex justify-start">
                  <div className="bg-red-500/20 text-red-200 border border-red-500/30 p-3 rounded-2xl rounded-bl-none text-sm max-w-[80%]">
                    ⚠️ Oops! {error.message || "Something went wrong connecting to the AI."}
                  </div>
                </div>
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-200 p-3 rounded-2xl rounded-bl-none text-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleFormSubmit} className="p-4 border-t border-white/10 bg-white/5 flex gap-2">
              <input
                type="text"
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                disabled={isLoading}
                placeholder="Ask me anything..."
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={!localInput.trim() || isLoading}
                className="p-2 bg-purple-600 rounded-full text-white disabled:opacity-50 transition-opacity hover:bg-purple-500 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
      )}
    </>
  )
}
