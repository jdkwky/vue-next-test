<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <slot v-bind:item="item">
        {{ item }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ["Feed a cat", "Buy milk"]
    };
  }
};
</script>

<style lang="less">
</style>