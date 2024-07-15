import React from 'react'
import { Archived } from './Archived.jsx'
import { Activity } from './Activity.jsx'
import { Route, Routes } from 'react-router-dom'

export const Calls = () => {
  return (
    <Routes>
      <Route path="/archive" element={<Archived />} />
      <Route path="/" element={<Activity />} />
    </Routes>
  )
}
