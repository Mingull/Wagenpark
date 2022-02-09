import React, { useContext } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { VehicleContext } from "../utils/context/VehicleContext";
import { Button, Container, Flex, Page, Title } from "../utils/styles"

export const VehicleShowPage = () => {
    const navigate = useNavigate();
    const { vehicle } = useContext(VehicleContext);

    const handleEdit = () => {
        navigate('/dashboard/edit')
    }
    return (
        <Page>
            <Container style={{ width: '800px' }}>
                {vehicle ?
                    <div>
                        <Flex justifyContent="space-between" style={{ marginBottom: '10px' }}>
                            <Title>View Vehicle</Title>
                            <div onClick={handleEdit}><FaPen style={{ verticalAlign: 'middle', marginRight: '10px' }} size={20} />Edit</div>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Name:</p>
                            <p style={{ fontWeight: 'bold' }}>{vehicle.vehicle}</p>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Manufacturer:</p>
                            <p style={{ fontWeight: 'bold' }}>{vehicle.manufacturer}</p>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Color:</p>
                            <p style={{ fontWeight: 'bold' }}>{vehicle.color}</p>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Type:</p>
                            <p style={{ fontWeight: 'bold' }}>{vehicle.type}</p>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Model:</p>
                            <p style={{ fontWeight: 'bold' }}>{vehicle.model}</p>
                        </Flex>
                        <Flex justifyContent="space-between" style={{ fontSize: '1.1em', borderBottom: '1px solid #999', marginBottom: '5px' }}>
                            <p>Created at:</p>
                            <p style={{ fontWeight: 'bold' }}>{new Date(vehicle.createdAt).toLocaleString()}</p>
                        </Flex>
                        <Flex justifyContent="flex-end">
                            <Button onClick={() => navigate("/dashboard")} variant="primary">Back</Button>
                        </Flex>
                    </div>
                    : <Flex justifyContent="center" alignItems="center">
                        {/* <MoonLoader size={30} color="white" /> */}
                        <PropagateLoader color="#fff" />
                    </Flex>}
            </Container>
        </Page>
    )
}