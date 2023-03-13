import PriceWithDiscount from "./PriceWithDiscount"

const TotalCart = (items) =>{
    
    return items.reduce((prev,current) =>(prev+= PriceWithDiscount(current.price,current.sale) ) ,0)
    
}
export default TotalCart