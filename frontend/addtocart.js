const product = [
    {
        id: 0,
        profile_url: 'Photos/new.jpg',
        clothtype: 'Green Shifon',
        description:'M',
        price: 120,
    },
    {
        id: 1,
        profile_url: 'Photos/new1.jpg',
        clothtype: 'Green Shifon',
        description:'M',
        price: 120,
    },
    {
        id: 2,
        profile_url: 'Photos/new2.jpg',
        clothtype: 'Green Shifon',
        description:'M',
        price: 120,
    },
    {
        id: 3,
        profile_url: 'Photos/new3.jpg',
        clothtype: 'Green Shifon',
        description:'M',
        price: 120,
    },

];




let categories = [...new Set(product.map((item)=>
    {return item}))]
    
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {profile_url, clothtype,description, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${profile_url}></img>
            </div>
        <div class='bottom'>
        <p>${clothtype}</p>
        <p>${description}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    console.log(cart)
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
        return `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                `<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>
            </div>`
            ;
        }).join('');
    }
}
function purchase(){
    if(cart.length==0){
        alert("Add items to your cart")
    }
    else{
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        alert("Your order is successfully delivered")      
}
}




