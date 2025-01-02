import Graph from "./components/graph";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex w-full">
        <div className="w-3/4">
          <Graph />
        </div>
        <div className="bg-white min-h-screen w-1/4"></div>
      </div>
    </>
  );
}

export default App;
