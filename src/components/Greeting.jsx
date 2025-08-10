import { useState } from 'preact/hooks';

export default function Greeting({ messages, clientLoad = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="greeting-container">
      <h3 className="greeting-title">
        {clientLoad ? 'Interactive Greeting' : 'Static Greeting'}
      </h3>
      <p className="greeting-message">{messages[currentIndex]}</p>
      {clientLoad && (
        <button
          onClick={nextMessage}
          className="greeting-button"
        >
          Next Greeting
        </button>
      )}
    </div>
  );
}