const containers = document.querySelectorAll(".container");
const ADDbutton = document.querySelector("button");
const preview = document.querySelector(".input");
const imglist = document.querySelector(".imglist");
const content = document.querySelector(".content");

function dragAnddrop(){
    const dragelement = document.querySelectorAll("img");
    dragelement.forEach(drag => {
     drag.draggable = "true";
     drag.addEventListener("dragstart", () => {
        drag.classList.add("draging");
     })
     drag.addEventListener("dragend", () => {
        drag.classList.remove("draging");
    })
})

containers.forEach(container => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const drag = document.querySelector(".draging");
        container.appendChild(drag);
    })
})

}
dragAnddrop();

ADDbutton.addEventListener("click", () => {
    preview.click();
})

preview.addEventListener('change', () => {
    for (const file of preview.files) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        imglist.appendChild(image);
    }

    dragAnddrop();
});


content.addEventListener("dragover", (e) => {
    e.preventDefault();

    const drag = document.querySelector(".draging");
    imglist.appendChild(drag);
});