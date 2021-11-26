// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    api.createPages(({createPage}) => {
      createPage({
        path: '/device/:deviceId',
        component: './src/templates/ManageDevice.vue',
      })
      createPage({
        path: '/device/:deviceId/messageSent/:messageText',
        component: './src/templates/DeviceMessageSent.vue'
      })
      createPage({
        path: '/addDevice',
        component: './src/templates/AddDevice.vue'
      })
    })
}
