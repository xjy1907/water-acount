import { defineComponent } from "vue";
import "./App.scss"

export  const App = defineComponent({
  setup() {
    
    return () => <div >
    <div><router-view></router-view></div>
    </div>
  }
})