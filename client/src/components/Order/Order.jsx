import { useEffect, useState,useRef } from "react"
import { useSelector,useDispatch} from "react-redux"
import { setOrder } from "../../redux/actions"

const Order = ({ resetVideogames }) => {
    const dispatch = useDispatch()
    const [options, setOptions] = useState(["RATING UP", "RATING DOWN", "LETTER UP", "LETTER DOWN"])
    const [selectedOption, setSelectedOption] = useState("");
    const [displayDropdown,setDisplayDropdown] = useState(false);

    const handleDropdown = () => {
        setDisplayDropdown(!displayDropdown)
    }

    const handleOrder = (selectedOrder) => {
        setSelectedOption(selectedOrder)
        dispatch(setOrder(selectedOrder))
    }

    useEffect(() => {
        if (resetVideogames) {
          setSelectedOption("");
        }
      }, [resetVideogames]);

 
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