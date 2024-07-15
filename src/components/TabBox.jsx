import React from 'react'
import { NavLink } from 'react-router-dom'

const TABS = [
  { id: 'activity', url: '/', label: 'Activity' },
  {
    id: 'archive',
    url: '/archive',
    label: 'Archive',
  },
]

export const TabBox = () => {
  return (
    <div className="tab-box">
      {TABS.map(({ id, url, label }) => (
        <NavLink to={url} className="nav-link" key={id}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}
