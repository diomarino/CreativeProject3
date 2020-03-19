
<template>
  <div class="form-container">
    <div class="form" id="confession-form">
      <form class="pure-form" name="submit-confession">
        <fieldset class="pure-group">
          <input type="text" class="pure-input-1-2" placeholder="Major" v-model="major" />
          <textarea class="pure-input-1-2" placeholder="Confession" v-model="confession"></textarea>
        </fieldset>
        <button
          v-on:click="submitConfession"
          type="submit"
          class="pure-button pure-input-1-2 pure-button-primary"
        >Submit</button>
      </form>
      <div class="success" v-if="success">
        <p>{{ this.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data() {
    return {
      major: "",
      confession: "",
      success: false,
      message: ""
    };
  },
  methods: {
    submitConfession(event) {
      event.preventDefault();
      this.$root.$data.confessions.push({
        id: this.$root.$data.confessions.length + 1,
        confession: this.confession,
        likes: "0",
        major: this.major
      });
      this.success = true;
      this.message = "Successfully submitted confession.";
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

.success {
  color: grey;
}
</style>