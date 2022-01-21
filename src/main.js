// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import axios from "axios";

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      devices: [
        {
          id: '1',
          name: 'Aquara temperature & humidity sensor',
          values: [
            // {
            //   name: 'Temperature',
            //   value: '23.4',
            //   units: '°C'
            // },
            // {
            //   name: 'Humidity',
            //   value: '30',
            //   units: '%'
            // },
            // {
            //   name: 'PM2.5',
            //   value: '35',
            //   units: ''
            // },
            // {
            //   name: 'Air pressure',
            //   value: '745.3',
            //   units: 'mmHg'
            // }
          ],
          recentlyAdded: false,
          imgSrc: "/devicePlaceholder.jpeg",
          isManageable: false
        },
        {
          id: '2',
          name: 'Robot Vacuum',
          values: [
            // {
            //   name: 'Temperature',
            //   value: '23.4',
            //   units: '°C'
            // },
            // {
            //   name: 'Humidity',
            //   value: '30',
            //   units: '%'
            // },
            // {
            //   name: 'PM2.5',
            //   value: '35',
            //   units: ''
            // },
            // {
            //   name: 'Air pressure',
            //   value: '745.3',
            //   units: 'mmHg'
            // }
          ],
          recentlyAdded: false,
          imgSrc: '/devicePlaceholder.jpeg',
          isManageable: false
        },
        {
          id: '3',
          name: 'Lightbulb',
          values: [
            // {
            //   name: 'Temperature',
            //   value: '23.4',
            //   units: '°C'
            // },
            // {
            //   name: 'Humidity',
            //   value: '30',
            //   units: '%'
            // },
            // {
            //   name: 'PM2.5',
            //   value: '35',
            //   units: ''
            // },
            // {
            //   name: 'Air pressure',
            //   value: '745.3',
            //   units: 'mmHg'
            // }
          ],
          recentlyAdded: false,
          imgSrc: '/devicePlaceholder.jpeg',
          isManageable: false
        }
      ]
    },
    mutations: {
      addDevice (state, device) {
        state.devices.push(device)
      },
      derecentDevice (state, id) {
        state.devices.map(device => {
          if(device.id.toString() === id.toString()){
            device.recentlyAdded = false
          }
        })
      },
      setDeviceId (state, {deviceId, deviceData}) {
        state.devices.map((device, id) => {
          // ONLY FOR DEMO!
          // TODO Remove after demo is completed
          if (device.id.toString() === deviceId.toString())
            device.id = deviceData.id
          return device
        })
      },
      setDeviceData (state, {deviceId, updateData}) {
        state.devices.map((device) => {
          if (device.id.toString() === deviceId.toString()) {
            device.values = updateData.values || []
            device.name = updateData.name
            device.isManageable = updateData?.isManageable || false
            device.imgSrc = updateData?.imgSrc
          }
          return device
        })
      }
    },
    getters: {
      getDeviceById: state => deviceId => {
        return state.devices.filter(v => v.id.toString() === deviceId.toString())
      },
      getDevices: state => {
        return state.devices
      },
      getRecentlyAddedDevices: state => {
        return state.devices.filter(v => v.recentlyAdded === true)
      }
    },
    actions: {
      setNewDeviceId({commit}, deviceToUpdate) {
        commit("setDeviceId", deviceToUpdate)
      },
      getDevices({commit}) {
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:8000/devices')
              .then((res) => {
                if(res.status === 200) {
                  if(res.data.code === 200) {
                    let devices = res.data.message
                    // console.log('setting devices')
                    commit('setDevices', {devices})
                    resolve(devices)
                  } else {
                    console.log('Internal server error')
                    reject(res)
                  }
                } else {
                  console.log('Http request error')
                  reject(res)
                }
              })
              .catch((error) => {
                console.log('catch error')
                reject(error)
              })
        })
      },
      fetchDevice({commit, store}, {deviceId, sidPhrase, showNotification}) {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:8000/fetchDevice/${deviceId}?decryptKey=${sidPhrase}`)
              .then((res) => {
                if (res.status === 200) {
                  if (res.data.code === 200) {
                    commit('setDeviceData', {deviceId: deviceId, updateData: JSON.parse(res.data.message)})
                    resolve(res)
                    if(showNotification)
                      alert('Device fetched successfully')
                  } else {
                    alert(`Error with status code ${res.data.code} \nMessage: ${res.data.message}`)
                    reject(res)
                  }
                } else {
                  reject(res)
                  alert('Error while fetching data')
                }
              })
        })
      },
      sendMessageToDevice({commit, store}, {deviceId, sidPhrase, value}) {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:8000/updateDevice/${deviceId}?decryptKey=${sidPhrase}&value=${value}`)
              .then((res) => {
                if (res.status === 200){
                  if (res.data.code === 200) {
                    resolve(res)
                  } else {
                    alert(`Error while updating device. \nStatus code ${res.data.code} \nMessage: ${res.data.message}`)
                    reject(res)
                  }
                } else {
                  alert("Error while updating device")
                  reject(res)
                }
              })
        })
      },
      addNewDevice({commit, store}, device) {
        return new Promise((resolve, reject) => {
          axios.post(`http://localhost:8000/addNewDevice`, {...device})
              .then((res) => {
                resolve({res, device})
              })
              .catch((error) => {
                reject({error, device})
              })
        })
      }
    }
  })
}
