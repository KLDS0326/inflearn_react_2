import { createSearchParams, useLoaderData, type LoaderFunctionArgs } from "react-router";
import ListComponent from "../../components/products/listComponent";
import jwtAxios from "../../util/jwtUtil";
import useCustomMove from "../../hooks/useCustomMove";
import { useQuery } from "@tanstack/react-query";
import PendingModal from "../../components/common/pendingModal";



// export async function loadProducts({request}: LoaderFunctionArgs) {
//     const url = new URL(request.url);
//     const page = url.searchParams.get('page') || "1"; 
//     const size = url.searchParams.get('size') || "10";
//     const queryStr = createSearchParams({page,size}).toString()
//     const res = await jwtAxios.get(`http://localhost:8080/api/products/list?${queryStr}`)
//     return res.data
//}


const ListPage = () => {

    const {page, size} = useCustomMove()
    const queryStr = createSearchParams({page: String(page), size: String(size)}).toString()

    const {data, isPending, error} = useQuery({
        queryKey: ['products/list', page, size], 
        queryFn: async () => {
            const res = await jwtAxios.get(`http://localhost:8080/api/products/list?${queryStr}`)  
            return res.data
        },
        staleTime : 1000 * 5
    })

    let pageResponse;
    if(data) {
        pageResponse = data
    }

    
    
    // 데이터가 있으면 씀. 비동기함수.
 return ( 
    <div className="w-full mt-4 border border-solid border-neutral-300 shadow-md">
        <div className="text-2xl m-4 font-extrabold">
            Products List Page
        </div>
        {isPending && <PendingModal/>}
        
        {pageResponse &&
            <ListComponent serverData={pageResponse}></ListComponent>
        }
    </div>
 );
}

export default ListPage;



