function createGrid() {
    const n = Number(window.prompt("Enter grid size"));
    const main = document.querySelector(".main");

    if (n > 0 && n < 101) {
        for (let i = 0; i < n * n; i++) {
            let content = document.createElement("div");
            content.classList.add("content");
            content.style.height = `${500 / n}px`;
            content.style.aspectRatio = "1 / 1";

            let opacity = 0;
            let color = null;

            content.addEventListener("mouseover", () => {
                if (!color) {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    color = `${r}, ${g}, ${b}`;
                }

                opacity = Math.min(1, opacity + 0.1);
                content.style.backgroundColor = `rgba(${color}, ${opacity})`;
            });

            main.appendChild(content);
        }
    } else {
        alert("Error, number outside range 1 - 100");
        createGrid();
    }
}

document.querySelector("#chng-size").addEventListener("click", () => {
    document.querySelectorAll(".content").forEach(el => el.remove());
    createGrid();
});

document.querySelector("#clr-grid").addEventListener("click", () => {
    document.querySelectorAll(".content").forEach(el => el.remove());
});


