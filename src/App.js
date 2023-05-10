import Home from "./Home";
import Education from "./education";
import Personal from "./personalinfo";
import Projects from "./projects";
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router";


function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/personal_info" element={<Personal />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
