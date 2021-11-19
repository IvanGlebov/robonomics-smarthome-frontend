<template>
  <div class="layout">
    <header class="header">
      <meta charset="utf-8">
    </header>
    <!-- Page slot here -->
    <slot/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  background-color: grey;
  font-family: 'Raleway', sans-serif;
  margin:0;
  padding:0;
  font-size: 16pt;
  line-height: 1.5;
}
.layout {
  /* height: 100vh; */
}
</style>
