//listing elements
document.getElementById("resumeForm")?.addEventListener("submit", function(event){
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;




        //create ResumeOutput
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit-name" class= "Editable"> ${name} </span></p>
    <p><strong>Email:</strong> <span id="edit-email" class= "Editable"></strong> ${email}</span> </p>
    <p><strong>phone Number :</strong> <span id="edit-phone" class= "Editable"></strong> ${phone}</span> </p>
    
    <h3>Education</h3>
    <p id="edit-phone" class= "education"> ${education} </p>

       <h3>Experience</h3>
    <p id="edit-experience" class= "education"> ${experience} </p>

       <h>Skills</h3>
    <p id="edit-skills" class= "education"> ${skills} </p>`;


    const resumeOutputElement = document.getElementById("resumeOutput")
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
        makeEditable();
    }else{
        console.error("the resume output elements are missing");
    }
    } else {
        console.error("one or more output elements are missing");
    }

    

})

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click ', function (){
            const currentElements = element as HTMLElement;
            const currentvalue= currentElements.textContent|| "";

// replace content
if (currentElements.tagName === "p" || currentElements.tagName === "SPAN"){
     const input = document.createElement("input")
    input.type = "text"
    input.value = currentvalue
    input.classList.add("editing-input")

    input.addEventListener('blur', function (){
        currentElements.textContent = input.value
        currentElements.style.display = "inline"

        input.remove()
    } 











    )
   currentElements.style.display = "node"
   currentElements.parentNode?.insertBefore(input, currentElements)
   input.focus()

}

        })
    })
}