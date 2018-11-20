import React from 'react'
import styled from 'styled-components'
import { Container, Section, Avatar, Text } from '@/ui'
import { prop } from '@/ui/utils'

const Nickname = styled.h1<{
  size?: string
}>`
  margin: 0;
  padding: 0;

  font-size: ${prop('size')};
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0.8;
`

export const PersonalInfo: React.FunctionComponent = () => (
  <Container padding="20px" className="fadeIn">
    <Section height="10vw" />
    <Section height="225px">
      <Avatar
        src="https://avatars1.githubusercontent.com/u/36516824?s=460&v=4"
        alt="Avatar from GitHub"
        width="150px"
        height="150px"
      />
    </Section>
    <Section height="50px">
      <Nickname size="21px">stackdumper</Nickname>
    </Section>
    <Section height="30px">
      <Text fontSize="12px" fontWeight="light" color="secondary">
        Web / Mobile / DevOps
      </Text>
    </Section>
    <Section height="10px">
      <Text fontSize="12px" fontWeight="light" color="tertiary">
        Ukraine
      </Text>
    </Section>
  </Container>
)
