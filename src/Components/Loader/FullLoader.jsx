"use client"

import { DollarSign } from "lucide-react"

// A more advanced full-page loading animation
export default function FullPageLoader({msg}) {
  return (
    <div className="full-page-loader">
      <style jsx>{`
        .full-page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .logo-container {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
        }
        
        .logo {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        
        .pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(13, 192, 41, 0.2);
          z-index: 1;
          animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        
        .spinner {
          width: 100px;
          height: 100px;
          border: 4px solid rgba(13, 192, 41, 0.1);
          border-radius: 50%;
          border-top-color: #0DC029;
          animation: spin 1s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .loading-text {
          color: #0DC029;
          font-size: 18px;
          font-weight: bold;
          margin-top: 20px;
        }
        
        .progress-bar {
          width: 200px;
          height: 4px;
          background-color: rgba(13, 192, 41, 0.2);
          border-radius: 2px;
          margin-top: 10px;
          overflow: hidden;
        }
        
        .progress {
          height: 100%;
          width: 30%;
          background-color: #0DC029;
          border-radius: 2px;
          animation: progress 2s ease-in-out infinite;
        }
        
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>

      <div className="logo-container ">
        <div className="pulse"></div>
        <div className="spinner"></div>
        <div className="logo">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15ZM65 55H55V65H45V55H35V45H45V35H55V45H65V55Z"
              fill="#0DC029"
            />
          </svg>
        </div>
      </div>

      <div className="loading-text">{msg || "Loading your application"} . . .</div>

      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  )
}

