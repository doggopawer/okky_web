import Frame from "./pages/Frame";
import Logo from "./components/header/Logo";
import MainContent from "./components/main-content/MainContent";

function App() {
  return (
    <div className="App">
      <Frame content={<MainContent/>}/>
    </div>
  );
}

export default App;
