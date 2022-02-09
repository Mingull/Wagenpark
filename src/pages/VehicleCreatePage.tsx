import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeVehicle } from "../utils/api";
import { VehicleContext } from "../utils/context/VehicleContext";
import { Button, Container, Flex, InputField, Page, Title } from "../utils/styles";

export const VehicleCreatePage = () => {
    const navigate = useNavigate();
    const { updateVehicle } = useContext(VehicleContext);
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleManu, setVehicleManu] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const saveVehicle = async (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        try {
            const res = await storeVehicle({
                vehicle: vehicleName,
                manufacturer: vehicleManu,
                color: vehicleColor,
                type: vehicleType,
                model: vehicleModel,
                createdAt: new Date().toString()
            });
            console.log(res);
            updateVehicle(res.data);
            navigate('/dashboard/show')
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Page>
            <Container width='800px' >
                <Title>Update vehicle</Title>
                <form>
                    <div>
                        <label htmlFor="prefix">Vehicle name</label>
                    </div>
                    <InputField onChange={(e) => setVehicleName(e.target.value)} style={{ margin: '10px 0' }} id="vehicleName" />
                    <div>
                        <label htmlFor="prefix">Vehicle Type</label>
                    </div>
                    <InputField onChange={(e) => setVehicleType(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                    <div>
                        <label htmlFor="prefix">Vehicle manufacturer</label>
                    </div>
                    <InputField onChange={(e) => setVehicleManu(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                    <div>
                        <label htmlFor="prefix">Vehicle Model</label>
                    </div>
                    <InputField onChange={(e) => setVehicleModel(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                    <div>
                        <label htmlFor="prefix">Vehicle color</label>
                    </div>
                    <InputField onChange={(e) => setVehicleColor(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                    <Flex justifyContent="flex-end">
                        <Button variant="danger" type="button" onClick={() => navigate('/dashboard')} style={{ marginRight: '8px' }}>Cancel</Button>
                        <Button variant="success" onClick={(e) => saveVehicle(e)}>Create</Button>
                    </Flex>
                </form>
            </Container>
        </Page >
    )
}