<template>
  <div>
    <p 
      v-for="index in count" 
      :key="index"
    >
      {{ index }}
    </p>
    <button @click="addComponent">Add</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
    methods: {
      addComponent() {
        this.count += 1;
      }
    }
  };
</script>