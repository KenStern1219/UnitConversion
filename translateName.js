//
// Translate the name on the button to a unit
// name acceptable to math.js
//
function translateUnitName(aUnitName)
{
    switch(aUnitName)
    {
        case "cubic meter": return "meter^3";
        case "cubic inch" : return "inch^3";
        case "cubic feet" : return "foot^3";
        case "cubic yard": return "yard^3";
        case "cubic centimeter": return "cc";

        case "sq meter": return "m2";
        case "sq inch": return "sqin";
        case "sq feet": return "sqft";
        case "sq yard": return "sqyd";
        case "sq mile": return "sqmi";
        case "sq rod": return "sqyd";
        case "sq chain": return "sqch";
        case "sq mm": return "mm^2";
        case "sq rod": return "rd^2";
        case "sq miil": return "sqmil";

        case "feet": return "foot";
        case "centimeter": return "cm";
        case "millimeter": return "mm";
        case "nautical mile": return "nm";
        case "light year": return "lightyear";

        case "fluid dram": return "fluiddram";
        case "fluid ounce": return "fluidounce";
        case "beer barrel": return "bbl";
        case "oil barrel": return "obl";

        case "arc second": return "arcsecond";
        case "arc minute": return "arcminute";

        case "pound force": return "lbf";

        case "watt-hour": return "Wh";

        case "pascal": return "Pa";
        case "atmosphere": return "atm";
        case "mm mercury": return "mmHg";
        case "mm water": return "mmH2O";
        case "cm water": return "cmH2O";

        case "meters per second": return "m/s";
        case "meters per hour": return "m/hour";
        case "feet per second": return "foot/s";
        case "feet per hour": return "foot/hour";
        case "miles per second": return "mile/s";
        case "miles per hour": return "mile/hour";
        case "speed of light (c)": return "c";

        default: return aUnitName;
    }
}

//
// If name on the button is already plural (eg: feet)
// then do not add an "s". Alternatly, if the name on
// the button has no plural (eg: temperature) then
// just use the button name. Also, handle non-standard
// plurals (et: foot -> feet).
//
function getPlural(aUnitName)
{
    let plural = "";

    if (aUnitName.includes("feet")) plural = aUnitName;
  
    else if (aUnitName === "kelvin") plural = aUnitName;
    else if (aUnitName === "celsius") plural = aUnitName;
    else if (aUnitName === "fahrenheit") plural = aUnitName;
    else if (aUnitName === "rankine") plural = aUnitName;

    else if (aUnitName === "hp") plural = aUnitName;

    else if (aUnitName === "century") plural = "centuries";

    else if (aUnitName.includes("water")) plural = aUnitName;
    else if (aUnitName.includes("mercury")) plural = aUnitName;

    else if (aUnitName.includes("speed of light")) plural = "c";
    else if (aUnitName.includes("per")) plural = aUnitName;

    else if ((aUnitName === "bits") || (aUnitName === "bytes")) plural = aUnitName;

    else plural = aUnitName + "s";

    return plural;
}