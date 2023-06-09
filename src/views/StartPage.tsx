import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from './StartPage.module.scss'
import SvgIcon from '../shared/SvgIcon/index.vue'
export const StartPage = defineComponent({
  setup() {
    const onClick = () => {
        console.log(1);
        
    }
    return () => <div><div class={s.button_wrapper}>
      
         <SvgIcon name="water"></SvgIcon>
        <Button onClick={onClick}>我是按钮</Button></div></div>
  }
})