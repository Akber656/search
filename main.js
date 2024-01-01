
let data = []

let resultsRootElement = document.querySelector('.results');

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>{
    data = json;
    // console.log(data)
})

document.querySelector('#searchInput').addEventListener('keyup', () => {
  let searchTerm = document.querySelector('#searchInput').value;
  if (String(searchTerm).trim().length > 0) {
      let resultsArray = data.filter(product => String(product.title).includes(searchTerm));
    //   console.log(resultsArray);
      renderProducts(resultsArray);
  } else {
      removeElements();
  }
});

function renderProducts(products){
    removeElements()
    products.forEach(product=>{
        renderSingleProduct(product);
    })
}

function renderSingleProduct(product){
    let resultDiv = document.createElement('div')
    let resultImage = document.createElement('img')
    let resultTitle = document.createElement('h4')
    let resultPrice = document.createElement('p')
    let purchaseButton = document.createElement('button')

    resultImage.src = product.image;
    resultTitle.innerText = product.title;
    resultPrice.innerText = product.price;
    purchaseButton.innerText = 'Purchase'

    resultDiv.appendChild(resultImage)
    resultDiv.appendChild(resultTitle)
    resultDiv.appendChild(resultPrice)
    resultDiv.appendChild(purchaseButton)
    resultDiv.className = 'result'

    resultsRootElement.appendChild(resultDiv)
}

function removeElements(){
    document.querySelectorAll('.result').forEach(prod=>{
    prod.remove()
    })
}





