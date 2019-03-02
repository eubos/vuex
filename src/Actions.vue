<template>
<div>
        <button class="btn btn-success" @click="updateCounter(1)">Add</button>
        <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
</div>
</template>
<script>
export default {
    methods:{
        updateCounter(value){
        // this.$emit('counterUpdated', value)
        
        //просто обращается к значению counter из store vuex и меняет его
        // this.$store.state.counter +=value

        // вызывает сеттер (mutations) из vuex (./store/index.js) и передает ему значение value
        // this.$store.commit('changeCounter', value)

        //вызывает actions (асинхронный сеттер из vuex) и передает ему value
        // this.$store.dispatch('asyncChangeCounter', value)

        this.$store.dispatch('asyncChangeCounter', {
            counterValue: value,
            timeoutDelay: 200
        })
        }
    }
}
</script>
<style scoped>

</style>
