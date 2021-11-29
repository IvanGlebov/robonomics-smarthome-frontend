<template>
  <div class='rowDataWrapper'>
    <div class="rowValuesWrapper">
      <div v-for="item in values" class='rowValueWrapper'>
        <div class='rowValueHeader'>{{ item.name }}</div>
        <div class='rowValue'>{{ item.value.toString() + item.units }}</div>
      </div>
    </div>
    <div @click="testAlert" class="rowDataUpdateButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="37.32" height="31.51" viewBox="0 0 37.32 31.51">
        <g id="Component_1_1" data-name="Component 1 – 1" transform="translate(1.215 1)">
          <g id="Group_24" data-name="Group 24" transform="translate(-70.96 -21)">
            <g id="Group_23" data-name="Group 23" transform="translate(-924.217 -496.533)">
              <g id="Group_21" data-name="Group 21" transform="translate(997.962 535.012)">
                <path id="Path_15" data-name="Path 15" d="M1023.925,544.441l6.027-2.907,1.645,6.486"
                      transform="translate(-999.491 -541.533)" fill="none" stroke="#1547d0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_16" data-name="Path 16" d="M997.807,543.5a16.1,16.1,0,0,0,29.448,0"
                      transform="translate(-997.807 -541.058)" fill="none" stroke="#1547d0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </g>
              <g id="Group_22" data-name="Group 22" transform="translate(995.178 517.533)">
                <path id="Path_17" data-name="Path 17" d="M1001.84,521.508l-6.31,3.044-1.722-6.791"
                      transform="translate(-993.807 -513.454)" fill="none" stroke="#1547d0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_18" data-name="Path 18" d="M1027.827,527.122a16.1,16.1,0,0,0-29.447,0"
                      transform="translate(-995.923 -517.533)" fill="none" stroke="#1547d0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ValuesRow",
  props: {
    values: Array
  },
  methods: {
    testAlert() {
      alert('test click')
    }
  }
}
</script>

<style lang="css" scoped>

.rowDataWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.rowValuesWrapper {
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 85%;
  overflow-x: auto;
  padding-bottom: 10px;
  font-size: 1rem;
}

.rowValuesWrapper::-webkit-scrollbar {
  height: 15px;
}

.rowValuesWrapper::-webkit-scrollbar-track {
  background-color: #EFEFEF;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.rowValuesWrapper::-webkit-scrollbar-thumb {
  background-color: #D0C6C7;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.rowValue {
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-weight: bold;
}

.rowDataUpdateButton {
  cursor: pointer;
}

</style>
