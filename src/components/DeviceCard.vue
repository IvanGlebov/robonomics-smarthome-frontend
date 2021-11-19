<template>
  <div class="deviceWrapper">
    <div class='deviceImage'>
      <g-image :src="imgSrc" alt="device image"/>
    </div>
    <div class='deviceStats'>
      <div class='deviceName'>{{ name }}</div>
      <span class='splitter'></span>
      <ValuesRow :values="values"/>
      <div>
        <g-link :to="`/device/` + $props.deviceId" class="link">Manage</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import ValuesRow from "./ValuesRow";
export default {
  name: "DeviceCard",
  components: {ValuesRow},
  props: {
    deviceId: String,
    name: String,
    imgSrc: String,
    values: [
      {
        name: String,
        value: Number,
        units: String
      }
    ]
  },
  methods: {
    testAlert: () => {
      alert('test click')
    }
  }
}

</script>

<style scoped>

.deviceWrapper {
  /*font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;*/
  padding: 24px 22px 32px 18px;
  border: 2px solid var(--main-black-color);
  display: flex;
  gap: 20px;
}

.deviceName {
  font-weight: bold;
  font-size: 1.25rem;
}

.deviceImage {
  width: 150px;
}

.deviceStats {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.link {
  color: var(--main-blue-color);
  text-decoration: none;
}

.link:visited {
  color: var(--main-blue-color);
}

</style>
