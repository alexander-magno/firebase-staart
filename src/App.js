import { AuthProvider } from "./context/authContext";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { SingUp } from "./pages/SingUp";
import { UserProfile } from "./pages/userProfile";
import { Login } from "./pages/Login";
import { TesteError } from "./pages/NotFound";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRouter } from "./components/PrivateRoutes";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/singup" element={<SingUp/>}></Route>
          <Route path="/profile" element={<ProtectedRouter><UserProfile/></ProtectedRouter>}></Route>
          <Route path="/update-profile" element={<ProtectedRouter><UpdateProfile/></ProtectedRouter>}></Route>
          <Route path="*" element={<TesteError/>}></Route>
          <Route path="/home" element={<ProtectedRouter><Home/></ProtectedRouter>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        </Routes>
      <Footer/>  
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
