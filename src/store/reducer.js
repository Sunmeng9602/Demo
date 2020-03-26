const defaultState = {
    inputValue :'write something',
    list:[
        '早8点开晨会，分配今天代码任务',
        '早9点和项目经理开需求沟通会',
        '早10点和项目经理开需求沟通会',
    ]
}
export default (state=defaultState,action)=>{
    if(action.type ==='changeInput'){
        let Newstate = JSON.parse(JSON.stringify(state))
        Newstate.inputValue = action.value
        return Newstate
    }
    if(action.type === 'addItem'){
        let Newstate = JSON.parse(JSON.stringify(state))
        Newstate.list.push(Newstate.inputValue) 
        Newstate.inputValue = ''
        console.log(Newstate.inputValue)
        return Newstate
    }
    return state
}