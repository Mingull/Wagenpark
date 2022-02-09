import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { MenuItem } from "../components/MenuItem";
import { useFetchVehicles } from "../utils/hooks/useFetchVehicles";
import { Container, Flex, Grid, Page, Paragraph } from "../utils/styles"

export const MenuPage = () => {
    const navigate = useNavigate();
    const { vehicles, loading } = useFetchVehicles();


    const handleCreateClick = () => {
        navigate('/dashboard/create');
    }
    return (
        <Page>
            <Container>
                <Flex justifyContent="space-between" alignItems="center">
                    <h2 style={{ fontWeight: 300 }}>Wagen List</h2>
                    <Paragraph onClick={handleCreateClick}>
                        <FaPlusCircle style={{ verticalAlign: 'middle' }} size={30} />
                        <span>Add Wagen</span>
                    </Paragraph>
                </Flex>
                <div>
                    {loading ? (
                        <Flex justifyContent="center">
                            {/* <MoonLoader size={40} color="#fff" /> */}
                            <PropagateLoader color="#fff" />
                        </Flex>
                    ) : (
                        <Grid>
                            {vehicles && vehicles.sort((a, b) => { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() }).map(vehicle => (
                                <div key={vehicle.id}>
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