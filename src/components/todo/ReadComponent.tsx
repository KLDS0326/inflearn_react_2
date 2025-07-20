import { useEffect, useState } from "react";
import { getOne } from "../../assets/api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";


function ReadComponent({tno} : {tno: number}) {
    //useEffect() : 비동기처리 특정상황에서 동작하게끔 처리. 
    const [todo, setTodo] = useState<Todo | undefined> ()
    const {moveToList, moveToModify} = useCustomMove()

    useEffect( () => { 
        getOne(tno).then(data => { 
            console.log(data)   
            setTodo(data)
        }).catch(error => {
            console.error("error fetching data:", error)
        })
    }, [tno] )
    return ( 
     <>
     {todo &&
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4 text-2xl">   
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('complete', todo.complete ? 'Completed' : 'Not Yet')} 
            <div className="flex justify-end p-4">
                <button type="button" 
                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                onClick={() => moveToList() }
                >
                List
                </button>
                <button type="button" 
                    className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                    onClick={() => moveToModify(tno)} 
                > 
                Modify 
                </button>



            </div>
        </div>
     }
     </>

     );
}

const makeDiv = (title:string ,value:string | number) =>    
 <div className="flex justify-center">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
   <div className="w-1/5 p-6 text-right font-bold">{title}</div>
   <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
   {value} 
   </div>
  </div>
 </div> 



export default ReadComponent;