import { useEffect, useState } from "react"
import { useDispatch} from "react-redux"
import { setOrder } from "../../redux/actions"
import style from "./Order.module.css"

const Order = ({ resetVideogames }) => {
    const dispatch = useDispatch()
    const [options] = useState(["RATING UP", "RATING DOWN", "LETTER UP", "LETTER DOWN"])
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
    <div className={style.order}>
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
        <div className={style.sectionContainer}>

            {options.map(option => {
                return (
                    <div key={option} className={style.sectionOptions} onClick={() => {
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
  </div>
)


}

export default Order