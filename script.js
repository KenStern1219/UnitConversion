// JavaScript code for unit conversion
document.addEventListener("DOMContentLoaded", function () 
{
    const convertButton = document.getElementById("convertButton");
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const resultValue = document.getElementById("resultValue");

    inputValue.textContent = 1;

    const lengthButton = document.getElementById("length");
    const areaButton = document.getElementById("area");
    const volumeButton = document.getElementById("volume");
    const massButton = document.getElementById("mass");
    const timeButton = document.getElementById("time");
    const liquidVolumeButton = document.getElementById("liquidVolume");
    const anglesButton = document.getElementById("angles");
    const tempButton = document.getElementById("temperature");
    const forceButton = document.getElementById("force");
    const energyButton = document.getElementById("energy");
    const powerButton = document.getElementById("power");
    const binaryButton = document.getElementById("binary");
    const pressureButton = document.getElementById("pressure");
    const velocityButton = document.getElementById("velocity");

    const buttons = [lengthButton, areaButton, volumeButton, massButton, timeButton,
                     liquidVolumeButton, anglesButton, tempButton, forceButton, energyButton, powerButton, 
                     binaryButton, pressureButton, velocityButton];

    //
    // Create user defined units
    //
    math.createUnit(`furlong`, `220 yards`);
    math.createUnit(`fathom`, `6 feet`);
    math.createUnit(`mm`, `0.001 meter`);
    math.createUnit(`cm`, `0.01 meter`);
    math.createUnit('league', '3.45234 mile');
    math.createUnit("nm", "1.15078 mile");

    math.createUnit('c', '299792458 m/s');
    math.createUnit('knot', '0.51444444 m/s');

    const lengthUnits = ["meter", "centimeter", "millimeter", "inch", "feet", "yard", "mile", "link", "rod", "chain", "angstrom", "mil", "furlong", "fathom", "league", "nautical mile"];
    setUpButton(lengthButton, lengthUnits);

    function resetButtonBackground()
    {
        buttons.forEach((button) => 
        {
            button.style.backgroundColor = "cornflowerblue";
        });
    }

    function removeOptions(selectElement)
    {
        var i, L = selectElement.options.length - 1;
        for (i = L; i >= 0; i--)
        {
            selectElement.remove(i);
        }
    }

    liquidVolumeButton.addEventListener("click", () =>
    {
        console.log("Liquid Volume Button Clicked\n\n");
        const units = ["minim", "fluid dram", "fluid ounce", "gill", "cup", "pint", "quart", "gallon", "beer barrel", "oil barrel",, "hogshead", "drop"];
        setUpButton(liquidVolumeButton, units);
    });

    massButton.addEventListener("click", () =>
    {
        console.log("Mass Button Clicked\n\n");
        const units = ["gram", "tonne", "ton", "grain", "dram", "ounce", "pound", "hundredweight", "stick", "stone"];
        setUpButton(massButton, units);
    });

   lengthButton.addEventListener("click", () =>
    {
        console.log("Length Button Clicked\n\n");
        setUpButton(lengthButton, lengthUnits);
    });

    areaButton.addEventListener("click", () =>
    {
        console.log("Area Button Clicked\n\n");
        const units = ["sq meter", "sq inch", "sq feet", "sq yard", "sq mile", "sq chain", "sq mil", "sq mm", "sq rod", "acre", "hectare"];
        setUpButton(areaButton, units);
    });

    anglesButton.addEventListener("click", () =>
    {
        console.log("Angles Button Clicked\n\n");
        const units = ["radian", "degree", "gradian", "cycle", "arc second", "arc minute"];
        setUpButton(anglesButton, units);
    });

    volumeButton.addEventListener("click", () =>
    {
        console.log("Volume Button Clicked\n\n");
        const units = ["cubic meter", "litre", "cubic centimeter", "cubic inch", "cubic feet", "cubic yard", "teaspoon", "tablespoon"];
        setUpButton(volumeButton, units);
    });

    tempButton.addEventListener("click", () =>
    {
        console.log("Temp Button Clicked\n\n");
        const units = ["kelvin", "celsius", "fahrenheit", "rankine"];
        setUpButton(tempButton, units);
    });

    forceButton.addEventListener("click", () =>
    {
        console.log("Force Button Clicked\n\n");
        const units = ["newton", "dyne", "pound force", "kip"];
        setUpButton(forceButton, units);
    });

    energyButton.addEventListener("click", () =>
    {
        console.log("Energy Button Clicked\n\n");
        const units = ["joule", "erg", "watt-hour", "BTU", "electronvolt"];
        setUpButton(energyButton, units);
    });

    powerButton.addEventListener("click", () =>
    {
        console.log("Power Button Clicked\n\n");
        const units = ["watt", "hp"];
        setUpButton(powerButton, units);
    });

    binaryButton.addEventListener("click", () =>
    {
        console.log("Binary Button Clicked\n\n");
        const units = ["bits", "bytes"];
        setUpButton(binaryButton, units);
    });

   timeButton.addEventListener("click", () =>
    {
        console.log("Time Button Clicked\n\n");
        const units = ["second", "minute", "hour", "day", "week", "month", "year", "decade", "century"];
        setUpButton(timeButton, units);
    });

    pressureButton.addEventListener("click", () =>
    {
        console.log("Pressure Button Clicked\n\n");
        const units = ["pascal", "psi", "atmosphere", "torr", "bar", "mm mercury", "mm water", "cm water"];
        setUpButton(pressureButton, units);
    });

    velocityButton.addEventListener("click", () =>
    {
        console.log("Velocity Button Clicked\n\n");
        const units = ["meters per second", "meters per hour", "feet per second", "feet per hour", "miles per second", "miles per hour", "knot", "speed of light (c)"];
        setUpButton(velocityButton, units);
    });

    function setUpButton(aButton, aUnitsArray)
    {
        //
        // Highlight the selected button
        //
        resetButtonBackground();
        aButton.style.backgroundColor = "green";

        //
        // Clear out any previous result
        //
        resultValue.textContent = "Result: ";

        //
        // Reset input to 1
        //
        inputValue.value = "1";

        //
        // Populate the drop down boxes with the appropriate units
        //
        removeOptions(fromUnit);
        removeOptions(toUnit);

        aUnitsArray.forEach(unit =>           
        {
            const option = document.createElement("option");
            option.value = unit;
            option.textContent = unit;
            fromUnit.appendChild(option);
            toUnit.appendChild(option.cloneNode(true));
        });
    };
    
    convertButton.addEventListener("click", function () 
    {
        const input = parseFloat(inputValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        //
        // Translate the name on the button to a unit
        // name acceptable to math.js
        //
        const translatedTo = translateUnitName(to);
        const translatedFrom = translateUnitName(from);

        //
        // Implement unit conversion logic here
        //
        const convertedValue = convert(translatedFrom, translatedTo, input);
        console.log("Converted Value " + convertedValue + " " + to + "\n\n");

        //
        // If name on the button is already plural
        // then do not add an "s". Also, if converted
        // value is 1 then no plural
        //
        let plural = to;
        if (convertedValue != 1.00000)
        {
            plural = getPlural(to);
        }

        resultValue.textContent = `Result: ${convertedValue} ` + plural;
    });
});
