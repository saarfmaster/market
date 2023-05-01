function search_products() {
  var input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  var p = document.getElementsByClassName('product');
  var showme = document.getElementById('list');

  
  



  for (i = 0; i < p.length; i++) {
      hide = false;
      if (!p[i].innerHTML.toLowerCase().includes(input)) {
         p[i].style.display="none";
      } else {
          p[i].style.display="list-item";
      }
      
  }
}