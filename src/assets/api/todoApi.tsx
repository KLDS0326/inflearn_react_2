import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`


//async : 내부에서 await 마치 동기화된 코드처럼 작동. return 은 반드시 Promise<Todo>
export const getOne = async (tno:number | string) => {
    const res = await axios.get(`${prefix}/${tno}`)
    return res.data

}

export const getList = async ( pageParam: PageParam ) => {
    const res = await axios.get(`${prefix}/list`, {params: pageParam}) 
    return res.data
}
