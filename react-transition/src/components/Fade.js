import Transition from 'react-transition-group/Transition'
import React from 'react'

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0.5
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={300}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
)

export default Fade
