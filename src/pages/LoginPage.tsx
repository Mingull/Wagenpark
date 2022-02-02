import { HomePageStyle, MainButton } from "../utils/styles";
import { VscDashboard } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";

export const LoginPage = () => {
    const redirect = () => {
        window.location.href = "/dashboard";
    }
    return (
        <HomePageStyle>
            <div>
                <h1 style={{ fontWeight: "300" }}>Wagen Park</h1>
            </div>
            <div>
                <MainButton onClick={redirect}>
                    <VscDashboard size={40} color="#ffffff" />
                    <p style={{ fontSize: '18px' }}>To dashboard</p>
                </MainButton>
                {/* <MainButton>
                    <FaDiscord size={40} color="#5865f2" />
                    <p style={{ fontSize: '18px' }}>Discord</p>
                </MainButton> */}
            </div>
            <div style={{
                display: 'flex', width: '450px',
                justifyContent: 'space-between'
            }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Us</span>
            </div>
        </HomePageStyle>
    )
}