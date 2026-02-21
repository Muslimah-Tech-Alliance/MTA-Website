import { Routes, Route } from "react-router-dom";
import Summit from "./pages/Summit";

function App() {
  return (
    <Routes>
      <Route path="/summit" element={<Summit />} />
    </Routes>
  );
}

export default App