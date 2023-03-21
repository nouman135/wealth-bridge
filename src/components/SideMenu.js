import React, { useState, useEffect, useRef } from 'react'
export default function SideMenu() {
  const [isSideMenu, setSideMenu] = useState(false)
  const open = (isSideMenu) => {
    return setSideMenu(!isSideMenu)
  }
  const domeNode = useRef()
  const updateState = (event) => {
    if (domeNode.current.contains(event.target)) {
      return
    }
    setSideMenu(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', updateState)
    return () => {
      document.removeEventListener('mousedown', updateState)
    }
  }, [])
  return (
    <>
      <header className="topBar">
        <div className="menuBar">
          <span
            ref={domeNode}
            className="navIcon"
            onClick={() => {
              open(isSideMenu)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isSideMenu ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </span>
        </div>
        <div className="sideMenu" style={{ left: isSideMenu ? '0' : '-265px' }}>
          <a href="#">Profile</a>
          <a href="#">Investment ideas</a>
          <a href="#">Investment Products</a>
          <a href="#">Clients</a>
        </div>
      </header>
      <h1> Wealth Bridge Investments</h1>
      <p> Make sure to check the new invesments ideas that have been listed today by the ideas creator</p>
      <h2> Clients section</h2>
      <p> The clients need to receive their investents ideas on time rember to send. There might be new clients dont forget to check</p>
    </>
  )
}

