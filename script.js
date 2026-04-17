
    document.getElementById('calculate').addEventListener('click', function () {
        let cost = 0;
        let calories = 0;


// 1. REQUIREMENT: List
        let selectedToppings = [];
        const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
        toppingCheckboxes.forEach(checkbox => {
            selectedToppings.push(checkbox.value);
        });

        const bun = document.querySelector('input[name="bun"]:checked');
        if (bun) {
            if (bun.value === 'sesame') { cost += 1.00; calories += 100; }
            else if (bun.value === 'whole-wheat') { cost += 1.25; calories += 120; }
            else if (bun.value === 'lettuce') { cost += 0.75; calories += 10; }
        }

        const pattyType = document.querySelector('select[name="patty-type"]').value;
        if (pattyType === 'beef') { cost += 5.50; calories += 250; }
        else if (pattyType === 'chicken') { cost += 4.75; calories += 200; }
        else if (pattyType === 'Impossible patty') { cost += 4.25; calories += 150; }
        else if (pattyType === 'turkey') { cost += 4.95; calories += 180; }

        const amount = document.querySelector('input[name="amount"]:checked');
        if (amount && amount.value === 'double') { cost += 3.00; calories += 300; }

        // 2. REQUIREMENT: Parameter w/ procedure
        let toppingStats = calculateToppings(selectedToppings);
        cost += toppingStats.toppingCost;
        calories += toppingStats.toppingCalories;

        const sauces = document.querySelectorAll('input[name="sauces"]:checked');
        sauces.forEach(sauce => {
            if (sauce.value === 'bbq' || sauce.value === 'ranch') { cost += 0.50; calories += 50; }
            else { cost += 0.25; calories += 20; }
        });

        document.getElementById('total-cost').textContent = cost.toFixed(2);
        document.getElementById('total-calories').textContent = calories;
    });

    // 3. REQUIREMENT: Parameter, Iteration, Selection
    function calculateToppings(list) {
        let extraCost = 0;
        let extraCalories = 0;

        // Iteration
        for (let i = 0; i < list.length; i++) {
            // Selection
            if (list[i] === 'cheese') {
                extraCost += 0.75;
                extraCalories += 100;
            } else if (list[i] === 'bacon') {
                extraCost += 1.50;
                extraCalories += 129;
            } else {
                extraCost += 0.50;
                extraCalories += 10;
            }
        }

        return { toppingCost: extraCost, toppingCalories: extraCalories };
    }
