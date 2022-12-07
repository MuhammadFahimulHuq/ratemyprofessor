import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen  from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import Navbar from "./components/Header"
import HomeScreen from "./screens/HomeScreen";
import FacultyDetailScreen  from "./screens/FacultyDetailScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
      <Route path="/" exact element={<HomeScreen />}/>
        <Route path="/login" element={<LoginScreen />}/>
          <Route path="/register" element={<RegisterScreen />}/>
          <Route path="/faculty/:id" element={<FacultyDetailScreen/>}/>
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
