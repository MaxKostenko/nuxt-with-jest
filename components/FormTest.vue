<template>
  <div>
    <label for="ch">test</label>
    <input id="ch" type="checkbox" name="test" @input="onInput">
    {{ punks }}
  </div>
</template>

<script>
export default {
  name: 'FormTest',
  data() {
    return {
      punks: ''
    }
  },
  methods: {
    onInput() {
      this.punks = 'hoy!'
    }
  }
};
</script>

