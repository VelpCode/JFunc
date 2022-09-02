
const languages = ["Python", "Java", "JavaScript", "C hash"];
document.getElementById("demo").innerHTML = languages;

function myFunc() {
    languages.push("Scratch");
    document.getElementById("demo").innerHTML = languages;
}