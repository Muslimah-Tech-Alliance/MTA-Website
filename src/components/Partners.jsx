import Partner from "../assets/PartnerCompanyPlaceholder.png"
import "../styles/Partners.css"
export default function Partners(){
    return(
        <div className="partners">
            <h1>Our Partners</h1>
            <div className="row1">
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
            </div>
            <div className="row2">
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
            </div>

        </div>
    )
}