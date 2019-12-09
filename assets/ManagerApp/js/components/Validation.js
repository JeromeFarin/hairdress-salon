import $ from 'jquery';

function Validation(e) {
  let error = 0
  const name = e.target.name
  const value = e.target.value
  if (name == 'make_time') {
    if (!value.match(/([0-9]{2}):([0-9]{2}):([0-9]{2})/)) {
      $(e.target).css('color', 'red')
      error = 1
    }
  }
  
  if (value == '') {
    $(e.target).css('border', '1px solid #f00')
    error = 1
  }
  if (error == 0) {
    $(e.target).css('border', 'none')
  }
  console.log(error)
}

export default Validation
