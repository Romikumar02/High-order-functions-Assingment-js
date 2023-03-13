// Define the list of items and their prices in USD
const items = {
    "Item 1": 10,
    "Item 2": 20,
    "Item 3": 30,
    "Item 4": 40,
    "Item 5": 50,
  };
  
  // Define the exchange rate
  const exchangeRate = 80;
  
  // Use the map function to create a new object with the converted prices in INR
  const pricesInRupees = Object.keys(items).map((key) => {
    const priceInRupees = items[key] * exchangeRate;
    return { [key]: priceInRupees };
  });
  
  // Print the original prices in USD and the converted prices in INR to the console
  console.log("Prices in USD:", items);
  console.log("Prices in INR:", Object.assign({}, ...pricesInRupees));
  