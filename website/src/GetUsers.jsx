import React, { useEffect, useState } from 'react';

function GetUsers() {
    // Estado para almacenar los datos de los usuarios
    const [users, setUsers] = useState([]);

    // useEffect para hacer la solicitud GET cuando se monta el componente
    useEffect(() => {
        // Hacer la solicitud GET al backend
        fetch('https://spacemarketing.abogadoaescobarm.com/getUsers.php')
            .then((response) => response.json()) // Convertir la respuesta a JSON
            .then((data) => {
                setUsers(data); // Almacenar los datos en el estado
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
            });
    }, []); // El array vacío significa que esto se ejecuta solo al montar el componente

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Lista de Usuarios</h1>
            <ul style={styles.userList}>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} style={styles.userItem}>
                            <div style={styles.userInfo}>
                                <span style={styles.userName}>{user.nombre} {user.apellido}</span>
                                <span style={styles.userDetails}>Teléfono: {user.telefono}</span>
                                <span style={styles.userDetails}>Correo: {user.correo}</span>
                                <span style={styles.userDetails}>Fecha: {user.fechaRegistro}</span>
                            </div>
                        </li>
                    ))
                ) : (
                    <li style={styles.noUsers}>No se encontraron usuarios</li>
                )}
            </ul>
        </div>
    );
}

// Estilos en línea
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
    },
    title: {
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333',
        fontWeight: 'bold',
    },
    userList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        maxWidth: '600px',
    },
    userItem: {
        backgroundColor: '#fff',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    userName: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '5px',
    },
    userDetails: {
        fontSize: '0.9em',
        color: '#555',
        marginBottom: '3px',
    },
    noUsers: {
        fontSize: '1.2em',
        color: '#888',
        textAlign: 'center',
    },
};

export default GetUsers;
