const API_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en el inicio de sesión: ${errorData.message || 'Error desconocido'}`);
        }

        const result = await response.json();
        localStorage.setItem('token', result.token); // Almacena el token
        return result; // Devuelve el resultado del login
    } catch (error) {
        console.error('Error en loginUser:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en el registro: ${errorData.message || 'Error desconocido'}`);
        }

        return await response.json(); // Devuelve el resultado del registro
    } catch (error) {
        console.error('Error en registerUser:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};

export const logoutUser = () => {
    // Elimina el token del localStorage
    localStorage.removeItem('token');
};
