

document.addEventListener("DOMContentLoaded", function () {

    change (document.getElementById(type))
    function change(value) {
        let certificate = document.getElementById('certificate');
        switch (value) {
            case 'B':
                certificate.classList.replace('bird');
                break;
            case 'F':
                certificate.classList.replace('frog');
                break;
            case 'N':
                certificate.classList.replace('nothing');
                break;
        }
    }
    let date = new Date().toLocaleDateString(`en-us`,{year:`numberic`,day:`numeric`,month:`numeric`})
    let datebox = document.getElementById(`Adate`);
    datebox.innertext = Adate
});