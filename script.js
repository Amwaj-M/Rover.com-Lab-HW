let image_cat = document.getElementById("img-cat");
let main = document.getElementById("main");
let img_header = document.getElementById("img-header");
let img_dog = document.getElementById("img-dog");


image_cat.addEventListener("click", myFunction);

function myFunction() {
    let main = document.getElementById("main");
    let inner = main.innerHTML;
    let replace = inner.replace(/dog/gi, "cat");
    main.innerHTML = replace;
    img_header.src="header-cat-image.png"
    img_dog.src = "image-cat-2.png"
}