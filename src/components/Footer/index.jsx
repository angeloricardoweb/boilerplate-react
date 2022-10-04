import React from 'react'
import { useFetch } from '../../services/useFetch'
import { useFetchByContrato } from '../../services/useFetchByContrato'

export function Footer() {
  // const { data } = useFetch('/front-end') //oficial

  const { data } = useFetchByContrato('/front-end') //contrato

  return (
    <footer className="text-center">
      <div>
        {data &&
          React.Children.toArray(
            data.results.map((item) => <p>{item.name}</p>)
          )}
      </div>
    </footer>
  )
}
