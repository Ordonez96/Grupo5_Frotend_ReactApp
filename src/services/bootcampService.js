import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL; // Asegúrate de que esta URL sea correcta

export const getBootcamps = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No hay token de autorización disponible.');
    }

    const response = await axios.get(`${apiBaseUrl}/all`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const createBootcamp = async (bootcamp) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No hay token de autorización disponible.');
    }

    try {
        const response = await axios.post(`${apiBaseUrl}/create`, bootcamp, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating bootcamp:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const updateBootcamp = async (id, bootcamp) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No hay token de autorización disponible.');
    }

    try {
        const response = await axios.put(`${apiBaseUrl}/update/${id}`, bootcamp, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating bootcamp:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const deleteBootcamp = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No hay token de autorización disponible.');
    }

    try {
        await axios.delete(`${apiBaseUrl}/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error deleting bootcamp:', error.response ? error.response.data : error.message);
        throw error;
    }
};
