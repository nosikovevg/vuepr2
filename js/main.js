const Counter = {
    data() {
      return {
        m:'Hello World',
        lolo: 0
      }
    },
    mounted() {
      setInterval(()=>{
        this.lolo++
      }, 1000)
    }
  }
  
Vue.createApp(Counter).mount('#ct')

const AttributeBinding = {
data() {
return {
  message: 'Страница загружена ' + new Date().toLocaleString()
}
}
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')

// Директива v-on
const EH = {
    data() {
      return {
        ms:'123456789 Hello World',
        lolo: 0
      }
    },
    methods: {
        rms() {
            this.ms = this.ms.split('').reverse().join('')
        }

    }
  }
  
Vue.createApp(EH).mount('#eh')



// Директива v-model
const TB = {
    data() {
      return {
        ms:'Hello++++'        
      }
    }
  }
  
Vue.createApp(TB).mount('#twb')


// Директива v-if

const CR= {
    data() {
        return {
            seen: true
        }
    }
}
Vue.createApp(CR).mount('#cr')

//Директива v-for
const LR= {
    data() {
        return {
            todos: [
                {text: 'Я учу JS'},
                {text: 'Я учу Python'},
                {text: 'Я учу DevOps'}
            ]
        }
    }
}
Vue.createApp(LR).mount('#lr')

//Директива 2 v-for
const LR2= {
    data() {
        return {
            todos: [
                {text: 'Я учу JS'},
                {text: 'Я учу Python'},
                {text: 'Я учу DevOps'}
            ]
        }
    }
}
Vue.createApp(LR2).mount('#lr2')

//Директива 3 v-for
const LR3= {
    data() {
        return {
            M: ['JS','Python','DevOps']
        }
    }
}
Vue.createApp(LR3).mount('#lr3')