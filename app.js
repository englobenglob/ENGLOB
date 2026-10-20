const languageScreen = document.querySelector('#language-screen');
const authScreen = document.querySelector('#auth-screen');
const dashboardScreen = document.querySelector('#dashboard-screen');
const pageContent = document.querySelector('#page-content');
const toast = document.querySelector('#toast');
const modalRoot = document.querySelector('#modal-root');

const state = {
  language: localStorage.getItem('englob-language') || 'pt',
  languageName: 'Português',
  role: 'personal',
  signingUp: false,
  userName: 'Minha conta',
  currentPage: 'home',
  returnAfterLanguage: false,
  map: null,
  marker: null,
  toastTimer: null
};

const translations = {
  pt: {
    welcomeEyebrow: 'Acolhimento sem fronteiras', welcomeTitle: 'O mundo muda.<br /><span>Você pertence.</span>', welcomeDescription: 'Informação e apoio para se sentir em casa, onde quer que a vida te leve.', welcomeFooter: 'Um lugar novo começa aqui', firstStep: 'PRIMEIRO PASSO', welcomeKicker: 'BEM-VINDO AO ENGLOB', languageQuestion: 'Em qual idioma<br />você prefere continuar?', languageHint: 'Você pode alterar essa escolha depois.', continue: 'Continuar', privacy: 'Seus dados, no seu controle.', help: 'Precisa de ajuda?',
    nextStep: 'A sua próxima etapa', authVisualTitle: 'Chegar é só<br />o <span>começo.</span>', authVisualDescription: 'Conte com uma rede de apoio para fazer de qualquer lugar um novo lar.', authVisualFooter: 'Conectando pessoas<br />a novos lugares.', stepAccess: 'ACESSO À PLATAFORMA', loginTitle: 'Que bom ter você<br />por aqui.', loginSubtitle: 'Entre na sua conta para continuar.', createTitle: 'Vamos criar a sua<br />conta.', personal: 'Conta própria', institution: 'Instituição', email: 'E-mail', name: 'Nome completo', namePlaceholder: 'Como podemos te chamar?', institutionName: 'Empresa ou instituição', institutionPlaceholder: 'Nome da organização', password: 'Senha', forgotPassword: 'Esqueci minha senha', passwordPlaceholder: 'Mínimo de 8 caracteres', showPassword: 'Mostrar senha', hidePassword: 'Ocultar senha', login: 'Entrar', createAccount: 'Criar minha conta', signupPrompt: 'Ainda não tem conta?', loginPrompt: 'Já tem uma conta?', signup: 'Criar conta', back: 'Voltar', legalStart: 'Ao continuar, você concorda com nossos', terms: 'Termos de uso', legalJoin: 'e', policy: 'Política de privacidade', authFooter: 'Feito para o mundo, pensado para você.',
    location: 'SUA LOCALIZAÇÃO', explore: 'EXPLORAR', home: 'Visão geral', places: 'Locais próximos', laws: 'Leis e direitos', transport: 'Transportes', emergency: 'Números emergenciais', translator: 'Tradutor', support: 'Estamos com você', supportDesc: 'Ajuda, a qualquer hora.', connected: 'Conectado 24/7', dashboardKicker: 'ENGLOB', homeDescription: 'Olá, {name}. Aqui está o que você precisa para hoje.', updateLocation: 'Atualizar localização', mapRegion: 'Sua região', locationActive: 'LOCALIZAÇÃO ATIVA', approximateLocation: 'Localização aproximada · Lisboa', nearbyServices: 'Serviços ao seu redor', gettingAround: 'Como se locomover', localTransport: 'Transportes locais', knowRights: 'Conheça seus direitos', emergencyPortugal: 'EMERGÊNCIA EM PORTUGAL', europeanEmergency: 'Número europeu de emergência', essentials: 'Essenciais perto de você', viewAll: 'Ver todos', health: 'Saúde', hospitalsPharmacies: 'Hospitais e farmácias', publicServices: 'Serviços públicos', supportServices: 'Apoio e atendimento', mobility: 'Mobilidade', stationsStops: 'Estações e paradas', documents: 'Seus documentos', noDocuments: 'Nenhum documento adicionado', addDocument: 'Adicionar documento',
    pagePlacesKicker: 'PERTO DE VOCÊ', pageLawsKicker: 'INFORMAÇÃO LOCAL', pageTransportKicker: 'MOBILIDADE', pageEmergencyKicker: 'APOIO IMEDIATO', pageTranslatorKicker: 'COMUNICAÇÃO', placesDescription: 'Encontre serviços e pontos de apoio na sua região.', lawsDescription: 'Orientações para entender melhor a vida e os seus direitos em Portugal.', transportDescription: 'Informações úteis para se deslocar pela cidade.', emergencyDescription: 'Guarde estes contatos. Em uma emergência, cada minuto conta.', translatorDescription: 'Encontre as palavras certas para o dia a dia.', nearby: 'Perto de mim', searchPlaces: 'Buscar serviços e locais', searchLabel: 'Buscar serviços e locais', lisbon: 'Lisboa', learnMore: 'Saiba mais', call112: 'Ligar 112',
    sourceLanguage: 'Idioma de origem', targetLanguage: 'Idioma de destino', swapLanguages: 'Inverter idiomas', translatePlaceholder: 'Escreva uma frase para traduzir...', translationPlaceholder: 'Sua tradução aparece aqui.', translate: 'Traduzir', translatorNote: 'Traduções de apoio. Para documentos oficiais, procure um tradutor certificado.',
    locateUnavailable: 'Seu navegador não disponibiliza localização.', requestingLocation: 'Solicitando acesso à sua localização...', locationUpdated: 'Localização atualizada para esta sessão.', locationDenied: 'Não foi possível acessar sua localização. Verifique as permissões do navegador.', mapUnavailable: 'Mapa indisponível. Confira sua conexão para carregar o mapa.',
    recoveryEmail: 'Informe seu e-mail para receber as instruções de recuperação.', recoverySent: 'Se {email} estiver cadastrado, você receberá instruções de recuperação.', sessionOnly: 'adicionado nesta sessão', documentDemo: 'Documento adicionado apenas a esta sessão de demonstração.', documentModal: 'Adicione uma identificação para manter seus dados essenciais organizados. Este protótipo não envia nem armazena documentos.',
    translateEmpty: 'Escreva uma frase para traduzir.', translateNotConnected: 'A tradução automática estará disponível quando o serviço de tradução for conectado.', translatorNotConnectedToast: 'O tradutor está pronto para ser conectado a um serviço de tradução.', sameLanguage: 'Selecione idiomas diferentes para traduzir.',
    account: 'Minha conta', personalType: 'Conta própria', institutionType: 'Instituição', accountData: '{name} · {role}. Seus dados ficam apenas nesta sessão de demonstração.', helpTitle: 'Estamos com você', helpMessage: 'Para uma emergência em Portugal, ligue 112. Em outras situações, confira os contatos e serviços locais na seção de apoio.', helpQuestion: 'Precisa de ajuda?', termsTitle: 'Termos de uso', privacyTitle: 'Política de privacidade', legalMessage: 'Este protótipo não possui cadastro, envio de dados ou armazenamento em servidor. As condições completas serão apresentadas antes do lançamento do serviço.', understand: 'Entendi', resourceMessage: 'As informações locais estão sendo preparadas. Confirme sempre detalhes importantes nos canais oficiais da sua região.',
    resources: {
      places: [['Saúde e bem-estar', 'Hospitais, centros de saúde e farmácias próximas.'], ['Serviços públicos', 'Atendimento municipal, imigração e apoio ao cidadão.'], ['Educação', 'Escolas, cursos de idioma e centros de formação.'], ['Apoio ao imigrante', 'Associações e organizações de acolhimento.']],
      laws: [['Residência e documentação', 'Informações gerais sobre regularização e serviços de imigração.'], ['Trabalho', 'Orientações sobre contratos, direitos laborais e apoio.'], ['Moradia', 'Noções sobre contratos de aluguel e direitos de inquilinos.'], ['Acesso a serviços', 'Conheça recursos públicos e canais oficiais de atendimento.']],
      transport: [['Metro de Lisboa', 'Linhas, estações e informações de serviço.'], ['Autocarros e ônibus', 'Consulte rotas e horários do transporte rodoviário.'], ['Elétricos', 'Linhas urbanas e ligações para pontos de interesse.'], ['Bilhetes e passes', 'Informações para planejar viagens e tarifas locais.']],
      emergency: [['Emergência geral', 'Portugal e União Europeia: ligue 112. Gratuito.'], ['Segurança e proteção', 'Em caso de perigo imediato, procure um local seguro e ligue 112.'], ['Emergência médica', 'Ligue 112 em situações médicas urgentes.'], ['Precisa de ajuda no idioma?', 'Abra o tradutor para preparar uma frase para o atendimento.']]
    }
  },
  en: {
    welcomeEyebrow: 'A warm welcome, without borders', welcomeTitle: 'The world changes.<br /><span>You belong.</span>', welcomeDescription: 'Information and support to help you feel at home, wherever life takes you.', welcomeFooter: 'A new place starts here', firstStep: 'FIRST STEP', welcomeKicker: 'WELCOME TO ENGLOB', languageQuestion: 'Which language<br />would you like to use?', languageHint: 'You can change this later.', continue: 'Continue', privacy: 'Your data, under your control.', help: 'Need help?',
    nextStep: 'Your next step', authVisualTitle: 'Arriving is just<br />the <span>beginning.</span>', authVisualDescription: 'Find a support network and make any place feel like home.', authVisualFooter: 'Connecting people<br />to new places.', stepAccess: 'PLATFORM ACCESS', loginTitle: 'It’s good to have you<br />here.', loginSubtitle: 'Sign in to continue.', createTitle: 'Let’s create your<br />account.', personal: 'Personal account', institution: 'Organization', email: 'Email', name: 'Full name', namePlaceholder: 'What should we call you?', institutionName: 'Company or organization', institutionPlaceholder: 'Organization name', password: 'Password', forgotPassword: 'Forgot password?', passwordPlaceholder: 'At least 8 characters', showPassword: 'Show password', hidePassword: 'Hide password', login: 'Sign in', createAccount: 'Create my account', signupPrompt: 'New to ENGLOB?', loginPrompt: 'Already have an account?', signup: 'Create account', back: 'Back', legalStart: 'By continuing, you agree to our', terms: 'Terms of use', legalJoin: 'and', policy: 'Privacy policy', authFooter: 'Made for the world, designed for you.',
    location: 'YOUR LOCATION', explore: 'EXPLORE', home: 'Overview', places: 'Nearby places', laws: 'Laws & rights', transport: 'Transportation', emergency: 'Emergency numbers', translator: 'Translator', support: 'We’re here for you', supportDesc: 'Help, anytime.', connected: 'Connected 24/7', dashboardKicker: 'ENGLOB', homeDescription: 'Hello, {name}. Here’s what you need for today.', updateLocation: 'Update location', mapRegion: 'Your area', locationActive: 'LOCATION ACTIVE', approximateLocation: 'Approximate location · Lisbon', nearbyServices: 'Services around you', gettingAround: 'Getting around', localTransport: 'Local transportation', knowRights: 'Know your rights', emergencyPortugal: 'EMERGENCY IN PORTUGAL', europeanEmergency: 'European emergency number', essentials: 'Essentials nearby', viewAll: 'View all', health: 'Healthcare', hospitalsPharmacies: 'Hospitals & pharmacies', publicServices: 'Public services', supportServices: 'Help & assistance', mobility: 'Mobility', stationsStops: 'Stations & stops', documents: 'Your documents', noDocuments: 'No documents added', addDocument: 'Add document',
    pagePlacesKicker: 'NEAR YOU', pageLawsKicker: 'LOCAL INFORMATION', pageTransportKicker: 'MOBILITY', pageEmergencyKicker: 'IMMEDIATE HELP', pageTranslatorKicker: 'COMMUNICATION', placesDescription: 'Find services and support near you.', lawsDescription: 'Guidance to help you understand life and your rights in Portugal.', transportDescription: 'Useful information to get around the city.', emergencyDescription: 'Save these contacts. Every minute counts in an emergency.', translatorDescription: 'Find the right words for everyday life.', nearby: 'Near me', searchPlaces: 'Search services and places', searchLabel: 'Search services and places', lisbon: 'Lisbon', learnMore: 'Learn more', call112: 'Call 112',
    sourceLanguage: 'Source language', targetLanguage: 'Target language', swapLanguages: 'Swap languages', translatePlaceholder: 'Write a phrase to translate...', translationPlaceholder: 'Your translation will appear here.', translate: 'Translate', translatorNote: 'Translations are for assistance. Use a certified translator for official documents.',
    locateUnavailable: 'Your browser does not provide location access.', requestingLocation: 'Requesting access to your location...', locationUpdated: 'Location updated for this session.', locationDenied: 'Could not access your location. Check your browser permissions.', mapUnavailable: 'Map unavailable. Check your connection to load the map.',
    recoveryEmail: 'Enter your email to receive recovery instructions.', recoverySent: 'If {email} is registered, you’ll receive recovery instructions.', sessionOnly: 'added for this session', documentDemo: 'Document added for this demo session only.', documentModal: 'Add an ID document to keep your essential information organized. This prototype does not send or store documents.',
    translateEmpty: 'Write a phrase to translate.', translateNotConnected: 'Automatic translation will be available once a translation service is connected.', translatorNotConnectedToast: 'The translator is ready to connect to a translation service.', sameLanguage: 'Choose two different languages to translate.',
    account: 'My account', personalType: 'Personal account', institutionType: 'Organization', accountData: '{name} · {role}. Your data stays in this demo session only.', helpTitle: 'We’re here for you', helpMessage: 'For emergencies in Portugal, call 112. Otherwise, browse local contacts and services in the support section.', helpQuestion: 'Need help?', termsTitle: 'Terms of use', privacyTitle: 'Privacy policy', legalMessage: 'This prototype does not create accounts, send data, or store information on a server. Full terms will be available before launch.', understand: 'Got it', resourceMessage: 'Local information is being prepared. Always confirm important details with official local sources.',
    resources: {
      places: [['Health & wellbeing', 'Nearby hospitals, health centers, and pharmacies.'], ['Public services', 'Municipal services, immigration, and citizen support.'], ['Education', 'Schools, language classes, and training centers.'], ['Immigrant support', 'Community groups and welcoming organizations.']],
      laws: [['Residency & documents', 'General information about residency and immigration services.'], ['Work', 'Guidance on contracts, workers’ rights, and support.'], ['Housing', 'An introduction to rental agreements and tenant rights.'], ['Access to services', 'Find public resources and official support channels.']],
      transport: [['Lisbon Metro', 'Lines, stations, and service information.'], ['Buses', 'Check local bus routes and schedules.'], ['Trams', 'City lines and connections to key destinations.'], ['Tickets & passes', 'Information to help plan fares and journeys.']],
      emergency: [['General emergency', 'Portugal and the European Union: call 112. Free of charge.'], ['Safety & protection', 'If you are in immediate danger, find a safe place and call 112.'], ['Medical emergency', 'Call 112 for urgent medical situations.'], ['Need language support?', 'Open the translator to prepare a phrase for emergency services.']]
    }
  },
  es: {
    welcomeEyebrow: 'Bienvenida sin fronteras', welcomeTitle: 'El mundo cambia.<br /><span>Tú perteneces.</span>', welcomeDescription: 'Información y apoyo para que te sientas en casa, dondequiera que te lleve la vida.', welcomeFooter: 'Un nuevo lugar empieza aquí', firstStep: 'PRIMER PASO', welcomeKicker: 'TE DAMOS LA BIENVENIDA A ENGLOB', languageQuestion: '¿En qué idioma<br />prefieres continuar?', languageHint: 'Puedes cambiar esta opción después.', continue: 'Continuar', privacy: 'Tus datos, bajo tu control.', help: '¿Necesitas ayuda?',
    nextStep: 'Tu próximo paso', authVisualTitle: 'Llegar es solo<br />el <span>principio.</span>', authVisualDescription: 'Cuenta con una red de apoyo para hacer de cualquier lugar un nuevo hogar.', authVisualFooter: 'Conectando personas<br />con nuevos lugares.', stepAccess: 'ACCESO A LA PLATAFORMA', loginTitle: 'Qué bueno tenerte<br />por aquí.', loginSubtitle: 'Inicia sesión para continuar.', createTitle: 'Vamos a crear tu<br />cuenta.', personal: 'Cuenta personal', institution: 'Institución', email: 'Correo electrónico', name: 'Nombre completo', namePlaceholder: '¿Cómo te llamamos?', institutionName: 'Empresa o institución', institutionPlaceholder: 'Nombre de la organización', password: 'Contraseña', forgotPassword: 'Olvidé mi contraseña', passwordPlaceholder: 'Mínimo 8 caracteres', showPassword: 'Mostrar contraseña', hidePassword: 'Ocultar contraseña', login: 'Iniciar sesión', createAccount: 'Crear mi cuenta', signupPrompt: '¿Aún no tienes cuenta?', loginPrompt: '¿Ya tienes una cuenta?', signup: 'Crear cuenta', back: 'Volver', legalStart: 'Al continuar, aceptas nuestros', terms: 'Términos de uso', legalJoin: 'y', policy: 'Política de privacidad', authFooter: 'Hecho para el mundo, pensado para ti.',
    location: 'TU UBICACIÓN', explore: 'EXPLORAR', home: 'Resumen', places: 'Lugares cercanos', laws: 'Leyes y derechos', transport: 'Transporte', emergency: 'Números de emergencia', translator: 'Traductor', support: 'Estamos contigo', supportDesc: 'Ayuda en cualquier momento.', connected: 'Conectado 24/7', dashboardKicker: 'ENGLOB', homeDescription: 'Hola, {name}. Esto es lo que necesitas para hoy.', updateLocation: 'Actualizar ubicación', mapRegion: 'Tu zona', locationActive: 'UBICACIÓN ACTIVA', approximateLocation: 'Ubicación aproximada · Lisboa', nearbyServices: 'Servicios a tu alrededor', gettingAround: 'Cómo desplazarte', localTransport: 'Transporte local', knowRights: 'Conoce tus derechos', emergencyPortugal: 'EMERGENCIAS EN PORTUGAL', europeanEmergency: 'Número europeo de emergencias', essentials: 'Servicios esenciales cercanos', viewAll: 'Ver todos', health: 'Salud', hospitalsPharmacies: 'Hospitales y farmacias', publicServices: 'Servicios públicos', supportServices: 'Apoyo y atención', mobility: 'Movilidad', stationsStops: 'Estaciones y paradas', documents: 'Tus documentos', noDocuments: 'No hay documentos añadidos', addDocument: 'Añadir documento',
    pagePlacesKicker: 'CERCA DE TI', pageLawsKicker: 'INFORMACIÓN LOCAL', pageTransportKicker: 'MOVILIDAD', pageEmergencyKicker: 'AYUDA INMEDIATA', pageTranslatorKicker: 'COMUNICACIÓN', placesDescription: 'Encuentra servicios y puntos de apoyo en tu zona.', lawsDescription: 'Orientación para entender la vida y tus derechos en Portugal.', transportDescription: 'Información útil para desplazarte por la ciudad.', emergencyDescription: 'Guarda estos contactos. En una emergencia, cada minuto cuenta.', translatorDescription: 'Encuentra las palabras adecuadas para el día a día.', nearby: 'Cerca de mí', searchPlaces: 'Buscar servicios y lugares', searchLabel: 'Buscar servicios y lugares', lisbon: 'Lisboa', learnMore: 'Más información', call112: 'Llamar al 112',
    sourceLanguage: 'Idioma de origen', targetLanguage: 'Idioma de destino', swapLanguages: 'Cambiar idiomas', translatePlaceholder: 'Escribe una frase para traducir...', translationPlaceholder: 'Tu traducción aparecerá aquí.', translate: 'Traducir', translatorNote: 'Traducciones de apoyo. Para documentos oficiales, consulta a un traductor certificado.',
    locateUnavailable: 'Tu navegador no permite acceder a la ubicación.', requestingLocation: 'Solicitando acceso a tu ubicación...', locationUpdated: 'Ubicación actualizada para esta sesión.', locationDenied: 'No se pudo acceder a tu ubicación. Revisa los permisos del navegador.', mapUnavailable: 'Mapa no disponible. Revisa tu conexión para cargarlo.',
    recoveryEmail: 'Introduce tu correo para recibir las instrucciones de recuperación.', recoverySent: 'Si {email} está registrado, recibirás instrucciones de recuperación.', sessionOnly: 'añadido durante esta sesión', documentDemo: 'Documento añadido solo durante esta sesión de demostración.', documentModal: 'Añade un documento de identificación para organizar tus datos esenciales. Este prototipo no envía ni almacena documentos.',
    translateEmpty: 'Escribe una frase para traducir.', translateNotConnected: 'La traducción automática estará disponible cuando se conecte el servicio.', translatorNotConnectedToast: 'El traductor está listo para conectarse a un servicio de traducción.', sameLanguage: 'Elige dos idiomas distintos para traducir.',
    account: 'Mi cuenta', personalType: 'Cuenta personal', institutionType: 'Institución', accountData: '{name} · {role}. Tus datos solo permanecen en esta sesión de demostración.', helpTitle: 'Estamos contigo', helpMessage: 'Para emergencias en Portugal, llama al 112. Para otras situaciones, consulta los contactos y servicios locales en la sección de apoyo.', helpQuestion: '¿Necesitas ayuda?', termsTitle: 'Términos de uso', privacyTitle: 'Política de privacidad', legalMessage: 'Este prototipo no crea cuentas, envía datos ni almacena información en un servidor. Las condiciones completas estarán disponibles antes del lanzamiento.', understand: 'Entendido', resourceMessage: 'Estamos preparando la información local. Confirma siempre los detalles importantes en fuentes oficiales de tu zona.',
    resources: {
      places: [['Salud y bienestar', 'Hospitales, centros de salud y farmacias cercanas.'], ['Servicios públicos', 'Atención municipal, inmigración y apoyo ciudadano.'], ['Educación', 'Escuelas, cursos de idiomas y centros de formación.'], ['Apoyo a inmigrantes', 'Asociaciones y organizaciones de acogida.']],
      laws: [['Residencia y documentación', 'Información general sobre regularización y servicios de inmigración.'], ['Trabajo', 'Orientación sobre contratos, derechos laborales y apoyo.'], ['Vivienda', 'Información sobre contratos de alquiler y derechos de inquilinos.'], ['Acceso a servicios', 'Recursos públicos y canales oficiales de atención.']],
      transport: [['Metro de Lisboa', 'Líneas, estaciones e información del servicio.'], ['Autobuses', 'Consulta rutas y horarios del transporte local.'], ['Tranvías', 'Líneas urbanas y conexiones con puntos de interés.'], ['Billetes y abonos', 'Información para planificar viajes y tarifas locales.']],
      emergency: [['Emergencia general', 'Portugal y Unión Europea: llama al 112. Es gratuito.'], ['Seguridad y protección', 'Si estás en peligro inmediato, busca un lugar seguro y llama al 112.'], ['Emergencia médica', 'Llama al 112 en situaciones médicas urgentes.'], ['¿Necesitas ayuda con el idioma?', 'Abre el traductor para preparar una frase para emergencias.']]
    }
  },
  fr: {
    welcomeEyebrow: 'Un accueil sans frontières', welcomeTitle: 'Le monde change.<br /><span>Vous avez votre place.</span>', welcomeDescription: 'Des informations et du soutien pour vous sentir chez vous, où que la vie vous mène.', welcomeFooter: 'Un nouveau lieu commence ici', firstStep: 'PREMIÈRE ÉTAPE', welcomeKicker: 'BIENVENUE SUR ENGLOB', languageQuestion: 'Dans quelle langue<br />souhaitez-vous continuer ?', languageHint: 'Vous pourrez modifier ce choix plus tard.', continue: 'Continuer', privacy: 'Vos données, sous votre contrôle.', help: 'Besoin d’aide ?',
    nextStep: 'Votre prochaine étape', authVisualTitle: 'L’arrivée n’est que<br />le <span>début.</span>', authVisualDescription: 'Un réseau de soutien pour faire de chaque endroit un nouveau chez-vous.', authVisualFooter: 'Relier les personnes<br />à de nouveaux lieux.', stepAccess: 'ACCÈS À LA PLATEFORME', loginTitle: 'Ravi de vous<br />accueillir.', loginSubtitle: 'Connectez-vous pour continuer.', createTitle: 'Créons votre<br />compte.', personal: 'Compte personnel', institution: 'Institution', email: 'E-mail', name: 'Nom complet', namePlaceholder: 'Comment vous appeler ?', institutionName: 'Entreprise ou institution', institutionPlaceholder: 'Nom de l’organisation', password: 'Mot de passe', forgotPassword: 'Mot de passe oublié ?', passwordPlaceholder: '8 caractères minimum', showPassword: 'Afficher le mot de passe', hidePassword: 'Masquer le mot de passe', login: 'Se connecter', createAccount: 'Créer mon compte', signupPrompt: 'Pas encore de compte ?', loginPrompt: 'Vous avez déjà un compte ?', signup: 'Créer un compte', back: 'Retour', legalStart: 'En continuant, vous acceptez nos', terms: 'Conditions d’utilisation', legalJoin: 'et notre', policy: 'Politique de confidentialité', authFooter: 'Fait pour le monde, pensé pour vous.',
    location: 'VOTRE EMPLACEMENT', explore: 'EXPLORER', home: 'Vue d’ensemble', places: 'Lieux à proximité', laws: 'Lois et droits', transport: 'Transports', emergency: 'Numéros d’urgence', translator: 'Traducteur', support: 'Nous sommes là', supportDesc: 'De l’aide, à tout moment.', connected: 'Connecté 24 h/24', dashboardKicker: 'ENGLOB', homeDescription: 'Bonjour, {name}. Voici ce dont vous avez besoin aujourd’hui.', updateLocation: 'Actualiser la position', mapRegion: 'Votre quartier', locationActive: 'POSITION ACTIVE', approximateLocation: 'Position approximative · Lisbonne', nearbyServices: 'Services autour de vous', gettingAround: 'Se déplacer', localTransport: 'Transports locaux', knowRights: 'Connaître vos droits', emergencyPortugal: 'URGENCES AU PORTUGAL', europeanEmergency: 'Numéro d’urgence européen', essentials: 'Services essentiels à proximité', viewAll: 'Tout voir', health: 'Santé', hospitalsPharmacies: 'Hôpitaux et pharmacies', publicServices: 'Services publics', supportServices: 'Aide et accompagnement', mobility: 'Mobilité', stationsStops: 'Stations et arrêts', documents: 'Vos documents', noDocuments: 'Aucun document ajouté', addDocument: 'Ajouter un document',
    pagePlacesKicker: 'À PROXIMITÉ', pageLawsKicker: 'INFORMATIONS LOCALES', pageTransportKicker: 'MOBILITÉ', pageEmergencyKicker: 'AIDE IMMÉDIATE', pageTranslatorKicker: 'COMMUNICATION', placesDescription: 'Trouvez des services et des points d’aide près de chez vous.', lawsDescription: 'Des conseils pour comprendre la vie et vos droits au Portugal.', transportDescription: 'Informations utiles pour vous déplacer en ville.', emergencyDescription: 'Enregistrez ces contacts. En urgence, chaque minute compte.', translatorDescription: 'Trouvez les mots justes au quotidien.', nearby: 'À proximité', searchPlaces: 'Rechercher des services et des lieux', searchLabel: 'Rechercher des services et des lieux', lisbon: 'Lisbonne', learnMore: 'En savoir plus', call112: 'Appeler le 112',
    sourceLanguage: 'Langue source', targetLanguage: 'Langue cible', swapLanguages: 'Inverser les langues', translatePlaceholder: 'Écrivez une phrase à traduire...', translationPlaceholder: 'Votre traduction apparaîtra ici.', translate: 'Traduire', translatorNote: 'Traductions d’aide. Pour les documents officiels, faites appel à un traducteur agréé.',
    locateUnavailable: 'Votre navigateur ne permet pas d’accéder à votre position.', requestingLocation: 'Demande d’accès à votre position...', locationUpdated: 'Position actualisée pour cette session.', locationDenied: 'Impossible d’accéder à votre position. Vérifiez les autorisations du navigateur.', mapUnavailable: 'Carte indisponible. Vérifiez votre connexion pour la charger.',
    recoveryEmail: 'Saisissez votre e-mail pour recevoir les instructions de récupération.', recoverySent: 'Si {email} est enregistré, vous recevrez les instructions de récupération.', sessionOnly: 'ajouté pour cette session', documentDemo: 'Document ajouté uniquement pour cette session de démonstration.', documentModal: 'Ajoutez une pièce d’identité pour organiser vos informations essentielles. Ce prototype n’envoie ni ne stocke de documents.',
    translateEmpty: 'Écrivez une phrase à traduire.', translateNotConnected: 'La traduction automatique sera disponible une fois le service connecté.', translatorNotConnectedToast: 'Le traducteur est prêt à être connecté à un service de traduction.', sameLanguage: 'Choisissez deux langues différentes pour traduire.',
    account: 'Mon compte', personalType: 'Compte personnel', institutionType: 'Institution', accountData: '{name} · {role}. Vos données restent dans cette session de démonstration.', helpTitle: 'Nous sommes là', helpMessage: 'En cas d’urgence au Portugal, appelez le 112. Sinon, consultez les contacts et services locaux dans la rubrique d’aide.', helpQuestion: 'Besoin d’aide ?', termsTitle: 'Conditions d’utilisation', privacyTitle: 'Politique de confidentialité', legalMessage: 'Ce prototype ne crée pas de compte, n’envoie pas de données et ne stocke rien sur un serveur. Les conditions complètes seront disponibles avant le lancement.', understand: 'Compris', resourceMessage: 'Les informations locales sont en préparation. Vérifiez toujours les détails importants auprès des sources officielles locales.',
    resources: {
      places: [['Santé et bien-être', 'Hôpitaux, centres de santé et pharmacies à proximité.'], ['Services publics', 'Services municipaux, immigration et aide aux citoyens.'], ['Éducation', 'Écoles, cours de langue et centres de formation.'], ['Aide aux immigrés', 'Associations et organismes d’accueil.']],
      laws: [['Séjour et documents', 'Informations générales sur le séjour et les services d’immigration.'], ['Travail', 'Conseils sur les contrats, les droits du travail et l’accompagnement.'], ['Logement', 'Notions sur les baux et les droits des locataires.'], ['Accès aux services', 'Ressources publiques et services officiels.']],
      transport: [['Métro de Lisbonne', 'Lignes, stations et informations sur le service.'], ['Bus', 'Consultez les itinéraires et horaires des bus.'], ['Tramways', 'Lignes urbaines et liaisons vers les lieux importants.'], ['Billets et abonnements', 'Informations pour planifier les trajets et les tarifs.']],
      emergency: [['Urgence générale', 'Portugal et Union européenne : appelez le 112. Appel gratuit.'], ['Sécurité et protection', 'En cas de danger immédiat, mettez-vous en sécurité et appelez le 112.'], ['Urgence médicale', 'Appelez le 112 en cas d’urgence médicale.'], ['Besoin d’aide linguistique ?', 'Ouvrez le traducteur pour préparer une phrase pour les secours.']]
    }
  }
};

