import { useParams } from "react-router";
import ReadComponent from "../../components/todo/ReadComponent";

function ReadPage() {
    const {tno} = useParams()
    console.log(tno);
    return (
        <div className="bg-white w-full">
          <div className="text-4xl">Todo Read page{tno}</div>
          <ReadComponent tno= {Number(tno)}/>
        </div>

      );
}

export default ReadPage;            