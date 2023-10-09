document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    const jsonOutput = document.getElementById('jsonoutput');
    jsonOutput.textContent = JSON.stringify(jsonData, null, 2);

    const jsonDataDiv = document.getElementById('jsonData');
    jsonDataDiv.style.display = 'block';
});
