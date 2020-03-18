<template>
  <div>
    <div>
      <ConfessionsList :confessions="confessions" />
    </div>
    <div class="footer">
      <a href="https://github.com/diomarino/CreativeProject3.git">GitHub</a>
    </div>
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

<style>
.footer {
  position: relative;
  margin-top: 100px;
  height: 10px;
  clear: both;
  color: white;
  text-align: center;
}
</style>
