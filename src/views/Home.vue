<template>
  <div>
    <ConfessionsList :confessions="confessions" />
  </div>
</template>

<script>
import ConfessionsList from "../components/ConfessionsList.vue";
export default {
  name: "Home",
  components: {
    ConfessionsList
  },
  data() {
    return {};
  },
  computed: {
    confessions() {
      return this.$root.$data.confessions;
    }
  }
};
</script>
