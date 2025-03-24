document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sort-btn");
    const container = document.getElementById("items-container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let sortType = this.dataset.sort;
            let items = Array.from(container.children);

            switch (sortType) {
                case "name": // Ordenação alfabética
                    items.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
                    break;

                case "sales": // Mais vendidos
                    items.sort((a, b) => b.dataset.sales - a.dataset.sales);
                    break;

                case "rating": // Maior avaliação
                    items.sort((a, b) => b.dataset.rating - a.dataset.rating);
                    break;

                case "category": // Gênero
                    items.sort((a, b) => a.dataset.category.localeCompare(b.dataset.category));
                    break;
            }

            // Atualiza a exibição dos itens
            container.innerHTML = "";
            items.forEach(item => container.appendChild(item));
        });
    });
});
