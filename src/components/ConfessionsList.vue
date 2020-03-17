<template>
  <div class="wrapper">
    <div class="confessions">
      <div class="confession" v-for="confession in confessions" :key="confession.id">
        <div class="info">
          <h1>{{confession.confession}}</h1>
          <h2>-{{confession.major}}</h2>
          <div class="likes">
            <button class="auto">
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
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.confession {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.info {
  color: #000;
  font-family: "Merriweather", serif;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.likes {
  display: flex;
}

.likes p {
  margin-left: 5px;
  margin-top: 5px;
}

button {
  height: 25px;
  background: #000;
  color: white;
  border: none;
}
</style>