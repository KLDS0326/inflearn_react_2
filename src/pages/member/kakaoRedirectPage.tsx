import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getAccessToken } from "../../api/kakaoApi";

const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")

    //autoCode -> Access Token
    useEffect( () => {

        if (authCode){
            getAccessToken(authCode).then(accessToken => {
                console.log("accessToken")
                console.log(accessToken)
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