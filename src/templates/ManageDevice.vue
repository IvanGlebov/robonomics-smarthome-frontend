<template>
  <Layout>
    <div class="blockWrapper">
<!--      <div class="contentWrapper">-->
        <div class="headerWrapper">
          <div @click="goBack" class="backArrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="63.225" height="46.677" viewBox="0 0 63.225 46.677">
              <g id="Component_3_1" data-name="Component 3 – 1" transform="translate(1 1.414)">
                <path id="Path_4" data-name="Path 4" d="M150,1129.81h60.934" transform="translate(-149.709 -1107.976)"
                      fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                <path id="Path_5" data-name="Path 5" d="M168.634,1107.976,146.709,1129.9l21.924,21.924"
                      transform="translate(-146.709 -1107.976)" fill="none" stroke="#000" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </g>
            </svg>
          </div>
          <div class="header">{{ deviceName }}</div>
        </div>
<!--      </div>-->
      <div class="deviceCardWrapper">
        <div class="deviceImageWrapper">
          <g-image alt="device img"/>
        </div>
        <div class="deviceDataWrapper">
          <div class="buttonsContainer">
            <button @click="setSimpleMode" :class="{activeButton: tableMode}">Simple</button>
            <button @click="setTableMode" :class="{activeButton: !tableMode}">Table</button>
          </div>
          <div class="simpleModeWrapper" v-if="tableMode">
            <ValuesRow :values="device.values"/>
          </div>
          <div class="tableModeWrapper" v-if="!tableMode">
            <Table :rows="device.values"/>
            <div @click="testAlert" class="rowDataUpdateButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="37.32" height="31.51" viewBox="0 0 37.32 31.51">
                <g id="Component_1_1" data-name="Component 1 – 1" transform="translate(1.215 1)">
                  <g id="Group_24" data-name="Group 24" transform="translate(-70.96 -21)">
                    <g id="Group_23" data-name="Group 23" transform="translate(-924.217 -496.533)">
                      <g id="Group_21" data-name="Group 21" transform="translate(997.962 535.012)">
                        <path id="Path_15" data-name="Path 15" d="M1023.925,544.441l6.027-2.907,1.645,6.486"
                              transform="translate(-999.491 -541.533)" fill="none" stroke="#1547d0"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2"/>
                        <path id="Path_16" data-name="Path 16" d="M997.807,543.5a16.1,16.1,0,0,0,29.448,0"
                              transform="translate(-997.807 -541.058)" fill="none" stroke="#1547d0"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2"/>
                      </g>
                      <g id="Group_22" data-name="Group 22" transform="translate(995.178 517.533)">
                        <path id="Path_17" data-name="Path 17" d="M1001.84,521.508l-6.31,3.044-1.722-6.791"
                              transform="translate(-993.807 -513.454)" fill="none" stroke="#1547d0"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2"/>
                        <path id="Path_18" data-name="Path 18" d="M1027.827,527.122a16.1,16.1,0,0,0-29.447,0"
                              transform="translate(-995.923 -517.533)" fill="none" stroke="#1547d0"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="2"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="controlDeviceWrapper">
            <div class="buttonsContainer">
              <div class="switchElement">Control your device</div>
            </div>
            <Input v-model="message" placeholder="Your message"/>
            <Input v-model="keyword" placeholder="Enter keyword"/>
            <Button variant="next" placeholder="Send message" @click="sendMessage"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>

import { mapGetters } from "vuex";
import ValuesRow from "../components/ValuesRow";
import Table from '../components/Table';
import Button from "../components/Button";
import Input from "../components/Input";

export default {
  name: "ManageDevice",
  metaInfo: {
    title: "Manage device"
  },
  components: {Input, Table, ValuesRow, Button},
  data: () => {
    return {
      deviceName: 'Aquara temperature & humidity sensor',
      tableMode: true,
      device: {},
      message: '',
      keyword: ''
    }
  },
  computed: {
    ...mapGetters(['getDeviceById'])
  },
  mounted () {
    this.device = this.getDeviceById(this.$route.params.deviceId)[0]
  },
  methods: {
    testAlert () {
      alert('test message')
    },
    setSimpleMode () {
      this.tableMode = true
    },
    setTableMode () {
      this.tableMode = false
    },
    goBack () {
      this.$router.push('/')
    },
    sendMessage () {
      alert(`Received data. message: ${this.message}, keyword: ${this.keyword}`)
      this.$router.push(`/device/${this.$route.params.deviceId}/messageSent/${this.message}`)
    }
  }
}

</script>

<style lang="css" scoped>

.blockWrapper {
  height: calc(80vh - 225px);
  padding: 53px 53px 0;
}

.headerWrapper {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

.backArrow {
  cursor: pointer;
}

.header {
  font-family: 'Raleway', sans-serif;
  text-wrap: normal;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

/*.contentWrapper {*/
/*  height: inherit;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  gap: 39px;*/
/*}*/


.deviceCardWrapper {
  display: flex;
  height: calc(100% - 190px);
  overflow-y: auto;
  margin-top: 50px;
  padding-top: 30px;
}

.deviceCardWrapper::-webkit-scrollbar {
  width: 15px;
}

.deviceCardWrapper::-webkit-scrollbar-track {
  background-color: #EFEFEF;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.deviceCardWrapper::-webkit-scrollbar-thumb {
  background-color: #D0C6C7;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.deviceImageWrapper {
  width: 30%;
}

.deviceDataWrapper {
  width: 70%;
}

.buttonsContainer {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--main-black-color);
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
}

button {
  position: absolute;
  bottom: -1px;
  width: 74px;
  height: 25px;
  background-color: transparent;
  border: 1px solid var(--main-black-color);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0;
}

button:not(:first-child) {
  left: 74px;
}

.switchElement {
  position: relative;
  display: inline-block;
  height: 25px;
  color: var(--main-white-color);
  background-color: var(--main-black-color);
  border: 1px solid var(--main-black-color);
  cursor: pointer;
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 0.875rem;
  padding: 0 12px;
  margin: 0;
}


.activeButton {
  background-color: var(--main-black-color);
  color: var(--main-white-color);
}

.simpleModeWrapper {
  margin-top: 15px;
}

.tableModeWrapper {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.controlDeviceWrapper {
  margin-top: 58px;
}

.inputWrapper input {
  border: 1px solid var(--main-black-color);
  border-radius: 0;
  margin-top: 15px;
  width: calc(100% - 30px);
  padding: 10px 14px 14px 14px;
  font-size: 1.25rem;
}

/*.sendButton {*/
/*  cursor: pointer;*/
/*  margin-top: 9px;*/
/*  border: 0;*/
/*  font-size: 1.25rem;*/
/*  width: 100%;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: space-between;*/
/*  background-color: var(--main-blue-color);*/
/*  color: var(--main-white-color);*/
/*  padding: 13px 21px 13px 15px;*/
/*  height: auto;*/
/*}*/


</style>
