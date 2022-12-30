import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import NewPage from "./pages/New page.jsx";
import New from "./pages/New.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/new page" element={<NewPage />} />
<Route path="/new" element={<New />} />
    </Routes>
  );
}
