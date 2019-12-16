import { observable, runInAction } from 'mobx'

class ModalStore {
  @observable edit_roles_modal = false

  toggleEditRolesModal = () => {
    runInAction(() => {
      this.edit_roles_modal = !this.edit_roles_modal
    })
  }
}

export default new ModalStore()