function t(key) {
  return translations[state.language]?.[key] ?? translations.pt[key] ?? key;
}

const pageKeys = {
  home: 'home', places: 'places', laws: 'laws', transport: 'transport', emergency: 'emergency', translator: 'translator'
};

const pageKickerKeys = {
  places: 'pagePlacesKicker', laws: 'pageLawsKicker', transport: 'pageTransportKicker', emergency: 'pageEmergencyKicker', translator: 'pageTranslatorKicker'
};

function pageName(page) {
  return t(pageKeys[page]);
}

function updateLanguageLabel() {
  state.languageName = document.querySelector(`.language-option[data-language="${state.language}"]`)?.dataset.label || 'Português';
}

const icon = (name) => `<i data-lucide="${name}"></i>`;

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function applyLanguage() {
  updateLanguageLabel();
  document.querySelectorAll('.language-option').forEach((option) => {
    const selected = option.dataset.language === state.language;
    option.classList.toggle('selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es', fr: 'fr' }[state.language] || 'pt-BR';
  document.title = `ENGLOB | ${t('welcomeDescription')}`;
  document.querySelector('.welcome-copy .eyebrow').innerHTML = `<span class="eyebrow-dot"></span> ${t('welcomeEyebrow')}`;
  document.querySelector('.welcome-copy h1').innerHTML = t('welcomeTitle');
  document.querySelector('.welcome-copy p').textContent = t('welcomeDescription');
  document.querySelector('.welcome-footer > span:last-child').textContent = t('welcomeFooter');
  document.querySelector('.language-side .step-label span:first-child').textContent = t('firstStep');
  document.querySelector('.language-heading .tiny-kicker').textContent = t('welcomeKicker');
  document.querySelector('.language-heading h2').innerHTML = t('languageQuestion');
  document.querySelector('.language-heading p').textContent = t('languageHint');
  document.querySelector('#continue-language').innerHTML = `${t('continue')} ${icon('arrow-right')}`;
  document.querySelector('.language-content .privacy-note').innerHTML = `${icon('shield-check')} ${t('privacy')}`;
  document.querySelector('.language-bottom [data-open="help"]').textContent = t('help');

  document.querySelector('.auth-visual-copy .eyebrow').innerHTML = `<span class="eyebrow-dot"></span> ${t('nextStep')}`;
  document.querySelector('.auth-visual-copy h1').innerHTML = t('authVisualTitle');
  document.querySelector('.auth-visual-copy p').textContent = t('authVisualDescription');
  document.querySelector('.auth-visual-bottom > span:last-child').innerHTML = t('authVisualFooter');
  document.querySelector('#back-language').innerHTML = `${icon('arrow-left')} ${t('back')}`;
  document.querySelector('.auth-heading .tiny-kicker').textContent = t('stepAccess');
  document.querySelector('.auth-tabs').setAttribute('aria-label', t('institution'));
  document.querySelector('[data-role="personal"]').innerHTML = `${icon('user-round')} ${t('personal')}`;
  document.querySelector('[data-role="institution"]').innerHTML = `${icon('building-2')} ${t('institution')}`;
  document.querySelector('label[for="email"]').textContent = t('email');
  document.querySelector('#email').placeholder = state.language === 'fr' ? 'vous@e-mail.com' : state.language === 'es' ? 'tu@email.com' : state.language === 'en' ? 'you@email.com' : 'voce@email.com';
  document.querySelector('label[for="full-name"]').textContent = t('name');
  document.querySelector('#full-name').placeholder = t('namePlaceholder');
  document.querySelector('label[for="institution-name"]').textContent = t('institutionName');
  document.querySelector('#institution-name').placeholder = t('institutionPlaceholder');
  document.querySelector('.password-label').childNodes[0].textContent = `${t('password')} `;
  document.querySelector('#forgot-password').textContent = t('forgotPassword');
  document.querySelector('#password').placeholder = t('passwordPlaceholder');
  document.querySelector('#toggle-password').setAttribute('aria-label', t('showPassword'));
  document.querySelector('#signup-copy').textContent = t('signupPrompt');
  document.querySelector('.auth-legal').innerHTML = `${t('legalStart')} <button data-open="terms" class="text-button">${t('terms')}</button> ${t('legalJoin')} <button data-open="privacy" class="text-button">${t('policy')}</button>.`;
  document.querySelector('.auth-bottom > span:last-child').textContent = t('authFooter');

  document.querySelector('.sidebar-location small').textContent = t('location');
  document.querySelector('.nav-caption').textContent = t('explore');
  document.querySelectorAll('.nav-item').forEach((item) => { item.querySelector('span:nth-child(2)').textContent = pageName(item.dataset.page); });
  document.querySelector('.sidebar-support strong').textContent = t('support');
  document.querySelector('.sidebar-support > div:nth-child(2) span').textContent = t('supportDesc');
  document.querySelector('#support-button').setAttribute('aria-label', t('support'));
  document.querySelector('.connectivity').innerHTML = `<span class="connectivity-dot"></span> ${t('connected')}`;
  document.querySelector('#language-switch').setAttribute('aria-label', t('welcomeKicker'));
  document.querySelector('#top-avatar').setAttribute('aria-label', t('account'));
  document.querySelector('#close-sidebar').setAttribute('aria-label', t('back'));
  document.querySelector('#open-sidebar').setAttribute('aria-label', t('explore'));
  document.querySelector('#profile-type').textContent = state.role === 'personal' ? t('personalType') : t('institutionType');

  if (!authScreen.classList.contains('hidden')) updateAuthMode();
  if (!dashboardScreen.classList.contains('hidden')) renderPage(state.currentPage);
  refreshIcons();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3200);
}

function openScreen(screen) {
  [languageScreen, authScreen, dashboardScreen].forEach((item) => item.classList.add('hidden'));
  screen.classList.remove('hidden');
}

document.querySelectorAll('.language-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.language-option').forEach((option) => {
      option.classList.remove('selected');
      option.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
    state.language = button.dataset.language;
    state.languageName = button.dataset.label;
    localStorage.setItem('englob-language', state.language);
    applyLanguage();
  });
});

