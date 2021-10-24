// export  const getUserNewTab =() =>{
//  const userStr1= localStorage.getItem("user1")
//  if(userStr1)
// {return  JSON.parse(userStr1);} 
//  else
//  {return null;}
  
// }
export  const getUser =() =>{
    const userStr=localStorage.getItem("user")
    if(userStr)
   {return  JSON.parse(userStr);} 
    else
    {return null;}
     
   }

export const getToken =() =>{
    return localStorage.getItem("token") || null;
}
<<<<<<< HEAD
export const getEmail =() =>{
    return localStorage.getItem("email") || null;
}
export const setUserSession =(token, user,address,mobile,id,roles,email) =>{
    localStorage.setItem("token" ,token);
    localStorage.setItem("id" ,id);
    localStorage.setItem("mobile" ,mobile);
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("email",email);
    localStorage.setItem("roles", JSON.stringify(roles));
   
}
export const getMobile =() =>{
    return localStorage.getItem("mobile") || null;
}
export const getAddress =() =>{
    return localStorage.getItem("address") || null;
}
export const getId =() =>{
    return localStorage.getItem("id") || null;
}
export const getRoles =() =>{
    return localStorage.getItem("roles") || null;
}
=======
export const setUserSession =(token, user,address,mobile,id,roles) =>{
    sessionStorage.setItem("token" ,token);
    sessionStorage.setItem("id" ,id);
    sessionStorage.setItem("mobile" ,mobile);
    sessionStorage.setItem("address", JSON.stringify(address));
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("roles", JSON.stringify(roles));

}
export const getMobile =() =>{
    return sessionStorage.getItem("mobile") || null;
}
export const getAddress =() =>{
    return sessionStorage.getItem("address") || null;
}
export const getId =() =>{
    return sessionStorage.getItem("id") || null;
}
export const getRoles =() =>{
    return sessionStorage.getItem("roles") || null;
}
>>>>>>> 9565c7d33565cdc4a2354515f5ee708d93019ba0

export const removeUserSession=() =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
localStorage.removeItem("email");
localStorage.removeItem("id");
localStorage.removeItem("roles");
localStorage.removeItem("mobile");
localStorage.removeItem("address");
}
