export const Label = styled.label`
    display:${props => props.labelType ? props.labelType : "block"};
    ${ApplyDefaultStyle("Label")}
    ${props => applyProps(props)}
`;
