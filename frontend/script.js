


// hosting- declaration is moved to the top of innermost function
var productsList=[];


function loadProducts(renderProductListTableWIthData){
setTimeout(()=>{
    productsList=productsListFromServer;
    renderProductListTableWIthData();
},2000)

    

}
//callback function is funct passed as an argument to other funct
//arrow function is anonymous funct
//array.map takes method as an argument, which is executed the length of array times, returns array

function renderProducts(){
    //Fetch the data from server
    //convert data into html and render to ui
    function renderProductListTableWIthData(){
        if(productsList.length===0){
            document.getElementById("data").innerHTML="Loading data from server"
            return;
        }
        document.getElementById("data").innerHTML=
    `<table>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            
                ${productsList.map((product,index)=>{
                    return `
                    <tr>
                        <td>${index+1}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                    </tr>
                    `
                })}
            </tbody>
        </table>`;
    }
    loadProducts(renderProductListTableWIthData);
    renderProductListTableWIthData();
}



// Web api by the browser

// setTimeout(renderProducts ,2000);
renderProducts();
