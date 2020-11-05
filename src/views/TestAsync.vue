<template>
  <Suspense>
    <template #default>
      <AsyncComp />
    </template>
    <template #fallback>
      <Loading></Loading>
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading";
const AsyncComp = defineAsyncComponent({
  loader: () => import("./TestAsyncComponent.vue"),
  delay: 1000,
  loadingComponent: Loading
});

export default {
  components: { AsyncComp, Loading },
  setup() {}
};
</script>