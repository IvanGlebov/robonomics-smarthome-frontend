<template>
  <Layout>
    <Modal height="350px" :show="modalShow">
      <div>
        <h2>Something has gone wrong</h2>
        <div>Your device cannot be added by some reason. Please, check your internet connection and try again later.</div>
        <h3>Error message</h3>
        <div>{{modalMessage}}</div>
        <Button color-scheme="regular" @click="toggleModal">Close</Button>
      </div>
    </Modal>
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
          <div class="header">New device</div>
        </div>
      </div>
      <div class="deviceCardWrapper">
        <div class="deviceImageWrapper"></div>
        <div class="deviceDataWrapper">
          <Input v-model="deviceName" placeholder="Name"/>
          <Input v-model="deviceId" placeholder="Device ID"/>
          <FileInput v-if="filePath === ''" @input="logFile" title="Avatar (.jpg, .png < 1mb)"
                     placeholder="Choose a file"/>
          <div v-if="filePath !== ''" class="imageWrapper">
            <button @click="removeFile" class="removeButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="14.454" height="14.454" viewBox="0 0 14.454 14.454">
                <path id="Path_2" data-name="Path 2" d="M218,531.323v12.454" transform="translate(-210.773 -530.323)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
                <path id="Path_3" data-name="Path 3" d="M0,0V12.454" transform="translate(13.454 7.227) rotate(90)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
              </svg>
            </button>
            <g-image class="deviceImage" :src="filePath"/>
          </div>
          <Checkbox @change="onCheckboxChange">Leave a mark here if your device is manageable</Checkbox>
          <div v-for="parameter in parameters" class="inputsWrapper">
            <Input v-model="parameter.key" placeholder="Parameter name"/>
            <Input v-model="parameter.units" placeholder="Units"/>
          <div class="inputsWrapper">
            <Button color-scheme="regular" variant="add" @click="addEmptyParameter">Add parameter</Button>
            <Button color-scheme="reject" :disabled="parameters.length < 2" variant="reject" @click="removeLastParameter">Remove parameter</Button>
          </div>
          <Button color-scheme="regular" :class="{addNewDeviceButton: filePath === '', addNewDeviceButton_reduced: filePath !== ''}"
                  variant="add" @click="addDevice"
          >Add new device</Button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import FileInput from "../components/FileInput";
import Modal from "../components/Modal";
import {mapActions, mapMutations} from "vuex";

export default {
  name: "AddDevice",
  metaInfo: {
    title: 'Add new device'
  },
  data: () => {
    return ({
      deviceName: '',
      deviceId: '',
      filePath: '',
      parameters: [{key: '', units: ''}],
      modalShow: false,
      modalMessage: '',
      isManageable: false
    })
  },
  components: {FileInput, Button, Input, Modal, Checkbox},
  methods: {
    onCheckboxChange(args) {
      this.$data.isManageable = args
    },
    toggleModal(message) {
      this.$data.modalShow = !this.$data.modalShow
      if (message) {
        this.$data.modalMessage = message
      }
    },
    goBack() {
      this.$router.push('/')
    },
    logFile(file) {
      this.filePath = URL.createObjectURL(file)
    },
    removeFile() {
      this.filePath = ''
    },
    addDevice() {
      let newDevice = {
        deviceId: this.$data.deviceId,
        deviceName: this.$data.deviceName,
        deviceParams: this.$data.parameters,
        isManageable: this.$data.isManageable
      }
      // If response if OK -> this.addNewDevice
      // -> redirect to main and setTimeout for 5-10 seconds to fetch
      // information about device state and make it not 'recentlyAdded'
      this.addNewDeviceToServer(newDevice)
          .then(({res, device}) => {
            if(res.data.code === 200) {
              let newDevice = {
                id: device.deviceId,
                name: device.deviceName,
                values: [],
                recentlyAdded: true,
                isManageable: this.$data.isManageable,
                imgSrc: device.imgSrc || '/devicePlaceholder.jpeg'
              }
              this.addNewDevice(newDevice)
              this.$router.push('/')
              setTimeout(() => {
                this.derecentDevice(newDevice.id)
              }, 7000)
            } else {
              this.toggleModal(`Error code ${res.data.code}`)
            }
          })
      .catch(({error}) => {
        this.toggleModal(error)
      })
    },
    addEmptyParameter() {
      this.$data.parameters.push({key: '', units: ''})
    },
    removeLastParameter() {
      if(this.$data.parameters.length > 1)
        this.$data.parameters.pop()
    },
    ...mapMutations({
      addNewDevice: 'addDevice',
      derecentDevice: 'derecentDevice'
    }),
    ...mapActions({
      addNewDeviceToServer: 'addNewDevice'
    })
  }
}
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
  font-family: 'Raleway', sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

.deviceCardWrapper {
  height: calc(100% - 20px);
  display: flex;
  overflow-y: auto;
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
  width: 90px;
}

.imageWrapper {
  margin: 10px 0 40px;

  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
}

.deviceImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.deviceDataWrapper {
  width: 70%;
}


.removeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--main-blue-color);
  width: 29px;
  height: 29px;
  background-color: var(--main-white-color);
  position: relative;
  left: 130px;
  top: 20px;
}

.removeButton svg {
  transform: rotateZ(45deg);
}

@media screen and (max-width: 500px) {
  .blockWrapper {
    padding: 30px 30px 0;
  }
  .deviceImageWrapper {
    display: none;
  }
  .deviceDataWrapper {
    width: 100%;
  }

}

</style>
