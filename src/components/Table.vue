<template>
  <div class="tableWrapper">
    <div class="tableRow" v-for="row in rows">
      <div class="col1">{{row.name}}</div>
      <div class="col2">{{row.value}}</div>
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
  width: 70%;
}

.tableRow {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}

.tableRow:last-child {
  border-bottom: none;
}

.col1 {
  width: 50%;
}

.col2 {
  width: 50%;
  text-align: left;
}
</style>
