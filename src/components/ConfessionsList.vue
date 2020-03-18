<template>
  <div class="wrapper">
    <div class="confessions">
      <div class="confession" v-for="confession in confessions" :key="confession.id">
        <div class="info">
          <p>{{confession.confession}}</p>
          <br />
          <p class="major">-{{confession.major}}</p>
          <div class="likes">
            <button class="auto" v-on:click="addLikes(confession)">
              <i class="far fa-thumbs-up"></i>
            </button>
            <p>{{confession.likes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfessionsList",
  props: {
    confessions: Array
  },
  methods: {
    addLikes(confession) {
      let newLikes = parseInt(confession.likes) + 1;
      confession.likes = newLikes.toString();
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.confessions {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.confession {
  margin: 10px;
  margin-top: 150px;
  width: 200px;
}

.info {
  color: #000;
  font-family: "Merriweather", serif;
  padding: 10px 30px;
  height: 80px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

.likes {
  display: flex;
  width: 50px;
  height: 50px;
}

.likes p {
  margin-left: 6px;
  margin-top: 5px;
  font-size: 10px;
}

button {
  height: 25px;
  background: #000;
  color: white;
  border: none;
  margin-top: 5px;
  margin-left: 0px;
}
</style>