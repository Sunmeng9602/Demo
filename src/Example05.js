import React,{useReducer} from 'react'

function Example5(){
        const [count,dispatch]= useReducer(()=>{
            switch (action) {
                case 'add':
                    
                    return count +1;
                case 'sub':
                
                    return count -1;
                default:
                    return state;
            }
        },0)
        return(
            <div>
                <p>现在的分数是:{count}分</p>
                <button onClick={()=>{dispatch('add')}}>+</button>
                <button onClick={()=>{dispatch('sub')}}>-</button>
            </div>
        )

}
export default Example5 