import React from 'react'
import { useTimeout } from 'react-use'
import { Loader } from 'react-feather'

export const Spinner: React.FunctionComponent<{
  timeout?: number
}> = ({ timeout = 500 }) => {
  const show = useTimeout(timeout)

  return show ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Loader className="spin" size={20} color="#353535" />
    </div>
  ) : null
}
