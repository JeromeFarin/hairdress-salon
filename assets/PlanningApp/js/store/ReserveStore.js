import { observable } from "mobx";

class ReserveStore {
  @observable time = 0

  reserve () {
    runInAction(() => {
      const request = {}
      const { ...place } = placeStore.place
      request.start = moment(place.start).format()
      request.end = moment(place.end).format()
      request.staff_id = place.staff.id
      request.client_id = userStore.connectedUser.id
      request.prestations = []
      place.prestations.map((prestation) => {
        request.prestations.push([prestation.id, prestation.price])
      })
      
      console.log(JSON.stringify(request))
  
      // window.fetch('/api/reserve', {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: JSON.stringify(request)
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     const result = JSON.parse(data)
      //     if (result !== true) {
      //       alert(result)
      //     }
      //     sessionStorage.removeItem('place')
      //     unavailabilityStore.load()
      //   })
      //   .catch((error) => {
      //     console.error(error.message)
      //     errorStore.updateErrors()
      //   })
    })
  }
}

export default new ReserveStore()