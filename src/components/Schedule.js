import { useState } from "react";

export default function Schedule({old_data,update}){
    const [task, setTask] = useState(" ");
    const [time, setTime] = useState(" ")

    function onContentChange(e){
        if(e.target.type === 'text'){
            setTask(e.target.value)
        }
        else{
            setTime(e.target.value)
        }
    }

    function handleSubmit(e){
        if(task && time){
            
            update([...old_data, {task:task, time:time, complete:false}]);
            // console.log(update)
            setTask('');
            setTime('');
        }
        
        
    }

    return(
        <div className="schedule">
            <div className="task-input">
                <input type="text" value={task} onChange={(e) => onContentChange(e)}/>
            </div>
            <div className="time-input">
                <input type="time" value={time} onChange={(e) => onContentChange(e)}/>
            </div>
            <div className="add">
                <button onClick={(e) => handleSubmit(e)}>Add</button>
            </div>
        </div>
    );
}