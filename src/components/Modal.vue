<template>
  <div
    class="
      flex
      justify-center
      shadow-lg
      flex-col
      w-full
      h-full
      filter
      backdrop-filter backdrop-blur-sm
      absolute
    "
  >
    <div class="w-3/4 bg-gray-100 mx-auto rounded-md border-2 p-4 z-50">
      <div class="flex justify-end items-center">
        <button class="text-3xl font-bold" @click="hideModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p
        class="
          p-6
          pt-0
          text-3xl
          font-semibold
          text-left
          pl-0
          text-gray-600
          rounded-sm
        "
      >
        Ajouter utilisateur
      </p>
      <div class="forme flex justify-between flex-wrap">
        <div class="flex flex-col justify-start w-1/3 pr-6 mb-4">
          <label for="LastName" class="label">Nome</label>
          <input
            type="text"
            id="LastName"
            v-model="user.lastName"
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-full
            "
          />
        </div>
        <div class="flex flex-col justify-start w-1/3 pr-6 mb-4">
          <label for="firstName" class="label">Prénom</label>
          <input
            type="text"
            id="firstName"
            v-model="user.firstName"
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-full
            "
          />
        </div>
        <div class="flex flex-col justify-start w-1/3 pr-6 mb-4">
          <label for="satatus" class="label">Etat</label>
          <select
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-full
            "
            v-model="user.status"
            :class="[
              user.status === 'Validé'
                ? 'valide'
                : user.status === 'on validation'
                ? 'on-validation'
                : user.status === 'Rejeté'
                ? 'rejected'
                : '',
            ]"
          >
            <option value="Validé">Validé</option>
            <option value="on validation">on validation</option>
            <option value="Rejeté">Rejeté</option>
          </select>
        </div>
        <div class="flex flex-col justify-start w-1/3 pr-6 mb-4">
          <label for="username" class="label">Nom d'Utilisatuer</label>
          <input
            type="text"
            id="username"
            v-model="user.userName"
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-full
            "
          />
        </div>
        <div class="flex flex-col justify-start w-2/3 pr-12 mb-4">
          <label for="createdDate" class="label">Date de création</label>
          <input
            type="datetime-local"
            id="createdDate"
            v-model="user.createdDate"
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-1/2
            "
          />
        </div>
        <div class="flex flex-col justify-start w-1/3 pr-6 mb-4">
          <label for="registrationNumber" class="label">Matricule</label>
          <input
            type="text"
            id="registrationNumber"
            v-model="user.registrationNumber"
            class="
              pl-2
              py-1
              focus:outline-none
              rounded-md
              border border-gray-400
              w-full
            "
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="
            bg-yellow-400
            shadow-lg
            px-4
            py-2
            font-semibold
            rounded-md
            text-gray-600
          "
          @click="showResult"
        >
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      user: {
        id: Math.floor(Math.random(1) * 203), //this.$store.state.users.length
        firstName: "",
        lastName: "",
        status: "",
        userName: "",
        createdDate: "",
        registrationNumber: "",
      },
    };
  },
  methods: {
    hideModal() {
      return this.$store.commit("toggalModel");
    },
    showResult() {
      this.$store.state.users.push(this.user);
      this.$store.commit("toggalModel");
    },
  },
};
</script>

<style>
.label {
  @apply text-gray-500 font-semibold pb-2;
}
.valide {
  background-color: #5be881;
}
.rejected {
  background-color: #ff0000;
}
.on-validation {
  background-color: #fdb64d;
}
</style>
