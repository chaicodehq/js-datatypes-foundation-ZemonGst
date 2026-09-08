/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu has a tea stall outside the college. Customers give orders,
 * and Guddu needs to handle orders using string methods.
 * You are Guddu's helper — learn basic string methods and process orders!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - First remove extra spaces using .trim(), then count using .length
 *      - If order is not a string, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu shouts the order to his helper in UPPERCASE
 *      - First use .trim(), then .toUpperCase()
 *      - If order is not a string or is empty after trimming, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - When someone orders secretly, write in lowercase
 *      - First use .trim(), then .toLowerCase()
 *      - If order is not a string or is empty after trimming, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check if the order has any special ingredient or not
 *      - Convert both to .toLowerCase(), then use .includes()
 *      - If either is not a string, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - Extract the first character using .charAt(0) and the last character using .at(-1)
 *      - First use .trim()
 *      - Return: { first, last }
 *      - If order is not a string or is empty after trimming, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  // Your code here
  if (typeof order !== "string") {
    return -1;
  } else {
    let o = order;
    return o.trim().length;
  }
}

export function shoutChaiOrder(order) {
  // Your code here
  if (typeof order !== "string" || order.trim().length === 0) {
    return "";
  } else {
    return order.trim().toUpperCase();
  }
}

export function whisperChaiOrder(order) {
  // Your code here
  if (typeof order !== "string" || order.trim().length === 0) {
    return "";
  } else {
    return order.trim().toLowerCase();
  }
}

export function hasSpecialIngredient(order, ingredient) {
  // Your code here
  if (typeof order !== "string" || typeof ingredient !== "string") {
    return false;
  } else {
    return order.toLowerCase().includes(ingredient.toLowerCase());
  }
}

export function getFirstAndLastChar(order) {
  // Your code here
  if (typeof order !== "string" || order.trim().length === 0) {
    return null;
  } else {
    const odr = order.trim();
    return {
      first: odr.charAt(0),
      last: odr.at(-1),
    };
  }
}
