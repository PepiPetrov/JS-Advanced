function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
      let activeElements = document.querySelectorAll('.select');
      if (activeElements.length) {
         Array.from(activeElements).forEach(x => x.classList.remove('select'));
      }
      let rows = document.querySelectorAll('.container tbody tr');
      let searchField = document.querySelector('#searchField')
      if (searchField.value !== "") {
         Array.from(rows).forEach(row => {
            Array.from(row.cells)
               .map(cell => cell.textContent)
               .forEach(string => {
                  if (string.includes(searchField.value)) {
                     row.className = "select";
                  }
               })
         })
      }
      searchField.value = "";
   }
}