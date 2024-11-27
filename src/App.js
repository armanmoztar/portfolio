import "./App.css";
import Portfolio from "./Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <SpeedInsights />
    </div>
  );
}

export default App;
