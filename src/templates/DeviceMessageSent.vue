<template>
  <Layout>
    <div class="blockWrapper">
      <div class="contentWrapper">
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
          <div class="header">{{ device.name }}</div>
        </div>
      </div>
      <div class="deviceCardWrapper">
        <div class="deviceImageWrapper"></div>
        <div class="deviceDataWrapper">
          <div class="controlDeviceWrapper">
            <div class="buttonsContainer">
              <div class="switchElement">Control your device</div>
            </div>
            <div class="messageWritten">
              <div class="messageText">Your message «{{ message }}» has been written successfully</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="47.585" height="44.354" viewBox="0 0 47.585 44.354">
                <g id="Component_5_1" data-name="Component 5 – 1" transform="translate(1.543 1.566)">
                  <path id="Path_13" data-name="Path 13" d="M688.445,507.386l19.034,14.96L727.8,486.474"
                        transform="translate(-598.257 -588.181) rotate(9)" fill="none" stroke="#00ccad"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>
            </div>
            <div>
              <g-link class="extrinsic">View extrinsic</g-link>
            </div>
            <Input placeholder="Your message" :on-change="onInputChange"/>
            <Button placeholder="Send message" @click="testAlert"/>
          </div>
          <div class="controlDeviceWrapper">
            <div class="buttonsContainer">
              <div class="switchElement">Retrieve data</div>
            </div>
            <div class="buttonsContainer tableJsonButtons">
              <button @click="setToJsonMode" :class="{activeButton: tableMode}">Table</button>
              <button @click="setToTableMode" :class="{activeButton: !tableMode}">Json</button>
            </div>
            <Table class="retrieveDataTable" :rows="retrieveData"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapGetters } from "vuex";
import Table from '../components/Table';
import Button from "../components/Button";
import Input from "../components/Input";

export default {
  name: "DeviceMessageSent.vue",
  components: {Input, Button, Table},
  data: () => {
    return {
      device: {},
      message: '',
      tableMode: true,
      retrieveData: [
        {name: 'Agent', value: 'lightbulb_on'},
        {name: 'Parameter', value: ''}
      ]
    }
  },
  computed: {
    ...mapGetters(['getDeviceById'])
  },
  mounted () {
    this.device  = this.getDeviceById(this.$route.params.deviceId)[0]
    this.message = this.$route.params.messageText
  },
  methods: {
    testAlert () {
      alert('test alert')
    },
    goBack () {
      this.$router.push(`/device/${this.$route.params.deviceId[0]}`)
    },
    setToTableMode () {
      this.tableMode = false
    },
    setToJsonMode () {
      this.tableMode = true
    },
    onInputChange (e) {
      console.log('on input change')
      console.log(e)
    }
  }
}
</script>

<style scoped>

.blockWrapper {
  height: calc(80vh - 205px);
  padding: 53px;
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

.contentWrapper {
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.deviceCardWrapper {
  height: 100%;
  display: flex;
  overflow-y: auto;
}

.deviceImageWrapper {
  width: 150px;
}

.deviceDataWrapper {
  width: 70%;
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

/*.buttonWrapper {*/
/*  width: 300px;*/
/*  height: 200px;*/
/*}*/

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

.buttonsContainer {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--main-black-color);
  justify-content: flex-end;
  align-items: flex-end;
}

.tableJsonButtons {
  border: none;
  margin-top: 20px;
  /*position: relative;*/
  /*top: 1px;*/
}

.messageWritten {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--main-green-color);
  font-size: 1.25rem;
}

.messageText {
  margin-top: 17px;
}

.extrinsic {
  color: var(--main-blue-color);
  text-decoration: none;
}

button {
  position: relative;
  top: 1px;
  width: 74px;
  height: 25px;
  background-color: transparent;
  border: 1px solid var(--main-black-color);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0;
}

.activeButton {
  background-color: var(--main-black-color);
  color: var(--main-white-color);
}

.retrieveDataTable {
  margin-top: 17px;
}

</style>
