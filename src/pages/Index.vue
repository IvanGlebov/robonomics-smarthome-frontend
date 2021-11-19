<template>
  <Layout>
    <div class="blockWrapper">
      <div class="contentWrapper">
        <div class="header">Smart home dashboard</div>
        <DeviceCard v-for="device in devices" :name="device.name" :device-id="device.id" :values="device.values"/>
        <div @click="testClick" class='addDeviceWrapper'>
          <div class="svgWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="48.454" height="48.454" viewBox="0 0 48.454 48.454">
              <g id="Component_2_1" data-name="Component 2 – 1" transform="translate(1 1)">
                <path id="Path_2" data-name="Path 2" d="M218,531.323v46.454" transform="translate(-194.773 -531.323)"
                      fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
                <path id="Path_3" data-name="Path 3" d="M218,531.323v46.454"
                      transform="translate(577.777 -194.773) rotate(90)" fill="none" stroke="#1547d0"
                      stroke-linecap="round" stroke-width="2"/>
              </g>
            </svg>
          </div>
          <div class="textWrapper">Add new device</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DeviceCard from "../components/DeviceCard";
import { mapGetters } from "vuex";

export default {
  components: {DeviceCard},
  metaInfo: {
    title: "Smart home dashboard",
  },
  data: () => {
    return {
      devices: [],
    }
  },
  computed: {
    ...mapGetters(['getDevices'])
  },
  mounted() {
    this.devices = this.getDevices
  },
  methods: {
    testClick: () => {
      alert('test click')
    }
  }
};
</script>

<style lang='css' scoped>
.blockWrapper {
  height: calc(80vh - 205px);
  padding: 53px;
  overflow-y: auto;
}

.header {
  font-family: 'Raleway', sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

.contentWrapper {
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.addDeviceWrapper {
  border: 2px solid var(--main-blue-color);
  height: 81px;
  display: flex;
  gap: 20px;
  padding-left: 18px;
  align-items: center;
  cursor: pointer;
}

.svgWrapper {
  display: flex;
  justify-content: center;
  width: 30%;
}

.textWrapper {
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-weight: bold;
  color: var(--main-blue-color);
  width: 70%;
}

</style>
