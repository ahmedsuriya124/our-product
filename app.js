let productsDiv = document.querySelector('.products');
let checkboxesDiv = document.querySelector('.checkboxes');
let categoryArray = [];

let display =async (allCat=[])=>{
    // checkboxesDiv.innerHTML = '';
    productsDiv.innerHTML = '';
    let product =await fetch('https://dummyjson.com/products')
    let finalProduct = await product.json();
    ProductArray = finalProduct.products;
    ProductArray.forEach(element => {

        if(!categoryArray.includes(element.category)){
            checkboxesDiv.innerHTML += `<label for="${element.category}">
            <input type="checkbox" onClick='categoryFilter()' name="" id="${element.category}" value="${element.category}">${element.category}
        </label>`;
        categoryArray.push(element.category)
        }

        if(allCat.length ===0){
            allCat = categoryArray;
        }

        if(allCat.includes(element.category)){
            productsDiv.innerHTML += `<div class="productItem">
            <img src="${element.images[0]}" alt="">
            <div class="itemDiscription">
            <h6>${element.title}</h6>
            <p>price Rs. ${element.price}</p>
            <button class="addToCartBtn">Add to cart</button>
            </div>
            </div>`
        }
        });
    }

display();

let categoryFilter = ()=>{
    let checkBoxInput = document.querySelectorAll("input[type='checkbox']")
    let checkData = [];
    checkBoxInput.forEach(e => {
        if(e.checked){
            checkData.push(e.value)
        }
    });
    display(checkData)
}