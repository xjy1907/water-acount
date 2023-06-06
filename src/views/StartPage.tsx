import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
        console.log(1);
        
    }
    return () => <div><div class={s.button_wrapper}>
        <Button onClick={onClick}>我是按钮</Button></div></div>
  }
})