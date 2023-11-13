function convert(fromUnit, toUnit, inputValue)
{
    console.log("Converting ...");

    if (fromUnit == "pound") {fromUnit = "poundmass"};
    if (toUnit == "pound") {toUnit = "poundmass"};

    console.log("inputValue " + `${inputValue}`);
    console.log("fromUnit " + `${fromUnit}`);
    console.log("toUnit " + `${toUnit}`);

    const c = math.unit(inputValue + " " + fromUnit);
    const result = c.to(toUnit);

    //
    // Truncate result to 5 signigicant digits
    //
    console.log("Return from conversion: " + result.toNumber());
    let truncatedResult = result.toNumber().toLocaleString("en-US", { maximumFractionDigits: 5, minimumFractionDigits: 5 });

    //
    // If the result is too small to represent in 5 digits then use 16 digits of precision
    //
    if (result.toNumber() <= 0.0001)
    {
        truncatedResult = result.toNumber().toLocaleString("en-US", { maximumFractionDigits: 16, minimumFractionDigits: 16 });    
    }
    return truncatedResult;
}