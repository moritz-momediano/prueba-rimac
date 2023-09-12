"use client";

import React, { useContext, createContext, useState } from 'react';

export interface DataProps {
    documentType?: string,
    documentNumber?: number,
    phoneNumber?: number,
    name?: string,
    lastName?: string,
    birthday?: string,
    plan?: string,
    price?: number
}
interface AppContextProps {
    data?: DataProps,
    setData?: (data: DataProps) => void;
}

export const AppContext = createContext<AppContextProps>({});

export default function AppContextProvider({ children }: { children: React.ReactNode }) {

    const [data, setData] = useState<DataProps>({})

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider >
    )
}

export function useAppContext() {
    return useContext(AppContext);
}