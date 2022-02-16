
export default function Display({reset,data}){


    function onReset(item){
        reset(data.filter((items)=>item !== items))

    }
    return(
            
        <div className ="display">
            {
                data.map(items=>{
                    
                    return(
                     <div className="display-items">
                         <div className="check">
                             <input type="checkbox"/>
                         </div>
                         <div className="message"><p>{items.task}</p></div>
                         <div className="time"><p>{items.time}</p></div>
                         <div className="del">
                             <button onClick={()=> onReset(items)}>del</button>
                         </div>
                     </div>
                    );
                })
                
            }
        </div>

    );
}