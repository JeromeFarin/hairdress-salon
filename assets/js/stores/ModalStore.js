import { observable, runInAction } from 'mobx'
import placeStore from './PlaceStore'

class ModalStore {
  @observable placeModal = false

  @observable monthModal = false

  @observable staffModal = false

  @observable prestationModal = true

  @observable confirmModal = false

  @observable flashUserModal = false

  @observable staffWay = true

  togglePlaceModal () {
    runInAction(() => {
      placeStore.loadPlaces()
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
}

export default new ModalStore()
