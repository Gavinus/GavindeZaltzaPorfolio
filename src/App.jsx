import Form from "./components/Form";
import "./App.scss";
import About from "./components/About";
import Menu from "./components/DrakkarMenu";
import { dataLogin } from "./dataLogin";

function App() {
  return (
    <div className="app">
      <Menu Menu={Menu} />
      <About />
      <Form formData={dataLogin} />
    </div>
  );
}

export default App;
