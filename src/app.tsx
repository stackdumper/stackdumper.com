import React, { Suspense } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Spinner } from './components/spiner.component'

// @ts-ignore
import loadable from '@loadable/component'

const HomeScreen = loadable(() => import('./screens/home.screen'))

export const App: React.FunctionComponent = () => (
  <Row style={{ minHeight: '90vh' }}>
    <Col xs />
    <Col xs={12} sm={10} md={8} lg={6}>
      <Suspense fallback={<Spinner timeout={0} />}>
        <HomeScreen />
      </Suspense>
    </Col>
    <Col xs />
  </Row>
)
