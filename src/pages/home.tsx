import viverySymbol from '../images/Vivery_Symbol_Secondary.png';
import '../styles/site.css'

export default function Home() {
    return (
        <>
            <h1>Welcome Vivery Ascend</h1>
            <img src={viverySymbol} alt="Vivery Logo" className="spinningImage" style={{ height: "300px" }} />
        </>
    )
}