import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss"
import logo from '../assets/icons/water.svg'
export const Welcome = defineComponent({
  setup() {
    
    return () =><div class={s.wrapper}>
    <header>
      <img src={logo}/>
      <h1>点滴记账</h1>
    </header>
    <main><RouterView></RouterView></main>
    <footer>footer</footer>
    </div>
  }
})