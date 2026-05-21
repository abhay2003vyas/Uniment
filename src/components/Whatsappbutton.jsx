import { useState } from "react";

const WHATSAPP_NUMBER = "918764412948"; // country code 91 for India
const WHATSAPP_MESSAGE = "Hello! I need help with my assignment.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        .wa-wrapper {
          position: fixed;
          bottom: 28px;
          left: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* Tooltip bubble */
        .wa-tooltip {
          background: #fff;
          color: #111827;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 16px;
          border-radius: 999px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.13);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          border: 1.5px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          left: calc(100% - 2px);
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #fff;
        }
        .wa-wrapper:hover .wa-tooltip,
        .wa-tooltip.show {
          opacity: 1;
          transform: translateX(0);
        }

        /* Green dot */
        .wa-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          animation: wa-pulse-dot 2s infinite;
        }
        @keyframes wa-pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Main button */
        .wa-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.45);
          cursor: pointer;
          text-decoration: none;
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          flex-shrink: 0;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
        }

        /* Ripple ring */
        .wa-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.35);
          animation: wa-ripple 2.2s ease-out infinite;
        }
        @keyframes wa-ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* WhatsApp SVG icon */
        .wa-icon {
          width: 30px;
          height: 30px;
          fill: #fff;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="wa-wrapper">
        {/* Tooltip — visible on hover */}
        <div className={`wa-tooltip${hovered ? " show" : ""}`}>
          <span className="wa-dot" />
          Chat with us on WhatsApp
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Official WhatsApp icon path */}
          <svg className="wa-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.364.638 4.672 1.849 6.69L2.667 29.333l6.825-1.792A13.27 13.27 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.615-1.537l-.402-.239-4.052 1.064 1.082-3.945-.263-.416A10.97 10.97 0 0 1 5.04 16C5.04 9.952 9.955 5.04 16.003 5.04 22.048 5.04 26.96 9.952 26.96 16c0 6.048-4.912 10.933-10.957 10.933zm6.002-8.188c-.33-.164-1.95-.962-2.252-1.072-.302-.11-.521-.164-.74.164-.22.329-.851 1.072-.044 1.319.302.11.852.274.852.274s-.137.411-.302.686a8.68 8.68 0 0 1-2.563 2.563c-.275.165-.687.027-.687.027s-.165-.549-.275-.85c-.11-.302-.22-.549-.55-.22-.329.33-1.153 1.209-.852 2.09.302.879 1.593 2.289 3.13 2.289s2.784-.962 3.938-2.51c1.154-1.544 1.456-3.856.742-4.514l-.137-.246z" />
          </svg>
        </a>
      </div>
    </>
  );
}