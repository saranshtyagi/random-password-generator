let passEls = document.querySelectorAll(".rectangle");
let length = 16;
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword() {
    passEls.forEach((passEl) => {
        let pass = "";
        for (var i = 0; i < length; i++) {
            let rand = Math.floor(Math.random() * chars.length);
            pass += chars.substring(rand, rand + 1);
        }
        passEl.innerText = pass;
        passEl.addEventListener("click", () => copyToClipboard(pass));
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
}
