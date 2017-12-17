

import location from '../data/Location'

const fakeDatabase = location

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms))

export const fetchLocations = (filter) =>
    delay(500).then(() => {
        console.log('Filter params')
        console.log(filter)
        return fakeDatabase.filter(n =>
            n.cID == filter.ctyID
            && n.dID == filter.dID
            && n.tID == filter.tID
        )
    })