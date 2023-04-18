import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const useSelectCurrencies = (label, options) => {
  const [state, setState] = useState('')
  const SelectCurrencies = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value=''>Seleccione</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectCurrencies]
}
