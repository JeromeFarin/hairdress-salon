$('input[type=radio]').each(function () {
    var label = $('label[for='+$(this).attr('id')+']')
    $(this).appendTo(label)
    label.addClass('custom-radio-container')
    var span = document.createElement("span")
    $(span).appendTo(label).addClass('custom-radio-checkmark')
})

$('input[type=checkbox]').each(function () {
    var label = $('label[for='+$(this).attr('id')+']')
    $(this).appendTo(label)
    label.addClass('custom-checkbox-container')
    var span = document.createElement("span")
    $(span).appendTo(label).addClass('custom-checkbox-checkmark')
    if (label.text() == '') {
        $(label).css('display', 'inline')
    }
})