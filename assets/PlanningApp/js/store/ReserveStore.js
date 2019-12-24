import { observable } from "mobx";

class ReserveStore {
  @observable time = 0
}

export default new ReserveStore()