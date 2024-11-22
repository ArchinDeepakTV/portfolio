import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  // useParams,
} from "react-router-dom";
// import Landing from "./components/Landing";
import Resume from "./components/Resume";

function App() {
  // sessionStorage.setItem("nodeBackendURL", "http://localhost:5050"); // TODO: will need later for backend

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
