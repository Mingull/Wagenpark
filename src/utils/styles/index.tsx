import styled, { css } from 'styled-components';

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
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const Paragraph = styled.p`
    cursor: pointer;
    padding: 10px 10px;
    background-color: hsl(150, 73%, 26%);
    color: hsl(0,0%,90%);
    border-radius: 5px;
    // vertical-align: middle;
    // width: 30px;
    // transition: width 250ms ease;
    // height: 100%;
    &>span {
        // transition: opacity 500ms ease;
        margin-left: 5px;
        // opacity: 0;
        // display: none;
    }
    &:hover{
        background-color: hsl(150, 73%, 35%);
        color: hsl(0,0%,100%);
        // width: 120px;

        // &>span {
        //     opacity: 1;
        //     display: inline;
        // }
    }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 425px){
        grid-template-columns: 1fr;
    }
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

export const InputField = styled.input`
    padding: 14px 16px;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    font-family: 'DM Sans';
    background-color: #282828;
    border-radius: 5px;
    border: 1px solid #393939;
    outline: none;
    width: 100%;
    :focus{
        outline: 1px solid #ffffff5a;
    }
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

type ButtonProps = {
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}
export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #fff;
    font-family: 'DM Sans';
    cursor: pointer;
    ${({ variant }) =>
        variant === "primary" &&
        css`
            background-color: #006ed3;
        `}
    ${({ variant }) =>
        variant === "secondary" &&
        css`
            background-color: #3d3d3d;
        `}
    ${({ variant }) =>
        variant === "success" &&
        css`
            background-color: #198754;
        `}
    ${({ variant }) =>
        variant === "danger" &&
        css`
            background-color: #DC3545;
        `}
    ${({ variant }) =>
        variant === "warning" &&
        css`
            background-color: #FFC107;
        `}
    ${({ variant }) =>
        variant === "info" &&
        css`
            background-color: #0DCAF0;
        `}
`;