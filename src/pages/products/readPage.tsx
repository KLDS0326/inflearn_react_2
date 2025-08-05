import { useLoaderData, useParams, type LoaderFunctionArgs } from "react-router";
import ReadComponent from "../../components/products/readComponent";
import jwtAxios from "../../util/jwtUtil";
import { useQuery } from "@tanstack/react-query";
import PendingModal from "../../components/common/pendingModal";


// export async function loadProduct({params}: LoaderFunctionArgs) {
//     const {pno} = params
//     const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)
//     return res.data
// }


function ReadPage() {
    // const product:ProductDTO = useLoaderData()
    // console.log(product);
    // return (  
    //     <div className="w-full">   
    //         <div>Product Read</div>
    //         <ReadComponent product={product}></ReadComponent>
    //     </div>
    // );

    const { pno } = useParams();   // pno를 가져옴
    const {data, isPending, error } = useQuery({
      queryKey: ['product', pno],
      queryFn: async () =>   {
         const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)
         return res.data
      },
      staleTime: 1000 * 60 * 60 * 24
   })

     const product:ProductDTO = data
     console.log(product)

     return (
        <div className="w-full">
            {isPending && <PendingModal/>}
                <div>Product Read</div>
            
            {product && 
                <ReadComponent product={product}></ReadComponent>
            }

            {/* {data &&
                <ReadComponent product={product}/>
            } */}
        </div>
        )
    }

export default ReadPage;