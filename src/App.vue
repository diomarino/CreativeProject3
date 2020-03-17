<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/byu.jpeg" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/major">
          <div class="menu-confession major">
            <i class="fas fa-graduation-cap"></i>
            <p>Major</p>
          </div>
        </router-link>
        <router-link to="/confess">
          <div class="submit-confession confession">
            <i class="fas fa-bullhorn"></i>
            <p>Submit</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #021050;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side i {
  width: 50px;
  margin-left: 15px;
}

.menu-confession {
  display: flex;
  flex-direction: column;
}

.menu-confession p {
  margin: 5px;
}

.major {
  margin-left: 100px;
  margin-right: 20px;
  margin-top: 110px;
}

.submit-confession {
  display: flex;
  flex-direction: column;
}

.submit-confession p {
  margin: 5px;
}

.confession {
  margin-top: 110px;
}
</style>
