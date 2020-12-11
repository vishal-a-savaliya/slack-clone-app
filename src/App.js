import './App.css';
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <h1>here we go...</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Slidebar */}
        {/* React-Router -> Chat */}

      </div>
    </div>
  );
}

export default App;
