import React, { useEffect, useRef, useState } from 'react';
import './HealthChatbot.css';
import { sendChatMessage } from '../../services/api.js';

function HealthChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text:
        'Welcome to the Heal India Health Assistant. Share your symptoms and I will help you understand possible areas of care and what to tell your doctor.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitMessage = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setError('');
    const userMessage = { role: 'user', text: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage([...messages, userMessage]);
      const assistantMessage = {
        role: 'assistant',
        text: response.data.reply,
      };
      setMessages((current) => [...current, assistantMessage]);
    } catch (err) {
      setError('Unable to connect to the AI assistant right now. Please try again later.');
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text:
            'Sorry, the AI service is unavailable. Try again later or describe your symptoms in the contact form so our team can help.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-card">
      <div className="chatbot-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}> 
            <div className="chat-label">{message.role === 'assistant' ? 'Assistant' : 'You'}</div>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-form" onSubmit={submitMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms here..."
          aria-label="Chat symptom input"
          disabled={isLoading}
        />
        <button type="submit" className="btn primary" disabled={isLoading}>
          {isLoading ? 'Waiting...' : 'Send'}
        </button>
      </form>
      {error && <p className="chat-error">{error}</p>}
    </div>
  );
}

export default HealthChatbot;
