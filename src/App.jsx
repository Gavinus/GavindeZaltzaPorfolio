import "./App.scss";

import Recept from "./components/Recept";
// import Form from "./components/Form";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Project from "./components/Project";
// import Menu from "./components/DrakkarMenu";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Recept Recept={Recept} />
      {/* <Menu Menu={Menu} /> */}
      {/* <About />
      <Skills /> */}
      {/* <Form formData={dataLogin} />  */}
      {/* <Routes>
          <Route path="/recept" element={<Recept />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="project" element={<Project />} />
          <Route path="form" element={<Form />} />
        </Routes> */}
    </div>
  );
}

export default App;
