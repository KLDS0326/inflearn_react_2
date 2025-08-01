import axios from "axios"

const rest_api_key =`38eee32eb9a7e8366cda979fc7dfc6ce` //REST키값 
const redirect_uri =`http://localhost:5173/member/kakao`
const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

//엑세스 토큰 얻기 
const access_token_url =`https://kauth.kakao.com/oauth/token` 
//보안 코드 활성화시 사용용
const client_secret = 'TgS4UW1fD1EU4BrTnBVQ2lykmU9wiNGh'



export const getKakaoLoginLink = () => {
    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    return kakaoURL
}

export const getAccessToken = async (authCode:string) => {
   const header = {
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      }
   }
   const params = {
      grant_type: "authorization_code",
      client_id: rest_api_key,
      redirect_uri: redirect_uri,
      code:authCode,
      client_secret: client_secret
   } 
    const res = await axios.post(access_token_url, params , header)
    const accessToken = res.data.access_token
    return accessToken
}

export const getMemberWithAccessToken = async(accessToken:string) => {
    const res = await axios.get(`http://localhost:8080/api/member/kakao?accessToken=${accessToken}`)
    return res.data
}
