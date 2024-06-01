import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllLinks from "./AllLinks";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<AllLinks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
