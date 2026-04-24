
    function calculateBun(bun) {
        let bunCost = 0;
        let bunCalories = 0;
        let bunTime = 0;

        if (bun) {
            if (bun.value === 'sesame') { bunCost += 1.00; bunCalories += 100; bunTime += 1; }
            else if (bun.value === 'whole-wheat') { bunCost += 1.25; bunCalories += 120; bunTime += 1; }
            else if (bun.value === 'lettuce') { bunCost += 0.75; bunCalories += 10; bunTime += 1; }
        }
        return { cost: bunCost, calories: bunCalories, time: bunTime };
    }

    function calculatePatty(pattyType, amount, wellDone) {
            let pattyCost = 0;
            let pattyCalories = 0;
            let pattyTime = 0;

            if (amount === null) { return { cost: 0, calories: 0, time: 0 }; }
            if (pattyType === 'beef') { pattyCost += 5.50; pattyCalories += 250; pattyTime += 5; }
            else if (pattyType === 'chicken') { pattyCost += 4.75; pattyCalories += 200; pattyTime += 4; }
            else if (pattyType === 'Impossible patty') { pattyCost += 4.25; pattyCalories += 150; pattyTime += 3; }
            else if (pattyType === 'turkey') { pattyCost += 4.95; pattyCalories += 180; pattyTime += 4; }

            if (amount.value === 'double') { pattyCost += 3.00; pattyCalories += 300; pattyTime += 2; }


            if (wellDone === 'well-done') { pattyTime += 2; }
            else if (wellDone === 'medium') { pattyTime += 1; }

            return { cost: pattyCost, calories: pattyCalories, time: pattyTime };
    }
    function calculatesauces(sauces) {
       let sauceCost = 0;
       let sauceCalories = 0;
       let sauceTime = 0;

       for (let i = 0; i < sauces.length; i++) {
        if (sauces[i] === 'bbq' || sauces[i] === 'ranch') { sauceCost += 0.50; sauceCalories += 50; sauceTime += 1; }
        else { sauceCost += 0.25; sauceCalories += 20; sauceTime += 1; }
       }

       return { cost: sauceCost, calories: sauceCalories, time: sauceTime }
       
    }
//parameter, list of toppings, loop through the list, if statement for each topping, add to cost and calories, return an object with cost and calories
    function calculateToppings(list) {
        let extraCost = 0;
        let extraCalories = 0;
        let extraTime = 0;

    //iteration
        for (let i = 0; i < list.length; i++) {
            //selection
            if (list[i] === 'cheese') {
                extraCost += 0.75;
                extraCalories += 100;
                extraTime += 1;
            } else if (list[i] === 'bacon') {
                extraCost += 1.50;
                extraCalories += 129;
                extraTime += 2; // Bacon takes longer to cook
            } else {
                extraCost += 0.50;
                extraCalories += 10;
                extraTime += 1;
            }
        }

        return { cost: extraCost, calories: extraCalories, time: extraTime };
    }
let totalTimeEstimated = 0;


document.getElementById('calculate').addEventListener('click', function () {
    let cost = 0;
    let calories = 0;
    let time = 0;

    const bun = document.querySelector('input[name="bun"]:checked');
    const pattyType = document.querySelector('select[name="patty-type"]').value;
    const wellDone = document.querySelector('select[name="well-done"]').value;
    const amount = document.querySelector('input[name="amount"]:checked');

    let selectedToppings = [];
    const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
    toppingCheckboxes.forEach(checkbox => {
        selectedToppings.push(checkbox.value);
    });

    let selectedSauces = [];
    const sauces = document.querySelectorAll('input[name="sauces"]:checked');
    sauces.forEach(checkbox => {
        selectedSauces.push(checkbox.value);
    });

    
    let bunStats = calculateBun(bun);
    cost += bunStats.cost;
    calories += bunStats.calories;
    time += bunStats.time;

    let pattyStats = calculatePatty(pattyType, amount, wellDone);
    cost += pattyStats.cost;
    calories += pattyStats.calories;
    time += pattyStats.time;

    let toppingStats = calculateToppings(selectedToppings);
    cost += toppingStats.cost;
    calories += toppingStats.calories;
    time += toppingStats.time;

    let sauceStats = calculatesauces(selectedSauces);
    cost += sauceStats.cost;
    calories += sauceStats.calories;
    time += sauceStats.time;


    document.getElementById('total-cost').textContent = cost.toFixed(2);
    document.getElementById('total-calories').textContent = calories;
    document.getElementById('total-time').textContent = time;


    totalTimeEstimated = time;

    
    document.getElementById('complete-order').style.display = 'inline-block';
});

document.getElementById('complete-order').addEventListener('click', function() {
    const name = document.getElementById('customer-name').value.trim();
    const modalMessage = document.getElementById('modal-message');
    const modal = document.getElementById('modal-overlay');

    if (name) {
        modalMessage.textContent = `${name}, your burger will be ready in ${totalTimeEstimated} minutes.`;
    } else {
        modalMessage.textContent = `Your order will be ready in ${totalTimeEstimated} minutes.`;
    }

    modal.style.display = 'flex';
});

document.getElementById('reset-btn').addEventListener('click', function() {
    
    location.reload(); 
});

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}