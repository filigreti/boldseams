<template>
  <main>
    <div class="header">
      <div class="logo-container">
        <div class="main-logo">BC</div>
        <div class="logo-name">Boldseams Couture</div>
      </div>
      <div class="user-settings">
        <div class="notification">
          <img src="@/assets/bell.svg" alt="" />
        </div>
        <div>
          <div class="info-settings">Seun James</div>
          <router-link class="setting" to="/logout">Log out</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.header {
  height: 3.5rem;
  background: white;
  width: 100%;
  position: fixed;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  top: 0;
  z-index: 2;
}
.logo-container {
  font-family: "Roboto";
  display: flex;
  align-items: center;
}
.main-logo {
  border: 0.4px solid #c7c7c780;
  padding: 0.4rem;
  border-radius: 10px;
  color: 333333;
}
.notification {
  margin-right: 1.5rem;
}
.logo-name {
  color: 333333;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
}
.notification img {
  height: 1.5rem;
  width: 1.5rem;
}
.user-settings {
  padding-right: 2rem;
  display: flex;
  align-items: center;
}
.info-settings {
  font-size: 0.8rem;
  color: #343434;
}
.setting {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 0.8rem;
  text-align: right;
  color: #1765d8;
}
</style>