import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyle, GlobalStyles } from './GlobalStyle'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
  </div>
)