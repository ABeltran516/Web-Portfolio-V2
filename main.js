const contactButton = document.getElementById("Contact-btn")

const labelLanguage = document.getElementById("Label-lang")
const labelFramework = document.getElementById("Label-frame")
const labelTools = document.getElementById("Label-tool")
const labelSkills = document.getElementById("Label-skill")

const iconLanguage = document.getElementById("Icon-lang")
const iconFramework = document.getElementById("Icon-frame")
const iconTools = document.getElementById("Icon-tool")
const iconSkills = document.getElementById("Icon-skill")

let choose = "languageLabel"

const changeLabels = () => {
    removeLabels();
    if (choose === "languageLabel") {
        labelLanguage.classList.add("Label_active");
        iconLanguage.classList.add("Frame_active");
    } else if (choose === "frameworkLabel") {
        labelFramework.classList.add("Label_active");
        iconFramework.classList.add("Frame_active");
    } else if (choose === "toolsLabel") {
        labelTools.classList.add("Label_active");
        iconTools.classList.add("Frame_active");
    } else if (choose === "skillsLabel") {
        labelSkills.classList.add("Label_active");
        iconSkills.classList.add("Frame_active");
    } else {
        console.log("error")
    }
}

function removeLabels() {
    labelLanguage.classList.remove("Label_active");
    iconLanguage.classList.remove("Frame_active");
    labelFramework.classList.remove("Label_active");
    iconFramework.classList.remove("Frame_active");
    labelTools.classList.remove("Label_active");
    iconTools.classList.remove("Frame_active");
    labelSkills.classList.remove("Label_active");
    iconSkills.classList.remove("Frame_active");
}

labelLanguage.addEventListener("click", () => {
    choose = "languageLabel"
    changeLabels()
})

labelFramework.addEventListener("click", () => {
    choose = "frameworkLabel"
    changeLabels()
})

labelTools.addEventListener("click", () => {
    choose = "toolsLabel"
    changeLabels()
})

labelSkills.addEventListener("click", () => {
    choose = "skillsLabel"
    changeLabels()
})

contactButton.addEventListener('click', () => {
    document.getElementById('Contact').scrollIntoView({
        behavior: 'smooth'
    });
});
