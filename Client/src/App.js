import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TotalContacts from "./components/TotalContacts/TotalContactsPage";
import { useCookies } from "react-cookie";
import {CookiesProvider} from "react-cookie";
const App = () => {
  const [userTokenCookie, setuserTokenCookie,removeuserTokenCookie] = useCookies(["token"])
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setuserCookie={setuserTokenCookie} userCookie={userTokenCookie} removeuserCookie={removeuserTokenCookie}/>}></Route>
            <Route path="/signup" element={<Signup setuserCookie={setuserTokenCookie} userCookie={userTokenCookie} />}></Route>
            <Route path="/contacts" element={<TotalContacts setuserCookie={setuserTokenCookie} userCookie={userTokenCookie} removeuserCookie={removeuserTokenCookie} />}></Route>

          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}
export default App