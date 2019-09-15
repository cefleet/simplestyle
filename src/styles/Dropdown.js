const Select = styled.select`
    ${ApplyDefaultStyle("Dropdown")}
    ${props => applyProps(props)}
`;

const SelectOption = styled.option`
    ${ApplyDefaultStyle("DropdownOption")}
    ${props => applyProps(props)}
`;

export const Dropdown = (props) => {
    return (
        <Box>
            {props.label && <Label htmlFor={props.name} labelType={props.labelType}>{props.label}</Label>}
            <Select name={props.name} id={props.name} value={props.value || 'empty'} onChange={props.onChange}>
                {props.noEmpty ? <></>: <SelectOption disabled value={'empty'} >{props.emptyText || 'Please Select From Below'}</SelectOption>}
                {props.options &&
                    props.options.map((o, idx) => <SelectOption key={idx} value={o.id}>{o.Name}</SelectOption>)
                }
            </Select>
        </Box>
    )
};

export const MultipleDropdown = (props) => {

    const [items,setItems] = useState([]);

    const addItem = (evt) =>{
        setItems([...new Set([...items,evt.target.value])]);
    }

    const removeItem = (rI) =>{
        setItems([...items.filter(i=>i !== rI)]);
    }

    let ps= {
        onChange:addItem,
        name:props.name,
        labelType:props.labelType,
        options:props.options,
        label:props.label
    }

    return (
        <Box>
            <Box>
                {items.map(i=>{
                    let name = i;
                    let item = props.options.filter(o=>o.id === i)[0];
                    if(item){
                        name = item.Name;                        
                    }
                    return <Box key={i}><Button label="x" onClick={()=>removeItem(i)} />{name}</Box>
                })
                }
            </Box>
            {props.filtered ? 
                <FilteredDropdown {...ps} /> : 
                <Dropdown {...ps} />}
        </Box>
    )
};

export const FilteredDropdown = (props) => {
    const [filter, setFilter] = useState("");
    const [filtered, setFiltered] = useState(null);

    const doFilter = (evt) => {
        setFilter(evt.target.value);
    }

    useEffect(() => {
        if (filter !== "") {
            setFiltered(props.options.filter(o => o.Name.toLowerCase().includes(filter.toLowerCase())))
        } else {
            setFiltered(null);
        }
    }, [filter]);


    return (
        <Box>
            {props.label && <Label htmlFor={props.name} labelType={props.labelType}>{props.label}</Label>}
            <TextInput id={`filterFor${props.name}`} onChange={doFilter} placeholder={ props.placeholder || `Filter ${props.name}`} />
            <Dropdown name={props.name} onChange={props.onChange} value={props.value} options={filtered || props.options} />
        </Box>
    )

};
