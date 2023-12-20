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

    const hexValue = document.getElementById("hexNumber");
    const octalValue = document.getElementById("octalNumber");
    const binaryValue = document.getElementById("binaryNumber");
    const decimalValue = document.getElementById("decimalNumber");
    const inputValueToConvert = document.getElementById("inputValueToConvert");

    const converter = document.querySelector(".converter");
    const result = document.querySelector(".result");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const closeModalBtn = document.querySelector(".btn-close");
    const binaryConvertButton = document.querySelector(".binaryConvertButton");

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

    math.createUnit("cps", "4.16667 watt");
    math.createUnit("dBm", "0.03333 watt");

    math.createUnit("lightyear", "9.4605284e15 meter");

    const lengthUnits = ["meter", "centimeter", "millimeter", "inch", "feet", "yard", "mile", "link", "rod", "chain", "angstrom", "mil", "furlong", "fathom", "league", "nautical mile", "light year"];
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
        const units = ["watt", "hp", "kilowatt", "gigawatt", "decibel milliwatt", "BTU/hr", "calories per second"];
        setUpButton(powerButton, units);
    });

    //
    // For binary conversions ... if the input is hex or decimal
    // break the binary string into 4 digit segments so it is easier
    // to read. If the input is octal break the binary string into
    // 3 digit segments
    //
    //////////////////////////////////////////
    //
    // First, we need a funtion to insert spaces into
    // a string
    //
    //////////////////////////////////////////
    //
    // [I THINK that what is happing here with 'prototype' is that I am basically
    //  adding a new method ('insertString') to the 'String' class. As best I can
    //  tell that's not EXACTLY what is happening but it appears like it.]
    //
    String.prototype.insertString = function(index, string)
        {
            if (index > 0)
            {
                return this.substring(0, index) + string + this.substring(index, this.length);
            }
        }

    //
    // The Binary button opens a modal dialog to
    // allow entry of the binary, decimal, octal,
    // or hex number
    //
    binaryButton.addEventListener("click", () =>
    {
        console.log("Binary Button Clicked\n\n");
        const units = ["NA"];
        setUpButton(binaryButton, units);

        hexValue.value = "";
        octalValue.value = "";
        binaryValue.value = "";
        decimalValue.value = "";
        inputValueToConvert.value = "";

        openModal();
    });

    const openModal = function ()
    {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        converter.classList.add("hidden");
        result.classList.add("hidden");
    };

    //
    // Close the modal dialog if the user presses
    // the "close" button (an 'x'), or clicks outside
    // of the dialog, or presses the escape key
    //
    closeModalBtn.addEventListener("click", () =>
    {
        console.log("Close Modal BUtton Clicked\n\n");
        closeModal();
    });

    overlay.addEventListener("click", () =>
    {
        console.log("Overlay Clicked\n\n");
        closeModal();
    });

    //
    // Exit dialog on Escape and trigger a convert on Enter
    //
    document.addEventListener("keydown", function (e)
    {
        if (e.key === "Escape" && !modal.classList.contains("hidden"))
        {
            closeModal();
        }
        else if (e.key === "Enter" && !modal.classList.contains("hidden"))
        {
            doBinaryConversion();
        }
    });

    const closeModal = function ()
    {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    binaryConvertButton.addEventListener("click", () =>
    {
        doBinaryConversion();
    });
    
    function doBinaryConversion()
    {
        console.log("Convert Button Clicked\n\n");
        const value = inputValueToConvert.value;
        const valueNumber = Number(value);
        hexValue.value = valueNumber.toString(16);
        octalValue.value = valueNumber.toString(8);
        binaryValue.value = valueNumber.toString(2);
        decimalValue.value = valueNumber.toString(10);

        //
        // Is the input value decimal (dosn't start with 0x, 0b, or 0o) or hex (starts with 0x)
        //
        var valueIsHex = false;
        var valueIsOct = false;
        var valueIsBin = false;
        var valueIsDec = false;
        if (value.includes("0x"))
        {
            valueIsHex = true;
        }
        else if (value.includes("0o"))
        {
            valueIsOct = true;
        }
        else if (value.includes("0b"))
        {
            valueIsBin = true;
        }
        else
        {
            valueIsDec = true;
        }

        if (valueIsDec || valueIsHex)
        {
            //
            // Break binary string every 4 characters
            //
            fixBinaryString(4);
        }
        else if (valueIsOct)
        {
            //
            // Break binary string every 3 characters
            //
            fixBinaryString(3);
        }
    }

    function fixBinaryString(blockSize)
    {
        //
        // Break binary string every 'blockSize' characters
        //
        var numBreaks = Math.floor(binaryValue.value.length / blockSize);
        //
        // if there is no remainder then decrease the number
        // of space characters to add by 1
        //
        if ((binaryValue.value.length % blockSize) == 0) numBreaks--;

        var binaryStringLength = binaryValue.value.length;
        for (var i = 1; i <= numBreaks; i++, binaryStringLength -= blockSize)
        {
            binaryValue.value = binaryValue.value.insertString(binaryStringLength - blockSize, " ");
        }
    }

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
        // Set all the buttons back to light blue, 
        // then highlight the selected button in green
        //
        resetButtonBackground();
        aButton.style.backgroundColor = "green";

        //
        // Unhide the converter and result divs (if they are hidden)
        //
        if (result.classList.contains("hidden") && converter.classList.contains("hidden"))
        {
            converter.classList.remove("hidden");
            result.classList.remove("hidden");
        }

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
