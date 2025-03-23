document.querySelectorAll(".sort-btn").forEach(button => {
    button.addEventListener("click", function() {
        let sortBy = this.dataset.sort;
        let container = document.getElementById("items-container");
        let items = Array.from(container.getElementsByClassName("item"));

        items.sort((a, b) => {
            if (sortBy === "name") {
                return a.dataset.name.localeCompare(b.dataset.name);
            } else if (sortBy === "date") {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            }
        });

        // Reorganizar os elementos na tela
        items.forEach(item => container.appendChild(item));
    });
});