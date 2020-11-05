<template>
  <div>
    <button @click="emitEvent">子元素向外发送数据</button>
  </div>
</template>
<script>
export default {
  emits: {
    submit: ({ email, password } = {}) => {
      console.log(email, password, "dddd");
      if (email && password) {
        return true;
      }

      return false;
    }
  },
  data() {
    return {};
  },
  methods: {
    emitEvent() {
      this.$emit("submit");
    }
  }
};
</script>