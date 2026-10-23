// ==================== MOBILE NAVIGATION ====================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });
});


// ==================== RETREAT DATE CALCULATION ====================

const arrivalDate = document.getElementById("arrivalDate");
const retreatDays = document.getElementById("retreatDays");
const departureDate = document.getElementById("departureDate");

function calculateDepartureDate() {
    if (!arrivalDate.value || !retreatDays.value) {
        departureDate.value = "";
        return;
    }

    const startDate = new Date(`${arrivalDate.value}T00:00:00`);
    const numberOfDays = Number(retreatDays.value);

    startDate.setDate(startDate.getDate() + numberOfDays);

    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, "0");
    const day = String(startDate.getDate()).padStart(2, "0");

    departureDate.value = `${year}-${month}-${day}`;
}

arrivalDate.addEventListener("change", calculateDepartureDate);
retreatDays.addEventListener("change", calculateDepartureDate);


// ==================== REGISTRATION FORM ====================

const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    formMessage.textContent =
        `Thank you, ${name}. Your retreat registration has been received as a demonstration.`;

    formMessage.style.color = "#2f6b57";

    registrationForm.reset();
    departureDate.value = "";
});
