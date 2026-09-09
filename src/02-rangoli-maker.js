/**
 * 🎨 Rangoli Border Maker - String Transform
 *
 * Diwali is coming! Priya is making digital rangoli designs on the terminal.
 * She needs to make patterns using string transform methods.
 * Help Priya out!
 *
 * Methods to explore: .slice(), .split(), .join(), .replace(),
 *   .replaceAll(), .repeat()
 *
 * Functions:
 *
 *   1. repeatPattern(pattern, times)
 *      - Use .repeat(times) to repeat the pattern
 *      - If pattern is not a string or times is not a positive integer, return ""
 *      - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 *   2. extractRangoliCenter(design, start, end)
 *      - Use .slice(start, end) to extract the center part of the rangoli
 *      - If design is not a string, return ""
 *      - If start/end are not numbers, return ""
 *      - Example: extractRangoliCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 *   3. splitAndJoinRangoli(colorString, oldSep, newSep)
 *      - Split using .split(oldSep) and join using .join(newSep)
 *      - You need to change the separator between colors
 *      - If colorString is not a string, return ""
 *      - Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
 *
 *   4. replaceRangoliColor(design, oldColor, newColor)
 *      - Use .replaceAll() to replace one color with another
 *      - If any param is not a string, return ""
 *      - Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
 *                 => "pink-blue-pink-green-pink"
 *
 *   5. makeRangoliBorder(char, length)
 *      - Use .repeat() to repeat char many times
 *      - Then use .slice(0, length) to make a border of exact length
 *      - If char is not a string or length is not a positive number, return ""
 *      - Example: makeRangoliBorder("*", 5) => "*****"
 *      - Example: makeRangoliBorder("=-", 7) => "=-=-=-="
 *
 * @example
 *   repeatPattern("*-", 4)                    // => "*-*-*-*-"
 *   extractRangoliCenter("***LOTUS***", 3, 8) // => "LOTUS"
 *   splitAndJoinRangoli("red,blue", ",", "-")  // => "red-blue"
 */
export function repeatPattern(pattern, times) {
  // Your code here
  if (typeof pattern !== "string" || !Number.isInteger(times) || times <= 0) {
    return "";
  } else {
    return pattern.repeat(times);
  }
}

export function extractRangoliCenter(design, start, end) {
  // Your code here
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof design !== "string"
  ) {
    return "";
  } else {
    return design.slice(start, end);
  }
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  // Your code here
  if (typeof colorString !== "string") {
    return "";
  } else {
    return colorString.split(oldSep).join(newSep);
  }
}

export function replaceRangoliColor(design, oldColor, newColor) {
  // Your code here
  if (
    typeof design !== "string" ||
    typeof oldColor !== "string" ||
    typeof newColor !== "string"
  ) {
    return "";
  } else {
    return design.replaceAll(oldColor, newColor);
  }
}

export function makeRangoliBorder(char, length) {
  // Your code here
  if (typeof char !== "string" || typeof length !== "number" || length <= 0) {
    return "";
  } else {
    let repeatCount = Math.ceil(length / char.length);
    return char.repeat(repeatCount).slice(0, length);
  }
}
