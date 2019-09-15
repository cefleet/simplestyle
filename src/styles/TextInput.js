const TInput = styled.input`
    ${ApplyDefaultStyle("TextInput")}
    ${props => applyProps(props)}
`;

export const TextInput = (props) => {
    
    const [value, setValue] = useState(props.value || "");
    const valueChanged = (evt) => {
        setValue(evt.target.value);
        if (props.onChange) {
            props.onChange({ target: { value: evt.target.value, name: evt.target.name } })
        }
    }
    return (
        <Box>
            {props.label && <Label htmlFor={props.name} labelType={props.labelType}>{props.label}</Label>}
            <TInput onChange={valueChanged} name={props.name} id={props.name} placeholder={props.placeholder || props.label} value={value} />
        </Box>
    );
};
