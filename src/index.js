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
