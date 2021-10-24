<<<<<<< HEAD
import React from "react";
import { getUser } from "../utils/Common";
import {Link} from "react-router-dom"



const DetailLinks =() =>{
    const user = getUser()
    console.log(user);
   
    return(
        <div>
        <h4>Details</h4>
        {user!= null ?  (<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/dashboard" style={{textDecoration:"none",color:"white"}}>go to your dashbaord</Link></button>):(<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/signin" style={{textDecoration:"none",color:"white"}}>Kindly login to proceed</Link></button>)}
         </div>)
}

=======
import React from "react";
import { getUser } from "../utils/Common";
import {Link} from "react-router-dom"



const DetailLinks =() =>{
    const user = getUser()
    console.log(user);
   
    return(
        <div>
        <h4>Details</h4>
        {user!= null ?  (<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/dashboard" style={{textDecoration:"none",color:"white"}}>go to your dashbaord</Link></button>):(<button className="btn btn-lg btn-primary btn-block btn-signin"><Link to ="/signin" style={{textDecoration:"none",color:"white"}}>Kindly login to proceed</Link></button>)}
         </div>)
}

>>>>>>> 9565c7d33565cdc4a2354515f5ee708d93019ba0
export default DetailLinks