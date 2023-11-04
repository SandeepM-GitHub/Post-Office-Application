fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const clientIp = data.ip;
        localStorage.setItem('ip',clientIp)
        ip.innerText = clientIp
    })
    .catch(error => {
        console.error(error);
    });


getStartedBtn.addEventListener('click', () => {
    window.location.href = "../After-Click/details.html"
})
