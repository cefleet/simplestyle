"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WYSIWYG = exports.TextInput = exports.Text = exports.MainBox = exports.Label = exports.HeaderItem = exports.FlexBox = exports.FilteredDropdown = exports.MultipleDropdown = exports.Dropdown = exports.Button = exports.Box = exports.applyProps = exports.ApplyDefaultStyle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ckeditor5React = _interopRequireDefault(require("@ckeditor/ckeditor5-react"));

var _ckeditor5BuildClassic = _interopRequireDefault(require("@ckeditor/ckeditor5-build-classic"));

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display:", ";\n    ", "\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    ", "\n    ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor:pointer;\n    display:inline-block;\n    :hover{\n        ", "\n    }\n    ", "\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaults = {};

try {
  defaults = require("../../src/simplestyleTheme");
  console.log(defaults);
} catch (e) {}

var theme = defaults["default"] || _defaultTheme["default"];
var unPassableProps = ['children', 'forwardedRef', 'theme', 'forwardedComponent', 'onClick'];

var toHyphen = function toHyphen(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
};

var ApplyDefaultStyle = function ApplyDefaultStyle(itemName) {
  return theme.hasOwnProperty(itemName) ? Object.keys(theme[itemName]).map(function (prop) {
    return "".concat(toHyphen(prop), ":").concat(theme[itemName][prop]);
  }).join(';') : "";
};

exports.ApplyDefaultStyle = ApplyDefaultStyle;

var applyProps = function applyProps(props) {
  return Object.keys(props).filter(function (p) {
    return unPassableProps.indexOf(p) === -1;
  }).map(function (p) {
    return "".concat(toHyphen(p), ":").concat(props[p]);
  }).join(';');
}; //This starts the next section


exports.applyProps = applyProps;

var Box = _styledComponents["default"].div(_templateObject(), ApplyDefaultStyle('Box'), function (props) {
  return applyProps(props);
});

exports.Box = Box;

var ButtonStyle = _styledComponents["default"].span(_templateObject2(), ApplyDefaultStyle('ButtonHover'), ApplyDefaultStyle('Button'), function (props) {
  return applyProps(props);
});

var Button = function Button(props) {
  return _react["default"].createElement(ButtonStyle, props, props.label);
};

exports.Button = Button;

var Select = _styledComponents["default"].select(_templateObject3(), ApplyDefaultStyle("Dropdown"), function (props) {
  return applyProps(props);
});

var SelectOption = _styledComponents["default"].option(_templateObject4(), ApplyDefaultStyle("DropdownOption"), function (props) {
  return applyProps(props);
});

var Dropdown = function Dropdown(props) {
  return _react["default"].createElement(Box, null, props.label && _react["default"].createElement(Label, {
    htmlFor: props.name,
    labelType: props.labelType
  }, props.label), _react["default"].createElement(Select, {
    name: props.name,
    id: props.name,
    value: props.value || 'empty',
    onChange: props.onChange
  }, props.noEmpty ? _react["default"].createElement(_react["default"].Fragment, null) : _react["default"].createElement(SelectOption, {
    disabled: true,
    value: 'empty'
  }, props.emptyText || 'Please Select From Below'), props.options && props.options.map(function (o, idx) {
    return _react["default"].createElement(SelectOption, {
      key: idx,
      value: o.id
    }, o.Name);
  })));
};

exports.Dropdown = Dropdown;

var MultipleDropdown = function MultipleDropdown(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var addItem = function addItem(evt) {
    setItems(_toConsumableArray(new Set([].concat(_toConsumableArray(items), [evt.target.value]))));
  };

  var removeItem = function removeItem(rI) {
    setItems(_toConsumableArray(items.filter(function (i) {
      return i !== rI;
    })));
  };

  var ps = {
    onChange: addItem,
    name: props.name,
    labelType: props.labelType,
    options: props.options,
    label: props.label
  };
  return _react["default"].createElement(Box, null, _react["default"].createElement(Box, null, items.map(function (i) {
    var name = i;
    var item = props.options.filter(function (o) {
      return o.id === i;
    })[0];

    if (item) {
      name = item.Name;
    }

    return _react["default"].createElement(Box, {
      key: i
    }, _react["default"].createElement(Button, {
      label: "x",
      onClick: function onClick() {
        return removeItem(i);
      }
    }), name);
  })), props.filtered ? _react["default"].createElement(FilteredDropdown, ps) : _react["default"].createElement(Dropdown, ps));
};

