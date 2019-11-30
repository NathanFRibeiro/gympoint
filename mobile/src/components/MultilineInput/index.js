import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TInput } from './styles';

Icon.loadFont();

function MultilineInput({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TInput
        {...rest}
        ref={ref}
        style={{ textAlignVertical: 'top' }}
        multiline
      />
    </Container>
  );
}

MultilineInput.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MultilineInput.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(MultilineInput);
