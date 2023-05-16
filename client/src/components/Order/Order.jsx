import { useEffect, useState } from "react"
import { useSelector,useDispatch} from "react-redux"
import { orderVideogames, setOrder } from "../../redux/actions"

const Order = () => {
    const dispatch = useDispatch()
    const order = useSelector(state => state.order)
    const [organization,setOrganization] = useState("");
    const [displayDropdown,setDisplayDropdown] = useState(false)

    const handleDropdown = () => {
        setDisplayDropdown(!displayDropdown)
    }

    useEffect(() => {
        if (organization !== "") {
          dispatch(setOrder(organization));
        }
        console.log(order)
      }, [dispatch, organization]);
    
 
return (
  <section>
    <div onClick={handleDropdown}>
        <input
        type="text"
        readOnly
        placeholder="Order by..."
        value={organization}
        />
    </div>
    {displayDropdown ? (
        <div>

            {order.options.map(option => {
                return (
                    <div key={option} onClick={() => {
                        setOrganization(option)
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