<template>
  <div :class="{deviceWrapper: device.recentlyAdded !== true, recentlyAddedDeviceWrapper: device.recentlyAdded === true}">
    <div class='deviceImage'>
      <g-image :src="device.imgSrc" alt="device image"/>
    </div>
    <div class='deviceStats'>
        <div class='deviceName'>{{ device.name }}</div>
      <div v-if="device.recentlyAdded !== true">
        <span class='splitter'></span>
        <ValuesRow :device-id="device.id" :values="device.values"/>
      </div>
      <div v-if="device.isManageable">
        <g-link :to="`/device/` + device.id" class="link">Manage</g-link>
      </div>
      <div class="checkboxUpdate">
        <Checkbox v-model="checkboxState" @change="onCheckboxChange">Enable writing data into datalog</Checkbox>
        <Button v-if="showUpdateButton" class="checkboxUpdateButton" @click="toggleModal" color-scheme="regular">Update</Button>
      </div>
      <Modal :show="modalShow">
        <div>
          <h3>Sid phrase is required to proceed</h3>
          <Input type="password" v-model="seedPhrase" placeholder="Enter your sid phrase"/>
          <div class="control-buttons">
            <Button color-scheme="regular" @click="toggleModal">Cancel</Button>
            <Button color-scheme="regular" @click="launchDevice">Fetch data</Button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import ValuesRow from "./ValuesRow";
import Checkbox from "./Checkbox";
import axios from "axios";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

export default {
  name: "DeviceCard",
  components: {Checkbox, ValuesRow, Modal, Button, Input},
  props: {
    device: {
      id: String,
      name: String,
      imgSrc: String,
      values: [
        {
          name: String,
          value: Number,
          units: String
        }
      ],
      isManageable: Boolean
    }
  },
  data: () => {
    return {
      checkboxState: false,
      modalShow: false,
      seedPhrase: '',
      test: false,
      showUpdateButton: false
    }
  },
  methods: {
    toggleModal() {
      this.$data.modalShow = !this.$data.modalShow
    },
    onCheckboxChange () {
      this.$data.showUpdateButton = !this.$data.showUpdateButton
    },
    launchDevice() {
      if(this.$data.seedPhrase !== undefined && this.$data.seedPhrase !== '') {
        axios.post('http://localhost:8000/launchDevice', {
          id: this.$props.device.id,
          seed: this.$data.seedPhrase,
          status: this.$data.checkboxState.toString()
        })
            .then(res => {
              if (res.status === 200) {
                if (res.data.status === 200) {
                  this.toggleModal()
                  this.$data.showUpdateButton = false
                } else {
                  alert(`Something has gone wrong while writing changes into datalog. Try again later\n ${res.data.message}`)
                }
              } else {
                alert("Something has gone wrong while writing changes into datalog. Try again later")
              }
            })
            .catch(error => {
              alert(`Something has gone wrong while writing changes into datalog. Try again later\n ${error}`)

            })
      }
    }
  },
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

.control-buttons {
  padding-top: 20px;
}

.checkboxUpdate {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.checkboxUpdateButton {

  margin-right: -10px;
}

@media screen and (min-width: 1700px) {
  .deviceStats {
    transition: all .5s;
    width: 100%;
  }
}
</style>
