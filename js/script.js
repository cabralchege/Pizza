// $(document).ready(function(){
//     $("#flip").click(function(){
//       $("#panel").slideDown("slow");
//     });
//   });
  function getSizeValue() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}
function getCrust() {
    var selectedCrust = document.getElementById("crusts").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}
function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You have Ordered" + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("Please enter your location")
    alert("You delivery fee is 200/=")
    alert("You order will be delivered shortly")
    alert("Thank You for shoppping with us  .")
}