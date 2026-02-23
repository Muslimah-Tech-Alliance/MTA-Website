import Partner from "../assets/PartnerCompanyPlaceholder.png"
import "../styles/Partners.css"
export default function Partners(){
    return(
        <div className="partners">
            <h1>Our Partners</h1>
            <div className="partners-grid">
                 <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
                <img src={Partner} alt="" />
            </div>

        </div>
    )
}