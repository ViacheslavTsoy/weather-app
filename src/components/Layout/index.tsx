import React from 'react'
import {LanguageSelect} from "../languageSelect";
import {NavLink} from "react-router-dom";
import {Box} from "../basic/Box";

export const Layout: React.FC = React.memo(({children}) => {
    return(
        <div>
            <LanguageSelect />
            {children}
        </div>
    )
});
