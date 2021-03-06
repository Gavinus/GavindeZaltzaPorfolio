import Form from "./components/Form";
import "./App.scss";
import About from "./components/About";
import Menu from "./components/DrakkarMenu";
import { dataLogin } from "./dataLogin";
import Skills from "./components/Skills";
import Recept from "./components/Recept";

function App() {
  return (
    <div className="app">
      <Recept />
      <Menu Menu={Menu} />
      <About />
      <Skills />
      <Form formData={dataLogin} />
    </div>
  );
}

export default App;
