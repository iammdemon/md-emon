import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialContent } from '../data/content';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        const savedContent = localStorage.getItem('portfolioContent');
        return savedContent ? JSON.parse(savedContent) : initialContent;
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        return localStorage.getItem('isAdmin') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('portfolioContent', JSON.stringify(content));
    }, [content]);

    const updateContent = (section, newData) => {
        setContent(prev => ({
            ...prev,
            [section]: newData
        }));
    };

    const login = (password) => {
        if (password === 'admin123') { // Simple mock auth
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
    };

    return (
        <DataContext.Provider value={{ content, updateContent, isAdmin, login, logout }}>
            {children}
        </DataContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
