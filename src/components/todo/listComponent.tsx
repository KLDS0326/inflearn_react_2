import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../assets/api/todoApi";
import PageComponent from "../common/pageComponent";

function ListComponent() {
    const {page, size, refresh, moveToRead,moveToList}:UseCustomMoveReturn = useCustomMove()
    const [serverData, setServerData] = useState<PageResponseDTO<Todo>|undefined>()

    useEffect( ()=> {
        getList({page,size}).then(data => {
            console.log(data)
            setServerData(data)
        })


    },[page,size,refresh ])

    return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
        {serverData &&
        <>
        <div className="flex flex-wrap mx-auto justify-center p-6">
            {serverData.dtoList.map(todo =>
            <div
            key= {todo.tno} 
            className="w-full min-w-[400px]  p-2 m-2 rounded shadow-md"
            onClick={() => moveToRead(todo.tno)} //이벤트 처리 추가 
            >
                <div className="flex ">
                    <div className="font-extrabold text-2xl p-2 w-1/12">
                    {todo.tno}
                    </div>
                    <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                    {todo.title}
                    </div>
                    <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                    {todo.dueDate}
                    </div>
                </div>
            </div>
            )}
        </div>
        <PageComponent serverData={serverData} movePage={moveToList} ></PageComponent>
        </>
        }
    </div>
    )

}
export default ListComponent;
