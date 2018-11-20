import React, { lazy, Suspense } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Spinner } from './components/spiner.component'

const HomeScreen = lazy(() => import('./screens/home.screen'))

export const App: React.FunctionComponent = () => (
  <Row>
    <Col xs />
    <Col xs={12} sm={10} md={8} lg={6}>
      <Suspense fallback={<Spinner />}>
        <HomeScreen />
      </Suspense>
    </Col>
    <Col xs />
  </Row>
)
