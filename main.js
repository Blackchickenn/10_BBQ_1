let contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", event => {
    event.preventDefault()
    // do someting with even
    console.log("leeeetssss gooo")

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    let updateHtmlContent = `
    <h2>Congratulations, ${userFirstName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>
        
    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
`
    let ourMainContent = document.getElementById("Main-Content")
    ourMainContent.innerHTML = updateHtmlContent

})