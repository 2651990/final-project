import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IRootState } from "../../redux/store";
import { userAction } from "../../redux/userSlice";



export function FacebookCallback(){
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: IRootState)=> state.user.isLoggedIn)
    useEffect(()=>{
        async function facebookLogin(code:string){
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/user/facebook`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                body: JSON.stringify({ code })
            })
            const result = await res.json();
            if(res.ok){
                return result
            }else{
                return false
            }
        }
        
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get('code') || "";
        (async function(){
            const data = await facebookLogin(code)
            // console.log(data)
            if(data){
                const profileData = data.profileData
                dispatch(userAction.facebookLogin({
                    token: data.token,
                    name: profileData.name,
                    picture: profileData.picture.data.url,
                    email: profileData.email,
                }))
            }else{
                // Error handling with React-Toastify
                // alert("Facebook login fail")
            }
        })()
    },[history, dispatch])

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/browse")

        }
    }, [history, isAuthenticated])

    return <h3>Redirecting to main page...</h3>
}