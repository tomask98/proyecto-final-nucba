import { Route } from "react-router-dom";
import Home from "../pages/Home";
import {login} from "../pages/login"
import {register} from "../pages/register"
import {pageNotFound} from "../pages/"


function Routes (){
    return(
        <ReactDomRoutes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<pageNotFound/>} />
        </ReactDomRoutes>
    )
}
export default Routes;
