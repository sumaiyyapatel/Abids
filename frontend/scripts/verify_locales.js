const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'public', 'locales');
const enFile = path.join(localesDir, 'en', 'translation.json');

if (!fs.existsSync(enFile)) {
    console.error('Error: English source file not found!');
    process.exit(1);
}

const enContent = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const enKeys = Object.keys(enContent).sort();

const languages = fs.readdirSync(localesDir).filter(f => fs.statSync(path.join(localesDir, f)).isDirectory() && f !== 'en');

let allGood = true;

languages.forEach(lang => {
    const langFile = path.join(localesDir, lang, 'translation.json');
    if (!fs.existsSync(langFile)) {
        console.error(`[MISSING] ${lang} has no translation.json`);
        allGood = false;
        return;
    }

    let langContent;
    try {
        langContent = JSON.parse(fs.readFileSync(langFile, 'utf8'));
    } catch (e) {
        console.error(`[ERROR] ${lang} has invalid JSON`);
        allGood = false;
        return;
    }

    const langKeys = Object.keys(langContent).sort();

    // Check for missing keys
    const missingKeys = enKeys.filter(k => !langContent.hasOwnProperty(k));

    if (missingKeys.length > 0) {
        console.log(`\n[${lang.toUpperCase()}] Missing ${missingKeys.length} keys:`);
        // Show first 5 missing keys
        missingKeys.slice(0, 5).forEach(k => console.log(`  - "${k}"`));
        if (missingKeys.length > 5) console.log(`  ... and ${missingKeys.length - 5} more.`);
        allGood = false;
    }
});

if (allGood) {
    console.log('\nAll locales are in sync with English source.');
} else {
    console.log('\nSome locales are missing keys.');
}
