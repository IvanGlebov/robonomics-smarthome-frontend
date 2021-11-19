<template>
  <div class="inputWrapper">
    <input @change="onChange" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: String,
    onChange: Function
  }
}
</script>

<style scoped>
.inputWrapper input {
  border: 1px solid var(--main-black-color);
  border-radius: 0;
  margin-top: 15px;
  width: calc(100% - 30px);
  padding: 10px 14px 14px 14px;
  font-size: 1.25rem;
}
</style>
