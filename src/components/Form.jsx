import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { currencies } from '../data/currencies'
import { useSelectCurrencies } from '../hooks/useSelectCurrencies'
import { Error } from './Error'
import axios from 'axios'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

export function Form({ setCurrencies }) {
  const [error, setError] = useState(false)
  const [ criptos, setCriptos ] = useState([])
  const [ currency, SelectCurrencies ] = useSelectCurrencies('Elige tu moneda', currencies)
  const [ criptocurrency, SelectCriptocurrency ] = useSelectCurrencies('Elige una Criptomoneda', criptos)

  useEffect(() => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    axios.get(url)
      .then(res => {
        const arrayCriptos = res.data.Data.map(cripto => {
          return {
            id: cripto.CoinInfo.Name,
            name: cripto.CoinInfo.FullName
          }
        })
        setCriptos(arrayCriptos)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if ([currency, criptocurrency].includes('')) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }
    setCurrencies({
      currency,
      criptocurrency
    })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios!</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrencies />
        <SelectCriptocurrency />
        <InputSubmit type='submit' value='cotizar' />
      </form>
    </>
  )
}
