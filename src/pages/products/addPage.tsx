import AddComponent from "../../components/products/addComponent";

interface ProductAddResult {
    result?: number,
    error? : string 
}
const initState: ProductAddResult = {
    result: 0
}

const addAsyncAction = async (state: ProductAddResult, forData:FormData) => {
    console.log("addAsyncAction.....")

    await new Promise(resolve => setTimeout(resolve, 2000))
    return {result:10}
}


function AddPage() {
return (
    <div className="p-4 w-full bg-white">
        <div className="text-3xl font-extrabold">
        Products Add Page 
        </div>  
        <AddComponent/>
  </div>
  );
}

export default AddPage;