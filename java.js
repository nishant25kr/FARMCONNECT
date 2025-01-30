const landOwner1 = {
    name: "Rajesh Sharma",
    location: "Pune, Maharashtra",
    price: 7500000, // in INR
    pinCode: 411001,
    area: "2000 sq. ft."
};

function Unit(uid) {
    const button = document.createElement("button");
    button.style.marginLeft = "5px";
    const newP = document.createElement("p");
    newP.innerText = uid;
    button.appendChild(newP);
    const container = document.getElementById("button-container");
    container.appendChild(button);
}

function land_size() {
    let x = document.getElementById('min-area').value
    let y = document.getElementById('max-area').value
    const button = document.createElement("button");
    button.style.marginLeft = "5px";
    const newP = document.createElement("p");
    newP.innerText = "Area: " + x + " X " + y;
    button.appendChild(newP);
    const container = document.getElementById("button-container");
    container.appendChild(button);

}

function Grow(uid) {
    const button = document.createElement("button");
    button.style.marginLeft = "5px";

    const newP = document.createElement("p");
    newP.innerText = uid;
    button.appendChild(newP);
    const container = document.getElementById("button-container");
    container.appendChild(button);
}

function Pincode(uid) {
    let x = document.getElementById('location').value
    const button = document.createElement("button");
    button.style.marginLeft = "5px";
    const newP = document.createElement("p");
    newP.innerText = "Nearby : " + x;
    button.appendChild(newP);
    const container = document.getElementById("button-container");
    container.appendChild(button);
}
const landOwner = {
    name: "Rajesh Sharma",
    location: "Pune, Maharashtra",
    price: 7500000, // in INR
    pinCode: 411001,
    area: "2000 sq. ft."
};
