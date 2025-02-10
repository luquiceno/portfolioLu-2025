const emailAddress = "luquiceno@gmail.com";
const copyButton = document.getElementById("copyEmailButton");
const copyMessage = document.getElementById("copyMessage");

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(emailAddress)
    copyMessage.classList.remove("opacity-0");
    setTimeout(() => {
      copyMessage.classList.add("opacity-0");
    }, 2000);
  });