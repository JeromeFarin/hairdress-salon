import { observable, runInAction } from "mobx"

class StaffStore {
  @observable staffs = []

  load () {
    runInAction(() => {
      window.fetch('/api/staffs', {
        headers: {
          Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.staffs = JSON.parse(data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    })
  }

  toggleSelected (id) {
    runInAction(() => {
      const staff = this.staffs.find(staff => parseInt(staff.id) == parseInt(id))
      staff.selected = !staff.selected
    })
  }

  staffSelected () {
    return this.staffs.filter((staff) => staff.selected)
  }
}

export default new StaffStore()