<template>
  <input
    type="text"
    :value="foo"
    @input="$emit('update:foo', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    foo: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
</style>