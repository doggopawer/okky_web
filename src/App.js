import SignInPage from "./components/pages/SignInPage";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import QnaPage from "./components/pages/QnaPage";
import SignUpPage from "./components/pages/SignUpPage";
import TechPage from "./components/pages/TechPage";
import CommunityPage from "./components/pages/CommunityPage";
import EventPage from "./components/pages/EventPage";
import SignUpCompletePage from "./components/pages/SignUpCompletePage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/qna" element={<QnaPage/>} />
              <Route path="/tech" element={<TechPage/>} />
              <Route path="/community" element={<CommunityPage/>} />
              <Route path="/event" element={<EventPage/>} />
              <Route path="/sign-up" element={<SignUpPage/>} />
              <Route path="/sign-up/complete/:nick" element={<SignUpCompletePage/>} />
              <Route path="/sign-in" element={<SignInPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