document.querySelector('#continue-language').addEventListener('click', () => {
  document.querySelector('#chosen-language').textContent = state.languageName.toLocaleUpperCase();
  if (state.returnAfterLanguage) {
    state.returnAfterLanguage = false;
    openScreen(dashboardScreen);
    renderPage(state.currentPage);
  } else {
    openScreen(authScreen);
  }
  refreshIcons();
});

document.querySelector('#back-language').addEventListener('click', () => openScreen(languageScreen));

function updateAuthMode() {
  const nameField = document.querySelector('#name-field');
  const institutionField = document.querySelector('#institution-field');
  const title = document.querySelector('#auth-title');
  const subtitle = document.querySelector('#auth-subtitle');
  const submit = document.querySelector('#auth-submit');
  const signupCopy = document.querySelector('#signup-copy');
  const signupToggle = document.querySelector('#signup-toggle');
  const password = document.querySelector('#password');
  const nameInput = document.querySelector('#full-name');
  const institutionInput = document.querySelector('#institution-name');
  const roleLabel = state.role === 'personal' ? t('personalType') : t('institutionType');

  nameField.classList.toggle('hidden', !state.signingUp);
  institutionField.classList.toggle('hidden', !state.signingUp || state.role !== 'institution');
  nameInput.required = state.signingUp;
  institutionInput.required = state.signingUp && state.role === 'institution';
  password.autocomplete = state.signingUp ? 'new-password' : 'current-password';
  title.innerHTML = state.signingUp ? t('createTitle') : t('loginTitle');
  subtitle.textContent = state.signingUp ? `${t('createAccount')} · ${roleLabel}.` : t('loginSubtitle');
  submit.innerHTML = `${state.signingUp ? t('createAccount') : t('login')} ${icon('arrow-right')}`;
  signupCopy.textContent = state.signingUp ? t('loginPrompt') : t('signupPrompt');
  signupToggle.textContent = state.signingUp ? t('login') : t('signup');
  document.querySelector('#auth-message').textContent = '';
  refreshIcons();
}

