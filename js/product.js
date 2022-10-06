class Product{

    endpointUrlProduct = "http://localhost:8080/api/v1/product";

    
    

    constructor(dataProduct){
        this.dataProduct = dataProduct;
        console.log("constructor")
        this.fetchData();
    }
    
    async fetchData(){
        let responseP = await fetch(this.endpointUrlProduct);
        console.log("fetchData")
        this.dataProduct = await responseP.json();
        

        this.updateHtmlPage();
    
    }


    updateHtmlPage(){
        console.log("update")
        function compare(a, b) {
            const nameA = a.name;
            const nameB = b.name;
            let comparison = 0;
            if(nameA > nameB){
                comparison = 1;
            }else if(nameA < nameB){
                comparison = -1;
            }
            return comparison;
            
        }

        var productList = this.dataProduct.sort(compare);

        console.log(productList)

        for(var i = 0; i < productList.length; i++, i++, i++){
            
            
            console.log(productList[i])

            var L = i+1;
            var J = i+2;
            
            var divStart = "<div class=\"row align-items-start d-flex align-items-stretch\">";
            var row = "<div class=\"col\"><div class=\"card\" style=\"width: 18rem; min-height: 24rem; max-height: 24rem;\"> <img class=\"card-img-top\" src=\"img/"+productList[i].name+".jpg\" alt=\""+productList[i].name+" billede\"> <div class=\"card-body\"> <p class=\"card-text\">"+productList[i].name+"<br><button>Tilføj</button><button onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id="+productList[i].id+"'\">Rediger</button></p> </div> </div></div>";
            if(L < productList.length){
                row = row + "<div class=\"col\"><div class=\"card\" style=\"width: 18rem; min-height: 24rem; max-height: 24rem;\"> <img class=\"card-img-top\" src=\"img/"+productList[L].name+".jpg\" alt=\""+productList[L].name+" billede\"> <div class=\"card-body\"> <p class=\"card-text\">"+productList[L].name+"<br><button>Tilføj</button><button onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id="+productList[L].id+"'\">Rediger</button></p> </div> </div></div>";
            }else(row = row + "<div class=\"col\"></div>");
            if(J < productList.length){
                row = row + "<div class=\"col\"><div class=\"card\" style=\"width: 18rem; min-height: 24rem; max-height: 24rem;\"> <img class=\"card-img-top\" src=\"img/"+productList[J].name+".jpg\" alt=\""+productList[J].name+" billede\"> <div class=\"card-body\"> <p class=\"card-text\">"+productList[J].name+"<br><button>Tilføj</button><button onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id="+productList[J].id+"'\">Rediger</button></p> </div> </div></div>";
            }else(row = row + "<div class=\"col\"></div>");
            var divEnd = "</div>";
            

            var div = divStart + row + divEnd;
            
            
            $("#product").append(div)
        }

        


    }



}
var product = new Product(); 