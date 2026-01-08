const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'public', 'locales');
const sourceFile = path.join(localesDir, 'en', 'translation.json');
const content = fs.readFileSync(sourceFile, 'utf8');

const languages = [
    'es', 'fr', 'de', 'hi',
    'ur', 'bn', 'pa', 'mr', 'gu',
    'ta', 'te', 'kn', 'ml', 'or', 'as', 'si', 'ne', 'ar', 'pt', 'ru', 'fa'
];

languages.forEach(lang => {
    const langDir = path.join(localesDir, lang);
    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
    }
    const destFile = path.join(langDir, 'translation.json');

    let targetContent = {};
    if (fs.existsSync(destFile)) {
        try {
            targetContent = JSON.parse(fs.readFileSync(destFile, 'utf8'));
        } catch (e) {
            console.error(`Error parsing ${lang} file, overwriting:`, e);
            targetContent = {};
        }
    }

    const sourceContent = JSON.parse(content);
    let updated = false;

    Object.keys(sourceContent).forEach(key => {
        if (!targetContent.hasOwnProperty(key)) {
            targetContent[key] = sourceContent[key]; // Fallback to English
            updated = true;
        }
    });

    if (updated || !fs.existsSync(destFile)) {
        fs.writeFileSync(destFile, JSON.stringify(targetContent, null, 2));
        console.log(`Updated ${lang}`);
    } else {
        console.log(`No changes for ${lang}`);
    }
});

console.log('Done populating all locales.');
