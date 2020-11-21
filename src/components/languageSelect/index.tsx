import React from 'react'
import {useTranslation} from "react-i18next";

export const LanguageSelect: React.FC = React.memo(() => {
    const {t, i18n} = useTranslation();
    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div>
            <div onClick={() => changeLang('ru')}>RU</div>
            <div onClick={() => changeLang('en')}>EN</div>
        </div>
    )
});
