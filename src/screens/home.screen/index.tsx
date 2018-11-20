import React from 'react'
import useTitle from 'react-use/lib/useTitle'

import { PersonalInfo } from './views/personal-info.view'

const HomeScreen: React.FunctionComponent = () => {
  useTitle('stackdumper - Profile')

  return (
    <div>
      <PersonalInfo />
    </div>
  )
}

export default HomeScreen
