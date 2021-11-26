<template>
  <div class="buttonWrapper">
    <label for="input">
      <div class="title">{{ title }}</div>
      <div class="chooseButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="22.27" height="22.27" viewBox="0 0 22.27 22.27">
          <g id="Component_2_2" data-name="Component 2 – 2" transform="translate(1 1)">
            <path id="Path_2" data-name="Path 2" d="M218,531.323v20.27" transform="translate(-207.865 -531.323)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
            <path id="Path_3" data-name="Path 3" d="M0,0V20.27" transform="translate(20.27 10.135) rotate(90)" fill="none" stroke="#1547d0" stroke-linecap="round" stroke-width="2"/>
          </g>
        </svg>
        <div>{{fileName === '' ? placeholder : 'Change file'}}</div>
      </div>
    </label>
    <input ref="fileInput" @input="onInput" id="input" type="file" accept="image/png, image/jpeg">
  </div>
</template>

<script>

export default {
  name: "FileInput",
  methods: {
    onInput() {
      this.fileName = this.$refs.fileInput.value.split('\\').pop()
      this.$emit('input', this.$refs.fileInput.files[0])
    }
  },
  data: () => {
    return ({
      fileName: ''
    })
  },
  props: {
    placeholder: String,
    title: String,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
* {
  font-family: 'Roboto Mono', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-weight: bold;
}
.buttonWrapper {
  border: 1px dashed black;
  padding: 14px;
  margin-top: 15px;
}

input[type="file"] {
  display: none;
}

.chooseButton {
  cursor: pointer;
  margin-top: 9px;
  font-size: 1.25rem;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-white-color);
  color: var(--main-blue-color);
  border: 2px solid var(--main-blue-color);
  padding: 10px 21px 13px 15px;
  height: auto;
}

.title {
  color: var(--secondary-grey-color);
}

</style>
