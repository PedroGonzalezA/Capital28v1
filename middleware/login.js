export default function authLogin({redirect,req,res,route}){
    console.log(route)
    if(route.path=="/"){
        redirect("/login")
    }
    return;
}
