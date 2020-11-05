
<script>
import { defineAsyncComponent } from "vue";
export default defineAsyncComponent(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        template: "<div>我是异步组件！</div>"
      });
    }, 2000);
  });
});
</script>