document.querySelectorAll('.auth-tab').forEach((button) => {
  button.addEventListener('click', () => {
    state.role = button.dataset.role;
    document.querySelectorAll('.auth-tab').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    updateAuthMode();
  });
});

document.querySelector('#signup-toggle').addEventListener('click', () => {
  state.signingUp = !state.signingUp;
  updateAuthMode();
});

document.querySelector('#toggle-password').addEventListener('click', (event) => {
  const input = document.querySelector('#password');
  const showing = input.type === 'password';
  input.type = showing ? 'text' : 'password';
  event.currentTarget.setAttribute('aria-label', showing ? 'Ocultar senha' : 'Mostrar senha');
  event.currentTarget.innerHTML = icon(showing ? 'eye-off' : 'eye');
  refreshIcons();
});

document.querySelector('#forgot-password').addEventListener('click', () => {
  const email = document.querySelector('#email').value;
  if (!email) {
    document.querySelector('#auth-message').textContent = t('recoveryEmail');
    document.querySelector('#email').focus();
    return;
  }
  showToast(t('recoverySent').replace('{email}', email));
});

document.querySelector('#auth-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const name = document.querySelector('#full-name').value.trim();
  if (!email || document.querySelector('#password').value.length < 8) return;
  if (state.signingUp && !name) return;
  state.userName = name || email.split('@')[0] || t('account');
  const initial = state.userName.trim().charAt(0).toLocaleUpperCase() || 'M';
  document.querySelector('#profile-name').textContent = state.userName;
  document.querySelector('#profile-type').textContent = state.role === 'personal' ? t('personalType') : t('institutionType');
  document.querySelector('#profile-avatar').textContent = initial;
  document.querySelector('#top-avatar').textContent = initial;
  openScreen(dashboardScreen);
  renderPage('home');
});

