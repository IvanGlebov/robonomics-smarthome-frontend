<template>
  <div class="checkbox-inner-wrapper">
    <input :value="checkedProp" @change="$emit('change', $event.target.checked)" type="checkbox"/>
    <div class="checkbox-description"><slot/></div>
  </div>
</template>

<script>
import Input from "./Input";
export default {
  name: "Checkbox",
  components: {Input},
  model: {
    prop: "checkedProp",
    event: "change"
  },
  props: {
    checkedProp: Boolean,
  }
}
</script>

<style scoped>
  .checkbox-inner-wrapper {
    display: flex;
    padding: 0;
    margin: 15px 0 0 0;
    min-height: 25px;
  }

  input[type=checkbox] {
    width: 0;
    height: 0;
    position: relative;
    cursor: pointer;
  }

  input[type=checkbox]:before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    top: -3px;
    left: -4px;
    border: 1px solid #555555;
    border-radius: 0;
    background-color: var(--main-white-color);
  }

  input[type=checkbox]:checked:before {
    background-color: var(--main-blue-color);
  }

  input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 10px;
    height: 17px;
    border: solid var(--main-white-color);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: -2px;
    left: 3px;
  }

  .checkbox-description {
    position: relative;
    left: 35px;
  }

</style>