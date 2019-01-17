function library(title,authorFirst,authorLast,quantity){
    this.title = title
    this.author = {
        'firstNam' : authorFirst,
        'lastNam' : authorLast
    };
    this.quantity = quantity
    this.available = function (){
       quantity = parseInt(quantity)
        if (quantity <= 0) {
           alert(this.title+'by'+this.author+'not available.');
        } else {
            alert(this.title+'by'+this.author+'available.');
        }; 
    } 
}
var book1 = new library('How To Kill a Mockingbird','Harp','Lee',0);
var book2 = new library('Magic 2.0','Scott','Meyer',1)
var book3 = new library('The Island of Sea Women','Lisa','See',1)