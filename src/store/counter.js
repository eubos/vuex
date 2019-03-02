export default{
    state:{
        counter: 0
    },
    //сеттер для синхронных запросов.
    mutations:{
        changeCounter(state, payload){
            state.counter +=payload
        }
    },
    //сеттер для синхронных и асинхронных запросов. Делает более сложные операции
    actions:{
        asyncChangeCounter(context, payload){
            setTimeout(()=>{
                context.commit('changeCounter', payload.counterValue)
            },payload.timeoutDelay)
        }
    },
    //геттер для изменения значения (состояния) стэйта
    getters:{
        computedCounter(state){
            return state.counter * 10
        }
    }
}