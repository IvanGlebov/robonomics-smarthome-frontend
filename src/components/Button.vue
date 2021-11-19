<template>
  <div>
    <button @click="testAlert" class="sendButton">
      <div>{{ placeholder }}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="33.712" height="25.54" viewBox="0 0 33.712 25.54">
        <g id="Group_9" data-name="Group 9" transform="translate(1 1.414)">
          <path id="Path_9" data-name="Path 9" d="M181.561,1129.81H150" transform="translate(-150 -1118.501)"
                fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_10" data-name="Path 10" d="M146.709,1107.976l11.356,11.356-11.356,11.356"
                transform="translate(-126.354 -1107.976)" fill="none" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"/>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  methods: {
    testAlert () {
      alert('test alert')
    }
  },
  props: {
    placeholder: String
  }
}
</script>

<style scoped>
.sendButton {
  cursor: pointer;
  margin-top: 9px;
  border: 0;
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-blue-color);
  color: var(--main-white-color);
  padding: 13px 21px 13px 15px;
  height: auto;
}
</style>
