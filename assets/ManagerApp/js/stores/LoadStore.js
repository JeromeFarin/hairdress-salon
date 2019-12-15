import { observable, runInAction } from 'mobx'

class LoadStore {
  @observable ths = []

  @observable tds = []

  loadValues(values, options) {
    runInAction(() => {
      options.map(option => {
        const check = Object.keys(values[0]).find(value => value === option.name)
          if (check != null) {
            this.ths.push(option)
          }
      })
      
      this.tds = values
    })
  }
}

export default LoadStore
