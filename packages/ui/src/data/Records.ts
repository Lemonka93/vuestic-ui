import { times } from 'lodash-es'

export const getInitialRecords = () => times(20, () => ({ text: 'record', id: Math.random() }))

export const getNewRecords = () => times(10, () => ({ text: 'new record', id: Math.random() }))
