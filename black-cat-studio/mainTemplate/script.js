document.getElementById("headerSection").innerHTML = fetch("black-cat-studio/mainTemplate/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("headerSection").innerHTML = data);

document.getElementById("footerSection").innerHTML = fetch("black-cat-studio/mainTemplate/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footerSection").innerHTML = data);