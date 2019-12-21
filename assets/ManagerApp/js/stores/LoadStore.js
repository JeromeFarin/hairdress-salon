import { observable, runInAction } from 'mobx'

class LoadStore {
  @observable ths = []

  @observable tds = []

  @observable tds_loaded = []

  loadValues(values, options) {
    runInAction(() => {
      this.ths = []
      this.tds = []

      let ths = {}

      values.map(value => {
        if (ths.length < Object.keys(value).length || ths.length == null) {
          ths = Object.keys(value)
        }
      })

      options.map(option => {
        const check = ths.find(value => value === option.name)
          if (check != null) {
            this.ths.push(option)
          }
      })
      
      this.tds_loaded = values
      this.tds = values
    })
  }
}

export default LoadStore
