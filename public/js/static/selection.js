$('input[type=radio]').each(function () {
    $(this).parent().css('padding', '0')
    var label = $('label[for='+$(this).attr('id')+']')
    $(this).appendTo(label)
    label.addClass('custom-radio-container')
    var span = document.createElement("span")
    $(span).appendTo(label).addClass('custom-radio-checkmark')
})

$('input[type=checkbox]').each(function () {
    $(this).parent().css('padding', '0')
    var label = $('label[for='+$(this).attr('id')+']')
    $(this).appendTo(label)
    label.addClass('custom-checkbox-container')
    var span = document.createElement("span")
    $(span).appendTo(label).addClass('custom-checkbox-checkmark')
})