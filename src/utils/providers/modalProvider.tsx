import { useState, useContext, createContext } from 'react';
import { ContextProviderProps } from '@/pages/api/customCms/db/utils.interface';

const PortalContext = createContext<{
    handleSubMenu: boolean;
    sethandleSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
    headerSimple: boolean;
    setHeaderSimple: React.Dispatch<React.SetStateAction<boolean>>;
    portalSwitch: boolean;
    setPortalSwitch: React.Dispatch<React.SetStateAction<boolean>>;

}>({
    handleSubMenu: false,
    sethandleSubMenu: () => { },
    headerSimple: true,
    setHeaderSimple: () => { },
    portalSwitch: false,
    setPortalSwitch: () => { },
});

export const PortalContextProvider = ({ children }: ContextProviderProps) => {
    const [headerSimple, setHeaderSimple] = useState<boolean>(true);
    const [handleSubMenu, sethandleSubMenu] = useState<boolean>(false);
    const [portalSwitch, setPortalSwitch] = useState<boolean>(false);



    return (
        <PortalContext.Provider
            value={{
                handleSubMenu,
                sethandleSubMenu,
                setHeaderSimple,
                headerSimple,
                portalSwitch,
                setPortalSwitch,
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