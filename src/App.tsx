import { defineComponent } from "vue";


export  const App = defineComponent({
  setup() {
    
    return () => <>
    <router-link to="/bar">1111</router-link>
    <div><router-view></router-view></div>
    </>
    
  }
})