function pageHeading(page, description, action = '') {
  return `<div class="page-heading"><div><span class="page-kicker">${pageKickerKeys[page] ? t(pageKickerKeys[page]) : t('dashboardKicker')}</span><h1>${pageName(page)}</h1><p>${description}</p></div>${action}</div>`;
}

function mapMarkup() {
  return `<div class="map-panel"><div id="map" aria-label="${t('mapRegion')}"></div><div class="map-topline"><div class="map-title">${icon('map-pin')} ${t('mapRegion')}</div><span class="map-live"><span class="connectivity-dot"></span> ${t('locationActive')}</span></div><div class="map-bottomline"><span>${t('lisbon')}, Portugal</span><span>© OpenStreetMap</span></div></div>`;
}

function homePage() {
  const firstName = state.userName.split(' ')[0];
  return `${pageHeading('home', t('homeDescription').replace('{name}', firstName), `<button class="subtle-button" data-action="locate">${icon('locate-fixed')} ${t('updateLocation')}</button>`)}
    <div class="dashboard-grid">${mapMarkup()}<div class="quick-stack">
      <button class="quick-card" data-page="places"><span class="quick-icon lime">${icon('map-pin')}</span><span class="quick-copy"><strong>${t('places')}</strong><small>${t('nearbyServices')}</small></span>${icon('arrow-up-right')}</button>
      <button class="quick-card" data-page="transport"><span class="quick-icon">${icon('train-front')}</span><span class="quick-copy"><strong>${t('gettingAround')}</strong><small>${t('localTransport')}</small></span>${icon('arrow-up-right')}</button>
      <button class="quick-card" data-page="laws"><span class="quick-icon">${icon('scale')}</span><span class="quick-copy"><strong>${t('laws')}</strong><small>${t('knowRights')}</small></span>${icon('arrow-up-right')}</button>
      <button class="emergency-card" data-page="emergency"><span class="emergency-card-top">${icon('phone-call')} ${t('emergencyPortugal')} ${icon('arrow-up-right')}</span><span class="emergency-number"><strong>112</strong><span>${t('europeanEmergency')}</span></span></button>
    </div></div>
    <div class="below-map"><section class="section-panel"><div class="section-panel-head"><h2>${t('essentials')}</h2><button data-page="places">${t('viewAll')}</button></div><div class="place-list">
      <div class="place-item"><span class="place-symbol">${icon('hospital')}</span><span><strong>${t('health')}</strong><small>${t('hospitalsPharmacies')}</small></span></div>
      <div class="place-item"><span class="place-symbol">${icon('landmark')}</span><span><strong>${t('publicServices')}</strong><small>${t('supportServices')}</small></span></div>
      <div class="place-item"><span class="place-symbol">${icon('train-front')}</span><span><strong>${t('mobility')}</strong><small>${t('stationsStops')}</small></span></div>
    </div></section><section class="section-panel identity-card"><div><div class="identity-card-top"><h2>${t('documents')}</h2>${icon('shield-check')}</div><div class="identity-status"><span></span> ${t('noDocuments')}</div></div><button class="subtle-button" data-action="documents">${icon('plus')} ${t('addDocument')}</button></section></div>`;
}

