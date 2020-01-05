import { observable, runInAction } from 'mobx'

class ModalStore {
  @observable placeModal = false

  @observable monthModal = false

  @observable staffModal = false

  @observable prestationModal = true

  @observable confirmModal = false

  @observable flashUserModal = false

  @observable staffWay = true

  @observable detailModal = false

  @observable modal_content = ''

  @observable edit_roles_modal = false

  togglePlaceModal () {
    runInAction(() => {
      this.placeModal = !this.placeModal
    })
  }

  toggleMonthModal () {
    runInAction(() => {
      this.monthModal = !this.monthModal
    })
  }

  toggleStaffModal () {
    runInAction(() => {
      this.staffModal = !this.staffModal
    })
  }

  togglePrestationModal () {
    runInAction(() => {
      this.prestationModal = !this.prestationModal
    })
  }

  toggleConfirmModal () {
    runInAction(() => {
      this.confirmModal = !this.confirmModal
    })
  }

  toggleFlashUserModal () {
    runInAction(() => {
      this.flashUserModal = !this.flashUserModal
    })
  }
  
  toggleDetailModal () {
    runInAction(() => {
      this.detailModal = !this.detailModal
    })
  }

  toggleEditRolesModal = () => {
    runInAction(() => {
      this.edit_roles_modal = !this.edit_roles_modal
    })
  }
}

export default new ModalStore()
