import { Module } from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state, { IUserState } from "./state";
import { User } from "@/models/user";
import { IState } from "../products";


export interface ProfileState {
  user?: User;
  error: boolean;
}

const loginModule: Module<IUserState, IState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default loginModule