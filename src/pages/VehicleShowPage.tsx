import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { VehicleContext } from "../utils/context/VehicleContext";
import { Container, Flex, Grid, Page, Subtitle, Title } from "../utils/styles"

export const VehicleShowPage = () => {
    const { vehicle } = useContext(VehicleContext);
    return vehicle ? (
        <Page>
            <Container style={{ width: '800px' }}>
                <div>
                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                        <Title>{vehicle.vehicle}</Title>
                        <Subtitle>{vehicle.manufacturer}</Subtitle>
                    </Flex>
                </div>
            </Container>
        </Page>
    ) : (
        <Navigate replace to="/dashboard" />
    )
}