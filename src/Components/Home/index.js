import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import UserIsLogged from '../Common/UserIsLogged'

export default function index() {
  return (
    <div>
      <UserIsLogged />
      HOME
    </div>
  )
}
