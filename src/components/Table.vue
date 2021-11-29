<template>
  <div class="tableWrapper">
    <div class="tableRow" v-for="row in rows">
      <div class="col1">{{row.name}}</div>
      <div class="col2">{{row.value}}{{row.units}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    rows: [
      {
        name: String,
        value: String
      }
    ]
  }
}
</script>

<style scoped>

.tableWrapper {
  max-height: 100px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 14px 14px;
  border: 1px solid var(--main-black-color);
  width: calc(100% - 80px);
  /*width: calc(90% - 80px);*/
}

.tableWrapper::-webkit-scrollbar {
  width: 15px;
}

.tableWrapper::-webkit-scrollbar-track {
  background-color: #EFEFEF;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.tableWrapper::-webkit-scrollbar-thumb {
  background-color: #D0C6C7;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.tableRow {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  font-size: 1rem;
}

.tableRow:last-child {
  border-bottom: none;
}

.col1 {
  width: 65%;
}

.col2 {
  width: 45%;
  text-align: left;
}
</style>
