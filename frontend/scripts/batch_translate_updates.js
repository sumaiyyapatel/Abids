const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = [
    'es', 'fr', 'de', 'hi', 'ur', 'bn', 'pa', 'mr', 'gu',
    'ta', 'te', 'kn', 'ml', 'or', 'as', 'si', 'ne', 'ar', 'pt', 'ru', 'fa'
];

const translations = {
    "loading_products": {
        "es": "Cargando productos...",
        "fr": "Chargement des produits...",
        "de": "Produkte werden geladen...",
        "hi": "उत्पाद लोड हो रहे हैं...",
        "ur": "مصنوعات لوڈ ہو رہی ہیں...",
        "bn": "পণ্য লোড হচ্ছে...",
        "pa": "ਉਤਪਾਦ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
        "mr": "उत्पादने लोड होत आहेत...",
        "gu": "ઉત્પાદનો લોડ થઈ રહ્યા છે...",
        "ta": "தயாரிப்புகள் ஏற்றப்படுகின்றன...",
        "te": "ఉత్పత్తులు లోడ్ అవుతున్నాయి ...",
        "kn": "ಉತ್ಪನ್ನಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "ml": "ഉൽപ്പന്നങ്ങൾ ലോഡുചെയ്യുന്നു...",
        "or": "ઉત્પાદનો લોડ થઈ રહ્યા છે...", // Odia fallback/approx
        "as": "সামগ্ৰীসমূহ লোড কৰা হৈছে...",
        "si": "නිෂ්පාදන ලෝඩ් වෙමින් පවතී...",
        "ne": "उत्पादनहरू लोड हुँदैछ...",
        "ar": "جاري تحميل المنتجات...",
        "pt": "Carregando produtos...",
        "ru": "Загрузка продуктов...",
        "fa": "در حال بارگیری محصولات..."
    },
    "name_required": {
        "es": "Se requiere el nombre",
        "fr": "Le nom est requis",
        "de": "Name ist erforderlich",
        "hi": "नाम आवश्यक है",
        "ur": "نام درکار ہے",
        "bn": "নাম প্রয়োজন",
        "pa": "ਨਾਮ ਲੋੜੀਂਦਾ ਹੈ",
        "mr": "नाव आवश्यक आहे",
        "gu": "નામ જરૂરી છે",
        "ta": "பெயர் தேவை",
        "te": "పేరు అవసరం",
        "kn": "ಹೆಸರು ಅಗತ್ಯವಿದೆ",
        "ml": "പേര് ആവശ്യമാണ്",
        "or": "નામ જરૂરી છે",
        "as": "নামৰ প্ৰয়োজন",
        "si": "නම අත්‍යවශ්‍යයි",
        "ne": "नाम आवश्यक छ",
        "ar": "الاسم مطلوب",
        "pt": "Nome é obrigatório",
        "ru": "Имя обязательно",
        "fa": "نام الزامی است"
    },
    "phone_required": {
        "es": "Se requiere el número de teléfono",
        "fr": "Le numéro de téléphone est requis",
        "de": "Telefonnummer ist erforderlich",
        "hi": "फ़ोन नंबर आवश्यक है",
        "ur": "فون نمبر درکار ہے",
        "bn": "ফোন নম্বর প্রয়োজন",
        "pa": "ਫੋਨ ਨੰਬਰ ਲੋੜੀਂਦਾ ਹੈ",
        "mr": "फोन नंबर आवश्यक आहे",
        "gu": "ફોન નંબર જરૂરી છે",
        "ta": "தொலைபேசி எண் தேவை",
        "te": "ఫోన్ నంబర్ అవసరం",
        "kn": "ಫೋನ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ",
        "ml": "ഫോൺ നമ്പർ ആവശ്യമാണ്",
        "or": "ફોન નંબર જરૂરી છે",
        "as": "ফোন নম্বৰৰ প্ৰয়োজন",
        "si": "දුරකථන අංකය අත්‍යවශ්‍යයි",
        "ne": "फोन नम्बर आवश्यक छ",
        "ar": "رقم الهاتف مطلوب",
        "pt": "Número de telefone é obrigatório",
        "ru": "Номер телефона обязателен",
        "fa": "شماره تلفن الزامی است"
    },
    "valid_phone": {
        "es": "Por favor ingrese un número de teléfono válido de 10 dígitos",
        "fr": "Veuillez entrer un numéro de téléphone valide à 10 chiffres",
        "de": "Bitte geben Sie eine gültige 10-stellige Telefonnummer ein",
        "hi": "कृपया एक मान्य 10-अंकीय फ़ोन नंबर दर्ज करें",
        "ur": "براہ کرم ایک درست 10 ہندسوں کا فون نمبر درج کریں",
        "bn": "অনুগ্রহ করে একটি বৈধ ১০-অঙ্কের ফোন নম্বর লিখুন",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਜਾਇਜ਼ 10-ਅੰਕਾਂ ਵਾਲਾ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        "mr": "कृपया वैध 10-अंकी फोन नंबर प्रविष्ट करा",
        "gu": "કૃપા કરીને માન્ય 10-અંકનો ફોન નંબર દાખલ કરો",
        "ta": "செல்லுபடியாகும் 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்",
        "te": "దయచేసి సరైన 10-అంకెల ఫోన్ నంబర్‌ను నమోదు చేయండి",
        "kn": "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        "ml": "ദയവായി സാധുവായ 10-അക്ക ഫോൺ നമ്പർ നൽകുക",
        "or": "કૃપા કરીને માન્ય 10-અંકનો ફોન નંબર દાખલ કરો",
        "as": "অনুগ্ৰহ কৰি এটা বৈধ ১০-অংকৰ ফোন নম্বৰ লিখক",
        "si": "කරුණාකර වලංගු ඉලක්කම් 10ක දුරකථන අංකයක් ඇතුළත් කරන්න",
        "ne": "कृपया मान्य १०-अङ्कको फोन नम्बर प्रविष्ट गर्नुहोस्",
        "ar": "يرجى إدخال رقم هاتف صالح مكون من 10 أرقام",
        "pt": "Por favor, insira um número de telefone válido de 10 dígitos",
        "ru": "Пожалуйста, введите действительный 10-значный номер телефона",
        "fa": "لطفاً یک شماره تلفن ۱۰ رقمی معتبر وارد کنید"
    },
    "message_required": {
        "es": "Se requiere mensaje",
        "fr": "Le message est requis",
        "de": "Nachricht ist erforderlich",
        "hi": "संदेश आवश्यक है",
        "ur": "پیغام درکار ہے",
        "bn": "বার্তা প্রয়োজন",
        "pa": "ਸੁਨੇਹਾ ਲੋੜੀਂਦਾ ਹੈ",
        "mr": "संदेश आवश्यक आहे",
        "gu": "સંદેશ જરૂરી છે",
        "ta": "செய்தி தேவை",
        "te": "సందేశం అవసరం",
        "kn": "ಸಂದೇಶ ಅಗತ್ಯವಿದೆ",
        "ml": "സന്ദേശം ആവശ്യമാണ്",
        "or": "સંદેશ જરૂરી છે",
        "as": "বাৰ্তাৰ প্ৰয়োজন",
        "si": "පණිවිඩය අත්‍යවශ්‍යයි",
        "ne": "सन्देश आवश्यक छ",
        "ar": "الرسالة مطلوبة",
        "pt": "Mensagem é obrigatória",
        "ru": "Сообщение обязательно",
        "fa": "پیام الزامی است"
    },
    "redirecting": {
        "es": "Redirigiendo a WhatsApp...",
        "fr": "Redirection vers WhatsApp...",
        "de": "Weiterleitung zu WhatsApp...",
        "hi": "WhatsApp पर पुनर्निर्देशित किया जा रहा है...",
        "ur": "WhatsApp پر ری ڈائریکٹ کیا جا رہا ہے...",
        "bn": "হোয়াটসঅ্যাপে পুনঃনির্দেশ করা হচ্ছে...",
        "pa": "WhatsApp 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        "mr": "WhatsApp वर रीडायरेक्ट करत आहे...",
        "gu": "WhatsApp પર રીડાયરેક્ટ કરી રહ્યું છે...",
        "ta": "WhatsApp-க்கு திருப்பி விடப்படுகிறது...",
        "te": "WhatsAppకి మళ్ళించబడుతోంది...",
        "kn": "WhatsApp ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
        "ml": "WhatsApp-ലേക്ക് റീഡയറക്ട് ചെയ്യുന്നു...",
        "or": "WhatsApp પર રીડાયરેક્ટ કરી રહ્યું છે...",
        "as": "WhatsApp লৈ পুনৰ নিৰ্দেশনা দি থকা হৈছে...",
        "si": "WhatsApp වෙත යොමු කරමින් පවතී...",
        "ne": "WhatsApp मा रिडाइरेक्ट गरिँदैछ...",
        "ar": "جاري إعادة التوجيه إلى واتساب...",
        "pt": "Redirecionando para o WhatsApp...",
        "ru": "Перенаправление в WhatsApp...",
        "fa": "در حال تغییر مسیر به واتساپ..."
    },
    "fill_correctly": {
        "es": "Por favor complete todos los campos requeridos correctamente",
        "fr": "Veuillez remplir correctement tous les champs requis",
        "de": "Bitte füllen Sie alle erforderlichen Felder korrekt aus",
        "hi": "कृपया सभी आवश्यक फ़ील्ड सही ढंग से भरें",
        "ur": "براہ کرم تمام مطلوبہ خانے درست طریقے سے پُر کریں",
        "bn": "অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্রগুলি সঠিকভাবে পূরণ করুন",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਲੋੜੀਂਦੇ ਖੇਤਰਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਭਰੋ",
        "mr": "कृपया सर्व आवश्यक फील्ड योग्यरित्या भरा",
        "gu": "કૃપા કરીને બધા જરૂરી ક્ષેત્રો યોગ્ય રીતે ભરો",
        "ta": "தேவையான அனைத்து புலங்களையும் சரியாக நிரப்பவும்",
        "te": "దయచేసి అవసరమైన అన్ని ఫీల్డ్‌లను సరిగ్గా పూరించండి",
        "kn": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಸರಿಯಾಗಿ ಭರ್ತಿ ಮಾಡಿ",
        "ml": "ആവശ്യമായ എല്ലാ ഫീൽഡുകളും ശരിയായി പൂരിപ്പിക്കുക",
        "or": "કૃપા કરીને બધા જરૂરી ક્ષેત્રો યોગ્ય રીતે ભરો",
        "as": "অনুগ্ৰহ কৰি সকলো প্ৰয়োজনীয় ফিল্ড শুদ্ধকৈ পূৰণ কৰক",
        "si": "කරුණාකර අවශ්‍ය සියලුම ක්ෂේත්‍ර නිවැරදිව පුරවන්න",
        "ne": "कृपया सबै आवश्यक क्षेत्रहरू सही रूपमा भर्नुहोस्",
        "ar": "يرجى ملء جميع الحقول المطلوبة بشكل صحيح",
        "pt": "Por favor, preencha todos os campos obrigatórios corretamente",
        "ru": "Пожалуйста, заполните все обязательные поля правильно",
        "fa": "لطفاً تمام فیلدهای مورد نیاز را به درستی پر کنید"
    },
    "custom_solution": {
        "es": "Solución personalizada",
        "fr": "Solution personnalisée",
        "de": "Individuelle Lösung",
        "hi": "कस्टम समाधान",
        "ur": "حسب ضرورت حل",
        "bn": "কাস্টম সমাধান",
        "pa": "ਕਸਟਮ ਹੱਲ",
        "mr": "कस्टम सोल्यूशन",
        "gu": "કસ્ટમ સોલ્યુશન",
        "ta": "தனிப்பயன் தீர்வு",
        "te": "కస్టమ్ సొల్యూషన్",
        "kn": "ಕಸ್ಟಮ್ ಪರಿಹಾರ",
        "ml": "ഇഷ്ടാനുസൃത പരിഹാരം",
        "or": "કસ્ટમ સોલ્યુશન",
        "as": "কাস্টম সমাধান",
        "si": "විශේෂ විසඳුම",
        "ne": "अनुकूलन समाधान",
        "ar": "حل مخصص",
        "pt": "Solução Personalizada",
        "ru": "Индивидуальное решение",
        "fa": "راه حل سفارشی"
    },
    "general_inquiry": {
        "es": "Consulta general",
        "fr": "Demande générale",
        "de": "Allgemeine Anfrage",
        "hi": "सामान्य पूछताछ",
        "ur": "عام انکوائری",
        "bn": "সাধারণ অনুসন্ধান",
        "pa": "ਆਮ ਪੁੱਛਗਿੱਛ",
        "mr": "सामान्य चौकशी",
        "gu": "સામાન્ય પૂછપરછ",
        "ta": "பொது விசாரணை",
        "te": "సాధారణ విచారణ",
        "kn": "ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ",
        "ml": "പൊതു അന്വേഷണം",
        "or": "સામાન્ય પૂછપરછ",
        "as": "সাধাৰণ সোধা-পোছা",
        "si": "සාමාන්‍ය විමසීම",
        "ne": "सामान्य सोधपुछ",
        "ar": "استفسار عام",
        "pt": "Consulta Geral",
        "ru": "Общий запрос",
        "fa": "سوال عمومی"
    },
    "valid_email": {
        "es": "Por favor ingrese un correo electrónico válido",
        "fr": "Veuillez entrer un email valide",
        "de": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        "hi": "कृपया एक मान्य ईमेल दर्ज करें",
        "ur": "براہ کرم ایک درست ای میل درج کریں",
        "bn": "অনুগ্রহ করে একটি বৈধ ইমেল লিখুন",
        "pa": "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਜਾਇਜ਼ ਈਮੇਲ ਦਰਜ ਕਰੋ",
        "mr": "कृपया वैध ईमेल प्रविष्ट करा",
        "gu": "કૃપા કરીને માન્ય ઇમેઇલ દાખલ કરો",
        "ta": "செல்லுபடியாகும் மின்னஞ்சலை உள்ளிடவும்",
        "te": "దయచేసి సరైన ఇమెయిల్‌ను నమోదు చేయండి",
        "kn": "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ನಮೂದಿಸಿ",
        "ml": "ദയവായി സാധുവായ ഇമെയിൽ നൽകുക",
        "or": "કૃપા કરીને માન્ય ઇમેઇલ દાખલ કરો",
        "as": "অনুগ্ৰহ কৰি এটা বৈধ ইমেইল লিখক",
        "si": "කරුණාකර වලංගු විද්‍යුත් තැපෑලක් ඇතුළත් කරන්න",
        "ne": "कृपया मान्य इमेल प्रविष्ट गर्नुहोस्",
        "ar": "يرجى إدخال بريد إلكتروني صالح",
        "pt": "Por favor, insira um e-mail válido",
        "ru": "Пожалуйста, введите действительный адрес электронной почты",
        "fa": "لطفاً یک ایمیل معتبر وارد کنید"
    }
};

