import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/UI/select';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ur', name: 'اردو' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'or', name: 'ଓଡ଼ିଆ' },
    { code: 'as', name: 'অসমীয়া' },
    { code: 'si', name: 'සිංහල' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'ar', name: 'العربية' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'fa', name: 'فارسی' },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (value) => {
        i18n.changeLanguage(value);
        localStorage.setItem('i18nextLng', value);
    };

    return (
        <div className="language-selector">
            <Select onValueChange={handleLanguageChange} defaultValue={i18n.language || 'en'}>
                <SelectTrigger className="w-[140px] bg-background">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSelector;
