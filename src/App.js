import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 컴포넌트와 주소 연결 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/** 임의의 컴포넌트 하나를 추가해보세요 */}
      </Routes>
    </div>
  );
}

export default App;
