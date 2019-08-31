import Repository from '@/repository/Repository'

const resource = 'game-history'

export default {
    createGame(data) {
        return Repository.post(`${resource}`, data)
    },
    updateGame(data) {
        return Repository.put(`${resource}`, data)
    }
}