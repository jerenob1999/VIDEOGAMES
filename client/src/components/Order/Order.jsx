import { useEffect, useState } from "react"
import { useSelector,useDispatch} from "react-redux"
import { orderVideogames, setOrder, resetFilters } from "../../redux/actions"

const Order = () => {
    const dispatch = useDispatch()
    const [options, setOptions] = useState(["RATING UP", "RATING DOWN", "LETTER UP", "LETTER DOWN", "DEFAULT"])
    const [selectedOption, setSelectedOption] = useState("");
    const [displayDropdown,setDisplayDropdown] = useState(false);

    const handleDropdown = () => {
        setDisplayDropdown(!displayDropdown)
    }

    const handleOrder = (selectedOrder) => {
        setSelectedOption(selectedOrder)
        if(selectedOrder === "DEFAULT") dispatch(resetFilters())
        dispatch(orderVideogames(selectedOrder))
    }

    
 
return (
  <section>
    <div onClick={handleDropdown}>
        <input
        type="text"
        readOnly
        placeholder="Order by..."
        value={selectedOption}
        />
    </div>
    {displayDropdown ? (
        <div>

            {options.map(option => {
                return (
                    <div key={option} onClick={() => {
                        handleOrder(option)
                        handleDropdown()
                    }}>
                        {option}
                    </div>
                )
            }) }
        </div>
    ) : null}
  </section>
)


}

export default Order