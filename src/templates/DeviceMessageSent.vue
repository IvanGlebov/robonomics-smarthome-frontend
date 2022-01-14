<template>
  <Layout>
    <div class="blockWrapper">
      <div class="contentWrapper">
        <div class="headerWrapper">
          <div @click="goBack" class="backArrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.225"
              height="46.677"
              viewBox="0 0 63.225 46.677"
            >
              <g
                id="Component_3_1"
                data-name="Component 3 – 1"
                transform="translate(1 1.414)"
              >
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M150,1129.81h60.934"
                  transform="translate(-149.709 -1107.976)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M168.634,1107.976,146.709,1129.9l21.924,21.924"
                  transform="translate(-146.709 -1107.976)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <div class="header">{{ device.name }}</div>
        </div>
        <div class="deviceCardWrapper">
          <div class="deviceImageWrapper"></div>
          <div class="deviceDataWrapper">
            <div class="controlDeviceWrapper">
              <div class="buttonsContainer">
                <div class="switchElement">Control your device</div>
              </div>
              <div class="messageWritten">
                <div class="messageText">
                  Your message «{{ message }}» has been written successfully
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47.585"
                  height="44.354"
                  viewBox="0 0 47.585 44.354"
                >
                  <g
                    id="Component_5_1"
                    data-name="Component 5 – 1"
                    transform="translate(1.543 1.566)"
                  >
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M688.445,507.386l19.034,14.96L727.8,486.474"
                      transform="translate(-598.257 -588.181) rotate(9)"
                      fill="none"
                      stroke="#00ccad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <g-link :to="`/device/${device.id}`" class="extrinsic">View extrinsic</g-link>
              </div>
              <Input placeholder="Your message" v-model="messageValue" />
              <Input type="password" placeholder="Enter keyword" v-model="sidPhrase_1" />
              <Button
                color-scheme="regular"
                variant="next"
                :loading="loading"
                @click="sendMessage"
              >Send message</Button>
            </div>
            <div class="controlDeviceWrapper">
              <div class="buttonsContainer">
                <div class="switchElement">Retrieve data</div>
              </div>
              <div class="buttonsContainer tableJsonButtons">
                <button
                  @click="setToJsonMode"
                  :class="{ activeButton: tableMode }"
                >
                  Table
                </button>
                <button
                  @click="setToTableMode"
                  :class="{ activeButton: !tableMode }"
                >
                  Json
                </button>
              </div>
              <Table
                v-if="tableMode"
                class="retrieveDataTable"
                :rows="retrieveData"
              />
              <div v-if="!tableMode" class="retrieveDataJson">
                {{ retrieveData }}
              </div>
              <div class="decodeMessageWrapper">
                <Input type="password" placeholder="Enter your key" v-model="sidPhrase_2" />
                <Button
                  color-scheme="regular"
                  variant="download"
                  @click="fetchDevice"
                >Get new decoded data</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Table from "../components/Table";
import Button from "../components/Button";
import Input from "../components/Input";

export default {
  name: "DeviceMessageSent.vue",
  metaInfo: {
    title: "Message sent",
  },
  components: { Input, Button, Table },
  data: () => {
    return {
      device: {},
      message: "",
      tableMode: true,
      retrieveData: [],
      sidPhrase_1: '',
      sidPhrase_2: '',
      loading: false,
      messageValue: ''
    };
  },
  computed: {
    ...mapGetters(["getDeviceById"]),
  },
  mounted() {
    this.device = this.getDeviceById(this.$route.params.deviceId)[0]
    if(this.device !== undefined)
      this.retrieveData = this.device.values
    else
      this.$router.push('/')
    this.message = this.$route.fullPath.split('/')[4]
  },
  methods: {
    sendMessage() {
      this.$data.loading = true
      if ((this.$data.messageValue === '') || (this.$data.sidPhrase_1 === '')){
        alert('Value or sid phrase is emphy ')
      }
      this.sendMessageToDevice({
        deviceId: this.device.id,
        sidPhrase: this.$data.sidPhrase_1,
        value: this.$data.messageValue,
        redirectMethod: this.$router
      })
      this.$data.loading = false
    },
    fetchDevice() {
      if(this.sidPhrase_2 !== null && this.sidPhrase_2 !== '') {
        this.fetchRemoteDevice({deviceId: this.device.id, sidPhrase: this.sidPhrase_2, showNotification: true})
        // setTimeout(() => {
        //   this.sidPhrase_2 = ''
        // })
      } else {
        alert("Sid phrase can't be empty")
      }
    },

    ...mapActions({sendMessageToDevice: 'sendDeviceToMessage', fetchRemoteDevice: 'fetchDevice'}),
    goBack() {
      this.$router.push(`/device/${this.$route.fullPath.split('/')[2]}`);
    },
    setToTableMode() {
      this.tableMode = false;
    },
    setToJsonMode() {
      this.tableMode = true;
    },
  },
};
</script>

<style scoped>
.blockWrapper {
  height: 64vh;
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
  font-family: "Raleway", sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

.contentWrapper {
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.deviceCardWrapper {
  height: calc(100% - 125px);
  display: flex;
  overflow-y: auto;
}

.deviceCardWrapper::-webkit-scrollbar {
  width: 15px;
}

.deviceCardWrapper::-webkit-scrollbar-track {
  background-color: #efefef;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.deviceCardWrapper::-webkit-scrollbar-thumb {
  background-color: #d0c6c7;
  border-radius: 10px;
  background-clip: content-box;
  border: 2px solid transparent;
}

.deviceImageWrapper {
  width: 150px;
}

.deviceDataWrapper {
  width: 70%;
}

.controlDeviceWrapper:not(:first-child) {
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

.switchElement {
  position: absolute;
  bottom: 0;
  display: inline-block;
  height: 25px;
  color: var(--main-white-color);
  background-color: var(--main-black-color);
  border: 1px solid var(--main-black-color);
  cursor: pointer;
  font-family: "Roboto Mono", Menlo, Consolas, Monaco, Liberation Mono,
    Lucida Console, monospace;
  font-size: 0.875rem;
  padding: 0 12px;
  margin: 0;
}

.tableJsonButtons {
  border: none;
  margin-top: 20px;
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

.buttonsContainer {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--main-black-color);
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  min-height: 30px;
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

.activeButton {
  background-color: var(--main-black-color);
  color: var(--main-white-color);
}

.retrieveDataTable {
  margin-top: 17px;
}

.retrieveDataJson {
  padding-top: 20px;
}

.decodeMessageWrapper {
  margin-top: 45px;
}

@media screen and (max-width: 500px) {

  .blockWrapper {
    padding: 30px 20px 0 30px;
  }

  .deviceImageWrapper {
    display: none;
  }
  .deviceDataWrapper {
    width: calc(100% - 10px);
  }
}

</style>
