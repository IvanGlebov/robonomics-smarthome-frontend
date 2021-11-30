<template>
  <div class="layout">
    <header class="header">
      <meta charset="utf-8">
    </header>
    <!-- Page slot here -->
    <div class="mainSlideWrapper">
      <slot/>
      <div class="askForHelp">Ask for support</div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

:root {
  --main-blue-color: #1547D0;
  --main-black-color: #000000;
  --main-white-color: #FFFFFF;
  --main-grey-color: #797979;
  --secondary-grey-color: #696969;
  --main-green-color: #00CCAD;
}

html {
  background-image: url(mainBackground1024.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 12pt;
}

body {
  overflow: hidden;
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.mainSlideWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10vh 35vw 10vh 10vh;
  background-color: var(--main-white-color);
  border: 1px solid var(--main-black-color);
  transition: all .5s;
  height: 80vh;
}

.askForHelp {
  height: 26px;
  padding-top: 20px;
  margin-top: 21px;
  margin-bottom: 30px;
  margin-left: 51px;
  color: var(--main-grey-color);
  font-size: 1.25rem;
}

.layout {
  height: 100vh;
}

@media screen and (max-width: 1150px) {
  .mainSlideWrapper {
    transition: all .5s;
    margin: 10vh 25vw 10vh 10vh;
  }
}

@media screen and (max-width: 1050px) {
  .mainSlideWrapper {
    transition: all .5s;
    margin: 10vh 20vw 10vh 10vh;
  }
}

@media screen and (max-width: 1000px) {
  .mainSlideWrapper {
    transition: all .5s;
    margin: 10vh;
  }
}

@media screen and (max-width: 800px) {
  .deviceImageWrapper {
    width: 80px !important;
  }
}

@media screen and (max-width: 700px) {
  .mainSlideWrapper {
    transition: all .5s;
    margin: 10vh 5vh;
  }
}

@media screen and (max-width: 500px) {
  html {
    font-size: 8pt;
  }
}

</style>
