import React from 'react'
import useWindowResize from '.';

export default function UseWindowResizeTest() {
  const windowSize =  useWindowResize();
  return (
    <div>
        <h1>Use window resize Hook</h1>
        <p>
            width : {windowSize.width}
        </p>
        <p>
            height : {windowSize.height}
        </p>
    </div>
  )
}
