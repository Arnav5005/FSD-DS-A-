import { BrowserRouter , Routes} from "react-router-dom"
import Login from "./components/Login"
import AdminDashboard from "./pages/AdminDashboard"
import UserDashboard from "./pages/UserDashboard"
// default(for single) and named(for multiple) export are 2 types of export
// all components are default export
// we do routing here
// npm i react-router-dom
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
