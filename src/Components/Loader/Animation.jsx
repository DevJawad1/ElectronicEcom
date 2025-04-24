// Loading animation styles
const loadingStyles = `
  /* Common styles */
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  /* Spinner Animation */
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(13, 192, 41, 0.2);
    border-radius: 50%;
    border-top-color: #0DC029;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Pulsing Dots Animation */
  .dots-container {
    display: flex;
    align-items: center;
  }

  .dot {
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: #0DC029;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(0.5); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
  }

  /* Growing Circle Animation */
  .circle {
    width: 40px;
    height: 40px;
    background-color: #0DC029;
    border-radius: 50%;
    animation: grow 1.5s ease-in-out infinite;
  }

  @keyframes grow {
    0%, 100% { transform: scale(0.2); opacity: 0.2; }
    50% { transform: scale(1); opacity: 1; }
  }

  /* Progress Bar Animation */
  .progress-container {
    width: 200px;
    height: 8px;
    background-color: rgba(13, 192, 41, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    width: 30%;
    background-color: #0DC029;
    border-radius: 4px;
    animation: progress 2s ease-in-out infinite;
  }

  @keyframes progress {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(300%); }
  }

  /* Bouncing Bars Animation */
  .bars-container {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .bar {
    width: 6px;
    height: 20px;
    margin: 0 3px;
    background-color: #0DC029;
    border-radius: 3px;
    animation: bounce 1s ease-in-out infinite;
  }

  .bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .bar:nth-child(4) {
    animation-delay: 0.3s;
  }

  .bar:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%, 100% { transform: scaleY(0.5); }
    50% { transform: scaleY(1.5); }
  }

  /* Circular Progress Animation */
  .circular-progress {
    width: 40px;
    height: 40px;
    position: relative;
  }

  .circular-progress svg {
    transform: rotate(-90deg);
  }

  .circular-progress circle {
    stroke-dasharray: 251;
    stroke-dashoffset: 251;
    stroke-linecap: round;
    stroke-width: 4;
    fill: none;
    animation: circle-progress 2s ease-in-out infinite;
  }

  @keyframes circle-progress {
    0% { stroke-dashoffset: 251; }
    50% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 251; }
  }
`

// Loading component with multiple animation options
export default function LoadingAnimation({ type = "spinner", text = "Loading..." }) {
  return (
    <div>
      <style>{loadingStyles}</style>
      <div className="loading-container">
        {type === "spinner" && <div className="spinner"></div>}

        {type === "dots" && (
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}

        {type === "circle" && <div className="circle"></div>}

        {type === "progress" && (
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        )}

        {type === "bars" && (
          <div className="bars-container">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}

        {type === "circular" && (
          <div className="circular-progress">
            <svg width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#0DC029" />
            </svg>
          </div>
        )}

        {text && <div style={{ marginLeft: "10px", color: "#0DC029", fontWeight: "bold" }}>{text}</div>}
      </div>
    </div>
  )
}

// Example usage component
export function LoadingExamples({text}) {
  return (
    <div >

      <LoadingAnimation size={10} type="spinner" text={text || ""} />
{/* 
      <h3>Pulsing Dots</h3>
      <LoadingAnimation type="dots" text="Please wait..." />

      <h3>Growing Circle</h3>
      <LoadingAnimation type="circle" text="Processing..." />

      <h3>Progress Bar</h3>
      <LoadingAnimation type="progress" text="Loading content..." />

      <h3>Bouncing Bars</h3>
      <LoadingAnimation type="bars" text="Fetching results..." />

      <h3>Circular Progress</h3>
      <LoadingAnimation type="circular" text="Initializing..." />

      <h3>Spinner (No Text)</h3>
      <LoadingAnimation type="spinner" text="" /> */}
    </div>
  )
}

