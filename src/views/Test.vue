<template>
  <div class="test">
    this is test page
    <p :title="message">
      time hove test a few seconds
    </p>

    <TestEmit @submit="handleTestSubmit" />

    <TestModel v-model:foo="bar" />
    <div style="padding:10px">
      <TestSlot>
        <template #item>
          <i class="fas fa-check"></i>
          <span class="green">{{ item.item }}</span>
        </template>
      </TestSlot>
    </div>

    <div title="setUp" style="padding: 10px">
      <span>{{ count }}</span>

      <button @click="count++">Increment count</button>
    </div>

    <div style="padding: 10px">
      <TestSetup />
    </div>
  </div>
  <TestReactive @test="() => {}" name="test" />

  <TestComputed />

  <TestAsync />
</template>
<script>
import TestEmit from "./TestEmit";
import TestModel from "./TestModel";
import TestSlot from "./TestSlot";
import TestSetup from "./TestSetup";
import TestReactive from "./TestReactive";
import TestComputed from "./TestComputed";
import TestAsync from "./TestAsync";

import { reactive, ref } from "vue";
export default {
  components: {
    TestEmit,
    TestModel,
    TestSlot,
    TestSetup,
    TestReactive,
    TestComputed,
    TestAsync
  },

  setup() {
    const count = ref(0);
    console.log("setup ref({name: test })", ref({ name: "test" }));
    return {
      count
    };
  },
  data() {
    return {
      message: "test" + new Date().toLocaleString(),
      bar: "111",
      slotName: "item"
    };
  },
  mounted() {
    console.log(this.$root, "this.$root");
    // this.$refs.name = "wrong";
    const obj = reactive({ count: 0 });
    console.log(obj, "reactive obj");
    console.log(ref(0), "ref", ref(0).value);
  },
  watch: {
    bar: function(v) {
      console.log(v, "bar");
    }
  },
  methods: {
    handleTestSubmit(data) {
      console.log("submit ", data);
    }
  }
};
</script>
<style lang="less" scoped>
.test {
  color: red;
}
</style>