import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { save } from "../../slices/loginSlice";

const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")
    const dispatch = useDispatch<AppDispatch>()

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
                })
            }) 
        }
    })


    return (
    <div>
        <div>Kakao Login Redirect</div>
        <div>{authCode}</div>
    </div>
)
}
export default KakaoRedirectPage;