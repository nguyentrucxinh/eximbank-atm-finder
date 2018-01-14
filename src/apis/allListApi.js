import city from '../data/City.json'
import distWard from '../data/DistWard.json'
import typeCard from '../data/TypeCard'
import typeCardE from '../data/TypeCardE'

const fakeDatabase = {
  City: city,
  DistWard: distWard,
  TypeCard: typeCard,
  TypeCardE: typeCardE
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchAllList = () =>
  delay(500).then(() => {
    return fakeDatabase
  })
