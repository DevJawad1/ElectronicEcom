// "use client"

// // Loading button componentC
//     <button
//       className={`loading-button ${className} ${isLoading ? "is-loading" : ""}`}
//       onClick={onClick}
//       disabled={isLoading}
//     >
//       <style jsx>{`
//         .loading-button {
//           position: relative;
//           padding: 10px 20px;
//           background-color: #0DC029;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           font-weight: bold;
//           cursor: pointer;
//           overflow: hidden;
//           transition: all 0.3s;
//         }
        
//         .loading-button:hover {
//           background-color: #0AA023;
//         }
        
//         .loading-button:disabled {
//           opacity: 0.8;
//           cursor: not-allowed;
//         }
        
//         .loading-button.is-loading .button-text {
//           visibility: hidden;
//         }
        
//         .loading-button.is-loading .loader {
//           visibility: visible;
//         }
        
//         .button-text {
//           position: relative;
//           z-index: 2;
//         }
        
//         .loader {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           visibility: hidden;
//           z-index: 1;
//           display: flex;
//         }
        
//         .dot {
//           width: 6px;
//           height: 6px;
//           margin: 0 2px;
//           background-color: white;
//           border-radius: 50%;
//           animation: pulse 1.5s ease-in-out infinite;
//         }
        
//         .dot:nth-child(2) {
//           animation-delay: 0.2s;
//         }
        
//         .dot:nth-child(3) {
//           animation-delay: 0.4s;
//         }
        
//         @keyframes pulse {
//           0%, 100% { transform: scale(0.5); opacity: 0.5; }
//           50% { transform: scale(1); opacity: 1; }
//         }
//       `}</style>

//       <span className="button-text">{isLoading ? loadingText : text}</span>

//       <div className="loader">
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </button>
//   )
// }

