// Tu código aquí.
Vue.createApp({
    data(){
        return{
            counter: 0,
            color: ''
        }
    },
    methods:{
        printCounter(value){
            this.counter += value
            this.color = this.counter > 0 ? 'text-success': this.counter < 0 ? 'text-danger' : ''
        }
    }
}).mount('#app')