import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideogames())
    },[dispatch])
    return (
        <div>
            Estoy en HOME
            <CardContainer></CardContainer>
        </div>
    )
}

export default Home;