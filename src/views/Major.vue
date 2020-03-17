<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a
            @click="select('Business Management')"
            href="#"
            class="pure-menu-link"
          >Business Management</a>
        </li>
        <li class="pure-menu-item">
          <a
            @click="select('Chemical Engineering')"
            href="#"
            class="pure-menu-link"
          >Chemical Engineering</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Communications')" href="#" class="pure-menu-link">Communications</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Computer Science')" href="#" class="pure-menu-link">Computer Science</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Family Life')" href="#" class="pure-menu-link">Family Life</a>
        </li>
      </ul>
    </div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a @click="select('Humanities')" href="#" class="pure-menu-link">Humanities</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Mathematics')" href="#" class="pure-menu-link">Mathematics</a>
        </li>
        <li class="pure-menu-item">
          <a
            @click="select('Mechanical Engineering')"
            href="#"
            class="pure-menu-link"
          >Mechanical Engineering</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Political Science')" href="#" class="pure-menu-link">Political Science</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Theatre Arts')" href="#" class="pure-menu-link">Theatre Arts</a>
        </li>
      </ul>
    </div>
    <ConfessionsList :confessions="confessions" />
  </div>
</template>

<script>
import ConfessionsList from "../components/ConfessionsList.vue";
export default {
  name: "Major",
  components: {
    ConfessionsList
  },
  data() {
    return {
      major: ""
    };
  },
  computed: {
    confessions() {
      return this.$root.$data.confessions.filter(
        confession => confession.major === this.major
      );
    }
  },
  methods: {
    select(major) {
      this.major = major;
    }
  }
};
</script>