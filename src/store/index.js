import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
      },
      {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
      },
      {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
      },
    ],
    showModel: false,
  },
  mutations: {
    toggalModel: (state) => {
      state.showModel = !state.showModel;
    },
    deleteUser: (state, targetUser) => {
      let index = state.users.findIndex((user) => user.id === targetUser.id);
      index == -1
        ? console.error("index incorecct : " + index)
        : state.users.splice(index, 1);
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
