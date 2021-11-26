<template>
  <Layout>
    <div class="blockWrapper">
      <div class="contentWrapper">
        <div class="headerWrapper">
          <div class="header">Smart home dashboard</div>
        </div>
        <div class="cardsWrapper">
          <div class="recentlyAddedNotificationWrapper" v-if="getRecentlyAddedDevices.length > 0">
            <svg xmlns="http://www.w3.org/2000/svg" width="47.585" height="44.354" viewBox="0 0 47.585 44.354">
              <g id="Component_5_1" data-name="Component 5 – 1" transform="translate(1.543 1.566)">
                <path id="Path_13" data-name="Path 13" d="M688.445,507.386l19.034,14.96L727.8,486.474"
                      transform="translate(-598.257 -588.181) rotate(9)" fill="none" stroke="#00ccad"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </g>
            </svg>
            <div>Device «{{ getRecentlyAddedDevices[0].name }}» has been added</div>
          </div>
          <DeviceCard v-for="device in devices" v-if="device.recentlyAdded === true" :device="device"/>
          <DeviceCard v-for="device in devices" v-if="device.recentlyAdded !== true" :device="device"/>
          <div @click="goToAddDevice" class='addDeviceWrapper'>
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
    ...mapGetters(['getDevices', 'getRecentlyAddedDevices'])
  },
  mounted() {
    this.devices = this.getDevices
    console.log(this.getRecentlyAddedDevices)
  },
  methods: {
    goToAddDevice() {
      this.$router.push('/addDevice')
    }
  }
};
</script>

<style lang='css' scoped>
.blockWrapper {
  height: calc(80vh - 205px);
  padding: 53px;
  /*overflow-y: auto;*/
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

.cardsWrapper {
  display: flex;
  flex-direction: column;
  gap: 39px;
  height: 500px;
  overflow-y: auto;
}

.cardsWrapper::-webkit-scrollbar {
  width: 15px;
}

.cardsWrapper::-webkit-scrollbar-track {
  background-color: #EFEFEF;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.cardsWrapper::-webkit-scrollbar-thumb {
  background-color: #D0C6C7;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.addDeviceWrapper {
  border: 2px solid var(--main-blue-color);
  height: 81px;
  display: flex;
  gap: 20px;
  padding: 18px;
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

.recentlyAddedNotificationWrapper {
  color: var(--main-green-color);
  display: flex;
  align-items: center;
  gap: 24px;
}

</style>
