import React from 'react'
import useTimeout from 'react-use/lib/useTimeout'

import { Loader } from 'react-feather'

export const Spinner: React.FunctionComponent<{
  timeout?: number
}> = ({ timeout = 500 }) => {
  const show = useTimeout(timeout)

  return show ? <Loader className="spin" size={20} color="#353535" /> : null
}
