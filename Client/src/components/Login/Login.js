import { useNavigate } from "react-router-dom"
//import { useCookies } from "react-cookie"
import { useState, useLayoutEffect, useEffect } from "react"
import "./Login.css"
import axios from "axios"
const Login = ({ setuserCookie, userCookie }) => {
    let navigate = useNavigate()
    //  const [userTokenCookie,setuserTokenCookie]=useCookies(["user"])
    // if (userCookie.token !== "") {
    //     navigate("/contacts");
    // }
    // useEffect(()=>{
    //     if (userCookie.token !== "") {
    //         navigate("/contacts");
    //     }
    // },[userCookie.token])


    const [login, setLogin] = useState({ username: "", password: "" })

    const dimentionMultiplier = 100;
    let calFontHeight = window.innerHeight.toString() + "px";
    let calFontWidth = window.innerWidth.toString() + "px";

    document.body.style.fontSize = ((window.innerHeight / 1117) * 100).toString() + "px";
    document.body.style.width = window.innerWidth.toString() + "px";
    document.body.style.height = window.innerHeight.toString() + "px";

    let calMulHeight = parseInt(window.innerHeight * dimentionMultiplier / 1117) / dimentionMultiplier;
    let calmulWidth = parseInt(window.innerWidth * dimentionMultiplier / 1727) / dimentionMultiplier;

    const [SizeMultiplier, setSizeMultiplier] = useState({ "--widthmultiplier": calmulWidth, "--heightmultiplier": calMulHeight, height: calFontHeight, width: calFontWidth });

    useLayoutEffect(() => {
        function handleResize() {
            let calFontHeight = window.innerHeight.toString() + "px";
            let calFontWidth = window.innerWidth.toString() + "px";
            let calMulHeight = (parseInt(window.innerHeight * dimentionMultiplier / 1117) / dimentionMultiplier);
            let calmulWidth = (parseInt(window.innerWidth * dimentionMultiplier / 1727) / dimentionMultiplier);
            setSizeMultiplier({ "--widthmultiplier": calmulWidth, "--heightmultiplier": calMulHeight, height: calFontHeight, width: calFontWidth });
            console.log(calmulWidth, calMulHeight);
            console.log(calFontHeight, calFontWidth);
            document.body.style.fontSize = ((window.innerHeight / 1117) * 100).toString() + "px";
            document.body.style.width = window.innerWidth.toString() + "px";
            document.body.style.height = window.innerHeight.toString() + "px";
            console.log(SizeMultiplier)
        }
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize) };
    }, []);

    const handleLogin = () => {
        if (login.username.includes("@") && login.username.split("@")[1].includes(".")) {
            if (login.username.length > 5 && login.password.length > 5) {
                axios({
                    url: "https://contactsmanager-server.herokuapp.com/user/login",
                    // url: "https://contactsmanager-server.herokuapp.com/user/login",
                    method: "POST",
                    headers: {
                    },
                    data: { username: login.username, password: login.password }
                }).then(async (loginData) => {
                    console.log(loginData)

                    await setuserCookie("token", loginData.data.token, { path: "/" })
                    console.log(userCookie.token)
                    // if (userCookie.token !== "") {
                    navigate("/contacts")
                    // } else {
                    //     navigate("/")
                    // }

                }).catch((err) => {
                    window.alert(err.response.data.message)
                    // console.log(err);
                    // window.location.reload();
                })
            }
            else{
                if(login.password < 6){
                    alert("minimum length of password should be 6")
                }
                else{
                    alert("username length should be atleast 6")
                }
            }
        }
        else{
            alert("invalid email")
        }
    }
    return (
        <div className="signin-main-Container" style={SizeMultiplier}>
            <div className='signin-circle'></div>

            <div className='signin-Container'>
                <img className='signin-image' src="signin-elipseGrid.svg" alt="signin-elipseGrid" />
                <div className='signin-Container2'>
                    <div className="signin-logo">Logo</div>
                    <div className="signin-message-div">Enter your Credentials to access you account</div>
                    <div className="signin-input-form-container" >
                        <input className='signin-forminput-username' type="email" name="email" placeholder='User ID' onChange={(e) => {
                            setLogin({ ...login, username: e.target.value })
                        }} />
                        <input className='signin-forminput-password' type="password" name="password" placeholder='Password' onChange={(e) => {
                            setLogin({ ...login, password: e.target.value })
                        }} />
                        <div className="signin-formsubmit-signin-button" onClick={handleLogin}>Sign in</div>
                        <div onClick={() => { navigate("/signup") }} className='signinpage-signup-button'>Sign Up</div>
                    </div>
                </div>

                <img className='signin-image2' src="signin-elipseGrid.svg" alt="signin-elipseGrid" />
            </div>

            <div className='signin-circle2'></div>
        </div>

    )

}
export default Login

