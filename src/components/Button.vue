<template>
  <div>
    <button @click="$emit('click')" :class="{sendButton: colorScheme === 'regular', sendButtonOutlined: colorScheme === 'outlined', sendButtonReject: colorScheme === 'reject', disabled: disabled === true}">
      <div v-if="order !== 'reverse'"><slot/></div>
      <svg v-if="variant === 'next' && !loading" xmlns="http://www.w3.org/2000/svg" width="33.712" height="25.54" viewBox="0 0 33.712 25.54">
        <g id="Group_9" data-name="Group 9" transform="translate(1 1.414)">
          <path id="Path_9" data-name="Path 9" d="M181.561,1129.81H150" transform="translate(-150 -1118.501)"
                fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_10" data-name="Path 10" d="M146.709,1107.976l11.356,11.356-11.356,11.356"
                transform="translate(-126.354 -1107.976)" fill="none" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"/>
        </g>
      </svg>
      <svg v-if="variant === 'download' && !loading" xmlns="http://www.w3.org/2000/svg" width="37.996" height="30.239" viewBox="0 0 37.996 30.239">
        <g id="Group_11" data-name="Group 11" transform="translate(26.222 1) rotate(90)">
          <path id="Path_9" data-name="Path 9" d="M171.152,1129.81H150" transform="translate(-150 -1122.231)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_10" data-name="Path 10" d="M146.709,1107.976l7.611,7.611-7.611,7.611" transform="translate(-133.067 -1107.976)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </g>
        <path id="Path_12" data-name="Path 12" d="M683.208,771.992v11.723h36V771.992" transform="translate(-682.208 -754.476)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
      <svg v-if="variant === 'add' && colorScheme !== 'outlined' && !loading" xmlns="http://www.w3.org/2000/svg" width="22.794" height="22.794" viewBox="0 0 22.794 22.794">
        <g id="Component_4_2" data-name="Component 4 – 2" transform="translate(1 1)">
          <path id="Path_2" data-name="Path 2" d="M218,531.323v20.794" transform="translate(-207.603 -531.323)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_3" data-name="Path 3" d="M0,0V20.794" transform="translate(20.794 10.397) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
        </g>
      </svg>
      <svg v-if="variant === 'add' && colorScheme === 'outlined' && !loading" xmlns="http://www.w3.org/2000/svg" width="22.27" height="22.27" viewBox="0 0 22.27 22.27">
        <g id="Component_2_2" data-name="Component 2 – 2" transform="translate(1 1)">
          <path id="Path_2" data-name="Path 2" d="M218,531.323v20.27" transform="translate(-207.865 -531.323)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_3" data-name="Path 3" d="M0,0V20.27" transform="translate(20.27 10.135) rotate(90)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
        </g>
      </svg>
      <svg v-if="variant === 'reject' && colorScheme !== 'outlined' && !loading" class="reject-icon" xmlns="http://www.w3.org/2000/svg" width="22.27" height="22.27" viewBox="0 0 22.27 22.27">
        <g id="Component_2_2" data-name="Component 2 – 2" transform="translate(1 1)">
          <path id="Path_2" data-name="Path 2" d="M218,531.323v20.27" transform="translate(-207.865 -531.323)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="2"/>
          <path id="Path_3" data-name="Path 3" d="M0,0V20.27" transform="translate(20.27 10.135) rotate(90)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="2"/>
        </g>
      </svg>
      <svg class="loading-animated" v-if="loading" xmlns="http://www.w3.org/2000/svg" width="37.32" height="31.51" viewBox="0 0 37.32 31.51">
        <g id="Component_1_1" data-name="Component 1 – 1" transform="translate(1.215 1)">
          <g id="Group_24" data-name="Group 24" transform="translate(-70.96 -21)">
            <g id="Group_23" data-name="Group 23" transform="translate(-924.217 -496.533)">
              <g id="Group_21" data-name="Group 21" transform="translate(997.962 535.012)">
                <path id="Path_15" data-name="Path 15" d="M1023.925,544.441l6.027-2.907,1.645,6.486"
                      transform="translate(-999.491 -541.533)" fill="none" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_16" data-name="Path 16" d="M997.807,543.5a16.1,16.1,0,0,0,29.448,0"
                      transform="translate(-997.807 -541.058)" fill="none" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </g>
              <g id="Group_22" data-name="Group 22" transform="translate(995.178 517.533)">
                <path id="Path_17" data-name="Path 17" d="M1001.84,521.508l-6.31,3.044-1.722-6.791"
                      transform="translate(-993.807 -513.454)" fill="none" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_18" data-name="Path 18" d="M1027.827,527.122a16.1,16.1,0,0,0-29.447,0"
                      transform="translate(-995.923 -517.533)" fill="none" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div v-if="order === 'reverse'"><slot/></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: String,
    order: String,
    colorScheme: String,
    loading: Boolean,
    disabled: Boolean
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
* {
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-weight: bold;
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
  padding: 10px 21px 13px 15px;
  height: auto;
}
.sendButtonOutlined {
  cursor: pointer;
  margin-top: 9px;
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-white-color);
  color: var(--main-blue-color);
  border: 2px solid var(--main-blue-color);
  padding: 10px 21px 13px 15px;
  height: auto;
}
.sendButtonReject {
  cursor: pointer;
  margin-top: 9px;
  border: 0;
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-orange-color);
  color: var(--main-white-color);
  padding: 10px 21px 13px 15px;
  height: auto;
}

.disabled {
  opacity: .3;
  cursor: initial;
}

.loading-animated {
  animation-duration: 3s;
  animation-name: roll;
  animation-iteration-count: infinite;
}

.reject-icon {
  transform: rotate(45deg);
}

@keyframes roll {
  from {
    transform: rotate(180deg);
  }
}

</style>
