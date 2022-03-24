import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
