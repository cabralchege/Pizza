function getTotalAmount() {
        var size = parseInt(document.getElementById("size").value)
        var crust = parseInt(document.getElementById("crust").value)
        var toppings = parseInt(document.getElementById("toppings").value)
        var number = parseInt(document.getElementById("quantity").value)

        var total =  number*(size + crust + toppings);
        alert(" The Total Amount is kshs "  +  total  +  ""  +  " Thank you for your order.");
        var loc=prompt("Please enter your location")
            alert("You delivery fee is 200kshs")
            alert("You order will be delivered shortly to " + loc)
            alert("Thank You for shoppping with us .")
                 
};      

