import React from "react";
import { Navigate } from "react-router-dom";
const RedirectRouter = ()=>{
    let urltemp =document.location.href.toString();
    let splitedurl = urltemp.split(`/`);
    console.log(urltemp,splitedurl[splitedurl.length-1])

    return(
        <div>{splitedurl} this is test</div>
    );
}
export default RedirectRouter;