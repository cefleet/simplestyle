export const MainBox = styled.div`
    ${ApplyDefaultStyle("MainBox")}
    ${props => props.layout === "mobile" ? ApplyDefaultStyle("MainBoxMobile") : ApplyDefaultStyle("MainBoxWebApp")}
`;
