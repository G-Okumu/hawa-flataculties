

fetch('http://localhost:3000/animals')
    .then(response => response.json())
    .then((data) => {
        let parentdiv = document.getElementById("myDiv");

        let html = ""; // Initialize an empty string to store the generated HTML
        for (let i = 0; i < data.length; i++) {
            html += `
        <li>${data[i].name}</li> 
        <li>${data[i].health} </li>
        </br>`// Append each list item to the HTML string;
        }
        parentdiv.innerHTML = `<ul>${html}</ul>`; // Set the HTML string as the content of the parentdiv
    


    })
