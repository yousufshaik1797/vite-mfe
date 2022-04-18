<template>
  <exposed-component />
</template>
<script>
import { defineAsyncComponent } from 'vue';
const RouterRemoteHeader = defineAsyncComponent(() =>
  import("remote/headerExposed")
);
export default {
  name: "shell",
  components: {
    "exposed-component": RouterRemoteHeader,
  },
};
</script>