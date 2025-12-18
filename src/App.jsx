import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Message from "./pages/Message";
import StudyAbroad from "./pages/StudyAbroad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/message-from-director/" element={<Message />} />
        <Route path="/services/study-abroad" element={<StudyAbroad />} />
      </Routes>
    </Router>
  );
}

export default App;
