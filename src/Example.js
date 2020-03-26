import React,{Component,Fragment, useState} from 'react'

// class Example extends Component{
//     constructor(props){
//         super(props)
//         this.state ={count:0}
//     }
//     render(){
//         return(
//             <Fragment>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Click me</button>
//             </Fragment>
//         )
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
function Example(){
    const [count,setCount] = useState(0)
        return(
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>{setCount(count+1)}}>Click me</button>
            </div>
        )

}
export default Example