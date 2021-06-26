import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    showChildren,
    children,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
    >
      {showChildren ? children : null}
    </button>
  )
}

Button.propTypes = {
  showChildren: PropTypes.bool,
  children: PropTypes.node
}

export default Button
