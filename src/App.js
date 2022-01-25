import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