const resourceIcons = {
  places: ['hospital', 'landmark', 'graduation-cap', 'briefcase-business'],
  laws: ['book-open-check', 'briefcase-business', 'house', 'heart-handshake'],
  transport: ['train-front', 'bus', 'tram-front', 'ticket'],
  emergency: ['phone-call', 'shield-alert', 'hospital', 'languages']
};

function resourcePage(page) {
  const descriptions = {
    places: 'placesDescription', laws: 'lawsDescription', transport: 'transportDescription', emergency: 'emergencyDescription'
  };
  const action = page === 'places' ? `<button class="subtle-button" data-action="locate">${icon('locate-fixed')} ${t('nearby')}</button>` : '';
  const rows = t('resources')[page].map(([title, detail], index) => {
    const symbol = resourceIcons[page][index];
    const button = page === 'emergency' && index === 0
      ? `<a class="subtle-button" href="tel:112">${icon('phone')} ${t('call112')}</a>`
      : `<button class="subtle-button" data-action="resource" data-index="${index}">${t('learnMore')} ${icon('arrow-up-right')}</button>`;
    return `<div class="resource-row"><span class="quick-icon ${index === 0 ? 'lime' : ''}">${icon(symbol)}</span><div class="resource-row-copy"><strong>${title}</strong><span>${detail}</span></div>${button}</div>`;
  }).join('');
  return `${pageHeading(page, t(descriptions[page]), action)}${page === 'places' ? `<div class="content-toolbar"><label class="search-box">${icon('search')}<input id="resource-search" type="search" placeholder="${t('searchPlaces')}" aria-label="${t('searchLabel')}" /></label><button class="subtle-button" data-action="locate">${icon('map-pin')} ${t('lisbon')}</button></div>` : ''}<section class="content-panel"><div class="resource-list">${rows}</div></section>`;
}

