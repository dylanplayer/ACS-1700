
const orderNameInput = document.querySelector("#name-input");
const orderDiameterInput = document.querySelector("#diameter-input");
const orderToppingSelector = document.querySelector("#pizza-type");

const orderNameOutput = document.querySelector("#name-output");
const orderDiameterOutput = document.querySelector("#diameter-output");
const orderCostOutput = document.querySelector("#cost-output");

const pizzaVisual = document.querySelector("#pizza");

const update = () => {
    orderNameOutput.innerHTML = `Name: ${orderNameInput.value}`;
    orderDiameterOutput.innerHTML = `Diameter: ${orderDiameterInput.value} in`;
    let total;
    if (orderToppingSelector.value == `Cheese`) {
        total = .25 * (Math.PI * (orderDiameterInput.value / 2) ** 2);
    } else {
        total = .33 * (Math.PI * (orderDiameterInput.value / 2) ** 2);
    }
    orderCostOutput.innerHTML = `Cost: \$${total.toFixed(2)}`;
    
    pizzaVisual.style.width = `${orderDiameterInput.value * 2}px`;
    pizzaVisual.style.height = `${orderDiameterInput.value * 2}px`;

    pizzaVisual.style.backgroundImage = `url(/images/${orderToppingSelector.value.toLowerCase()}.jpeg)`;
    console.log(orderToppingSelector.value.toLowerCase());
}

document.addEventListener('input', update);

update();