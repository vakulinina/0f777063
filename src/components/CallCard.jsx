import React from 'react'
import incomingCall from '../images/incoming-call.svg'
import outcomingCall from '../images/outcoming-call.svg'
import { formatDateTime } from '../helpers'
import { PHONE_NUMBERS } from '../constants'

const ICONS = {
  inbound: incomingCall,
  outbound: outcomingCall,
}

export const CallCard = ({
  from,
  to,
  direction,
  created_at,
  onClick,
  call_type,
}) => {
  const isInbound = direction === 'inbound'
  const toNum = PHONE_NUMBERS[to] || to
  const fromNum = PHONE_NUMBERS[from] || from

  const isToday = React.useMemo(
    () => new Date().toDateString() === new Date(created_at).toDateString(),
    [created_at]
  )

  const [date, time] = React.useMemo(
    () => formatDateTime(created_at),
    [created_at]
  )

  return (
    <div className="call-card" onClick={onClick}>
      <div
        className="icon-container"
        data-type={isInbound ? call_type : direction}
      >
        <img width={20} src={ICONS[direction]}></img>
      </div>
      <div className="call-info">
        <p className="call-number">{isInbound ? fromNum : toNum}</p>
        <p className="call-type">{isInbound ? call_type : direction}</p>
      </div>
      <div className="call-card-date">
        <span>{isToday ? time : date}</span>
      </div>
    </div>
  )
}
