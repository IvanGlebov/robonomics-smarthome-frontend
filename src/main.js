// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
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
            {
              name: 'Temperature',
              value: '23.4',
              units: '°C'
            },
            {
              name: 'Humidity',
              value: '30',
              units: '%'
            },
            {
              name: 'PM2.5',
              value: '35',
              units: ''
            },
            {
              name: 'Air pressure',
              value: '745.3',
              units: 'mmHg'
            }
          ],
          recentlyAdded: false,
        },
        {
          id: '2',
          name: 'Aquara temperature & humidity sensor 2',
          values: [
            {
              name: 'Temperature',
              value: '23.4',
              units: '°C'
            },
            {
              name: 'Humidity',
              value: '30',
              units: '%'
            },
            {
              name: 'PM2.5',
              value: '35',
              units: ''
            },
            {
              name: 'Air pressure',
              value: '745.3',
              units: 'mmHg'
            }
          ],
          recentlyAdded: false,
        },
        {
          id: '3',
          name: 'Aquara temperature & humidity sensor 3',
          values: [
            {
              name: 'Temperature',
              value: '23.4',
              units: '°C'
            },
            {
              name: 'Humidity',
              value: '30',
              units: '%'
            },
            {
              name: 'PM2.5',
              value: '35',
              units: ''
            },
            {
              name: 'Air pressure',
              value: '745.3',
              units: 'mmHg'
            }
          ],
          recentlyAdded: false,
        }
      ]
    },
    mutations: {
      addDevice (state, device) {
        console.log('pushing device into state')
        console.log(device)
        state.devices.push(device)
        console.log('device added')
      },
      deRecentDevice (state, id) {
        state.devices.map(device => {
          if(device.id.toString() === id.toString()){
            device.recentlyAdded = false
          }
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
  })
}
