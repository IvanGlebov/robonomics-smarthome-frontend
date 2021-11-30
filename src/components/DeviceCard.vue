<template>
  <div :class="{deviceWrapper: device.recentlyAdded !== true, recentlyAddedDeviceWrapper: device.recentlyAdded === true}">
    <div class='deviceImage'>
      <g-image :src="device.imgSrc" alt="device image"/>
<!--      <div>{{device.imgSrc}}</div>-->
<!--      <g-image src="/devicePlaceholder.jpeg" alt="device image"/>-->
    </div>
    <div class='deviceStats'>
        <div class='deviceName'>{{ device.name }}</div>
      <div v-if="device.recentlyAdded !== true">
        <span class='splitter'></span>
        <ValuesRow :values="device.values"/>
      </div>
      <div>
        <g-link :to="`/device/` + device.id" class="link">Manage</g-link>
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
    device: {
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
    }

  },
  methods: {
    testAlert () {
      alert('test click')
    }
  }
}

</script>

<style scoped>

.deviceWrapper {
  padding: 24px 22px 32px 18px;
  border: 2px solid var(--main-black-color);
  display: flex;
  gap: 20px;
}

.recentlyAddedDeviceWrapper {
  padding: 24px 22px 32px 18px;
  border: 2px solid var(--main-green-color);
  display: flex;
  gap: 20px;
}

.deviceName {
  font-weight: bold;
  font-size: 1.25rem;
}

.deviceImage {
  max-width: 150px;
  width: 100%;
}
.deviceImage img {
  width: inherit;
}

.deviceStats {
  transition: all .5s;
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

@media screen and (min-width: 1700px) {
  .deviceStats {
    transition: all .5s;
    width: 100%;
  }
}
</style>
