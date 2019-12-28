import { observable, runInAction } from 'mobx'

class ModalStore {
  @observable monthModal = false
  
  toggleMonthModal () {
    runInAction(() => {
      this.monthModal = !this.monthModal
    })
  }

  @observable detailModal = false

  @observable modal_content = ''
  
  toggleDetailModal () {
    runInAction(() => {
      this.detailModal = !this.detailModal
    })
  }
}

export default new ModalStore()
