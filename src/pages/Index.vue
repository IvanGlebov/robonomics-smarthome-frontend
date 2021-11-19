<template>
  <Layout>
    <div class="blockWrapper">
      <div class="contentWrapper">
        <div class="header">Smart home dashboard</div>
<!--        <div class="deviceWrapper">-->
<!--          <div class='deviceImage'>-->
<!--            <g-image src="" alt="device image"/>-->
<!--          </div>-->
<!--          <div class='deviceStats'>-->
<!--            <div class='deviceName'>-->
<!--              Aquara temperature & humidity sensor-->
<!--            </div>-->
<!--            <span class='splitter'></span>-->
<!--            <div class='deviceDataWrapper'>-->
<!--              <div class='deviceValueWrapper'>-->
<!--                <div class='deviceValueHeader'>Humidity</div>-->
<!--                <div class='deviceValue'>30%</div>-->
<!--              </div>-->
<!--              <div class='deviceValueWrapper'>-->
<!--                <div class='deviceValueHeader'>Temperature</div>-->
<!--                <div class='deviceValue'>23.4 *C</div>-->
<!--              </div>-->
<!--              <div></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <DeviceCard name="test name"/>
        <div class='addDeviceWrapper'>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import DeviceCard from "../components/DeviceCard";
export default {
  components: {DeviceCard},
  metaInfo: {
    title: "Smart home dashboard",
  },
};
</script>

<style lang='css' scoped>
.blockWrapper {
  /* TODO  */
  /* Add colors into css variables to make dark theme possible in later iterations */
  background-color: white;
  border: 1px solid black;
  height: 68vh;
  margin: 10vh 45vw 10vh 10vh;
  /* padding-top: 53px; */
  padding: 53px;
  /* padding-left: 53px; */
}

.header {
  /* margin: 53px 0 0 53px; */
  font-size: 2.3rem;
  font-weight: bold;
  line-height: 1.25;
}

.contentWrapper {
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.deviceWrapper {
  height: 230px;
  border: 2px solid black;
  display: flex;
  gap: 20px;
}

.deviceImage {
  width: 30%;
}

.deviceStats {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.deviceDataWrapper {
  display: flex;
  flex-direction: row;
  gap: 30px;

}

.addDeviceWrapper {
  border: 2px solid #1547D0;
  height: 81px;
}

</style>
