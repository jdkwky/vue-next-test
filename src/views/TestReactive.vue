<template>
  <div style="padding:10px">
    reactive
    <p>
      {{ info.test }}
    </p>
    <p>{{ foo }}</p>
    <p>{{ bar }}</p>
    <div>
      <button @click="handleChangeTest">changeTest</button>
    </div>
  </div>
</template>

<script>
import { reactive, readonly, isReactive } from "vue";

function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2,
    handleChangeTest: () => {
      state.foo = 3;
      state.bar = 4;
      console.log(state, "state");
    }
  });
  // return toRefs(state);
  return state;
}
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    console.log(props, context, "dddd");
    const info = { test: "reactive test", obj: { age: 19 } };
    const reactiveInfo = reactive(info);
    const readOnlyInfo = readonly(info);
    console.log(
      isReactive(info),
      isReactive(readOnlyInfo),
      isReactive(reactiveInfo)
    );

    // const { foo, bar } = useFeatureX() || {};
    // console.log(foo, bar, "foo bar");
    console.log(reactive(1), "reactive ins not object");
    return {
      info: reactiveInfo,
      readOnlyInfo,
      // foo,
      // bar
      ...useFeatureX()
    };
  },
  methods: {}
};
</script>