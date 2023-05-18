function filterByCategory(products) {
    return function(category) {
      return products.filter(function(product) {
        return product.category === category;
      });
    };
  }
  
  // Example usage:
  var productsArray = [
    { name: "Product 1", category: "Category A" },
    { name: "Product 2", category: "Category B" },
    { name: "Product 3", category: "Category A" },
    { name: "Product 4", category: "Category C" },
  ];
  
  var filterProductsByCategory = filterByCategory(productsArray);
  
  var categoryAProducts = filterProductsByCategory("Category A");
  console.log(categoryAProducts);
  // Output: [{ name: "Product 1", category: "Category A" }, { name: "Product 3", category: "Category A" }]
  
  var categoryBProducts = filterProductsByCategory("Category B");
  console.log(categoryBProducts);
  // Output: [{ name: "Product 2", category: "Category B" }]
  
  var categoryCProducts = filterProductsByCategory("Category C");
  console.log(categoryCProducts);
  // Output: [{ name: "Product 4", category: "Category C" }]
  