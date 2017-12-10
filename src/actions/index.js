import { FETCH_ALL_LIST, FETCH_LOCATIONS } from '../constants/ActionTypes'
import { GET_ALL_LIST, GET_LOCATIONS } from '../constants/Api'
import axios from 'axios'
import { fetchAllList } from '../apis/allList'

const receiveAllList = allList => ({
    type: FETCH_ALL_LIST,
    payload: {
        distWard: allList.DistWard,
        typeCard: allList.TypeCard,
        typeCardE: allList.TypeCardE
    }
})

export const getAllList = () => dispatch => {

    fetchAllList().then(allList => {
        console.log('action')
        console.log(allList)
        dispatch(receiveAllList(allList))
    })

    // axios.get(GET_ALL_LIST)
    //     .then(response => response.json())
    //     .then(allList => {
    //         dispatch(receiveAllList(allList))
    //         console.log(allList)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
}

const receiveLocations = locations => ({
    type: FETCH_LOCATIONS,
    locations
})

export const getLocations = () => dispatch => {

    axios.get(GET_LOCATIONS)
        .then(response => response.json())
        .then(locations => {
            debugger;
            dispatch(receiveLocations(locations))
            console.log(locations)
        })
        .catch(error => {
            console.log(error)
        })
}