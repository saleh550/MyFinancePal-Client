import { Navigate,Outlet,useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { useAuthStatus} from "../hooks/useAuthStatus"
import Spinner from "./Spinner"


const PrivateRoute=()=>{
    const {loggedIn,checkingStatus}=useAuthStatus()
    if(checkingStatus){
        return <Spinner/>
    }
    return loggedIn ? <Outlet/> : <Navigate to='/login' /> 
}
export default PrivateRoute