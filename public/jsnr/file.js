 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#avatar_show_img').attr('src', e.target.result);
            // $('#avatar_show_img').css('clip', 'rect(0, 0, 0, 0)');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$("#input_file_form").submit(function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', $('#input_file')[0].files[0]);

    fetch(
        '/profil/avatar',
        { 
            method: 'POST',
            body: formData
        }
    )
    .then( window.location.replace("/profil") )
});