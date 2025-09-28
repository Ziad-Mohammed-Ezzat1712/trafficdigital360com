  
import React, { useState } from "react";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "This is a sample reply 🤖" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FiMessageCircle size={24} />
        </button>
      ) : (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-2xl">
            <h3 className="font-semibold">ChatBot</h3>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-blue-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;


