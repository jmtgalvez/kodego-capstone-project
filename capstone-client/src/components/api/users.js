import axios from './axios';

export const getAllUsers = async() => {
    return await axios.get(`/api/users`);
}

export const searchUsers = async search_query => {
    return await axios.get(`/api/users/search/${search_query}`);
}

export const getUserByUserId = async user_id => {
    return await axios.get(`/api/users/${user_id}`);
}

export const editUser = async user => {
    return await axios.put(`/api/users/${user.user_id}`, user);
}

export const deleteUser = async user_id => {
    return await axios.delete(`/api/users/${user_id}`);
}