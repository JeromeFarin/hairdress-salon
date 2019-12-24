import { observable, runInAction } from 'mobx'

class ModalStore {
  @observable monthModal = false
  
  toggleMonthModal () {
    runInAction(() => {
      this.monthModal = !this.monthModal
    })
  }
}

export default new ModalStore()
