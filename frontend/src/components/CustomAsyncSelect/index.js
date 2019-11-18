import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';
import makeAnimated from 'react-select/animated';

import { Field } from './styles';

const animatedComponents = makeAnimated();

export default function CustomAsyncSelect({
  name,
  loadOptions,
  optionID,
  optionName,
  placeholder,
  options,

  defaultValue,
}) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.select.state.value;

    return selectValue ? selectValue.id : '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]);

  return (
    <Field>
      <AsyncSelect
        name={fieldName}
        placeholder={placeholder}
        loadOptions={loadOptions}
        getOptionValue={optionID}
        getOptionLabel={optionName}
        classNamePrefix="react-select"
        options={options}
        defaultOptions
        defaultValue={defaultValue}
      />

      {error && <span>{error}</span>}
    </Field>
  );
}

CustomAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  loadOptions: PropTypes.func.isRequired,
  cacheOptions: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};

CustomAsyncSelect.defaultProps = {
  defaultValue: null,
  placeholder: '',
};
