<template>
  <div class="w-11/12 mx-auto text-right p-6 mt-5 drop-shadow-sm shadow-lg border border-gray-200">
    <button
      class="bg-yellow-500 px-4 py-2 font-semibold rounded-md text-gray-600"
      @click="showModal"
    >
      Ajouter Utilisatuer
    </button>
  </div>
</template>

<script>
export default {
  name: "AddSection",
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.$store.commit("toggalModel");
    },
  },
};
</script>

<style>
</style>