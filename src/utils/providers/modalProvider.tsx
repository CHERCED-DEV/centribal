import { useState, useContext, createContext } from 'react';
import { ContextProviderProps } from '@/pages/api/customCms/db/utils.interface';

const PortalContext = createContext<{
    headerSimple: boolean;
    setHeaderSimple: React.Dispatch<React.SetStateAction<boolean>>;
    modalSwitch: boolean;
    setModalSwitch: React.Dispatch<React.SetStateAction<boolean>>;
    
}>({
    headerSimple: true,
    setHeaderSimple: () => { },
    modalSwitch: false,
    setModalSwitch: () => { },
});

export const PortalContextProvider = ({ children }: ContextProviderProps) => {
    const [headerSimple, setHeaderSimple] = useState<boolean>(true);
    const [modalSwitch, setModalSwitch] = useState<boolean>(false);

    

    return (
        <PortalContext.Provider
            value={{
                setHeaderSimple,
                headerSimple,
                modalSwitch,
                setModalSwitch,
            }}
        >
            {children}
        </PortalContext.Provider>
    )
}

export function usePortalProvider() {
    const context = useContext(PortalContext)
    return context
}