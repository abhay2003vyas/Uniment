import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;