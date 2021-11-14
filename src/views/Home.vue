<template>
  <div class="home">
    <Modal v-if="showModel" />
    <p class="p-6 text-3xl font-semibold text-left pl-12">Exercice 1</p>

    <table class="table-auto border-collapse   w-11/12 text-left shadow-lg mx-auto">
      <thead class="">
        <tr>
          <td class="headtableRow">ID</td>
          <td class="headtableRow">created Date</td>
          <td class="headtableRow">Status</td>
          <td class="headtableRow">First Name</td>
          <td class="headtableRow">Last Name</td>
          <td class="headtableRow">Username</td>
          <td class="headtableRow">registration Number</td>
          <td class="headtableRow text-right">Action</td>
        </tr>
      </thead>
      <tr
        v-for="(user, index) in users"
        :key="index"
        class="bg-orange-400 border-b px-4 py-4 border-black text-gray-700 mb-6"
      >
        <td class="tableRow">
          <p>{{ user.id }}</p>
        </td>
        <td class="tableRow">
          <p>{{ user.createdDate }}</p>
        </td>
        <td class="tableRow">
          <p
            class="
              text-white text-center
              p-2
              font-semibold
              text-sm
              border-b border-gray-300
              rounded-md
            "
            :class="
              user.status == 'En validation'
                ? 'bg-yellow-400'
                : user.status == 'Validé'
                ? 'bg-green-300'
                : user.status == 'Rejeté'
                ? 'bg-red-400'
                : ''
            "
          >
            {{ user.status }}
          </p>
        </td>
        <td class="tableRow">
          <p>{{ user.firstName }}</p>
        </td>
        <td class="tableRow">
          <p>{{ user.lastName }}</p>
        </td>
        <td class="tableRow">
          <p>{{ user.userName }}</p>
        </td>
        <td class="tableRow">
          <p>{{ user.registrationNumber }}</p>
        </td>
        <td class="tableRow text-right">
          <button
            class="
              hover:bg-red-300
              focus:bg-red-600 focus:text-white
              rounded-md
              p-2
            "
            @click="removeUser(user)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </td>
      </tr>
    </table>
    <AddSection class="z-10" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import Modal from "@/components/Modal.vue";
export default {
  name: "Home",
  components: {
    AddSection,
    Modal,
  },
  computed: {
    showModel() {
      return this.$store.state.showModel;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    removeUser(user) {
      return this.$store.commit("deleteUser", user);
    },
  },
};
</script>
<style scoped>
.headtableRow {
  @apply py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-0;
}
.tableRow {
  @apply py-4 px-6 text-gray-500  font-semibold text-sm  border-b border-gray-300;
}
</style>
