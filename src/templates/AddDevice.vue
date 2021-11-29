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
          <div class="header">New device</div>
        </div>
      </div>
      <div class="deviceCardWrapper">
        <div class="deviceImageWrapper"></div>
        <div class="deviceDataWrapper">
          <Input v-model="deviceName" placeholder="Name"/>
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
          <Input v-model="parameter" placeholder="Some parameter ?"/>
          <Button :class="{addNewDeviceButton: filePath === '', addNewDeviceButton_reduced: filePath !== ''}"
                  variant="add" placeholder="Add new device" @click="addDevice"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Button from "../components/Button";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import { mapMutations } from "vuex";

export default {
  name: "AddDevice",
  metaInfo: {
    title: 'Add new device'
  },
  data: () => {
    return ({
      deviceName: '',
      filePath: '',
      parameter: ''
    })
  },
  components: {FileInput, Button, Input},
  methods: {
    goBack () {
      this.$router.push('/')
    },
    logFile (file) {
      this.filePath = URL.createObjectURL(file)
    },
    removeFile () {
      this.filePath = ''
    },
    addDevice () {
      console.log('adding new device')
      console.log(`Device name: ${this.deviceName}`)
      console.log(`Device image url: ${this.filePath}`)
      console.log(`Device some param: ${this.parameter}`)
      let device = {
        id: 4,
        name: this.deviceName,
        imgPath: this.filePath,
        param: this.parameter,
        recentlyAdded: true
      }
      //TODO server request to add new device
      // here
      // If response if OK -> this.addNewDevice
      // -> redirect to main and setTimeout for 5-10 seconds to fetch
      // information about device state and make it not 'recentlyAdded'
      this.addNewDevice(device)
      this.$router.push('/')
      setTimeout(() => {
        this.derecentDevice('4')
      }, 10000)
    },
    ...mapMutations({
      addNewDevice: 'addDevice',
      derecentDevice: 'deRecentDevice'
    })
  },

}
</script>

<style scoped>

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

/*.addNewDeviceButton {*/
/*  margin-top: 100px;*/
/*}*/

/*.addNewDeviceButton_reduced {*/
/*  margin-top: 50px;*/
/*}*/

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

</style>
