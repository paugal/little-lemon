import "./App.css";
import { Footer, Header, Main, Nav } from "./components";

function App() {
  return (
    <div className="App">
      <div className="headerNav">
        <div className="headerNav-container">
          <Header></Header>
          <Nav></Nav>
        </div>
      </div>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
