const ButtonStyle = styled.span`
    cursor:pointer;
    display:inline-block;
    :hover{
        ${ApplyDefaultStyle('ButtonHover')}
    }
    ${ApplyDefaultStyle('Button')}
    ${props => applyProps(props)}
`;

export const Button = (props) => {
    return <ButtonStyle {...props}>{props.label}</ButtonStyle>
};
