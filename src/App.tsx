import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainBoard } from "./game/components/MainBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainBoard />} />
    </Routes>
  );
}

export default App;
