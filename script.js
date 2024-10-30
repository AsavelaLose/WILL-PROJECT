document.addEventListener("DOMContentLoaded", function() {
    const properties = document.querySelectorAll('.property button');
    properties.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked on ${button.parentElement.querySelector('h3').textContent}`);
        });
    });

    const slider = document.getElementById('slider');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % slider.children.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

    // Modal functionality
    const modal = document.getElementById("accountModal");
    const btn = document.getElementById("accountButton");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("accountForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted! (You can replace this with real form processing)");
        modal.style.display = "none";
    });
});
