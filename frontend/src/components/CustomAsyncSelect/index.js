import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';

import { Field } from './styles';

export default function CustomAsyncSelect({
  name,
  loadOptions,
  cacheOptions,
  defaultValue,
  placeholder,
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
        aria-label={fieldName}
        placeholder={placeholder}
        loadOptions={loadOptions}
        cacheOptions={cacheOptions}
        defaultValue={defaultValue}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.name}
        classNamePrefix="react-select"
      />

      {error && <span>{error}</span>}
    </Field>
  );
}

CustomAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  loadOptions: PropTypes.func.isRequired,
  cacheOptions: PropTypes.bool.isRequired,
  defaultValue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  placeholder: PropTypes.string,
};

CustomAsyncSelect.defaultProps = {
  defaultValue: null,
  placeholder: '',
};
