import { GrFormClose } from "react-icons/gr";

const Display = ({task, setTask, list, setList}) => {

    

    function deleteitems(item){
       const temp = list.filter((value)=>(value!= item) );
       setList(temp)

    }
    return ( <>
    
    <section className="dispsection">
        {list?.map((item,key)=><div className="item" key={key}>
        <h2>{item}</h2>
        <button className="btn2" onClick={()=>deleteitems(item)}><GrFormClose className="logo" /></button>
        

    </div>)}</section></> );
}
 
export default Display;