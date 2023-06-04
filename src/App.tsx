import { defineComponent } from "vue";


export  const App = defineComponent({
  setup() {
    
    return () => <>
    <div><router-view></router-view></div>
    </>
  }
})