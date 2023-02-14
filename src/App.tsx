import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import FormControl from "./pages/formcontrol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="FormControl" element={<FormControl />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
