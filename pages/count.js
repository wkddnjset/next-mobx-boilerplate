import React from 'react'

import theme from 'layout/theme'

import Container from 'components/Container'
import Button from 'components/Button'
import * as Text from 'components/Text'

// stores
import { observer } from 'mobx-react-lite';
import useStores from 'utils/Mobx'

const CountPage = observer(() => {
  const { Count } = useStores();

  return (
    <Container>
      <Text.FontSize24>{Count.number}</Text.FontSize24>
      <div>
        <Button onClick={Count.increase}>+</Button>
        <Button onClick={Count.decrease}>-</Button>
      </div>
    </Container>
  )
})

export default CountPage