exports.MultipleDropdown = MultipleDropdown;

var FilteredDropdown = function FilteredDropdown(props) {
  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      filtered = _useState6[0],
      setFiltered = _useState6[1];

  var doFilter = function doFilter(evt) {
    setFilter(evt.target.value);
  };

  (0, _react.useEffect)(function () {
    if (filter !== "") {
      setFiltered(props.options.filter(function (o) {
        return o.Name.toLowerCase().includes(filter.toLowerCase());
      }));
    } else {
      setFiltered(null);
    }
  }, [filter]);
  return _react["default"].createElement(Box, null, props.label && _react["default"].createElement(Label, {
    htmlFor: props.name,
    labelType: props.labelType
  }, props.label), _react["default"].createElement(TextInput, {
    id: "filterFor".concat(props.name),
    onChange: doFilter,
    placeholder: props.placeholder || "Filter ".concat(props.name)
  }), _react["default"].createElement(Dropdown, {
    name: props.name,
    onChange: props.onChange,
    value: props.value,
    options: filtered || props.options
  }));
};

exports.FilteredDropdown = FilteredDropdown;

var FlexBox = _styledComponents["default"].div(_templateObject5(), ApplyDefaultStyle('FlexBox'), function (props) {
  return applyProps(props);
});

exports.FlexBox = FlexBox;

var HeaderItem = _styledComponents["default"].h1(_templateObject6(), ApplyDefaultStyle("HeaderItem"), function (props) {
  return applyProps(props);
});

exports.HeaderItem = HeaderItem;

var Label = _styledComponents["default"].label(_templateObject7(), function (props) {
  return props.labelType ? props.labelType : "block";
}, ApplyDefaultStyle("Label"), function (props) {
  return applyProps(props);
});

exports.Label = Label;

var MainBox = _styledComponents["default"].div(_templateObject8(), ApplyDefaultStyle("MainBox"), function (props) {
  return props.layout === "mobile" ? ApplyDefaultStyle("MainBoxMobile") : ApplyDefaultStyle("MainBoxWebApp");
});

exports.MainBox = MainBox;

var Text = _styledComponents["default"].span(_templateObject9(), ApplyDefaultStyle("Text"), function (props) {
  return applyProps(props);
});

exports.Text = Text;

var TInput = _styledComponents["default"].input(_templateObject10(), ApplyDefaultStyle("TextInput"), function (props) {
  return applyProps(props);
});

var TextInput = function TextInput(props) {
  var _useState7 = (0, _react.useState)(props.value || ""),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var valueChanged = function valueChanged(evt) {
    setValue(evt.target.value);

    if (props.onChange) {
      props.onChange({
        target: {
          value: evt.target.value,
          name: evt.target.name
        }
      });
    }
  };

  return _react["default"].createElement(Box, null, props.label && _react["default"].createElement(Label, {
    htmlFor: props.name,
    labelType: props.labelType
  }, props.label), _react["default"].createElement(TInput, {
    onChange: valueChanged,
    name: props.name,
    id: props.name,
    placeholder: props.placeholder || props.label,
    value: value
  }));
};

exports.TextInput = TextInput;

var WYSIWYG = function WYSIWYG(props) {
  return _react["default"].createElement(Box, null, _react["default"].createElement(_ckeditor5React["default"], {
    editor: _ckeditor5BuildClassic["default"],
    data: props.value,
    onInit: function onInit(editor) {},
    onChange: function onChange(event, editor) {
      var data = editor.getData(); //This makes it look like a normal html input event

      props.onChange({
        target: {
          name: props.name,
          value: data
        }
      });
    },
    config: {
      toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'link']
    }
  }));
};

exports.WYSIWYG = WYSIWYG;
//# sourceMappingURL=simplestyle.bbl.js.map