const keyMapping = {
    "Loading products...": "loading_products",
    "Name is required": "name_required",
    "Phone number is required": "phone_required",
    "Please enter a valid 10-digit phone number": "valid_phone",
    "Message is required": "message_required",
    "Redirecting to WhatsApp...": "redirecting",
    "Please fill in all required fields correctly": "fill_correctly",
    "Custom Solution": "custom_solution",
    "General Inquiry": "general_inquiry",
    "Please enter a valid email": "valid_email"
};

async function updateTranslations() {
    for (const lang of languages) {
        const filePath = path.join(localesDir, lang, 'translation.json');

        try {
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                const json = JSON.parse(content);
                let updated = false;

                for (const [englishKey, lookupKey] of Object.entries(keyMapping)) {
                    if (json[englishKey] && json[englishKey] === englishKey) {
                        // Only update if it is currently same as English key (i.e. fallback)
                        // Actually, populate_locales sets it to English Value.
                        // But my keyMapping keys ARE the English Values.
                        // So if json[englishKey] == englishKey, it is likely untranslated.
                        // Wait, populate_locales sets: json[key] = en[key].
                        // So json["Loading products..."] = "Loading products..."

                        if (translations[lookupKey][lang]) {
                            json[englishKey] = translations[lookupKey][lang];
                            updated = true;
                        }
                    }
                }

                if (updated) {
                    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
                    console.log(`Updated ${lang}`);
                }
            }
        } catch (err) {
            console.error(`Error updating ${lang}:`, err);
        }
    }
}

updateTranslations();
