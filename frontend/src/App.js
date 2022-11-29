import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen  from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import Navbar from "./components/Header"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
        <Route path="/login" element={<LoginScreen />}/>
          <Route path="/register" element={<RegisterScreen />}/>
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
