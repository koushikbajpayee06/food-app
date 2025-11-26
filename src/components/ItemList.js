import { useDispatch } from "react-redux";
import { BASE, CDN_URL } from "../utills/constant";
import { addItem } from "../utills/cardSlice";
const ItemList = ({items, dummy}) =>{

    const dispatch = useDispatch()
    const handleAddItems=(item)=>{
        //Dispatch
        dispatch(addItem(item))
    }
    // console.log(dummy);
    return ( 
        <div>
            {
                items.map((item)=>(
                <div 
                    key={item.card.info.id } 
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="p-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                {" "} 
                                - ₹{" "}
                                {item.card.info.price/100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button onClick={()=>handleAddItems(item)} className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                                Add +
                            </button>
                        </div>
                        <img src={CDN_URL+ item.card.info.imageId} className="w-full"></img>
                    </div>
                    
                </div>
                
            ))}
        </div>
    );
}

export default ItemList;