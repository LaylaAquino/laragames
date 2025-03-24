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

                case "data": // Ordenação por data
                    items.sort((a, b) => {
                        // Converte as datas para o formato aaaammdd
                        const dataA = a.dataset.data.split('/').reverse().join('');
                        const dataB = b.dataset.data.split('/').reverse().join('');
                        return dataA.localeCompare(dataB);
                    });
                    break;

                default:
                    console.log("Tipo de ordenação não suportado:", sortType);
                    return;
            }

            // Atualiza a exibição dos itens
            container.innerHTML = "";
            items.forEach(item => container.appendChild(item));
        });
    });
});