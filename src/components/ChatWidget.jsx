
// ChatWidget.jsx (Optional)
import React, { useState } from 'react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const mockReply = (msg) => {
    if (msg.toLowerCase().includes('sell')) return 'You can sell your license by filling out the contact form!';
    return 'Please contact us for more details!';
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { type: 'user', text: input };
    setMessages([...messages, newMsg, { type: 'bot', text: mockReply(input) }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 w-60 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-blue-400 dark:text-white mb-2">Chat with us</h3>
      <div className="h-40 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-sm p-2 rounded ${msg.type === 'user' ? 'bg-blue-100 dark:bg-blue-900 text-right' : 'bg-gray-200 dark:bg-gray-600 text-left'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" placeholder="Ask a question..." />
      <button onClick={sendMessage} className="mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-4 py-1 rounded hover:bg-blue-700 w-full">Send</button>
    </div>
  );
};

export default ChatWidget;
