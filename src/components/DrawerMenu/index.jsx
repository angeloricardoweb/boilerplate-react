import React from 'react'

export function DrawerMenu({ children }) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
