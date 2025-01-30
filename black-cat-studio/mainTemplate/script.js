document.getElementById("headerSection").innerHTML = fetch("mainTemplate/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("headerSection").innerHTML = data);

document.getElementById("footerSection").innerHTML = fetch("mainTemplate/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footerSection").innerHTML = data);