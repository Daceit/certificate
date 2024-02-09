// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    let theDate = new Date().toLocaleDateString(`en-us`, { year: "numeric", month: "numeric", day: "numeric" })
    let dateF = document.getElementById(`date`);
    dateF.innertext = theDate;


    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('Iname').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('name');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("input").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('Iname');
        nameOutput.innerText = formData.name;

    });
    // Log readiness to console
    console.log("Ready");



    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('preview');
        let name = document.getElementById('name');
        let dateP = document.getElementById('date');
        certificate.classList = "";
        name.classList = "";
        dateP.classList = "";
        switch (value) {
            case 'B':
                certificate.classList.add('bird');
                name.classList.add('Bname');
                dateP.classList.add('Bdate');
                break;
            case 'F':
                certificate.classList.add('frog');
                name.classList.add('Fname');
                dateP.classList.add('Fdate');
                break;
            case 'N':
                certificate.classList.add('nothing');
                name.classList.add('Nname');
                dateP.classList.add('Ndate');
                break;
        }
    }
});

/* Additional things to be aware of */






function processForm(form) {

}