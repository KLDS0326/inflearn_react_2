import { useState, type ChangeEvent } from "react";
import { postAdd } from "../../assets/api/todoApi";
import ResultModal from "../common/resultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState:TodoAdd = {
    title: '',
    writer: '',
    dueDate:''
}


function AddComponent() {

    const[todo,setTodo] = useState<TodoAdd>({...initState})
    const [result, setResult] = useState<number | null >(null)
    const {moveToList} = useCustomMove()


    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
        setTodo((prevState) => ({
        ...prevState,
        [name]: value
        }));
    }

    const handleClickAdd = (): void => {
        postAdd(todo).then(result => {
            console.log(result)
            //초기화 
            setTodo({...initState})
            setResult(result.tno)

        }).catch(e => {
            console.error(e)
        })
    }


    const closeModal = () => {
        setResult(null)
        moveToList()
         
    }

    return (
        <div className="m-2 mt-10 border-2 border-sky-200 p-4">
            {result && <ResultModal title="등록 처리 완료" content= {`${result}번 처리`} callbackFn={closeModal}/>}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input
                        className="w-4/5 rounded-r border border-solid border-neutral-300 p-6 shadow-md"
                        name="title"
                        type={'text'}
                        value={todo.title}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input
                        className="w-4/5 rounded-r border border-solid border-neutral-300 p-6 shadow-md"
                        name="writer"
                        type={'text'}
                        value={todo.writer}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input
                        className="w-4/5 rounded-r border border-solid border-neutral-300 p-6 shadow-md"
                        name="dueDate"
                        type={'date'}
                        value={todo.dueDate}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative mb-4 flex flex-wrap items-stretch p-4">
                    <button
                        type="button"
                        className="w-36 rounded bg-blue-500 p-4 text-xl text-white"
                        onClick={handleClickAdd}
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    )
}


export default AddComponent;