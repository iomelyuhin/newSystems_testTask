import Vue from 'vue';
new Vue({
  el: "#form-component",
  template: "#form-container",
  data() {
    return {
      displayThanks: false
    }
  },
  methods: {
    isThanks() {
      this.displayThanks = true;
    }
  }
});