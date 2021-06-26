import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    label,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
