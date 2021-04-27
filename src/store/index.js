import Vue from 'vue';
import Vuex from 'vuex';
import staff from './staff';

Vue.use(Vuex);

export default function () {
  const store = new Vuex.Store({
    modules: {
      staff,
    },
  });

  return store;
}