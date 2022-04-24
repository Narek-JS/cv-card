import { createContext, useEffect, useState } from "react";


const CheckResumeRouteContext = createContext(null);


const CheckResumeRouteContextProvider = ( { children } ) => {
    const [ value, setValue ] = useState(true);

    return (
        <CheckResumeRouteContext.Provider value={{ checkResumeRoute:value, setValue }}>
            { children }
        </CheckResumeRouteContext.Provider>  
    );
};

export { CheckResumeRouteContextProvider, CheckResumeRouteContext };