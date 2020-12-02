import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://curso-platzi-react-avanzado-7zfbipf6k.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
<<<<<<< HEAD
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
=======
      const newShowFixed = windows.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
>>>>>>> e4854bb0a2fafe281280ce72365eef9353f74846
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  }

  return (
    <>
      {renderList()}
<<<<<<< HEAD
      {showFixed && renderList(true)}
=======
      { showFixed && renderList(true)}
>>>>>>> e4854bb0a2fafe281280ce72365eef9353f74846
    </>
  )
}