function translatorPage() {
  const names = { pt: ['Português', 'Inglês', 'Espanhol', 'Francês'], en: ['Portuguese', 'English', 'Spanish', 'French'], es: ['Portugués', 'Inglés', 'Español', 'Francés'], fr: ['Portugais', 'Anglais', 'Espagnol', 'Français'] }[state.language];
  const options = ['pt', 'en', 'es', 'fr'].map((code, index) => `<option value="${code}">${names[index]}</option>`).join('');
  return `${pageHeading('translator', t('translatorDescription'))}<section class="content-panel translator-panel"><div class="translator-controls"><select id="source-language" class="language-select" aria-label="${t('sourceLanguage')}">${options}</select><button class="swap-languages" id="swap-languages" aria-label="${t('swapLanguages')}">${icon('arrow-left-right')}</button><select id="target-language" class="language-select" aria-label="${t('targetLanguage')}">${options}</select></div><textarea id="translator-input" class="translator-input" placeholder="${t('translatePlaceholder')}"></textarea><div id="translator-result" class="translator-result">${t('translationPlaceholder')}</div><button class="button button-primary" data-action="translate">${t('translate')} ${icon('arrow-right')}</button><p class="privacy-note">${icon('info')} ${t('translatorNote')}</p></section>`;
}

function renderPage(page) {
  if (!pageKeys[page]) page = 'home';
  state.currentPage = page;
  document.querySelector('#breadcrumb-current').textContent = pageName(page);
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.page === page));
  pageContent.innerHTML = page === 'home' ? homePage() : page === 'translator' ? translatorPage() : resourcePage(page);
  pageContent.dataset.page = page;
  document.querySelector('#sidebar').classList.remove('open');
  document.querySelector('#sidebar-backdrop').classList.remove('visible');
  refreshIcons();
  if (page === 'home') initializeMap();
}

