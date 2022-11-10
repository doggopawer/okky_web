import Frame from "./components/layouts/Frame";
import MainContent from "./components/layouts/MainContent";

function App() {
  return (
    <div className="App">
      <Frame content={<MainContent/>}/>
    </div>
  );
}

export default App;
