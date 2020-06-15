import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import UserIsLogged from '../Common/UserIsLogged'
import Header from './Header'
import Notes from './Notes'
export default function index() {
  return (
    <div>
      <UserIsLogged />
      <Header />
      HOME
      <Notes />
    </div>
  )
}
