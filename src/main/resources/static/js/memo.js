
function postMessage() {
  // console.log("fire");
  const submit = document.getElementById("submit");
  submit.addEventListener("form", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts");
    XHR.responseType("json");
    XHR.send(formData);
  });
};

window.addEventListener("load", postMessage);