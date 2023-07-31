
document.addEventListener("DOMContentLoaded", function () {
    
    const inventoryData = [
      { book: "Book 1", bookId: "B001", author: "Author 1", price: 10.99 },
      { book: "Book 2", bookId: "B002", author: "Author 2", price: 12.99 },
      { book: "Book 3", bookId: "B003", author: "Author 3", price: 9.99 },
      // Add more inventory items as needed
    ];
  
    const inventoryTableBody = document.getElementById("inventoryTableBody");
    inventoryData.forEach((inventory) => {
      const row = createInventoryTableRow(inventory);
      inventoryTableBody.appendChild(row);
    });
  
    // Function to create a table row for inventory items
    function createInventoryTableRow(inventory) {
      const row = document.createElement("tr");
      const bookCell = document.createElement("td");
      bookCell.textContent = inventory.book;
      row.appendChild(bookCell);
  
      const bookIdCell = document.createElement("td");
      bookIdCell.textContent = inventory.bookId;
      row.appendChild(bookIdCell);
  
      const authorCell = document.createElement("td");
      authorCell.textContent = inventory.author;
      row.appendChild(authorCell);
  
      const priceCell = document.createElement("td");
      priceCell.textContent = inventory.price;
      row.appendChild(priceCell);
  
      return row;
    }
  });
  