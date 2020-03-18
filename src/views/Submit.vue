
<template>
  <div class="form-container">
    <div class="form">
      <form class="pure-form" name="submit-confession">
        <fieldset class="pure-group">
          <input type="text" class="pure-input-1-2" placeholder="Major" id="major" />
          <textarea class="pure-input-1-2" placeholder="Confession" id="confession"></textarea>
        </fieldset>
        <button
          v-on:click="submitConfession()"
          type="submit"
          class="pure-button pure-input-1-2 pure-button-primary"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submit",
  methods: {
    submitConfession() {
      let id = this.$root.$data.confessions.length + 1;
      let major = document.getElementById("major").value;
      let confession = document.getElementById("confession").value;

      let newConfession = {
        id: id,
        confession: confession,
        likes: "0",
        major: major
      };

      this.$root.$data.confessions.push(newConfession);
    }
  }
};
</script>

<style>
.form-container {
  display: flexbox;
}
.form {
  align-items: center;
  width: 100%;
  margin-left: 25%;
}
</style>