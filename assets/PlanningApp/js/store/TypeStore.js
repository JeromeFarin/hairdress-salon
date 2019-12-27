import { observable, runInAction } from "mobx"

class TypeStore {
  @observable types = [
    {id: 1, name: 'available', color: '', selected: true},
    {id: 2, name: 'absent', color: '#808080', selected: true},
    {id: 3, name: 'busy', color: '#ffa500', selected: true},
  ]

  updateType (id) {
    runInAction(() => {
      const type = this.types.find(type => parseInt(type.id) === parseInt(id))
      type.selected = !type.selected
    })
  }
}

export default new TypeStore()