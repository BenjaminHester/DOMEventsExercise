const button1 = document.querySelector(`#one`);
button1.onclick = function() {
    alert("You clicked the first button! Congrats!");
};
const h3 = document.querySelector(`h3`);
h3.addEventListener(`mouseover`, () => {
    alert("You hovered over the h3 element! Congrats!");
});
const form = document.querySelector(`form`);
form.addEventListener(`submit`, () => {
    const form.value = form.elements.entry.value;
    alert(form);
});