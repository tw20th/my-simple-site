// app/components/Form.tsx
import React, { useState } from 'react';
import './Form.css';

type FormProps = {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-textarea"
      />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}
