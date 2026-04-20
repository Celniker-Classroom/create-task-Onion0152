
    document.getElementById('calculate').addEventListener('click', function () {
        let cost = 0;
        let calories = 0;

        const bun = document.querySelector('input[name="bun"]:checked');
        const pattyType = document.querySelector('select[name="patty-type"]').value;
        const amount = document.querySelector('input[name="amount"]:checked');

        // List
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

        // Parameter, procedure
        let bunstats = calculateBun(bun);
        cost += bunstats.cost;
        calories += bunstats.calories;

        let pattyStats = calculatePatty(pattyType, amount);
        cost += pattyStats.cost;
        calories += pattyStats.calories;

        let toppingStats = calculateToppings(selectedToppings);
        cost += toppingStats.cost;
        calories += toppingStats.calories;

        let sauceStats = calculatesauces(selectedSauces);
        cost += sauceStats.cost;
        calories += sauceStats.calories;

        document.getElementById('total-cost').textContent = cost.toFixed(2);
        document.getElementById('total-calories').textContent = calories;
    });

    // Parameter, Iteration, Selection

    function calculateBun(bun) {
        let bunCost = 0;
        let bunCalories = 0;

        if (bun) {
            if (bun.value === 'sesame') { bunCost += 1.00; bunCalories += 100; }
            else if (bun.value === 'whole-wheat') { bunCost += 1.25; bunCalories += 120; }
            else if (bun.value === 'lettuce') { bunCost += 0.75; bunCalories += 10; }
        }
        return { cost: bunCost, calories: bunCalories };
    }

    function calculatePatty(pattyType, amount) {
            let pattyCost = 0;
            let pattyCalories = 0;

            if (amount === null) { return { cost: 0, calories: 0 }; }
            if (pattyType === 'beef') { pattyCost += 5.50; pattyCalories += 250; }
            else if (pattyType === 'chicken') { pattyCost += 4.75; pattyCalories += 200; }
            else if (pattyType === 'Impossible patty') { pattyCost += 4.25; pattyCalories += 150; }
            else if (pattyType === 'turkey') { pattyCost += 4.95; pattyCalories += 180; }

            if (amount.value === 'double') { pattyCost += 3.00; pattyCalories += 300; }
            return { cost: pattyCost, calories: pattyCalories };
    }
    function calculatesauces(sauces) {
       let sauceCost = 0;
       let sauceCalories = 0;

       for (let i = 0; i < sauces.length; i++) {
        if (sauces[i] === 'bbq' || sauces[i] === 'ranch') { sauceCost += 0.50; sauceCalories += 50; }
        else { sauceCost += 0.25; sauceCalories += 20; }
       }

       return { cost: sauceCost, calories: sauceCalories }
       
    }

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

        return { cost: extraCost, calories: extraCalories };
    }
