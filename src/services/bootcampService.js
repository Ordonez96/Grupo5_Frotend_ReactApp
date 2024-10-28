import axios from 'axios';

const apiBaseUrl = import.meta.env.REACT_APP_API_BASE_URL // Asegúrate de que esta URL sea correcta

export const getBootcamps = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiBaseUrl}/all`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const createBootcamp = async (bootcamp) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(`${apiBaseUrl}/create`, bootcamp, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating bootcamp', error);
        throw error;
    }
};

export const updateBootcamp = async (id, bootcamp) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(`${apiBaseUrl}/update/${id}`, bootcamp, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating bootcamp', error);
        throw error;
    }
};

export const deleteBootcamp = async (id) => {
    const token = localStorage.getItem('token');
    try {
        await axios.delete(`${apiBaseUrl}/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error deleting bootcamp', error);
        throw error;
    }
};
