import React,{Component,Fragment, useState} from 'react'
function Example(){
    const [age,setAge] = useState(18)
    const [sex,setSex] = useState('女')
    const [work,setWork] = useState('程序员')
        return(
            <div>
                <p>年龄：{age}</p>
                <button onClick={()=>{setAge(age+1)}}>Click me</button>
                <p>性别：{sex}</p>
                <p>工作：{work}</p>
            </div>
        )

}
export default Example