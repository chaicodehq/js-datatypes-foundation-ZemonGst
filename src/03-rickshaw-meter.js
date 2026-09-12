/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * It's the auto rickshaw. Fare is calculated by the meter.
 * Different math operations are needed — rounding, finding min/max,
 * parsing numbers from strings. You have to build the meter software!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer says "152.50" as a string — convert it to a number using parseFloat()
 *      - If the result is NaN or fareString is not a string, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - Round the fare using .toFixed(decimalPlaces)
 *      - The result returned is a STRING (toFixed returns a string)
 *      - If amount is not a number or decimalPlaces is not a non-negative integer, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - Multiply baseFare by surgeMultiplier
 *      - Always round UP using Math.ceil() (the driver should get paid!)
 *      - If baseFare or surgeMultiplier is not a positive number, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Take a variable number of fares using the rest parameter (...)
 *      - Find the cheapest and costliest fares using Math.min() and Math.max()
 *      - Filter out non-number values
 *      - If no valid number is found, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - Convert string km markers to numbers using parseInt()
 *      - Find the absolute difference using Math.abs() (direction doesn't matter)
 *      - If any value is NaN after parsing, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  // Your code here
  if (typeof fareString !== "string") {
    return -1;
  }
  const fare = parseFloat(fareString);
  return Number.isNaN(fare) ? -1 : fare;
}

export function roundFare(amount, decimalPlaces) {
  // Your code here
  if (
    typeof amount !== "number" ||
    Number.isNaN(amount) ||
    !Number.isInteger(decimalPlaces) ||
    decimalPlaces < 0
  ) {
    return "";
  }

  return amount.toFixed(decimalPlaces);
}

export function calculateSurge(baseFare, surgeMultiplier) {
  // Your code here
  if (
    typeof baseFare !== "number" ||
    typeof surgeMultiplier !== "number" ||
    baseFare <= 0 ||
    surgeMultiplier <= 0
  ) {
    return 0;
  }
  let m = baseFare * surgeMultiplier;
  return Math.ceil(m);
}

export function findCheapestAndCostliest(...fares) {
  // Your code here
  const validFares = fares.filter(
    (fare) => typeof fare === "number" && !Number.isNaN(fare)
  );

  if (validFares.length === 0) {
    return null;
  }

  const cheapest = Math.min(...validFares);
  const costliest = Math.max(...validFares);

  return { cheapest, costliest };
}

export function getDistanceDifference(from, to) {
  // Your code here
  let pFrom = parseInt(from);
  let pTo = parseInt(to);

  if (Number.isNaN(pFrom) || Number.isNaN(pTo)) {
    return -1;
  }

  return Math.abs(pFrom - pTo);
}
