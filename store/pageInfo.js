export const state = () => ({
  page: "Dashboard",
});

export const actions = {
  change_nav({ commit }, page) {
    commit("setLayout", page);
  },
};

export const mutations = {
  setLayout: (state, page) => (state.page = page),
};
