import { HomeScreen } from "./components/HomeScreen"
import { CountdownTimer } from "./components/CountdownTimer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/countdown" element={<CountdownTimer />} />
      </Routes>
    </Router>
  );
}

export default App;
