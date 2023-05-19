import {useState,useEffect} from "react"
import style from "./Carousel.module.css"



const Carousel = (props) => {
    const MK = "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg";
    const CONTROL = "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg";
    const GTA = "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg";
    const images = [MK,GTA,CONTROL];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage,setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoplay) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex,images)
            },3000);
        return () =>  clearInterval(interval);
        }
    })

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ?  selectedIndex + 1 : 0 ) : condition ? selectedIndex -1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        },500);
        
    }


    return (
        <div className={style.imgContainer}>
        <img className={`${style.img} ${loaded ? style.loaded : ''}`} src={selectedImage} onLoad={() => setLoaded(true)} alt="videogame" />
        </div>
        
    )
}

export default Carousel;