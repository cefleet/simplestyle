import React, { useState, useEffect } from "react";

import styled from "styled-components";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import defaultTheme from "./defaultTheme";

let defaults = {};
     
try {
    defaults = require("../../src/simplestyleTheme");
    console.log(defaults);
} catch (e) {}
 

let theme = defaults.default || defaultTheme;

const unPassableProps = ['children', 'forwardedRef', 'theme', 'forwardedComponent', 'onClick'];

const toHyphen = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

export const ApplyDefaultStyle = (itemName) => {
    return theme.hasOwnProperty(itemName) ? Object.keys(theme[itemName]).map(prop => `${toHyphen(prop)}:${theme[itemName][prop]}`).join(';') : ""
};

export const applyProps = (props) => {
    return Object.keys(props).filter(p => unPassableProps.indexOf(p) === -1).map(p => `${toHyphen(p)}:${props[p]}`).join(';')
};

//This starts the next section
export const Box = styled.div`
    ${ApplyDefaultStyle('Box')}
    ${props => applyProps(props)}
`;
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
export const FlexBox = styled.div`
    display:flex;
    ${ApplyDefaultStyle('FlexBox')}
    ${props => applyProps(props)}
`;export const HeaderItem = styled.h1`
    ${ApplyDefaultStyle("HeaderItem")}
    ${props => applyProps(props)}
`;
export const Label = styled.label`
    display:${props => props.labelType ? props.labelType : "block"};
    ${ApplyDefaultStyle("Label")}
    ${props => applyProps(props)}
`;
export const MainBox = styled.div`
    ${ApplyDefaultStyle("MainBox")}
    ${props => props.layout === "mobile" ? ApplyDefaultStyle("MainBoxMobile") : ApplyDefaultStyle("MainBoxWebApp")}
`;
export const Text = styled.span`
    ${ApplyDefaultStyle("Text")}
    ${props => applyProps(props)}
`;
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
export const WYSIWYG = (props) => {
    return (
        <Box>
            <CKEditor
                editor={ClassicEditor}
                data={props.value}
                onInit={
                    editor => { }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    //This makes it look like a normal html input event
                    props.onChange({ target: { name: props.name, value: data } });
                }}

                config={{
                    toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'link']
                }}
            />
        </Box>
    )
};

