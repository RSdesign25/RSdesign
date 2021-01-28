import firebase from '~/plugins/firebase'
import {firestoreAction} from 'vuexfire'

const db = firebase.firestore()
const worksRef = db.collection('works')

export const state = () => ({
  works:[]
})

export const actions = {
  init: firestoreAction(({bindFirestoreRef}) => {
    bindFirestoreRef('works',worksRef)
  })
}