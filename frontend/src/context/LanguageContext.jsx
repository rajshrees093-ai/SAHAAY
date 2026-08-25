import React, { createContext, useContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export const translations = {
  en: {
    // Nav & General
    authority: 'NATIONAL HELPLINE ASSESSMENT AUTHORITY · TOLL-FREE 14566',
    skip: 'Skip to main content',
    officerLogin: 'Officer / Counsellor Portal Login',
    home: 'Home',
    citizenPortal: 'Citizen Portal',
    fileGrievance: 'File Grievance',
    trackStatus: 'Track Status',
    emergency: 'Emergency 112',
    pitchDeck: 'Pitch Deck',
    officerConsole: 'Officer Console',
    citizenLogin: 'Citizen Login',
    register: 'Register',
    signOut: 'Sign Out',
    tagline: 'A safer way to be heard.',

    // Landing Page
    heroBadge: 'National Public Grievance & Vulnerability Assessment Portal',
    heroTitle: 'A safer, calmer way to be heard.',
    heroDesc: 'Speak or write in your regional language. Our AI assists authorized case officers in assessing distress signals early — protecting your dignity and confidentiality.',
    speakNow: 'Speak or Submit Now',
    trackComplaint: 'Track Complaint',
    encryptionBadge: '256-Bit AES Encryption',
    humanOversight: 'Human-in-the-Loop Oversight',
    regionalDialects: '22 Regional Indian Dialects',

    pillar1Title: 'Voice & Text Expression',
    pillar1Desc: 'Choose to speak naturally or type in your preferred mother tongue. No rigid forms or intimidating legal jargon required.',
    pillar1Link: 'Start submission',

    pillar2Title: 'Early Distress Detection',
    pillar2Desc: 'Multimodal NLP extracts emotional distress indicators to help triage cases rapidly, prioritizing individuals facing urgent threats.',
    pillar2Link: 'Read our guidelines',

    pillar3Title: 'Confidential Human Review',
    pillar3Desc: 'AI never takes unilateral punitive decisions. Every case is individually verified and managed by a trained government officer.',
    pillar3Link: 'View privacy charter',

    dangerTitle: 'In Immediate Physical Danger?',
    dangerDesc: 'Do not wait for grievance triage. Call 112 (Emergency Dispatch) or 1091 (Women Helpline) immediately.',
    emergencyDir: 'Emergency Directory',

    // Complaint Intake
    intakeBadge: 'Encrypted Intake Channel · NHAA 14566',
    intakeTitle: 'Submit or Speak Your Grievance',
    intakeDesc: 'Express your situation freely in your own words. Our AI model will extract emotional context and distress markers to expedite support from an authorized case officer.',
    clickToSpeak: 'Click to Speak (Speak Now)',
    listening: 'Listening... Speak naturally in any language',
    micEncrypted: 'Microphone audio is encrypted in transit',
    typeStatement: 'Type or Edit Statement',
    pasteSample: 'Paste Sample Hindi Distress Text →',
    placeholder: 'Type your concern here, or review transcribed text from voice input above...',
    consentText: 'I consent to multimodal acoustic and natural language vulnerability feature extraction for case triage under SAHAAY privacy protocols.',
    submitBtn: 'Submit for Officer Triage',
    docketSuccess: 'Grievance Registered Successfully',
    docketPrompt: 'Your Docket Number',
    docketSub: 'Please save this docket number to track your grievance status on the public portal.',
    trackGrievanceBtn: 'Track Grievance Status →',
    returnHome: 'Return to Home',

    // Track Status
    trackTitle: 'Track Your Grievance Status',
    trackDesc: 'Enter your official docket number (e.g. NHAA/2026/05/2841) to monitor the live review progress.',
    trackPlaceholder: 'e.g. NHAA/2026/05/2841',
    trackButton: 'Track Status',
    quickDockets: 'Quick Demo Dockets:',

    // Citizen Dashboard
    welcome: 'Welcome, Citizen 👋',
    dashboardSub: 'Submit your concern safely, check existing dockets, and access emergency helplines.',
    card1Title: 'Register a Grievance',
    card1Desc: 'Use your voice or type your statement in your language. Our system ensures your voice is heard and safely processed.',
    card2Title: 'Track Grievance Status',
    card2Desc: 'Enter your official docket number to monitor review milestones, assigned department, and resolution timeline.',
    card3Title: 'My Legal Rights',
    card3Desc: 'Read about your statutory protections under the National Public Grievances framework and free NALSA legal aid services.',
    card4Title: 'Emergency Help & Helplines',
    card4Desc: 'Direct hotline access to 112 (Emergency Response), 1091 (Women Helpline), and 14566 (NHAA Toll-Free).'
  },

  hi: {
    // Nav & General
    authority: 'राष्ट्रीय हेल्पलाइन मूल्यांकन प्राधिकरण · टोल-फ्री 14566',
    skip: 'मुख्य सामग्री पर जाएं',
    officerLogin: 'अधिकारी / परामर्शदाता पोर्टल लॉगिन',
    home: 'होम',
    citizenPortal: 'नागरिक पोर्टल',
    fileGrievance: 'शिकायत दर्ज करें',
    trackStatus: 'स्थिति ट्रैक करें',
    emergency: 'आपातकालीन 112',
    pitchDeck: 'प्रस्तुति (Pitch Deck)',
    officerConsole: 'अधिकारी कंसोल',
    citizenLogin: 'नागरिक लॉगिन',
    register: 'पंजीकरण',
    signOut: 'लॉग आउट',
    tagline: 'अपनी बात रखने का एक सुरक्षित और शांत माध्यम।',

    // Landing Page
    heroBadge: 'राष्ट्रीय लोक शिकायत एवं भेद्यता मूल्यांकन पोर्टल',
    heroTitle: 'अपनी बात रखने का एक सुरक्षित और शांत माध्यम।',
    heroDesc: 'अपनी क्षेत्रीय भाषा में बोलें या लिखें। हमारा एआई अधिकृत केस अधिकारियों को संकट के संकेतों का शीघ्र मूल्यांकन करने में सहायता करता है — आपकी गरिमा और गोपनीयता की रक्षा करते हुए।',
    speakNow: 'बोलें या अभी जमा करें',
    trackComplaint: 'शिकायत ट्रैक करें',
    encryptionBadge: '256-बिट एईएस एन्क्रिप्शन',
    humanOversight: 'मानवीय निगरानी (Human-in-the-Loop)',
    regionalDialects: '22 क्षेत्रीय भारतीय भाषाएं',

    pillar1Title: 'आवाज़ और लिखित अभिव्यक्ति',
    pillar1Desc: 'अपनी पसंदीदा मातृभाषा में सहजता से बोलें या लिखें। किसी जटिल फॉर्म या डरावनी कानूनी भाषा की आवश्यकता नहीं है।',
    pillar1Link: 'शिकायत शुरू करें',

    pillar2Title: 'शीघ्र संकट एवं तनाव पहचान',
    pillar2Desc: 'मल्टीमॉडल एनएलपी संकट के भावनात्मक संकेतकों को निकालता है ताकि गंभीर खतरे का सामना कर रहे लोगों को प्राथमिकता दी जा सके।',
    pillar2Link: 'दिशानिर्देश पढ़ें',

    pillar3Title: 'गोपनीय मानवीय समीक्षा',
    pillar3Desc: 'एआई कभी भी एकतरफा निर्णय नहीं लेता। प्रत्येक मामले की व्यक्तिगत रूप से प्रशिक्षित सरकारी अधिकारी द्वारा समीक्षा की जाती है।',
    pillar3Link: 'गोपनीयता चार्टर देखें',

    dangerTitle: 'क्या आप तत्काल शारीरिक खतरे में हैं?',
    dangerDesc: 'शिकायत की प्रतीक्षा न करें। तुरंत 112 (आपातकालीन प्रतिक्रिया) या 1091 (महिला हेल्पलाइन) पर कॉल करें।',
    emergencyDir: 'आपातकालीन निर्देशिका',

    // Complaint Intake
    intakeBadge: 'एन्क्रिप्टेड शिकायत चैनल · एनएचएए 14566',
    intakeTitle: 'अपनी शिकायत बोलें या दर्ज करें',
    intakeDesc: 'अपनी स्थिति को अपने शब्दों में खुलकर व्यक्त करें। हमारा एआई मॉडल अधिकारी द्वारा शीघ्र सहायता प्रदान करने के लिए भावनात्मक संकेत निकालेगा।',
    clickToSpeak: 'बोलने के लिए क्लिक करें (अभी बोलें)',
    listening: 'सुन रहे हैं... किसी भी भाषा में बोलें',
    micEncrypted: 'माइक्रोफ़ोन ऑडियो पारगमन में एन्क्रिप्टेड है',
    typeStatement: 'बयान लिखें या संपादित करें',
    pasteSample: 'नमूना हिंदी संकट पाठ पेस्ट करें →',
    placeholder: 'अपनी चिंता यहाँ लिखें, या ऊपर दिए गए वॉइस इनपुट से बोले गए टेक्स्ट की समीक्षा करें...',
    consentText: 'मैं सहाय गोपनीयता प्रोटोकॉल के तहत मामला मूल्यांकन के लिए मल्टीमॉडल ध्वनिक और भाषा विश्लेषण की सहमति देता/देती हूँ।',
    submitBtn: 'अधिकारी समीक्षा के लिए जमा करें',
    docketSuccess: 'शिकायत सफलतापूर्वक दर्ज की गई',
    docketPrompt: 'आपका डॉकेट नंबर',
    docketSub: 'सार्वजनिक पोर्टल पर अपनी शिकायत की स्थिति ट्रैक करने के लिए कृपया यह डॉकेट नंबर सुरक्षित रखें।',
    trackGrievanceBtn: 'शिकायत की स्थिति ट्रैक करें →',
    returnHome: 'होम पेज पर लौटें',

    // Track Status
    trackTitle: 'अपनी शिकायत की स्थिति ट्रैक करें',
    trackDesc: 'लाइव प्रगति देखने के लिए अपना आधिकारिक डॉकेट नंबर (उदा. NHAA/2026/05/2841) दर्ज करें।',
    trackPlaceholder: 'उदा. NHAA/2026/05/2841',
    trackButton: 'स्थिति ट्रैक करें',
    quickDockets: 'त्वरित डेमो डॉकेट्स:',

    // Citizen Dashboard
    welcome: 'स्वागत है, नागरिक 👋',
    dashboardSub: 'अपनी समस्या सुरक्षित रूप से दर्ज करें, मौजूदा डॉकेट की जांच करें और आपातकालीन हेल्पलाइन तक पहुँचें।',
    card1Title: 'शिकायत दर्ज करें',
    card1Desc: 'अपनी आवाज़ का उपयोग करें या अपनी भाषा में बयान टाइप करें। हमारी प्रणाली सुनिश्चित करती है कि आपकी बात सुनी जाए।',
    card2Title: 'शिकायत की स्थिति ट्रैक करें',
    card2Desc: 'समीक्षा चरणों, सौंपे गए विभाग और समाधान समयरेखा की निगरानी के लिए अपना डॉकेट नंबर दर्ज करें।',
    card3Title: 'मेरे कानूनी अधिकार',
    card3Desc: 'राष्ट्रीय लोक शिकायत ढांचे और मुफ्त नालसा कानूनी सहायता सेवाओं के तहत अपनी वैधानिक सुरक्षा के बारे में पढ़ें।',
    card4Title: 'आपातकालीन सहायता एवं हेल्पलाइन',
    card4Desc: '112 (आपातकालीन प्रतिक्रिया), 1091 (महिला हेल्पलाइन), और 14566 (टोल-फ्री) पर सीधी कॉल।'
  },

  mr: {
    authority: 'राष्ट्रीय हेल्पलाईन मूल्यांकन प्राधिकरण · टोल-फ्री १४५६६',
    skip: 'मुख्य सामग्रीकडे जा',
    officerLogin: 'अधिकारी / समुपदेशक पोर्टल लॉगिन',
    home: 'मुख्यपृष्ठ',
    citizenPortal: 'नागरिक पोर्टल',
    fileGrievance: 'तक्रार नोंदवा',
    trackStatus: 'स्थिती तपासा',
    emergency: 'आपत्कालीन ११२',
    pitchDeck: 'सादरीकरण',
    officerConsole: 'अधिकारी कन्सोल',
    citizenLogin: 'नागरिक लॉगिन',
    register: 'नोंदणी करा',
    signOut: 'बाहेर पडा',
    tagline: 'आपले म्हणणे मांडण्याचा एक सुरक्षित आणि शांत मार्ग.',

    heroBadge: 'राष्ट्रीय सार्वजनिक तक्रार निवारण व असुरक्षितता मूल्यांकन पोर्टल',
    heroTitle: 'आपले म्हणणे मांडण्याचा एक सुरक्षित आणि शांत मार्ग.',
    heroDesc: 'आपल्या प्रादेशिक भाषेत बोला किंवा लिहा. आमची एआय प्रणाली अधिकृत अधिकाऱ्यांना संकटाचे संकेत त्वरित ओळखण्यात मदत करते.',
    speakNow: 'आत्ताच बोला किंवा नोंदवा',
    trackComplaint: 'तक्रार तपासा',
    encryptionBadge: '२५६-बिट एईएस एन्क्रिप्शन',
    humanOversight: 'मानवी देखरेख',
    regionalDialects: '२२ प्रादेशिक भाषा',

    pillar1Title: 'आवाज आणि मजकूर अभिव्यक्ती',
    pillar1Desc: 'आपल्या मातृभाषेत सहज बोला किंवा लिहा. कोणतीही क्लिष्ट कायदेशीर भाषा आवश्यक नाही.',
    pillar1Link: 'तक्रार नोंदवा',

    pillar2Title: 'लवकर संकट शोध',
    pillar2Desc: 'तातडीने मदत आवश्यक असणाऱ्या नागरिकांना प्राधान्य देण्यासाठी मल्टीमॉडल तंत्रज्ञान.',
    pillar2Link: 'मार्गदर्शक तत्त्वे वाचा',

    pillar3Title: 'गोपनीय मानवी पुनरावलोकन',
    pillar3Desc: 'एआय कधीही एकतर्फी निर्णय घेत नाही. प्रत्येक प्रकरणाची अधिकृत सरकारी अधिकाऱ्याकडून तपासणी केली जाते.',
    pillar3Link: 'गोपनीयता चार्टर पहा',

    dangerTitle: 'तात्काळ शारीरिक धोक्यात आहात का?',
    dangerDesc: 'वाट पाहू नका. त्वरित ११२ (आपत्कालीन सेवा) किंवा १०९१ (महिला हेल्पलाइन) वर कॉल करा.',
    emergencyDir: 'आपत्कालीन निर्देशिका',

    intakeBadge: 'एन्क्रिप्टेड चॅनल · NHAA १४५६६',
    intakeTitle: 'आपली तक्रार बोला किंवा नोंदवा',
    intakeDesc: 'आपली परिस्थिती आपल्या शब्दात मोकळेपणाने मांडा. जलद मदतीसाठी आमची प्रणाली सहाय्य करेल.',
    clickToSpeak: 'बोलण्यासाठी क्लिक करा (आता बोला)',
    listening: 'ऐकत आहे... कोणत्याही भाषेत बोला',
    micEncrypted: 'मायक्रोफोन ऑडिओ एन्क्रिप्टेड आहे',
    typeStatement: 'मजकूर लिहा किंवा संपादित करा',
    pasteSample: 'मराठी नमुना मजकूर जोडा →',
    placeholder: 'आपली तक्रार येथे टाइप करा...',
    consentText: 'मी सहाय गोपनीयता नियमांनुसार डेटा प्रक्रियेस संमती देतो/देते.',
    submitBtn: 'अधिकारी पुनरावलोकनासाठी पाठवा',
    docketSuccess: 'तक्रार यशस्वीरित्या नोंदवली गेली',
    docketPrompt: 'आपला डॉकेट क्रमांक',
    docketSub: 'पोर्टलवर स्थिती तपासण्यासाठी हा क्रमांक जतन करा.',
    trackGrievanceBtn: 'तक्रार स्थिती तपासा →',
    returnHome: 'मुख्यपृष्ठावर परत या',

    trackTitle: 'आपल्या तक्रारीची स्थिती तपासा',
    trackDesc: 'तपासणीची प्रगती पाहण्यासाठी आपला अधिकृत डॉकेट क्रमांक प्रविष्ट करा.',
    trackPlaceholder: 'उदा. NHAA/2026/05/2841',
    trackButton: 'स्थिती तपासा',
    quickDockets: 'डेमो डॉकेट्स:',

    welcome: 'स्वागत आहे, नागरिक 👋',
    dashboardSub: 'तक्रार नोंदवा, प्रगती तपासा आणि आपत्कालीन सेवा मिळवा.',
    card1Title: 'तक्रार नोंदवा',
    card1Desc: 'आपल्या भाषेत बोला किंवा लिहा. आपल्या समस्येची दखल घेतली जाईल.',
    card2Title: 'तक्रार स्थिती तपासा',
    card2Desc: 'सद्यस्थिती आणि निवारण कालावधी जाणून घ्या.',
    card3Title: 'माझे कायदेशीर हक्क',
    card3Desc: 'मोफत विधी सेवा आणि हक्कांविषयी माहिती घ्या.',
    card4Title: 'आपत्कालीन मदत आणि हेल्पलाइन',
    card4Desc: '११२, १०९१ आणि १४५६६ वर तात्काळ संपर्क.'
  },

  ta: {
    authority: 'தேசிய உதவி எண் மதிப்பீட்டு ஆணையம் · கட்டணமில்லா எண் 14566',
    skip: 'முக்கிய பகுதிக்குச் செல்லவும்',
    officerLogin: 'அதிகாரி / ஆலோசகர் உள்நுழைவு',
    home: 'முகப்பு',
    citizenPortal: 'குடிமக்கள் தளம்',
    fileGrievance: 'புகார் பதிவு செய்',
    trackStatus: 'நிலை சரிபார்க்கவும்',
    emergency: 'அவசரம் 112',
    pitchDeck: 'விளக்கக்காட்சி',
    officerConsole: 'அதிகாரி பணியகம்',
    citizenLogin: 'குடிமக்கள் உள்நுழைவு',
    register: 'பதிவு செய்க',
    signOut: 'வெளியேறு',
    tagline: 'உங்கள் குரல் கேட்கப்படுவதற்கான பாதுகாப்பான வழி.',

    heroBadge: 'தேசிய பொதுக் குறைதீர்ப்பு மற்றும் இடர் மதிப்பீட்டு தளம்',
    heroTitle: 'உங்கள் குரல் கேட்கப்படுவதற்கான பாதுகாப்பான வழி.',
    heroDesc: 'உங்கள் தாய்மொழியில் பேசுங்கள் அல்லது எழுதுங்கள். அவசர நிலையை உடனடியாகக் கண்டறிய எங்கள் AI உதவுகிறது.',
    speakNow: 'இப்போதே பேசுங்கள் / சமர்ப்பியுங்கள்',
    trackComplaint: 'புகாரைக் கண்காணிக்கவும்',
    encryptionBadge: '256-பிட் AES குறியாக்கம்',
    humanOversight: 'மனித மேற்பார்வை',
    regionalDialects: '22 பிராந்திய மொழிகள்',

    pillar1Title: 'குரல் மற்றும் உரை பதிவு',
    pillar1Desc: 'உங்கள் மொழியில் இயல்பாகப் பேசுங்கள். கடினமான படிவங்கள் தேவையில்லை.',
    pillar1Link: 'பதிவைத் தொடங்கவும்',

    pillar2Title: 'அவசர இடர் கண்டறிதல்',
    pillar2Desc: 'அவசர ஆபத்தில் உள்ளவர்களுக்கு முன்னுரிமை அளிக்க AI பகுப்பாய்வு உதவுகிறது.',
    pillar2Link: 'விதிமுறைகளைப் படிக்கவும்',

    pillar3Title: 'ரகசிய மனித மறுஆய்வு',
    pillar3Desc: 'AI தன்னிச்சையான முடிவுகளை எடுப்பதில்லை. பயிற்சி பெற்ற அதிகாரி நேரடியாகப் பரிசீலிப்பார்.',
    pillar3Link: 'தனியுரிமை விவரங்கள்',

    dangerTitle: 'உடனடி ஆபத்தில் உள்ளீர்களா?',
    dangerDesc: 'காத்திருக்க வேண்டாம். உடனடியாக 112 அல்லது 1091 எண்ணை அழைக்கவும்.',
    emergencyDir: 'அவசர எண்கள்',

    intakeBadge: 'பாதுகாப்பான சேனல் · NHAA 14566',
    intakeTitle: 'உங்கள் புகாரைப் பதிவு செய்யவும்',
    intakeDesc: 'உங்கள் புகாரை உங்கள் சொந்த வார்த்தைகளில் வெளிப்படுத்துங்கள்.',
    clickToSpeak: 'பேச கிளிக் செய்யவும் (இப்போது பேசுங்கள்)',
    listening: 'கேட்கிறது... எந்த மொழியிலும் பேசுங்கள்',
    micEncrypted: 'ஆடியோ பாதுகாப்பாக குறியாக்கம் செய்யப்படுகிறது',
    typeStatement: 'புகாரை எழுதவும்',
    pasteSample: 'மாதிரி உரையை ஒட்டவும் →',
    placeholder: 'உங்கள் புகாரை இங்கே தட்டச்சு செய்யவும்...',
    consentText: 'நான் தரவு செயலாக்கத்திற்கு ஒப்புக்கொள்கிறேன்.',
    submitBtn: 'அதிகாரி ஆய்வுக்கு அனுப்பவும்',
    docketSuccess: 'புகார் வெற்றிகரமாகப் பதிவு செய்யப்பட்டது',
    docketPrompt: 'உங்கள் ஆவண எண் (Docket No)',
    docketSub: 'நிலையைக் கண்காணிக்க இந்த எண்ணைச் சேமிக்கவும்.',
    trackGrievanceBtn: 'நிலையைக் காண்க →',
    returnHome: 'முகப்புக்குச் செல்லவும்',

    trackTitle: 'புகார் நிலையைத் தெரிந்துகொள்ளவும்',
    trackDesc: 'முன்னேற்றத்தைக் கண்காணிக்க உங்கள் ஆவண எண்ணை உள்ளிடவும்.',
    trackPlaceholder: 'எ.கா. NHAA/2026/05/2841',
    trackButton: 'நிலையைக் காண்க',
    quickDockets: 'மாதிரி எண்கள்:',

    welcome: 'வணக்கம், குடிமக்களே 👋',
    dashboardSub: 'புகார் பதிவு செய்யவும், நிலையை அறியவும், அவசர உதவிகளைப் பெறவும்.',
    card1Title: 'புகார் பதிவு செய்',
    card1Desc: 'உங்கள் மொழியில் பேசி அல்லது தட்டச்சு செய்து புகாரைப் பதியுங்கள்.',
    card2Title: 'புகார் நிலையை அறியவும்',
    card2Desc: 'தீர்வு நிலையை எளிதாகக் கண்காணிக்கலாம்.',
    card3Title: 'என் சட்ட உரிமைகள்',
    card3Desc: 'இலவச சட்ட உதவி மற்றும் உரிமைகள் பற்றிய வழிகாட்டல்.',
    card4Title: 'அவசர உதவி எண்கள்',
    card4Desc: '112, 1091 மற்றும் 14566 எண்களுக்கு உடனடி இணைப்பு.'
  },

  bn: {
    authority: 'জাতীয় হেল্পলাইন মূল্যায়ন কর্তৃপক্ষ · টোল-ফ্রি ১৪৫৬৬',
    skip: 'মূল অংশে যান',
    officerLogin: 'অফিসার / পরামর্শদাতা লগইন',
    home: 'হোম',
    citizenPortal: 'নাগরিক পোর্টাল',
    fileGrievance: 'অভিযোগ দায়ের করুন',
    trackStatus: 'স্থিতি ট্র্যাক করুন',
    emergency: 'জরুরী ১১২',
    pitchDeck: 'প্রেজেন্টেশন',
    officerConsole: 'অফিসার কনসোল',
    citizenLogin: 'নাগরিক লগইন',
    register: 'নিবন্ধন করুন',
    signOut: 'লগ আউট',
    tagline: 'আপনার কথা জানানোর একটি নিরাপদ মাধ্যম।',

    heroBadge: 'জাতীয় পাবলিক অভিযোগ ও দুর্বলতা মূল্যায়ন পোর্টাল',
    heroTitle: 'আপনার কথা জানানোর একটি নিরাপদ মাধ্যম।',
    heroDesc: 'আপনার মাতৃভাষায় বলুন বা লিখুন। আমাদের এআই সংকটপূর্ণ লক্ষণগুলি দ্রুত মূল্যায়নে অফিসারদের সহায়তা করে।',
    speakNow: 'বলুন বা জমা দিন',
    trackComplaint: 'অভিযোগ ট্র্যাক করুন',
    encryptionBadge: '২৫৬-বিট এইএস এনক্রিপশন',
    humanOversight: 'মানবিক তত্ত্বাবধান',
    regionalDialects: '২২টি আঞ্চলিক ভাষা',

    pillar1Title: 'কণ্ঠ ও পাঠ্য অভিব্যক্তি',
    pillar1Desc: 'সহজভাবে বলুন বা লিখুন। কোনো কঠিন ফর্মের প্রয়োজন নেই।',
    pillar1Link: 'অভিযোগ শুরু করুন',

    pillar2Title: 'দ্রুত সংকট সনাক্তকরণ',
    pillar2Desc: 'জরুরী বিপদে থাকা ব্যক্তিদের অগ্রাধিকার দেওয়ার জন্য এআই বিশ্লেষণ।',
    pillar2Link: 'নির্দেশিকাবলী পড়ুন',

    pillar3Title: 'গোপনীয় মানব পর্যালোচনা',
    pillar3Desc: 'এআই একতরফা সিদ্ধান্ত নেয় না। প্রতিটি কেস প্রশিক্ষিত অফিসার দ্বারা যাচাই করা হয়।',
    pillar3Link: 'গোপনীয়তা চার্টার দেখুন',

    dangerTitle: 'আপনি কি তাৎক্ষণিক বিপদে আছেন?',
    dangerDesc: 'অপেক্ষা করবেন না। অবিলম্বে ১১২ বা ১০৯১ নম্বরে কল করুন।',
    emergencyDir: 'জরুরী ডিরেক্টরি',

    intakeBadge: 'এনক্রিপ্ট করা চ্যানেল · NHAA ১৪৫৬৬',
    intakeTitle: 'আপনার অভিযোগ বলুন বা লিখুন',
    intakeDesc: 'আপনার পরিস্থিতি নিজের ভাষায় বর্ণনা করুন।',
    clickToSpeak: 'বলতে ক্লিক করুন (এখন বলুন)',
    listening: 'শুনছি... যেকোনো ভাষায় বলুন',
    micEncrypted: 'মাইক্রোফোন অডিও সম্পূর্ণ সুরক্ষিত',
    typeStatement: 'বিবৃতি লিখুন বা সম্পাদনা করুন',
    pasteSample: 'নমুনা পাঠ্য পেস্ট করুন →',
    placeholder: 'আপনার অভিযোগ এখানে লিখুন...',
    consentText: 'আমি ডেটা প্রক্রিয়াকরণে সম্মতি দিচ্ছি।',
    submitBtn: 'পর্যালোচনার জন্য জমা দিন',
    docketSuccess: 'অভিযোগ সফলভাবে নথিভুক্ত হয়েছে',
    docketPrompt: 'আপনার ডকেট নম্বর',
    docketSub: 'স্থিতি ট্র্যাক করতে এই নম্বরটি সংরক্ষণ করুন।',
    trackGrievanceBtn: 'অভিযোগের স্থিতি ট্র্যাক করুন →',
    returnHome: 'হোমে ফিরে যান',

    trackTitle: 'অভিযোগের স্থিতি ট্র্যাক করুন',
    trackDesc: 'অগ্রগতি দেখতে আপনার ডকেট নম্বর লিখুন।',
    trackPlaceholder: 'যেমন: NHAA/2026/05/2841',
    trackButton: 'স্থিতি ট্র্যাক করুন',
    quickDockets: 'নমুনা ডকেট:',

    welcome: 'স্বাগতম, নাগরিক 👋',
    dashboardSub: 'নিরাপদে অভিযোগ নথিভুক্ত করুন এবং সহায়তা পান।',
    card1Title: 'অভিযোগ দায়ের করুন',
    card1Desc: 'আপনার ভাষায় বলুন বা লিখুন।',
    card2Title: 'স্থিতি ট্র্যাক করুন',
    card2Desc: 'সমাধানের অগ্রগতি পর্যবেক্ষণ করুন।',
    card3Title: 'আমার আইনি অধিকার',
    card3Desc: 'বিনামূল্যে আইনি সহায়তা ও সুরক্ষা সম্পর্কে জানুন।',
    card4Title: 'জরুরী সহায়তা ও হেল্পলাইন',
    card4Desc: '১১২, ১০৯১ এবং ১৪৫৬৬ নম্বরে সরাসরি যোগাযোগ।'
  },

  te: {
    authority: 'జాతీయ హెల్ప్‌లైన్ అంచనా అథారిటీ · టోల్-ఫ్రీ 14566',
    skip: 'ప్రధాన కంటెంట్‌కు వెళ్లండి',
    officerLogin: 'అధికారి / కౌన్సిలర్ లాగిన్',
    home: 'హోమ్',
    citizenPortal: 'పౌర పోర్టల్',
    fileGrievance: 'ఫిర్యాదు దాఖలు చేయండి',
    trackStatus: 'స్థితిని ట్రాక్ చేయండి',
    emergency: 'అత్యవసర 112',
    pitchDeck: 'ప్రజెంటేషన్',
    officerConsole: 'అధికారి కన్సోల్',
    citizenLogin: 'సిటిజన్ లాగిన్',
    register: 'నమోదు చేసుకోండి',
    signOut: 'లాగ్ అవుట్',
    tagline: 'మీ సమస్యను వినిపించడానికి సురక్షితమైన మార్గం.',

    heroBadge: 'జాతీయ ప్రజా ఫిర్యాదుల & ప్రమాద అంచనా పోర్టల్',
    heroTitle: 'మీ సమస్యను వినిపించడానికి సురక్షితమైన మార్గం.',
    heroDesc: 'మీ ప్రాంతీయ భాషలో మాట్లాడండి లేదా రాయండి. మా AI వ్యవస్థ అత్యవసర పరిస్థితులను గుర్తించడంలో అధికారులకు సహాయపడుతుంది.',
    speakNow: 'మాట్లాడండి లేదా సమర్పించండి',
    trackComplaint: 'ఫిర్యాదును ట్రాక్ చేయండి',
    encryptionBadge: '256-బిట్ AES ఎన్‌క్రిప్షన్',
    humanOversight: 'మానవ పర్యవేక్షణ',
    regionalDialects: '22 ప్రాంతీయ భాషలు',

    pillar1Title: 'స్వర మరియు వచన వ్యక్తీకరణ',
    pillar1Desc: 'మీ మాతృభాషలో సహజంగా మాట్లాడండి. కష్టమైన ఫారమ్‌లు అవసరం లేదు.',
    pillar1Link: 'ఫిర్యాదు ప్రారంభించండి',

    pillar2Title: 'ముందస్తు ప్రమాద గుర్తింపు',
    pillar2Desc: 'అత్యవసర ముప్పును ఎదుర్కొంటున్న వ్యక్తులకు త్వరిత ప్రాధాన్యత ఇవ్వడంలో AI సహాయం.',
    pillar2Link: 'మార్గదర్శకాలను చదవండి',

    pillar3Title: 'రహస్య మానవ సమీక్ష',
    pillar3Desc: 'AI ఏకపక్ష నిర్ణయాలు తీసుకోదు. ప్రతి కేసు శిక్షణ పొందిన అధికారిచే సమీక్షించబడుతుంది.',
    pillar3Link: 'గోప్యతా చార్టర్ చూడండి',

    dangerTitle: 'మీరు తక్షణ ప్రమాదంలో ఉన్నారా?',
    dangerDesc: 'వేచి ఉండకండి. వెంటనే 112 లేదా 1091 కి కాల్ చేయండి.',
    emergencyDir: 'అత్యవసర డైరెక్టరీ',

    intakeBadge: 'ఎన్‌క్రిప్ట్ చేయబడిన ఛానల్ · NHAA 14566',
    intakeTitle: 'మీ ఫిర్యాదును మాట్లాడండి లేదా నమోదు చేయండి',
    intakeDesc: 'మీ సమస్యను మీ స్వంత మాటల్లో తెలియజేయండి.',
    clickToSpeak: 'మాట్లాడటానికి క్లిక్ చేయండి (ఇప్పుడు మాట్లాడండి)',
    listening: 'వింటున్నాము... ఏ భాషలోనైనా మాట్లాడండి',
    micEncrypted: 'మైక్రోఫోన్ ఆడియో సురక్షితంగా ఎన్‌క్రిప్ట్ చేయబడింది',
    typeStatement: 'వివరణ రాయండి లేదా సవరించండి',
    pasteSample: 'నమూనా పాఠాన్ని అతికించండి →',
    placeholder: 'మీ సమస్యను ఇక్కడ టైప్ చేయండి...',
    consentText: 'నేను సహాయ గోప్యతా నిబంధనల ప్రకారం డేటా విశ్లేషణకు అంగీకరిస్తున్నాను.',
    submitBtn: 'సమీక్ష కోసం సమర్పించండి',
    docketSuccess: 'ఫిర్యాదు విజయవంతంగా నమోదైంది',
    docketPrompt: 'మీ డాకెట్ నంబర్',
    docketSub: 'స్థితిని ట్రాక్ చేయడానికి ఈ నంబర్‌ను భద్రపరుచుకోండి.',
    trackGrievanceBtn: 'ఫిర్యాదు స్థితిని చూడండి →',
    returnHome: 'హోమ్‌కు తిరిగి వెళ్లండి',

    trackTitle: 'ఫిర్యాదు స్థితిని ట్రాక్ చేయండి',
    trackDesc: 'పురోగతిని చూడటానికి మీ డాకెట్ నంబర్‌ను నమోదు చేయండి.',
    trackPlaceholder: 'ఉదా. NHAA/2026/05/2841',
    trackButton: 'స్థితిని ట్రాక్ చేయండి',
    quickDockets: 'నమూనా డాకెట్లు:',

    welcome: 'స్వాగతం, పౌరులారా 👋',
    dashboardSub: 'ఫిర్యాదులను సురక్షితంగా నమోదు చేయండి మరియు సహాయం పొందండి.',
    card1Title: 'ఫిర్యాదు దాఖలు చేయండి',
    card1Desc: 'మీ స్వరం లేదా వ్రాతపూర్వక రూపంలో ఫిర్యాదు చేయండి.',
    card2Title: 'ఫిర్యాదు స్థితిని ట్రాక్ చేయండి',
    card2Desc: 'పురోగతి మరియు పరిష్కార సమయాన్ని గమనించండి.',
    card3Title: 'నా చట్టపరమైన హక్కులు',
    card3Desc: 'ఉచిత న్యాయ సహాయం మరియు హక్కుల సమాచారం.',
    card4Title: 'అత్యవసర సహాయం & హెల్ప్‌లైన్లు',
    card4Desc: '112, 1091 మరియు 14566 నంబర్లకు తక్షణ కాల్.'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('sahaay_selected_lang') || 'en'
  })

  const setLanguage = (langCode) => {
    setLanguageState(langCode)
    localStorage.setItem('sahaay_selected_lang', langCode)

    // Trigger Google Translate cookie
    try {
      document.cookie = `googtrans=/en/${langCode}; path=/;`
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`
      const select = document.querySelector('.goog-te-combo')
      if (select) {
        select.value = langCode
        select.dispatchEvent(new Event('change', { bubbles: true }))
      }
    } catch (e) {
      console.warn('Google Translate sync error:', e)
    }
  }

  const t = (key) => {
    const langDict = translations[language] || translations.en
    return langDict[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
