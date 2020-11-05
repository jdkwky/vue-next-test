<template>
  <div>
    <h1>setup demo</h1>
    <span> {{ info1 }} </span>
    <div>
      <button @click="changeInfo1">changeInfo1</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { nextTick, compile, onMounted } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const info = { name: "setup ref" };
    const info1 = ref(info);
    // info1.value = 22222;
    console.log(info1, "info1");
    onMounted(() => {
      console.log("test setup onmounted");
    });
    return {
      info1
    };
  },
  mounted() {
    console.log("this.nextTick", this.$nextTick == nextTick);
    console.log("compile", compile);
  },
  methods: {
    changeInfo1() {
      console.log(this.info1, "changeInfo1 this.info1");
      this.info1.name = "1111111";
    }
  }
};
</script>
<style lang="less">
</style>