// javascript

document.getElementById('calculate').addEventListener('click', function() {
    let cost = 0;
    let calories = 0;

    // Bun cost and calories
    const bun = document.querySelector('input[name="bun"]:checked');
    if (bun) {
        if (bun.value === 'sesame') {
            cost += 1.00;
            calories += 100;
        } else if (bun.value === 'whole-wheat') {
            cost += 1.25;
            calories += 120;
        } else if (bun.value === 'lettuce') {
            cost += 0.75;
            calories += 10;
        }
    }

    //patty
    const pattyType = document.querySelector('select[name="patty-type"]').value;
    if (pattyType === 'beef') {
        cost += 5.50;
        calories += 250;
    } else if (pattyType === 'chicken') {
        cost += 4.75;
        calories += 200;
    } else if (pattyType === 'Impossible patty') {
        cost += 4.25;
        calories += 150;
    } else if (pattyType === 'turkey') {
        cost += 4.95;
        calories += 180;
    }

    // how well done?
    const wellDone = document.querySelector('select[name="well-done"]').value;
    if (wellDone === 'rare') {
        cost += 0.50;
    }
    // Change calories later!!!

    // calories...?
    const amount = document.querySelector('input[name="amount"]:checked');
    if (amount && amount.value === 'double') {
        cost += 3.00;
        calories += 300; // assuming double patty calories
    }

    // toppings
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    toppings.forEach(topping => {
        if (topping.value === 'cheese') {
            cost += 0.75;
            calories += 100;
        } else if (topping.value === 'bacon') {
            cost += 1.50;
            calories += 129;
        } else {
            cost += 0.50;
            calories += 10;
        }
    });

    // lost in the sauce
    const sauces = document.querySelectorAll('input[name="sauces"]:checked');
    sauces.forEach(sauce => {
        if (sauce.value === 'bbq' || sauce.value === 'ranch') {
            cost += 0.50;
            calories += 50;
        } else {
            cost += 0.25;
            calories += 20;
        }
    });

    document.getElementById('total-cost').textContent = cost.toFixed(2);
    document.getElementById('total-calories').textContent = calories;
});
