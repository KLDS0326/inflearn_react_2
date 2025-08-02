import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { save } from "../../slices/loginSlice";

const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    //autoCode -> Access Token
    useEffect( () => {

        if (authCode){
            getAccessToken(authCode).then(accessToken => {
                console.log("accessToken")
                console.log(accessToken)
                getMemberWithAccessToken(accessToken).then(result => {
                    console.log("===========================");
                    console.log(result);
                    dispatch(save(result))

                    if(result.social){
                        navigate("/member/modify")
                    } else {
                        navigate('/')
                    }
                })
            }) 
        }
    }, [authCode])
    // useEffect(() => {
    // if(authCode){
    //     getAccessToken(authCode).then(data => {
    //         console.log(data)
    //         if(data){
    //             getMemberWithAccessToken(data).then(memberInfo => {
    //                 console.log("-------------------")
    //                 console.log(memberInfo)
    //                 dispatch(save(memberInfo))
    //                if(memberInfo.social){
    //                     //아직 개발이 되지 않은 경로 
    //                     //navigate('/member/modify’)
    //                }
    //             })    
    //         }
    //     })

    return (
    <>  
      <Navigate to ={'/'}></Navigate>
    </>
    )
}
export default KakaoRedirectPage;