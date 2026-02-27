import Partner from "../../assets/Landing Page Pics/PartnerCompanyPlaceholder.png"
import "../../styles/Landing Page Styles/Partners.css"

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