﻿<template>
  <div class="setting">
    <h3>language:</h3>
    <select v-model="selectedLang">
      <option selected>русский</option>
      <option>english</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "setting",
  props: {},
  data() {
    return {
      selectedLang: "русский"
    };
  },
  watch: {
    selectedLang: function(newVal) {
      var val = "en";
      if (newVal == "русский") val = "ru";

      this.$emit("langChanged", val);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.setting {
  border: 2px;
  border-radius: 2;
  border-width: 2px;
  color: #0cd178;
  text-align: left;
}
</style>
