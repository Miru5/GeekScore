
// TODO:remove db after refactor with node js
import db from "@/db";
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        games: [],
    },
    mutations: {
        SET_LOADED_GAMES(state, payload) {
            state.games = payload
        },
        CREATE_GAME(state, payload) {
            state.games.push(payload)
        },
        UPDATE_GAME(state, payload) {
            const game = state.games.find(game => game.id === payload.id)
            state.games = state.games.filter(game => game.id !== payload.id)
            state.games.push({ ...game, ...payload })
        },
        DELETE_GAME(state, payload) {
            state.games = state.games.filter(game => game.id !== payload)
        }
    },
    actions: {
        loadGames({ commit, rootState }) {
            commit('SET_LOADING', true, { root: true })
            const user = rootState.user.user.id
            if (user) {
                axios.get('http://localhost:3000/games')
                    // db.database().ref('users').child(user).child('games').once('value')
                    .then((res) => {
                        const games = res.data
                        // const games = []
                        // const obj = data.val()
                        // for (let key in obj) {
                        //     games.push({
                        //         id: key,
                        //         name: obj[key].name,
                        //         coop: obj[key].coop,
                        //         imageUrl: obj[key].imageUrl,
                        //         bggURL: obj[key].bggURL,
                        //         melodiceURL: obj[key].melodiceURL,
                        //         rulesURL: obj[key].rulesURL,
                        //         teams: obj[key].teams,
                        //         favorite: obj[key].favorite ? obj[key].favorite : false,
                        //     })
                        // }
                        commit('SET_LOADED_GAMES', games)
                        commit('SET_LOADING', false, { root: true })
                    })
                    .catch((e) => {
                        commit('SET_LOADING', false, { root: true })
                        console.log(e)
                    })
            }
        },
        createGame({ commit }, payload) {
            commit('SET_LOADING', true, { root: true })
            const game = {
                ...payload,
                favorite: false
            }
            //  TODO: static image if not specified another
            game.imageUrl = 'https://aptgadget.com/wp-content/uploads/2019/04/Board-game-carrying-bags.jpg'
            axios.post('http://localhost:3000/games', game)
                .then((res) => {
                    const _id = res.data._id
                    commit("CREATE_GAME", { ...game, _id })
                    commit('SET_LOADING', false, { root: true })
                })
                .catch((e) => {
                    commit('SET_LOADING', false, { root: true })
                    console.log(e)
                })
        },
        updateGame({ commit, rootState }, payload) {
            commit('SET_LOADING', true, { root: true })
            const user = rootState.user.user.id
            // eslint-disable-next-line no-unused-vars
            const getGame = ({ id, ...rest }) => rest
            db.database().ref('users').child(user).child('games').child(payload.id).update(getGame(payload))
                .then(() => {
                    commit("UPDATE_GAME", payload)
                    commit('SET_LOADING', false, { root: true })
                })
                .catch((e) => {
                    commit('SET_LOADING', false, { root: true })
                    console.log(e)
                })
        },
        deleteGame({ commit }, payload) {
            commit('SET_LOADING', true, { root: true })
            axios.delete(`http://localhost:3000/games/${payload._id}`)
                .then(() => {
                    commit("DELETE_GAME", payload.id)
                    commit('SET_LOADING', false, { root: true })
                })
                .catch((e) => {
                    commit('SET_LOADING', false, { root: true })
                    console.log(e)
                })
        }
    },
    getters: {
        games(state) {
            return state.games
        },
        game(state) {
            return (gameId) => {
                return state.games.find((game) => {
                    return game._id === gameId
                })
            }
        },
    }
}