function initializeMap() {
  if (!window.L) {
    document.querySelector('#map').innerHTML = `<div class="empty-state">${t('mapUnavailable')}</div>`;
    return;
  }
  if (!state.map) {
    state.map = L.map('map', { zoomControl: false, scrollWheelZoom: false }).setView([38.7223, -9.1393], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(state.map);
    L.control.zoom({ position: 'bottomright' }).addTo(state.map);
    const markerIcon = L.divIcon({ className: '', html: '<span class="map-marker"><span></span></span>', iconSize: [28, 28], iconAnchor: [14, 28] });
    state.marker = L.marker([38.7223, -9.1393], { icon: markerIcon }).addTo(state.map).bindPopup(t('approximateLocation'));
  } else {
    window.setTimeout(() => state.map.invalidateSize(), 100);
  }
}

function locateUser() {
  if (!navigator.geolocation) {
    showToast(t('locateUnavailable'));
    return;
  }
  showToast(t('requestingLocation'));
  navigator.geolocation.getCurrentPosition((position) => {
    const coordinates = [position.coords.latitude, position.coords.longitude];
    if (state.map && state.marker) {
      state.map.setView(coordinates, 15);
      state.marker.setLatLng(coordinates).bindPopup(t('mapRegion')).openPopup();
    }
    showToast(t('locationUpdated'));
  }, () => showToast(t('locationDenied')), { enableHighAccuracy: true, timeout: 10000 });
}

function openModal(title, copy, form = false) {
  const documentPlaceholder = { en: 'Ex.: Passport', es: 'Ej.: Pasaporte', fr: 'Ex. : Passeport', pt: 'Ex.: Passaporte' }[state.language];
  modalRoot.innerHTML = `<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-button" data-close-modal aria-label="${t('back')}">${icon('x')}</button></div><p class="modal-copy">${copy}</p>${form ? `<form class="modal-form" id="document-form"><input id="document-name" placeholder="${documentPlaceholder}" aria-label="${t('documents')}" required /><button class="button button-primary" type="submit">${t('addDocument')}</button></form>` : `<button class="button button-primary" data-close-modal>${t('understand')}</button>`}</section></div>`;
  refreshIcons();
  modalRoot.querySelector('.modal-backdrop').addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-backdrop') || event.target.closest('[data-close-modal]')) modalRoot.innerHTML = '';
  });
  const documentForm = modalRoot.querySelector('#document-form');
  if (documentForm) documentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const documentName = modalRoot.querySelector('#document-name').value.trim();
    if (documentName) {
      document.querySelector('.identity-status').innerHTML = `<span style="background:var(--lime)"></span> ${documentName} ${t('sessionOnly')}`;
      modalRoot.innerHTML = '';
      showToast(t('documentDemo'));
    }
  });
}

document.addEventListener('click', (event) => {
  if (event.target.closest('#swap-languages')) {
    const source = document.querySelector('#source-language');
    const target = document.querySelector('#target-language');
    const previous = source.value;
    source.value = target.value;
    target.value = previous;
    return;
  }
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    renderPage(pageButton.dataset.page);
    return;
  }
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === 'locate') locateUser();
  if (action === 'documents') openModal(t('documents'), t('documentModal'), true);
  if (action === 'resource') {
    const resource = t('resources')[pageContent.dataset.page][Number(actionButton.dataset.index)];
    openModal(resource[0], t('resourceMessage'));
  }
  if (action === 'translate') {
    const input = document.querySelector('#translator-input').value.trim();
    const source = document.querySelector('#source-language').value;
    const target = document.querySelector('#target-language').value;
    const result = document.querySelector('#translator-result');
    if (!input) {
      showToast(t('translateEmpty'));
      return;
    }
    if (source === target) {
      result.textContent = input;
      result.classList.add('is-filled');
      return;
    }
    result.textContent = t('translateNotConnected');
    result.classList.add('is-filled');
    showToast(t('translatorNotConnectedToast'));
  }
});

document.addEventListener('input', (event) => {
  if (!event.target.matches('#resource-search')) return;
  const query = event.target.value.toLocaleLowerCase();
  document.querySelectorAll('.resource-row').forEach((row) => {
    row.classList.toggle('hidden', !row.textContent.toLocaleLowerCase().includes(query));
  });
});

document.querySelector('#open-sidebar').addEventListener('click', () => {
  document.querySelector('#sidebar').classList.add('open');
  document.querySelector('#sidebar-backdrop').classList.add('visible');
});
document.querySelector('#close-sidebar').addEventListener('click', () => {
  document.querySelector('#sidebar').classList.remove('open');
  document.querySelector('#sidebar-backdrop').classList.remove('visible');
});
document.querySelector('#sidebar-backdrop').addEventListener('click', () => {
  document.querySelector('#sidebar').classList.remove('open');
  document.querySelector('#sidebar-backdrop').classList.remove('visible');
});
document.querySelector('#language-switch').addEventListener('click', () => {
  state.returnAfterLanguage = true;
  openScreen(languageScreen);
  refreshIcons();
});
document.querySelector('#profile-button').addEventListener('click', () => {
  const role = state.role === 'personal' ? t('personalType') : t('institutionType');
  openModal(t('account'), t('accountData').replace('{name}', state.userName).replace('{role}', role));
});
document.querySelector('#top-avatar').addEventListener('click', () => document.querySelector('#profile-button').click());
document.querySelector('#support-button').addEventListener('click', () => openModal(t('helpTitle'), t('helpMessage')));

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-open]');
  if (!button) return;
  const title = button.dataset.open === 'help' ? t('helpQuestion') : button.dataset.open === 'terms' ? t('termsTitle') : t('privacyTitle');
  openModal(title, t('legalMessage'));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') modalRoot.innerHTML = '';
});

applyLanguage();
refreshIcons();