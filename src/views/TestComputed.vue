<template>
  <div>
    <h1>test computed</h1>
    <p>
      count:<span>{{ count }}</span> plusOne: <span>{{ plusOne }}</span>
    </p>
    <button @click="handleChangeCount">changeCount</button>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);

    watchEffect(() => console.log(count.value, "test computed watch effect"));

    setTimeout(() => {
      count.value = 1000;
    }, 1000);
    return {
      count,
      plusOne
    };
  },
  methods: {
    handleChangeCount() {
      console.log(this.count);
      this.count = 2;
    }
  }
};
</script>