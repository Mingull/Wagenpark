import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { MenuItem } from "../components/MenuItem";
import { VehicleContext } from "../utils/context/VehicleContext";
import { useFetchVehicles } from "../utils/hooks/useFetchVehicles";
import { Container, Flex, Grid, Page } from "../utils/styles"
import { Vehicle } from "../utils/types";

export const MenuPage = () => {
    const navigate = useNavigate();
    const { updateVehicle } = useContext(VehicleContext);
    const { vehicles, loading, error } = useFetchVehicles();

    const handleClick = (vehicle: Vehicle) => {
        updateVehicle(vehicle);
        navigate('/dashboard/show');
    }
    return (
        <Page>
            <Container>
                <h2 style={{ fontWeight: 300 }}>Overzicht</h2>
                <div>
                    {loading ? (
                        <Flex justifyContent="center">
                            {/* <MoonLoader size={40} color="#fff" /> */}
                            <PropagateLoader color="#fff" />
                        </Flex>
                    ) : (
                        <Grid>
                            {vehicles && vehicles.map((vehicle) => (
                                <div key={vehicle.id} onClick={() => handleClick(vehicle)}>
                                    <MenuItem vehicle={vehicle} />
                                </div>
                            ))}
                        </Grid>
                    )}
                </div>
            </Container>
        </Page>
    )
}