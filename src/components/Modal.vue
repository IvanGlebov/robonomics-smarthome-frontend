<template>
  <div :class="['modal-wrapper', {'hide': !show}]">
    <div class="modal-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Modal",
  components: {Button},
  props: {
    show: Boolean
  },
}
</script>

<style scoped>

  .modal-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 30%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hide {
    display: none;
  }

  .modal-content {
    padding: 20px 30px 40px 30px;
    height: 200px;
    width: 400px;
    border: 1px solid var(--main-black-color);
    background-color: var(--main-white-color);
    color: var(--main-black-color);
  }

  .control-buttons {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

</style>