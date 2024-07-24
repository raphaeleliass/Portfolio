import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import MyLinks from "./MyLinks";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<MyLinks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;