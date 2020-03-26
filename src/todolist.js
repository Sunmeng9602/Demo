import React,{Component,Fragment} from 'react'
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd'
import store from './store'

class Todolist extends Component{
    constructor(props){
        super(props)
        this.state =store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    render(){
        return(
            <Fragment>
                <div style={{margin:'10px'}}>
                    <div>
                        <Input
                        placeholder={this.state.inputValue}
                        style={{width:'250px',marginRight :'10px'}}
                        onChange={this.changeInputValue}
                        />
                        <Button 
                        type='primary'
                        onClick={this.clickBtn}
                        >确认</Button>
                    </div>
                    <div style={{margin:'10px',width:'300px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this)}>{item}</List.Item>)}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
    changeInputValue(e){
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = {
            type:'addItem',
        }
        store.dispatch(action)
    }
}
export default Todolist