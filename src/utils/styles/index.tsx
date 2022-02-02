import styled, { css } from 'styled-components';
import { Vehicle } from '../types';

export const MainButton = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: space-between;
    background-color: #2121217d;
    padding: 4px 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #58585863;
    margin: 10px 0;
    box-shadow: 0px 1px 5px 0px #00000018;
`;

export const Page = styled.div`
    padding: 35px;
`;

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
`;

export const Title = styled.p`
    font-size: 26px;
    font-weight: bold;
    margin: 0;
`;
export const Subtitle = styled(Title)`
    font-size: 1rem;
    font-weight: normal;
`;
export const MenuItemStyle = styled.div`
    padding: 4px 20px;
    background-color: #252525;
    border-radius: 5px;
    border: 1px solid #ffffff2f;
    margin: 10px;
    position: relative;
`;

export const AppBarStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    box-sizing: border-box;
    border-bottom: 1px solid #c9c9c921;
`;

export const HomePageStyle = styled.div`
    height: 100%;
    padding: 100px 0;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

type FlexProps = Partial<{
    alignItems: "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "baseline" | "inherit" | "initial" | "revert" | "unset";
    justifyContent: "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "normal" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "revert" | "unset";
    flexDirection: "row" | "row-reverse" | "column" | "column-reverse" | "inherit" | "initial" | "revert" | "unset";
}>;
export const Flex = styled.div<FlexProps>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: #0000006c;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;