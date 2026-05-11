import { useState } from "react";

const T={fr:{flag:"🇫🇷",name:"Français",rtl:false,hello:"Bonjour",welcome:"Comment vous sentez-vous aujourd'hui ?",meds:"💊 Mes médicaments",rdv:"📅 Mon rendez-vous",msg:"💬 Message à ma famille",settings:"🌍 Langue",back:"← Retour",confirm:"Confirmer la prise",confirmed:"✓ Confirmé !",next_rdv:"Prochain rendez-vous",no_rdv:"Aucun rendez-vous",send:"Envoyer",msg_ph:"Écrivez votre message…",msg_sent:"✓ Message envoyé à votre famille !",choose:"Choisissez votre langue",good:"Je me sens bien 😊",ok:"Ça va 😐",bad:"Je ne me sens pas bien 😔",how:"Comment vous sentez-vous ?",doc:"📁 Mes documents"},
ar:{flag:"🇲🇦",name:"العربية",rtl:true,hello:"مرحباً",welcome:"كيف حالك اليوم؟",meds:"💊 دوائي",rdv:"📅 موعدي",msg:"💬 رسالة لعائلتي",settings:"🌍 اللغة",back:"→ رجوع",confirm:"تأكيد الجرعة",confirmed:"✓ تم التأكيد!",next_rdv:"الموعد القادم",no_rdv:"لا يوجد موعد",send:"إرسال",msg_ph:"اكتب رسالتك…",msg_sent:"✓ تم الإرسال!",choose:"اختر لغتك",good:"أشعر بتحسن 😊",ok:"لا بأس 😐",bad:"لا أشعر بالتحسن 😔",how:"كيف تشعر؟",doc:"📁 وثائقي"},
pt:{flag:"🇵🇹",name:"Português",rtl:false,hello:"Olá",welcome:"Como se sente hoje?",meds:"💊 Meus medicamentos",rdv:"📅 Minha consulta",msg:"💬 Mensagem à família",settings:"🌍 Idioma",back:"← Voltar",confirm:"Confirmar toma",confirmed:"✓ Confirmado!",next_rdv:"Próxima consulta",no_rdv:"Nenhuma consulta",send:"Enviar",msg_ph:"Escreva a sua mensagem…",msg_sent:"✓ Enviado!",choose:"Escolha o idioma",good:"Sinto-me bem 😊",ok:"Estou bem 😐",bad:"Não me sinto bem 😔",how:"Como se sente?",doc:"📁 Meus documentos"},
tr:{flag:"🇹🇷",name:"Türkçe",rtl:false,hello:"Merhaba",welcome:"Bugün nasılsınız?",meds:"💊 İlaçlarım",rdv:"📅 Randevum",msg:"💬 Aileye mesaj",settings:"🌍 Dil",back:"← Geri",confirm:"Dozu onayla",confirmed:"✓ Onaylandı!",next_rdv:"Sonraki randevu",no_rdv:"Randevu yok",send:"Gönder",msg_ph:"Mesajınızı yazın…",msg_sent:"✓ Gönderildi!",choose:"Dilinizi seçin",good:"İyi hissediyorum 😊",ok:"İdare eder 😐",bad:"İyi hissetmiyorum 😔",how:"Nasıl hissediyorsunuz?",doc:"📁 Belgelerim"},
ro:{flag:"🇷🇴",name:"Română",rtl:false,hello:"Bună ziua",welcome:"Cum vă simțiți astăzi?",meds:"💊 Medicamentele mele",rdv:"📅 Consultația mea",msg:"💬 Mesaj pentru familie",settings:"🌍 Limbă",back:"← Înapoi",confirm:"Confirmați doza",confirmed:"✓ Confirmat!",next_rdv:"Următoarea consultație",no_rdv:"Nicio consultație",send:"Trimite",msg_ph:"Scrieți mesajul…",msg_sent:"✓ Trimis!",choose:"Alegeți limba",good:"Mă simt bine 😊",ok:"Merge 😐",bad:"Nu mă simt bine 😔",how:"Cum vă simțiți?",doc:"📁 Documentele mele"},
en:{flag:"🇬🇧",name:"English",rtl:false,hello:"Hello",welcome:"How are you feeling today?",meds:"💊 My medications",rdv:"📅 My appointment",msg:"💬 Message my family",settings:"🌍 Language",back:"← Back",confirm:"Confirm dose",confirmed:"✓ Confirmed!",next_rdv:"Next appointment",no_rdv:"No appointment",send:"Send",msg_ph:"Write your message…",msg_sent:"✓ Sent to your family!",choose:"Choose your language",good:"I feel good 😊",ok:"I'm okay 😐",bad:"I don't feel well 😔",how:"How do you feel?",doc:"📁 My documents"},
cr:{flag:"🌴",name:"Kréyòl",rtl:false,hello:"Bonjou",welcome:"Koman ou santi ou jodi a?",meds:"💊 Médicaman mwen",rdv:"📅 Randevou mwen",msg:"💬 Mesaj ba fanmi",settings:"🌍 Lang",back:"← Tounen",confirm:"Konfime dòz la",confirmed:"✓ Konfime!",next_rdv:"Pwochen randevou",no_rdv:"Pa gen randevou",send:"Voye",msg_ph:"Ekri mesaj ou…",msg_sent:"✓ Voye!",choose:"Chwazi lang ou",good:"Mwen santi byen 😊",ok:"Sa ap ka 😐",bad:"Mwen pa santi byen 😔",how:"Koman ou santi ou?",doc:"📁 Dokiman mwen"},
pl:{flag:"🇵🇱",name:"Polski",rtl:false,hello:"Dzień dobry",welcome:"Jak się Pan/Pani czuje?",meds:"💊 Moje leki",rdv:"📅 Moja wizyta",msg:"💬 Wiadomość do rodziny",settings:"🌍 Język",back:"← Powrót",confirm:"Potwierdź dawkę",confirmed:"✓ Potwierdzone!",next_rdv:"Następna wizyta",no_rdv:"Brak wizyty",send:"Wyślij",msg_ph:"Napisz wiadomość…",msg_sent:"✓ Wysłano!",choose:"Wybierz język",good:"Czuję się dobrze 😊",ok:"Tak sobie 😐",bad:"Nie czuję się dobrze 😔",how:"Jak się czujesz?",doc:"📁 Moje dokumenty"}};

const INIT_PROCHE={prenom:"Pierre",nom:"Dubois",age:78,groupeSanguin:"A+",pathologies:["Maladie d'Alzheimer (stade modéré)","Hypertension artérielle","Diabète type 2"],allergies:["Pénicilline","Aspirine"],antecedents:["Infarctus du myocarde (2018)","Fracture col du fémur (2021)"],mutuelle:"MGEN — N° 123456789",numeroSecurite:"1 48 03 75 115 XXX XX",adresse:"12 rue des Lilas, 75015 Paris",tel:"01 45 67 89 12",medecins:[{id:1,nom:"Dr. Martin Sophie",specialite:"Médecin traitant",tel:"04 76 00 12 34",email:"martin@cabinet.fr"},{id:2,nom:"Dr. Benali Karim",specialite:"Neurologue",tel:"04 76 45 67 89",email:"k.benali@chu-grenoble.fr"},{id:3,nom:"Dr. Faure Claire",specialite:"Cardiologue",tel:"04 76 22 33 44",email:"c.faure@belledonne.fr"}],contacts:[{id:1,nom:"Marie Dubois",lien:"Fille",tel:"06 12 34 56 78",role:"Aidant principal"},{id:2,nom:"Émile Dubois",lien:"Fils",tel:"06 98 76 54 32",role:"Aidant secondaire"}]};
const INIT_MEDS=[{id:1,nom:"Donépézil",dose:"10mg",horaires:["20h00"],renouvellement:5,prescripteur:"Dr. Benali",indication:"Alzheimer",prises:{}},{id:2,nom:"Amlodipine",dose:"5mg",horaires:["08h00"],renouvellement:18,prescripteur:"Dr. Faure",indication:"Hypertension",prises:{}},{id:3,nom:"Metformine",dose:"500mg",horaires:["08h00","13h00","20h00"],renouvellement:22,prescripteur:"Dr. Martin",indication:"Diabète",prises:{}},{id:4,nom:"Ramipril",dose:"5mg",horaires:["08h00"],renouvellement:8,prescripteur:"Dr. Faure",indication:"Hypertension",prises:{}}];
const INIT_RDV=[{id:1,titre:"Neurologue Dr. Benali",date:"2026-05-14",heure:"14h30",lieu:"CHU Grenoble",assigne:"Marie",notes:"Renouvellement Donépézil",type:"consultation",fait:false},{id:2,titre:"Prise de sang à jeun",date:"2026-05-16",heure:"08h00",lieu:"Laboratoire Alphalab",assigne:"",notes:"Glycémie + bilan complet",type:"bilan",fait:false},{id:3,titre:"Cardiologue Dr. Faure",date:"2026-05-22",heure:"10h15",lieu:"Clinique Belledonne",assigne:"Émile",notes:"Écho-doppler annuel",type:"consultation",fait:false}];
const INIT_JOURNAL=[{id:1,date:"2026-05-10",auteur:"Marie",humeur:"bien",contenu:"Papa bien dormi. Humeur calme ce matin, a mangé tout son petit déjeuner. Légère confusion en fin d'après-midi mais passagère.",tension:"13/8",poids:"72",temperature:""},{id:2,date:"2026-05-09",auteur:"Émile",humeur:"bien",contenu:"Visite de 2h. Papa a reconnu les enfants. Tension 14/8. Bonne forme générale.",tension:"14/8",poids:"",temperature:""},{id:3,date:"2026-05-08",auteur:"Marie",humeur:"difficile",contenu:"Nuit agitée. Refus Metformine du midi. Appel Dr. Martin laissé.",tension:"",poids:"",temperature:"37,4"}];
const INIT_DOCS=[{id:1,nom:"Ordonnance Donépézil",type:"ordonnance",date:"2026-04-15",auteur:"Dr. Benali"},{id:2,nom:"Bilan sanguin mars 2026",type:"bilan",date:"2026-03-20",auteur:"Laboratoire"},{id:3,nom:"Compte-rendu cardio 2025",type:"compte-rendu",date:"2025-11-08",auteur:"Dr. Faure"},{id:4,nom:"Carte Vitale",type:"administratif",date:"2025-01-01",auteur:""},{id:5,nom:"Attestation MGEN",type:"administratif",date:"2026-01-01",auteur:""}];
const INIT_FAMILLE=[{id:1,nom:"Marie Dubois",role:"Aidant principal",tel:"06 12 34 56 78",email:"marie@email.fr",acces:"complet",dispo:"Lun–Ven + week-ends"},{id:2,nom:"Émile Dubois",role:"Aidant secondaire",tel:"06 98 76 54 32",email:"emile@email.fr",acces:"lecture",dispo:"Week-ends"},{id:3,nom:"Murielle R.",role:"Aide à domicile",tel:"04 76 11 22 33",email:"murielle@aide.fr",acces:"soins",dispo:"Lun/Mer/Ven matin"}];
const AIDES=[{nom:"APA – Allocation Personnalisée d'Autonomie",montant:"jusqu'à 1 807€/mois",condition:"GIR 1 à 4, 60 ans+",dossier:"Conseil Départemental",delai:"2 mois",statut:"eligible"},{nom:"AJPA – Allocation Journalière Proche Aidant",montant:"64€/jour",condition:"Arrêt travail pour s'occuper du proche",dossier:"CPAM",delai:"3 semaines",statut:"eligible"},{nom:"Crédit d'impôt aidant",montant:"jusqu'à 1 200€/an",condition:"Frais d'aide à domicile",dossier:"Déclaration fiscale",delai:"N+1",statut:"eligible"},{nom:"Aide CARSAT",montant:"variable",condition:"Retraité en perte d'autonomie",dossier:"CARSAT",delai:"6 semaines",statut:"a-verifier"},{nom:"Exonération taxe d'habitation",montant:"100%",condition:"GIR 1 ou 2 + ressources",dossier:"Impôts",delai:"1 an",statut:"eligible"},{nom:"PCH – Prestation Compensation Handicap",montant:"jusqu'à 1 800€/mois",condition:"Moins de 60 ans, handicap reconnu",dossier:"MDPH",delai:"4 mois",statut:"non-eligible"}];
const ZARIT_Q=["Vous sentez-vous débordé(e) par les soins que vous prodiguez ?","Avez-vous le sentiment de ne pas avoir assez de temps pour vous ?","Vous sentez-vous stressé(e) par votre rôle d'aidant(e) ?","Avez-vous le sentiment que votre santé se dégrade ?","Avez-vous renoncé à des activités sociales à cause de votre proche ?","Y a-t-il des conflits familiaux liés à la prise en charge ?","Avez-vous le sentiment de ne plus contrôler votre vie ?","Souhaiteriez-vous pouvoir confier votre proche à quelqu'un d'autre ?"];
const NAV=[{id:"dashboard",icon:"⊞",label:"Tableau de bord"},{id:"dossier",icon:"◈",label:"Dossier médical"},{id:"agenda",icon:"◷",label:"Agenda"},{id:"medicaments",icon:"◎",label:"Médicaments"},{id:"journal",icon:"◐",label:"Journal de bord"},{id:"documents",icon:"◫",label:"Documents"},{id:"famille",icon:"◉",label:"Équipe aidants"},{id:"aides",icon:"◊",label:"Aides financières"},{id:"bienetre",icon:"♡",label:"Bien-être"},{id:"parametres",icon:"⊙",label:"Paramètres"}];

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{--bl:#1D55E8;--bl2:#EBF0FD;--bl3:#BFCFFA;--gn:#137A3A;--gn2:#EAF5EE;--gn3:#C8E8D3;--am:#B85C00;--am2:#FEF3E6;--am3:#FDDDB8;--rd:#C0272B;--rd2:#FDEAEA;--rd3:#F8C5C5;--pu:#5B21B6;--pu2:#EDE9FE;--txt:#1A1815;--mu:#6B6860;--bg:#F7F5F1;--sur:#FFFFFF;--bd:#E2DDD5;--sw:228px}
body{font-family:'Instrument Sans',sans-serif;color:var(--txt);background:var(--sur);overflow-x:hidden}
input,textarea,select,button{font-family:inherit}
.wlc{min-height:100vh;background:linear-gradient(160deg,#0D1B4B 0%,#1D55E8 40%,#137A3A 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;position:relative;overflow:hidden}
.wlc::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")}
.wlc-logo{display:flex;align-items:center;gap:14px;margin-bottom:16px;position:relative}
.wlc-logo-ic{width:64px;height:64px;background:rgba(255,255,255,0.15);border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:32px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2)}
.wlc-logo-nm{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;color:#fff;letter-spacing:-1px}
.wlc-tagline{font-size:18px;color:rgba(255,255,255,0.75);margin-bottom:8px;position:relative;text-align:center}
.wlc-sub{font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:50px;position:relative;text-align:center;max-width:400px}
.role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:720px;width:100%;position:relative}
@media(max-width:600px){.role-grid{grid-template-columns:1fr}}
.role-card{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:20px;padding:28px 20px;cursor:pointer;transition:all .2s;text-align:center;backdrop-filter:blur(10px)}
.role-card:hover{background:rgba(255,255,255,0.2);transform:translateY(-4px);border-color:rgba(255,255,255,0.4)}
.role-ic{font-size:44px;margin-bottom:14px;display:block}
.role-nm{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#fff;margin-bottom:6px}
.role-ds{font-size:13px;color:rgba(255,255,255,0.65);line-height:1.55}
.role-tag{display:inline-block;font-size:10px;font-weight:600;padding:3px 10px;border-radius:20px;margin-top:10px;text-transform:uppercase;letter-spacing:0.5px}
.tag-gn{background:rgba(19,122,58,0.4);color:#A7F3C3}
.tag-bl{background:rgba(29,85,232,0.4);color:#BFCFFA}
.tag-am{background:rgba(184,92,0,0.4);color:#FDD9A3}
.wlc-ft{position:relative;margin-top:40px;font-size:12px;color:rgba(255,255,255,0.4);text-align:center}
.pat{min-height:100vh;display:flex;flex-direction:column;background:var(--bg)}
.pat-hd{background:linear-gradient(135deg,var(--bl),var(--gn));padding:20px;display:flex;align-items:center;justify-content:space-between}
.pat-hd-logo{display:flex;align-items:center;gap:10px}
.pat-hd-ic{width:36px;height:36px;background:rgba(255,255,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px}
.pat-hd-nm{font-family:'Syne',sans-serif;font-size:16px;font-weight:800;color:#fff}
.pat-hd-btn{background:rgba(255,255,255,0.2);border:none;color:#fff;padding:7px 13px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer}
.pat-body{flex:1;padding:24px 20px}
.pat-hello{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--txt);margin-bottom:6px}
.pat-welcome{font-size:16px;color:var(--mu);margin-bottom:28px;line-height:1.5}
.pat-btns{display:flex;flex-direction:column;gap:14px}
.pat-btn{width:100%;padding:22px 24px;border-radius:18px;border:none;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:16px;text-align:left}
.pat-btn:hover{transform:translateY(-2px)}
.pat-btn-ic{font-size:32px;flex-shrink:0}
.pat-btn-tx{font-family:'Syne',sans-serif;font-size:20px;font-weight:700}
.pat-btn-sub{font-size:13px;opacity:0.8;margin-top:2px}
.pat-btn.meds{background:linear-gradient(135deg,var(--bl2),#D4E0FB);border:2px solid var(--bl3)}
.pat-btn.meds .pat-btn-tx{color:var(--bl)}
.pat-btn.rdv{background:linear-gradient(135deg,var(--gn2),#BBF7D0);border:2px solid var(--gn3)}
.pat-btn.rdv .pat-btn-tx{color:var(--gn)}
.pat-btn.msg{background:linear-gradient(135deg,var(--am2),#FDE9C8);border:2px solid var(--am3)}
.pat-btn.msg .pat-btn-tx{color:var(--am)}
.pat-btn.doc{background:linear-gradient(135deg,var(--pu2),#DDD6FE);border:2px solid #C4B5FD}
.pat-btn.doc .pat-btn-tx{color:var(--pu)}
.pat-feel{margin-top:24px}
.pat-feel-title{font-size:16px;font-weight:600;color:var(--mu);margin-bottom:12px;text-align:center}
.pat-feel-btns{display:flex;gap:10px}
.pat-feel-btn{flex:1;padding:14px 8px;border-radius:14px;border:2px solid var(--bd);background:var(--sur);cursor:pointer;font-size:13px;font-weight:600;transition:all .15s;text-align:center}
.pat-feel-btn:hover{border-color:var(--bl);background:var(--bl2);color:var(--bl)}
.pat-feel-btn.sel{border-color:var(--gn);background:var(--gn2);color:var(--gn)}
.pat-sub{min-height:100vh;display:flex;flex-direction:column;background:var(--bg)}
.pat-sub-hd{background:var(--sur);border-bottom:1px solid var(--bd);padding:16px 20px;display:flex;align-items:center;gap:12px}
.pat-back{background:none;border:none;font-size:22px;cursor:pointer;color:var(--bl);flex-shrink:0}
.pat-sub-title{font-family:'Syne',sans-serif;font-size:18px;font-weight:800}
.pat-sub-body{flex:1;padding:24px 20px;display:flex;flex-direction:column;gap:16px}
.med-big{background:var(--sur);border-radius:18px;border:2px solid var(--bd);padding:20px}
.med-big-nm{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;margin-bottom:4px}
.med-big-dose{font-size:16px;color:var(--mu);margin-bottom:16px}
.med-big-btns{display:flex;gap:10px;flex-wrap:wrap}
.med-big-btn{padding:12px 20px;border-radius:14px;border:2px solid var(--bd);background:transparent;font-size:16px;font-weight:700;cursor:pointer;transition:all .15s}
.med-big-btn.ok{background:var(--gn2);border-color:var(--gn);color:var(--gn)}
.rdv-big{background:var(--sur);border-radius:18px;border:2px solid var(--gn3);padding:24px}
.rdv-big-date{font-family:'Syne',sans-serif;font-size:42px;font-weight:800;color:var(--gn);line-height:1}
.rdv-big-mo{font-size:18px;color:var(--gn);font-weight:600;margin-bottom:12px}
.rdv-big-ti{font-size:20px;font-weight:700;margin-bottom:6px}
.rdv-big-li{font-size:15px;color:var(--mu)}
.rdv-big-hr{font-size:18px;font-weight:600;color:var(--bl);margin-top:10px}
.msg-box{background:var(--sur);border-radius:18px;border:2px solid var(--bd);padding:20px;flex:1}
.msg-ta{width:100%;border:none;outline:none;font-size:18px;line-height:1.7;resize:none;min-height:200px;background:transparent}
.msg-send{width:100%;padding:18px;background:var(--am);color:#fff;border:none;border-radius:14px;font-size:18px;font-weight:700;cursor:pointer;transition:background .15s;margin-top:12px}
.msg-send:hover{background:#9A4C00}
.msg-sent{text-align:center;padding:40px 20px;font-size:20px;font-weight:700;color:var(--gn)}
.lang-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.lang-card{background:var(--sur);border:2px solid var(--bd);border-radius:14px;padding:16px;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:12px}
.lang-card:hover{border-color:var(--bl);background:var(--bl2)}
.lang-card.sel{border-color:var(--bl);background:var(--bl2)}
.lang-flag{font-size:28px}
.lang-nm{font-size:16px;font-weight:700}
.app{display:flex;min-height:100vh}
.sb{width:var(--sw);background:var(--sur);border-right:1.5px solid var(--bd);position:fixed;top:0;left:0;bottom:0;display:flex;flex-direction:column;z-index:100;overflow-y:auto}
.sb-hd{padding:18px 16px 14px;border-bottom:1px solid var(--bd)}
.sb-logo{display:flex;align-items:center;gap:10px}
.sb-logo-ic{width:34px;height:34px;background:linear-gradient(135deg,var(--bl),var(--gn));border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff}
.sb-logo-nm{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:-0.5px}
.pc{margin:12px 12px 0;background:linear-gradient(135deg,var(--bl2),#E8F5EE);border:1px solid var(--bl3);border-radius:12px;padding:11px 13px;cursor:pointer}
.pc-n{font-size:13px;font-weight:600;color:var(--bl)}
.pc-s{font-size:11px;color:var(--mu);margin-top:2px}
.ni{display:flex;align-items:center;gap:9px;padding:8px 10px;margin:1px 8px;border-radius:8px;cursor:pointer;transition:background .12s;border:none;background:transparent;width:calc(100% - 16px);text-align:left}
.ni:hover{background:var(--bg)}
.ni.on{background:var(--bl2)}
.ni-ic{font-size:14px;width:20px;text-align:center;color:var(--mu);flex-shrink:0}
.ni.on .ni-ic{color:var(--bl)}
.ni-lb{font-size:13px;font-weight:500;color:var(--mu)}
.ni.on .ni-lb{color:var(--bl);font-weight:600}
.sb-ft{margin-top:auto;padding:14px 16px;border-top:1px solid var(--bd);font-size:11px;color:#A8A49C}
.sb-ft strong{color:var(--gn);font-weight:600}
.sb-switch{margin:8px 12px;background:none;border:1px solid var(--bd);border-radius:8px;padding:7px 12px;font-size:12px;font-weight:600;color:var(--mu);cursor:pointer;width:calc(100% - 24px);transition:all .15s}
.sb-switch:hover{border-color:var(--bl);color:var(--bl);background:var(--bl2)}
.main{margin-left:var(--sw);flex:1;padding:28px 32px;min-height:100vh;max-width:calc(100vw - var(--sw))}
.ph{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}
.pt{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.5px}
.ps{font-size:13px;color:var(--mu);margin-top:3px}
.card{background:var(--sur);border:1px solid var(--bd);border-radius:14px;padding:18px 20px}
.ct{font-size:10px;font-weight:600;color:var(--mu);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.kpi{background:var(--sur);border:1px solid var(--bd);border-radius:12px;padding:14px 16px}
.kv{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;line-height:1.1}
.kl{font-size:11px;color:var(--mu);margin-top:4px;font-weight:500}
.al{display:flex;align-items:flex-start;gap:8px;padding:9px 12px;border-radius:8px;font-size:12px;margin-bottom:7px;font-weight:500;line-height:1.5}
.al-w{background:var(--am2);color:var(--am);border:1px solid var(--am3)}
.al-d{background:var(--rd2);color:var(--rd);border:1px solid var(--rd3)}
.al-s{background:var(--gn2);color:var(--gn);border:1px solid var(--gn3)}
.al-b{background:var(--bl2);color:var(--bl);border:1px solid var(--bl3)}
.badge{display:inline-flex;align-items:center;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap}
.b-bl{background:var(--bl2);color:var(--bl)}
.b-gn{background:var(--gn2);color:var(--gn)}
.b-am{background:var(--am2);color:var(--am)}
.b-rd{background:var(--rd2);color:var(--rd)}
.b-mu{background:var(--bg);color:var(--mu);border:1px solid var(--bd)}
.b-pu{background:var(--pu2);color:var(--pu)}
.tag-item{display:inline-flex;align-items:center;gap:5px;padding:3px 8px 3px 10px;border-radius:20px;font-size:12px;font-weight:500;margin:3px}
.tag-rm{background:none;border:none;cursor:pointer;font-size:14px;line-height:1;padding:0;color:inherit;opacity:0.6}
.tag-rm:hover{opacity:1}
.mr{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid var(--bd)}
.mr:last-child{border-bottom:none}
.mn{font-size:14px;font-weight:600;margin-bottom:2px}
.md{font-size:12px;color:var(--mu)}
.hg{display:flex;gap:6px;flex-wrap:wrap}
.hb{padding:5px 11px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid var(--bd);background:transparent;transition:all .12s}
.hb.ok{background:var(--gn2);border-color:var(--gn);color:var(--gn)}
.hb:not(.ok):hover{border-color:var(--bl);color:var(--bl)}
.rc{background:var(--sur);border:1px solid var(--bd);border-radius:12px;padding:13px 15px;margin-bottom:9px;display:flex;gap:13px;align-items:flex-start}
.rd-dt{border-radius:8px;padding:8px 10px;text-align:center;min-width:48px;flex-shrink:0}
.rd-day{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;line-height:1.1}
.rd-mo{font-size:10px;text-transform:uppercase;font-weight:600}
.rd-hr{font-size:11px;color:var(--mu);margin-top:2px}
.rd-ti{font-size:14px;font-weight:600;margin-bottom:3px}
.rd-li{font-size:12px;color:var(--mu)}
.je{border-left:3px solid;padding:12px 0 12px 16px;margin-bottom:16px}
.je.bien{border-color:var(--gn)}
.je.moyen{border-color:var(--am)}
.je.difficile{border-color:var(--rd)}
.jm{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:5px}
.jd{font-size:12px;font-weight:600;color:var(--mu)}
.ja{font-size:12px;color:var(--bl);font-weight:500}
.jc{font-size:13px;line-height:1.75;margin-bottom:8px}
.jvitaux{display:flex;gap:10px;flex-wrap:wrap}
.jv{font-size:11px;background:var(--bg);border:1px solid var(--bd);border-radius:6px;padding:3px 8px;color:var(--mu)}
.dc{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--bd)}
.dc:last-child{border-bottom:none}
.dc-ic{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.dc-n{font-size:13px;font-weight:600}
.dc-s{font-size:11px;color:var(--mu);margin-top:2px}
.ac{background:var(--sur);border:1px solid var(--bd);border-radius:12px;padding:16px}
.an{font-size:14px;font-weight:600;margin-bottom:6px;line-height:1.4}
.am-val{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;margin-bottom:8px}
.ar{display:flex;gap:6px;font-size:12px;color:var(--mu);margin-bottom:3px}
.fc{background:var(--sur);border:1px solid var(--bd);border-radius:12px;padding:15px}
.zq{background:var(--sur);border:1px solid var(--bd);border-radius:12px;padding:13px 15px;margin-bottom:8px}
.zt{font-size:13px;line-height:1.55;margin-bottom:9px}
.zo{display:flex;gap:6px;flex-wrap:wrap}
.zob{flex:1;min-width:70px;padding:7px 4px;border-radius:8px;border:1.5px solid var(--bd);font-size:11px;cursor:pointer;text-align:center;font-weight:500;transition:all .12s;background:transparent}
.zob.s0{border-color:var(--gn);background:var(--gn2);color:var(--gn)}
.zob.s1{border-color:#4D9E65;background:#F0FAF3;color:#4D9E65}
.zob.s2{border-color:var(--am);background:var(--am2);color:var(--am)}
.zob.s3{border-color:#C04A20;background:#FFF0E8;color:#C04A20}
.zob.s4{border-color:var(--rd);background:var(--rd2);color:var(--rd)}
.sb-bar{height:8px;border-radius:4px;background:var(--bd);overflow:hidden;margin:8px 0}
.sb-fill{height:100%;border-radius:4px;transition:width .5s ease}
.fg{margin-bottom:12px}
.fl{font-size:10px;font-weight:600;color:var(--mu);margin-bottom:4px;display:block;text-transform:uppercase;letter-spacing:0.5px}
.fi{width:100%;padding:8px 11px;border:1px solid var(--bd);border-radius:8px;font-size:13px;background:var(--bg);color:var(--txt);outline:none;transition:border-color .12s}
.fi:focus{border-color:var(--bl);background:var(--sur)}
.fta{resize:vertical;min-height:72px;line-height:1.6}
.fsel{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%236B6860' stroke-width='1.5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
.btn{padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .12s;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}
.bp{background:var(--bl);color:#fff}
.bp:hover{background:#1544C8}
.bs{background:var(--bg);color:var(--txt);border:1px solid var(--bd)}
.bs:hover{background:var(--bd)}
.bg{background:var(--gn);color:#fff}
.bg:hover{background:#0F6030}
.br{background:var(--rd2);color:var(--rd);border:1px solid var(--rd3)}
.ai-box{background:linear-gradient(135deg,var(--bl2) 0%,#EEF7F1 100%);border:1px solid var(--bl3);border-radius:12px;padding:14px 16px}
.ai-lbl{font-size:10px;font-weight:600;color:var(--bl);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.ai-txt{font-size:13px;line-height:1.8}
.spinner{display:inline-block;width:13px;height:13px;border:2px solid var(--bl3);border-top-color:var(--bl);border-radius:50%;animation:spin .7s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.ir{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
.ir:last-child{border-bottom:none}
.ik{font-size:12px;color:var(--mu);font-weight:500;padding-top:1px}
.iv{font-size:13px;font-weight:500;text-align:right}
.fxb{display:flex;justify-content:space-between;align-items:center}
.fxs{display:flex;align-items:center;gap:8px}
.mt8{margin-top:8px}
.mt14{margin-top:14px}
.mt20{margin-top:20px}
.gap-b{display:flex;flex-direction:column;gap:14px}
.empty{font-size:13px;color:var(--mu);padding:12px 0}
.sgnt{min-height:100vh;background:linear-gradient(160deg,#EEF2FF 0%,#F7F5F1 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;text-align:center}
.sgnt-ic{font-size:64px;margin-bottom:20px}
.sgnt-h{font-family:'Syne',sans-serif;font-size:32px;font-weight:800;margin-bottom:12px;letter-spacing:-1px}
.sgnt-sub{font-size:16px;color:var(--mu);max-width:460px;margin:0 auto 32px;line-height:1.7}
.sgnt-feats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;max-width:500px;margin:0 auto 32px}
.sgnt-feat{background:#fff;border:1px solid var(--bd);border-radius:12px;padding:14px;text-align:left}
.sgnt-feat-ic{font-size:20px;margin-bottom:6px}
.sgnt-feat-t{font-size:13px;font-weight:600;margin-bottom:3px}
.sgnt-feat-d{font-size:11px;color:var(--mu)}
.sgnt-form{display:flex;gap:10px;max-width:400px;margin:0 auto}
.sgnt-input{flex:1;padding:11px 14px;border:1.5px solid var(--bd);border-radius:10px;font-size:14px;outline:none}
.sgnt-input:focus{border-color:var(--bl)}
.sgnt-btn{background:var(--bl);color:#fff;border:none;padding:11px 20px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer}
@media(max-width:768px){.g2,.g4{grid-template-columns:1fr}.main{margin-left:0;padding:20px 16px}.sb{display:none}}
`;

export default function App() {
  const [role, setRole] = useState(null);
  const [lang, setLang] = useState("fr");
  return (
    <>
      <style>{CSS}</style>
      {!role && <WelcomeScreen setRole={setRole} />}
      {role === "patient" && <PatientApp lang={lang} setLang={setLang} setRole={setRole} />}
      {role === "aidant" && <AidantApp setRole={setRole} />}
      {role === "soignant" && <SoignantApp setRole={setRole} />}
    </>
  );
}

function WelcomeScreen({setRole}){
  return(
    <div className="wlc">
      <div className="wlc-logo"><div className="wlc-logo-ic">🤝</div><span className="wlc-logo-nm">AidantPro</span></div>
      <p className="wlc-tagline">La plateforme qui réunit famille, patient et soignants</p>
      <p className="wlc-sub">Choisissez votre profil pour accéder à votre espace personnalisé</p>
      <div className="role-grid">
        <div className="role-card" onClick={()=>setRole("patient")}><span className="role-ic">👴</span><div className="role-nm">Je suis le patient</div><div className="role-ds">Confirmez vos médicaments, consultez vos rendez-vous et envoyez un message à votre famille</div><span className="role-tag tag-gn">8 langues disponibles</span></div>
        <div className="role-card" onClick={()=>setRole("aidant")}><span className="role-ic">👩‍👧</span><div className="role-nm">Je suis aidant</div><div className="role-ds">Gérez le dossier médical, coordonnez la famille, suivez les traitements et accédez aux aides financières</div><span className="role-tag tag-bl">Accès complet</span></div>
        <div className="role-card" onClick={()=>setRole("soignant")}><span className="role-ic">👨‍⚕️</span><div className="role-nm">Je suis soignant</div><div className="role-ds">Médecin, infirmière, aide à domicile — accédez au dossier partagé et communiquez avec la famille</div><span className="role-tag tag-am">Bêta disponible</span></div>
      </div>
      <p className="wlc-ft">Données hébergées en France 🇫🇷 · RGPD · HDS · © 2026 AidantPro</p>
    </div>
  );
}

function PatientApp({lang,setLang,setRole}){
  const [screen,setScreen]=useState("home");
  const [meds,setMeds]=useState(INIT_MEDS);
  const [msgText,setMsgText]=useState("");
  const [msgSent,setMsgSent]=useState(false);
  const [feelSel,setFeelSel]=useState(null);
  const today=new Date().toISOString().split("T")[0];
  const t=T[lang]||T.fr;
  const dir=t.rtl?"rtl":"ltr";
  const prochainRdv=INIT_RDV.filter(r=>!r.fait).sort((a,b)=>a.date.localeCompare(b.date))[0];
  function togglePrise(medId,h){const key=`${today}_${h}`;setMeds(p=>p.map(m=>m.id!==medId?m:{...m,prises:{...m.prises,[key]:!m.prises[key]}}));}
  if(screen==="lang")return(<div className="pat-sub" dir={dir}><div className="pat-sub-hd"><button className="pat-back" onClick={()=>setScreen("home")}>{t.back}</button><div className="pat-sub-title">{t.choose}</div></div><div className="pat-sub-body"><div className="lang-grid">{Object.entries(T).map(([k,v])=><div key={k} className={`lang-card ${lang===k?"sel":""}`} onClick={()=>{setLang(k);setScreen("home");}}><span className="lang-flag">{v.flag}</span><div><div className="lang-nm">{v.name}</div></div></div>)}</div></div></div>);
  if(screen==="meds")return(<div className="pat-sub" dir={dir}><div className="pat-sub-hd"><button className="pat-back" onClick={()=>setScreen("home")}>{t.back}</button><div className="pat-sub-title">💊 Médicaments</div></div><div className="pat-sub-body">{meds.map(m=><div key={m.id} className="med-big"><div className="med-big-nm">💊 {m.nom}</div><div className="med-big-dose">{m.dose} — {m.indication}</div><div className="med-big-btns">{m.horaires.map(h=>{const ok=!!m.prises[`${today}_${h}`];return<button key={h} className={`med-big-btn ${ok?"ok":""}`} onClick={()=>togglePrise(m.id,h)} style={{fontSize:18}}>{h} {ok?t.confirmed:t.confirm}</button>;})}</div></div>)}</div></div>);
  if(screen==="rdv")return(<div className="pat-sub" dir={dir}><div className="pat-sub-hd"><button className="pat-back" onClick={()=>setScreen("home")}>{t.back}</button><div className="pat-sub-title">📅 {t.next_rdv}</div></div><div className="pat-sub-body">{prochainRdv?<div className="rdv-big"><div className="rdv-big-date">{prochainRdv.date.split("-")[2]}</div><div className="rdv-big-mo">{new Date(prochainRdv.date+"T12:00").toLocaleString("fr-FR",{month:"long",year:"numeric"})}</div><div className="rdv-big-ti">{prochainRdv.titre}</div><div className="rdv-big-li">📍 {prochainRdv.lieu}</div><div className="rdv-big-hr">🕐 {prochainRdv.heure}</div>{prochainRdv.assigne&&<div style={{marginTop:12}}><span className="badge b-bl">👤 {prochainRdv.assigne} vous accompagne</span></div>}</div>:<div style={{textAlign:"center",padding:"40px 20px",fontSize:18,color:"var(--mu)"}}>{t.no_rdv}</div>}</div></div>);
  if(screen==="msg")return(<div className="pat-sub" dir={dir}><div className="pat-sub-hd"><button className="pat-back" onClick={()=>{setScreen("home");setMsgSent(false);setMsgText("");}}>{t.back}</button><div className="pat-sub-title">💬 Message</div></div><div className="pat-sub-body">{msgSent?<div className="msg-sent">{t.msg_sent}</div>:<><div className="msg-box"><textarea className="msg-ta" placeholder={t.msg_ph} value={msgText} onChange={e=>setMsgText(e.target.value)} style={{fontSize:20}}/></div><button className="msg-send" onClick={()=>{if(msgText.trim())setMsgSent(true);}}>{t.send} →</button></>}</div></div>);
  return(<div className="pat" dir={dir}><div className="pat-hd"><div className="pat-hd-logo"><div className="pat-hd-ic">🤝</div><div className="pat-hd-nm">AidantPro</div></div><div style={{display:"flex",gap:8}}><button className="pat-hd-btn" onClick={()=>setScreen("lang")}>{t.settings}</button><button className="pat-hd-btn" onClick={()=>setRole(null)}>←</button></div></div><div className="pat-body"><div className="pat-hello">{t.hello}, Pierre 👋</div><div className="pat-welcome">{t.welcome}</div><div className="pat-btns"><button className="pat-btn meds" onClick={()=>setScreen("meds")}><div className="pat-btn-ic">💊</div><div><div className="pat-btn-tx">{t.meds}</div><div className="pat-btn-sub">{meds.reduce((a,m)=>a+m.horaires.filter(h=>m.prises[`${today}_${h}`]).length,0)}/{meds.reduce((a,m)=>a+m.horaires.length,0)} confirmés</div></div></button><button className="pat-btn rdv" onClick={()=>setScreen("rdv")}><div className="pat-btn-ic">📅</div><div><div className="pat-btn-tx">{t.rdv}</div><div className="pat-btn-sub">{prochainRdv?`${prochainRdv.date.split("-")[2]} — ${prochainRdv.heure}`:t.no_rdv}</div></div></button><button className="pat-btn msg" onClick={()=>setScreen("msg")}><div className="pat-btn-ic">💬</div><div><div className="pat-btn-tx">{t.msg}</div><div className="pat-btn-sub">Marie, Émile…</div></div></button><button className="pat-btn doc"><div className="pat-btn-ic">📁</div><div><div className="pat-btn-tx">{t.doc}</div><div className="pat-btn-sub">{INIT_DOCS.length} documents</div></div></button></div><div className="pat-feel"><div className="pat-feel-title">{t.how}</div><div className="pat-feel-btns">{[["good",t.good],["ok",t.ok],["bad",t.bad]].map(([k,l])=><button key={k} className={`pat-feel-btn ${feelSel===k?"sel":""}`} onClick={()=>setFeelSel(k)}>{l}</button>)}</div></div></div></div>);
}

function AidantApp({setRole}){
  const [page,setPage]=useState("dashboard");
  const [proche,setProche]=useState(INIT_PROCHE);
  const [meds,setMeds]=useState(INIT_MEDS);
  const [rdvList,setRdvList]=useState(INIT_RDV);
  const [journal,setJournal]=useState(INIT_JOURNAL);
  const [docs,setDocs]=useState(INIT_DOCS);
  const [famille,setFamille]=useState(INIT_FAMILLE);
  const [zarit,setZarit]=useState({});
  const [aiText,setAiText]=useState("");
  const [aiLoading,setAiLoading]=useState(false);
  const today=new Date().toISOString().split("T")[0];
  const prisTodayCount=meds.reduce((a,m)=>a+m.horaires.filter(h=>m.prises[`${today}_${h}`]).length,0);
  const totalPrises=meds.reduce((a,m)=>a+m.horaires.length,0);
  const zaritScore=Object.values(zarit).reduce((a,b)=>a+b,0);
  const zaritPct=ZARIT_Q.length?Math.round((zaritScore/(ZARIT_Q.length*4))*100):0;
  const zaritColor=zaritPct<30?"var(--gn)":zaritPct<60?"var(--am)":"var(--rd)";
  function togglePrise(medId,h){const key=`${today}_${h}`;setMeds(p=>p.map(m=>m.id!==medId?m:{...m,prises:{...m.prises,[key]:!m.prises[key]}}));}
  async function genererResume(){setAiLoading(true);setAiText("");try{const ctx=journal.slice(0,3).map(j=>`${j.date} (${j.auteur}): ${j.contenu}${j.tension?` Tension:${j.tension}`:""}`).join("\n");const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,messages:[{role:"user",content:`Tu es un assistant médical. Génère un résumé clinique factuel (3-4 phrases) à présenter au médecin traitant basé sur:\n\n${ctx}\n\nPatient: ${proche.prenom} ${proche.nom}, ${proche.age} ans. Pathologies: ${proche.pathologies.join(", ")}.\n\nRésumé:`}]})});const data=await res.json();setAiText(data.content?.[0]?.text||"Erreur.");}catch{setAiText("Erreur de connexion.");}setAiLoading(false);}
  const alertes=[...meds.filter(m=>m.renouvellement<=10).map(m=>({type:"w",msg:`Renouvellement ${m.nom} dans ${m.renouvellement} jours`})),...rdvList.filter(r=>!r.fait&&!r.assigne).map(r=>({type:"d",msg:`RDV non assigné : ${r.titre}`}))];
  const P={proche,setProche,meds,setMeds,rdvList,setRdvList,journal,setJournal,docs,setDocs,famille,setFamille,zarit,setZarit,zaritPct,zaritColor,aiText,aiLoading,genererResume,today,togglePrise,prisTodayCount,totalPrises,alertes,setPage};
  return(<div className="app"><aside className="sb"><div className="sb-hd"><div className="sb-logo"><div className="sb-logo-ic">A</div><span className="sb-logo-nm">AidantPro</span></div></div><div className="pc" onClick={()=>setPage("dossier")}><div className="pc-n">{proche.prenom} {proche.nom}</div><div className="pc-s">{proche.age} ans · Alzheimer modéré</div></div><nav style={{padding:"6px 8px",flex:1,overflowY:"auto"}}>{NAV.map(n=><button key={n.id} className={`ni ${page===n.id?"on":""}`} onClick={()=>setPage(n.id)}><span className="ni-ic">{n.icon}</span><span className="ni-lb">{n.label}</span></button>)}</nav><button className="sb-switch" onClick={()=>setRole(null)}>⇄ Changer d'interface</button><div className="sb-ft">AidantPro · <strong>Plan Famille 15€/mois</strong></div></aside><main className="main">{page==="dashboard"&&<Dashboard {...P}/>}{page==="dossier"&&<Dossier {...P}/>}{page==="agenda"&&<Agenda {...P}/>}{page==="medicaments"&&<Medicaments {...P}/>}{page==="journal"&&<Journal {...P}/>}{page==="documents"&&<Documents {...P}/>}{page==="famille"&&<Famille {...P}/>}{page==="aides"&&<Aides/>}{page==="bienetre"&&<Bienetre {...P}/>}{page==="parametres"&&<Parametres setRole={setRole}/>}</main></div>);
}

function Dashboard({proche,alertes,rdvList,journal,meds,prisTodayCount,totalPrises,setPage,today,togglePrise,aiText,aiLoading,genererResume}){
  const pr=rdvList.filter(r=>!r.fait).sort((a,b)=>a.date.localeCompare(b.date))[0];
  return<><div className="ph"><div><div className="pt">Bonjour, Marie 👋</div><div className="ps">{new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</div></div><button className="btn bg" onClick={genererResume} disabled={aiLoading}>{aiLoading?<><span className="spinner"/>Génération…</>:"Résumé IA médecin"}</button></div>{alertes.length>0&&<div style={{marginBottom:16}}>{alertes.map((a,i)=><div key={i} className={`al al-${a.type==="w"?"w":"d"}`}><span>{a.type==="w"?"⚠":"⊘"}</span>{a.msg}</div>)}</div>}{aiText&&<div className="ai-box mt14" style={{marginBottom:16}}><div className="ai-lbl">Résumé IA — à présenter au médecin</div><div className="ai-txt">{aiText}</div></div>}<div className="g4" style={{marginBottom:14}}><div className="kpi"><div className="kv">{prisTodayCount}<span style={{fontSize:16,fontWeight:400,color:"var(--mu)"}}>/{totalPrises}</span></div><div className="kl">Prises confirmées</div></div><div className="kpi"><div className="kv">{rdvList.filter(r=>!r.fait).length}</div><div className="kl">RDV à venir</div></div><div className="kpi"><div className="kv">{journal.length}</div><div className="kl">Notes journal</div></div><div className="kpi" style={{background:"var(--bl2)",cursor:"pointer"}} onClick={()=>setPage("aides")}><div className="kv" style={{color:"var(--bl)"}}>6</div><div className="kl" style={{color:"var(--bl)"}}>Aides disponibles →</div></div></div><div className="g2" style={{marginBottom:14}}><div className="card" style={{cursor:"pointer"}} onClick={()=>setPage("agenda")}><div className="ct">Prochain rendez-vous</div>{pr?<div style={{display:"flex",gap:12}}><div className="rd-dt" style={{background:"var(--bl2)"}}><div className="rd-day" style={{color:"var(--bl)"}}>{pr.date.split("-")[2]}</div><div className="rd-mo" style={{color:"var(--bl)"}}>{new Date(pr.date+"T12:00").toLocaleString("fr-FR",{month:"short"})}</div><div className="rd-hr">{pr.heure}</div></div><div><div style={{fontSize:14,fontWeight:600,marginBottom:3}}>{pr.titre}</div><div style={{fontSize:12,color:"var(--mu)"}}>{pr.lieu}</div><div style={{marginTop:7}}><span className={`badge ${pr.assigne?"b-bl":"b-rd"}`}>{pr.assigne||"Non assigné"}</span></div></div></div>:<div className="empty">Aucun RDV</div>}</div><div className="card" style={{cursor:"pointer"}} onClick={()=>setPage("journal")}><div className="ct">Dernière note</div>{journal[0]?<><div style={{fontSize:13,lineHeight:1.75,marginBottom:9}}>{journal[0].contenu.slice(0,110)}…</div><span className={`badge ${journal[0].humeur==="bien"?"b-gn":journal[0].humeur==="moyen"?"b-am":"b-rd"}`}>{journal[0].humeur==="bien"?"Bien":journal[0].humeur==="moyen"?"Moyen":"Difficile"}</span></>:<div className="empty">Aucune note</div>}</div></div><div className="card"><div className="fxb"><div className="ct" style={{marginBottom:0}}>Médicaments du jour</div><span style={{fontSize:11,color:"var(--mu)"}}>{prisTodayCount}/{totalPrises}</span></div><div className="sb-bar" style={{margin:"10px 0 14px"}}><div className="sb-fill" style={{width:`${totalPrises?(prisTodayCount/totalPrises)*100:0}%`,background:prisTodayCount===totalPrises?"var(--gn)":"var(--bl)"}}/></div>{meds.map(m=><div key={m.id} className="mr"><div><div className="mn">{m.nom} <span style={{fontWeight:400,color:"var(--mu)",fontSize:13}}>{m.dose}</span></div>{m.renouvellement<=10&&<div style={{fontSize:11,color:"var(--am)",marginTop:2}}>⚠ J-{m.renouvellement}</div>}</div><div className="hg">{m.horaires.map(h=>{const ok=!!m.prises[`${today}_${h}`];return<button key={h} className={`hb ${ok?"ok":""}`} onClick={()=>togglePrise(m.id,h)}>{h} {ok?"✓":"○"}</button>;})}</div></div>)}</div></>;
}

function Dossier({proche,setProche,aiText,aiLoading,genererResume}){
  const [editMode,setEditMode]=useState(false);
  const [editData,setEditData]=useState({...proche});
  const [newPatho,setNewPatho]=useState("");
  const [newAller,setNewAller]=useState("");
  const [showAddMed,setShowAddMed]=useState(false);
  const [newMed,setNewMed]=useState({nom:"",specialite:"",tel:"",email:""});
  function save(){setProche({...editData});setEditMode(false);}
  function addTag(f,v,sv){if(!v.trim())return;setProche(p=>({...p,[f]:[...p[f],v.trim()]}));sv("");}
  function rmTag(f,i){setProche(p=>({...p,[f]:p[f].filter((_,idx)=>idx!==i)}));}
  function addMed(){if(!newMed.nom)return;setProche(p=>({...p,medecins:[...p.medecins,{...newMed,id:Date.now()}]}));setNewMed({nom:"",specialite:"",tel:"",email:""});setShowAddMed(false);}
  function rmMed(id){setProche(p=>({...p,medecins:p.medecins.filter(m=>m.id!==id)}));}
  return<><div className="ph"><div><div className="pt">Dossier médical</div><div className="ps">{proche.prenom} {proche.nom} · {proche.age} ans</div></div><div className="fxs"><button className="btn bg" onClick={genererResume} disabled={aiLoading}>{aiLoading?<><span className="spinner"/>…</>:"Résumé IA"}</button><button className="btn bs" onClick={()=>{setEditMode(!editMode);setEditData({...proche});}}>{editMode?"Annuler":"Modifier"}</button></div></div>{aiText&&<div className="ai-box" style={{marginBottom:14}}><div className="ai-lbl">Résumé IA pour le médecin</div><div className="ai-txt">{aiText}</div></div>}<div className="g2"><div className="gap-b"><div className="card"><div className="ct">Informations générales</div>{editMode?<><div className="g2"><div className="fg"><label className="fl">Prénom</label><input className="fi" value={editData.prenom} onChange={e=>setEditData({...editData,prenom:e.target.value})}/></div><div className="fg"><label className="fl">Nom</label><input className="fi" value={editData.nom} onChange={e=>setEditData({...editData,nom:e.target.value})}/></div><div className="fg"><label className="fl">Groupe sanguin</label><input className="fi" value={editData.groupeSanguin} onChange={e=>setEditData({...editData,groupeSanguin:e.target.value})}/></div><div className="fg"><label className="fl">Mutuelle</label><input className="fi" value={editData.mutuelle} onChange={e=>setEditData({...editData,mutuelle:e.target.value})}/></div><div className="fg" style={{gridColumn:"1/-1"}}><label className="fl">Adresse</label><input className="fi" value={editData.adresse} onChange={e=>setEditData({...editData,adresse:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={save}>Enregistrer</button><button className="btn bs" onClick={()=>setEditMode(false)}>Annuler</button></div></>:<><div className="ir"><span className="ik">Nom complet</span><span className="iv">{proche.prenom} {proche.nom}</span></div><div className="ir"><span className="ik">Âge</span><span className="iv">{proche.age} ans</span></div><div className="ir"><span className="ik">Groupe sanguin</span><span className="iv"><span className="badge b-rd">{proche.groupeSanguin}</span></span></div><div className="ir"><span className="ik">Mutuelle</span><span className="iv" style={{fontSize:12}}>{proche.mutuelle}</span></div><div className="ir"><span className="ik">Adresse</span><span className="iv" style={{fontSize:12,textAlign:"right"}}>{proche.adresse}</span></div></>}</div><div className="card"><div className="ct">Pathologies</div><div style={{marginBottom:10}}>{proche.pathologies.map((p,i)=><span key={i} className="tag-item" style={{background:"var(--am2)",color:"var(--am)"}}>{p}<button className="tag-rm" onClick={()=>rmTag("pathologies",i)}>×</button></span>)}</div><div className="fxs"><input className="fi" style={{flex:1,fontSize:12}} placeholder="Ajouter…" value={newPatho} onChange={e=>setNewPatho(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTag("pathologies",newPatho,setNewPatho)}/><button className="btn bp" style={{padding:"7px 12px"}} onClick={()=>addTag("pathologies",newPatho,setNewPatho)}>+</button></div></div><div className="card"><div className="ct">Allergies</div><div style={{marginBottom:10}}>{proche.allergies.map((a,i)=><span key={i} className="tag-item" style={{background:"var(--rd2)",color:"var(--rd)"}}>{a}<button className="tag-rm" onClick={()=>rmTag("allergies",i)}>×</button></span>)}</div><div className="fxs"><input className="fi" style={{flex:1,fontSize:12}} placeholder="Ajouter…" value={newAller} onChange={e=>setNewAller(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTag("allergies",newAller,setNewAller)}/><button className="btn br" style={{padding:"7px 12px"}} onClick={()=>addTag("allergies",newAller,setNewAller)}>+</button></div></div></div><div className="gap-b"><div className="card"><div className="ct"><span>Équipe médicale</span><button className="btn bs" style={{padding:"3px 10px",fontSize:11}} onClick={()=>setShowAddMed(!showAddMed)}>+ Ajouter</button></div>{showAddMed&&<div style={{background:"var(--bg)",borderRadius:8,padding:12,marginBottom:12}}><div className="g2"><div className="fg"><label className="fl">Nom</label><input className="fi" value={newMed.nom} onChange={e=>setNewMed({...newMed,nom:e.target.value})} placeholder="Dr. Nom Prénom"/></div><div className="fg"><label className="fl">Spécialité</label><input className="fi" value={newMed.specialite} onChange={e=>setNewMed({...newMed,specialite:e.target.value})}/></div><div className="fg"><label className="fl">Téléphone</label><input className="fi" value={newMed.tel} onChange={e=>setNewMed({...newMed,tel:e.target.value})}/></div><div className="fg"><label className="fl">Email</label><input className="fi" value={newMed.email} onChange={e=>setNewMed({...newMed,email:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={addMed}>Enregistrer</button><button className="btn bs" onClick={()=>setShowAddMed(false)}>Annuler</button></div></div>}{proche.medecins.map(m=><div key={m.id} style={{padding:"11px 0",borderBottom:"1px solid var(--bd)"}}><div className="fxb"><div><div style={{fontSize:14,fontWeight:600,marginBottom:2}}>{m.nom}</div><span className="badge b-bl">{m.specialite}</span></div><button className="btn br" style={{padding:"3px 8px",fontSize:11}} onClick={()=>rmMed(m.id)}>×</button></div><div style={{fontSize:12,color:"var(--mu)",marginTop:6,display:"flex",flexDirection:"column",gap:2}}>{m.tel&&<span>📞 {m.tel}</span>}{m.email&&<span>✉ {m.email}</span>}</div></div>)}</div><div className="card"><div className="ct">Contacts d'urgence</div>{proche.contacts.map(c=><div key={c.id} className="ir"><div><div style={{fontSize:13,fontWeight:600}}>{c.nom} <span style={{fontWeight:400,color:"var(--mu)",fontSize:12}}>({c.lien})</span></div><div style={{fontSize:12,color:"var(--mu)"}}>{c.role} · {c.tel}</div></div></div>)}<div className="ir"><span className="ik">Urgences</span><span className="iv" style={{color:"var(--rd)",fontWeight:700}}>SAMU 15</span></div></div></div></div></>;
}

function Agenda({rdvList,setRdvList,famille}){
  const [showAdd,setShowAdd]=useState(false);
  const [newRdv,setNewRdv]=useState({titre:"",date:"",heure:"",lieu:"",assigne:"",notes:"",type:"consultation"});
  function add(){if(!newRdv.titre||!newRdv.date)return;setRdvList(p=>[...p,{...newRdv,id:Date.now(),fait:false}].sort((a,b)=>a.date.localeCompare(b.date)));setNewRdv({titre:"",date:"",heure:"",lieu:"",assigne:"",notes:"",type:"consultation"});setShowAdd(false);}
  const C={consultation:"var(--bl)",bilan:"var(--gn)",soin:"var(--am)",autre:"var(--mu)"};
  const aVenir=rdvList.filter(r=>!r.fait);
  return<><div className="ph"><div><div className="pt">Agenda médical</div><div className="ps">{aVenir.length} rendez-vous à venir</div></div><button className="btn bp" onClick={()=>setShowAdd(!showAdd)}>+ Nouveau RDV</button></div>{showAdd&&<div className="card" style={{marginBottom:14}}><div className="ct">Nouveau rendez-vous</div><div className="g2"><div className="fg"><label className="fl">Titre</label><input className="fi" value={newRdv.titre} onChange={e=>setNewRdv({...newRdv,titre:e.target.value})} placeholder="Ex: Neurologue Dr. Benali"/></div><div className="fg"><label className="fl">Type</label><select className="fi fsel" value={newRdv.type} onChange={e=>setNewRdv({...newRdv,type:e.target.value})}><option value="consultation">Consultation</option><option value="bilan">Bilan</option><option value="soin">Soin</option><option value="autre">Autre</option></select></div><div className="fg"><label className="fl">Date</label><input className="fi" type="date" value={newRdv.date} onChange={e=>setNewRdv({...newRdv,date:e.target.value})}/></div><div className="fg"><label className="fl">Heure</label><input className="fi" value={newRdv.heure} onChange={e=>setNewRdv({...newRdv,heure:e.target.value})} placeholder="14h30"/></div><div className="fg"><label className="fl">Lieu</label><input className="fi" value={newRdv.lieu} onChange={e=>setNewRdv({...newRdv,lieu:e.target.value})}/></div><div className="fg"><label className="fl">Assigné à</label><select className="fi fsel" value={newRdv.assigne} onChange={e=>setNewRdv({...newRdv,assigne:e.target.value})}><option value="">Non assigné</option>{famille.map(f=><option key={f.id} value={f.nom}>{f.nom}</option>)}</select></div><div className="fg" style={{gridColumn:"1/-1"}}><label className="fl">Notes</label><input className="fi" value={newRdv.notes} onChange={e=>setNewRdv({...newRdv,notes:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={add}>Enregistrer</button><button className="btn bs" onClick={()=>setShowAdd(false)}>Annuler</button></div></div>}{aVenir.map(r=>{const d=new Date(r.date+"T12:00");const col=C[r.type]||"var(--mu)";return<div key={r.id} className="rc"><div className="rd-dt" style={{background:col+"18"}}><div className="rd-day" style={{color:col}}>{r.date.split("-")[2]}</div><div className="rd-mo" style={{color:col}}>{d.toLocaleString("fr-FR",{month:"short"})}</div><div className="rd-hr">{r.heure}</div></div><div style={{flex:1}}><div className="rd-ti">{r.titre}</div><div className="rd-li">{r.lieu}</div>{r.notes&&<div style={{fontSize:12,color:"var(--mu)",fontStyle:"italic",marginTop:3}}>{r.notes}</div>}<div className="fxs mt8" style={{flexWrap:"wrap"}}><span className={`badge ${r.assigne?"b-bl":"b-rd"}`}>{r.assigne||"Non assigné"}</span><button className="btn bs" style={{padding:"3px 9px",fontSize:11}} onClick={()=>setRdvList(p=>p.map(x=>x.id===r.id?{...x,fait:true}:x))}>Effectué</button><button className="btn br" style={{padding:"3px 9px",fontSize:11}} onClick={()=>setRdvList(p=>p.filter(x=>x.id!==r.id))}>×</button></div></div></div>;})}
  {rdvList.filter(r=>r.fait).length>0&&<><div style={{fontSize:11,fontWeight:600,color:"var(--mu)",textTransform:"uppercase",margin:"18px 0 8px"}}>Passés</div>{rdvList.filter(r=>r.fait).map(r=><div key={r.id} className="rc" style={{opacity:0.45}}><div className="rd-dt" style={{background:"var(--bg)"}}><div className="rd-day" style={{color:"var(--mu)"}}>{r.date.split("-")[2]}</div></div><div><div className="rd-ti" style={{textDecoration:"line-through"}}>{r.titre}</div><span className="badge b-gn">Effectué</span></div></div>)}</>}</>;
}

function Medicaments({meds,setMeds,today,togglePrise,prisTodayCount,totalPrises}){
  const [showAdd,setShowAdd]=useState(false);
  const [nm,setNm]=useState({nom:"",dose:"",horaires:"08h00",renouvellement:30,prescripteur:"",indication:""});
  function add(){if(!nm.nom)return;setMeds(p=>[...p,{...nm,id:Date.now(),horaires:nm.horaires.split(",").map(h=>h.trim()).filter(Boolean),prises:{}}]);setNm({nom:"",dose:"",horaires:"08h00",renouvellement:30,prescripteur:"",indication:""});setShowAdd(false);}
  return<><div className="ph"><div><div className="pt">Médicaments</div><div className="ps">{prisTodayCount}/{totalPrises} prises aujourd'hui · {meds.length} médicaments</div></div><button className="btn bp" onClick={()=>setShowAdd(!showAdd)}>+ Ajouter</button></div><div className="sb-bar" style={{marginBottom:16}}><div className="sb-fill" style={{width:`${totalPrises?(prisTodayCount/totalPrises)*100:0}%`,background:prisTodayCount===totalPrises?"var(--gn)":"var(--bl)"}}/></div>{showAdd&&<div className="card" style={{marginBottom:14}}><div className="ct">Nouveau médicament</div><div className="g2"><div className="fg"><label className="fl">Nom</label><input className="fi" value={nm.nom} onChange={e=>setNm({...nm,nom:e.target.value})}/></div><div className="fg"><label className="fl">Dosage</label><input className="fi" value={nm.dose} onChange={e=>setNm({...nm,dose:e.target.value})} placeholder="500mg"/></div><div className="fg"><label className="fl">Horaires (virgules)</label><input className="fi" value={nm.horaires} onChange={e=>setNm({...nm,horaires:e.target.value})} placeholder="08h00, 20h00"/></div><div className="fg"><label className="fl">Renouvellement (jours)</label><input className="fi" type="number" value={nm.renouvellement} onChange={e=>setNm({...nm,renouvellement:parseInt(e.target.value)||30})}/></div><div className="fg"><label className="fl">Prescripteur</label><input className="fi" value={nm.prescripteur} onChange={e=>setNm({...nm,prescripteur:e.target.value})}/></div><div className="fg"><label className="fl">Indication</label><input className="fi" value={nm.indication} onChange={e=>setNm({...nm,indication:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={add}>Enregistrer</button><button className="btn bs" onClick={()=>setShowAdd(false)}>Annuler</button></div></div>}<div className="card">{meds.map(m=><div key={m.id} className="mr"><div style={{flex:1}}><div className="fxs" style={{flexWrap:"wrap",marginBottom:3}}><div className="mn">{m.nom}</div><span className="badge b-bl">{m.dose}</span>{m.renouvellement<=10&&<span className="badge b-am">J-{m.renouvellement}</span>}{m.renouvellement<=5&&<span className="badge b-rd">URGENT</span>}</div><div className="md">{m.indication&&`📋 ${m.indication}`}{m.prescripteur&&` · ${m.prescripteur}`}</div></div><div className="fxs" style={{flexDirection:"column",alignItems:"flex-end",gap:6}}><div className="hg">{m.horaires.map(h=>{const ok=!!m.prises[`${today}_${h}`];return<button key={h} className={`hb ${ok?"ok":""}`} onClick={()=>togglePrise(m.id,h)}>{h} {ok?"✓":"○"}</button>;})}</div><button className="btn br" style={{padding:"3px 8px",fontSize:11}} onClick={()=>setMeds(p=>p.filter(x=>x.id!==m.id))}>Supprimer</button></div></div>)}</div></>;
}

function Journal({journal,setJournal,today,aiText,aiLoading,genererResume}){
  const [nn,setNn]=useState({contenu:"",humeur:"bien",tension:"",poids:"",temperature:"",auteur:"Marie"});
  function add(){if(!nn.contenu.trim())return;setJournal(p=>[{...nn,id:Date.now(),date:today},...p]);setNn({contenu:"",humeur:"bien",tension:"",poids:"",temperature:"",auteur:"Marie"});}
  return<><div className="ph"><div><div className="pt">Journal de bord</div><div className="ps">{journal.length} observations partagées</div></div><button className="btn bg" onClick={genererResume} disabled={aiLoading}>{aiLoading?<><span className="spinner"/>…</>:"Résumé IA médecin"}</button></div>{aiText&&<div className="ai-box" style={{marginBottom:14}}><div className="ai-lbl">Résumé IA — à présenter au médecin</div><div className="ai-txt">{aiText}</div></div>}<div className="card" style={{marginBottom:16}}><div className="ct">Nouvelle note — {today}</div><div className="fg"><textarea className="fi fta" placeholder="Comportement, humeur, alimentation, médicaments, incidents…" value={nn.contenu} onChange={e=>setNn({...nn,contenu:e.target.value})}/></div><div className="g2" style={{marginBottom:10}}><div className="fg"><label className="fl">Tension</label><input className="fi" value={nn.tension} onChange={e=>setNn({...nn,tension:e.target.value})} placeholder="13/8"/></div><div className="fg"><label className="fl">Poids (kg)</label><input className="fi" value={nn.poids} onChange={e=>setNn({...nn,poids:e.target.value})}/></div><div className="fg"><label className="fl">Température</label><input className="fi" value={nn.temperature} onChange={e=>setNn({...nn,temperature:e.target.value})} placeholder="37,2"/></div><div className="fg"><label className="fl">Auteur</label><select className="fi fsel" value={nn.auteur} onChange={e=>setNn({...nn,auteur:e.target.value})}>{["Marie","Émile","Aide à domicile","Autre"].map(v=><option key={v}>{v}</option>)}</select></div></div><div className="fxb"><div className="fxs">{[["bien","😊 Bien"],["moyen","😐 Moyen"],["difficile","😔 Difficile"]].map(([v,l])=><button key={v} className={`btn ${nn.humeur===v?"bp":"bs"}`} style={{padding:"5px 12px",fontSize:12}} onClick={()=>setNn({...nn,humeur:v})}>{l}</button>)}</div><button className="btn bp" onClick={add}>Enregistrer</button></div></div>{journal.map(e=><div key={e.id} className={`je ${e.humeur}`}><div className="jm"><span className="jd">{e.date}</span><span className="ja">{e.auteur}</span><span className={`badge ${e.humeur==="bien"?"b-gn":e.humeur==="moyen"?"b-am":"b-rd"}`}>{e.humeur==="bien"?"Bien":e.humeur==="moyen"?"Moyen":"Difficile"}</span></div><div className="jc">{e.contenu}</div>{(e.tension||e.poids||e.temperature)&&<div className="jvitaux">{e.tension&&<span className="jv">❤️ <strong>{e.tension}</strong></span>}{e.poids&&<span className="jv">⚖️ <strong>{e.poids}kg</strong></span>}{e.temperature&&<span className="jv">🌡️ <strong>{e.temperature}°C</strong></span>}</div>}<button className="btn br mt8" style={{padding:"2px 8px",fontSize:11}} onClick={()=>setJournal(p=>p.filter(j=>j.id!==e.id))}>Supprimer</button></div>)}</>;
}

function Documents({docs,setDocs}){
  const [showAdd,setShowAdd]=useState(false);
  const [nd,setNd]=useState({nom:"",type:"ordonnance",date:"",auteur:""});
  const C={ordonnance:"var(--bl)",bilan:"var(--gn)","compte-rendu":"var(--pu)",administratif:"var(--am)"};
  const I={ordonnance:"📋",bilan:"🔬","compte-rendu":"📄",administratif:"📁"};
  function add(){if(!nd.nom)return;setDocs(p=>[{...nd,id:Date.now(),date:nd.date||new Date().toISOString().split("T")[0]},...p]);setNd({nom:"",type:"ordonnance",date:"",auteur:""});setShowAdd(false);}
  return<><div className="ph"><div><div className="pt">Documents médicaux</div><div className="ps">Coffre-fort sécurisé · {docs.length} documents</div></div><button className="btn bp" onClick={()=>setShowAdd(!showAdd)}>+ Ajouter</button></div><div className="al al-b" style={{marginBottom:14}}>🔒 Documents chiffrés AES-256 · Hébergés en France · Accès contrôlé</div>{showAdd&&<div className="card" style={{marginBottom:14}}><div className="g2"><div className="fg"><label className="fl">Nom</label><input className="fi" value={nd.nom} onChange={e=>setNd({...nd,nom:e.target.value})}/></div><div className="fg"><label className="fl">Type</label><select className="fi fsel" value={nd.type} onChange={e=>setNd({...nd,type:e.target.value})}><option value="ordonnance">Ordonnance</option><option value="bilan">Bilan</option><option value="compte-rendu">Compte-rendu</option><option value="administratif">Administratif</option></select></div><div className="fg"><label className="fl">Date</label><input className="fi" type="date" value={nd.date} onChange={e=>setNd({...nd,date:e.target.value})}/></div><div className="fg"><label className="fl">Auteur</label><input className="fi" value={nd.auteur} onChange={e=>setNd({...nd,auteur:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={add}>Enregistrer</button><button className="btn bs" onClick={()=>setShowAdd(false)}>Annuler</button></div></div>}<div className="card">{docs.map(d=><div key={d.id} className="dc"><div className="dc-ic" style={{background:(C[d.type]||"var(--mu)")+"18"}}>{I[d.type]||"📄"}</div><div style={{flex:1}}><div className="dc-n">{d.nom}</div><div className="dc-s"><span className="badge" style={{background:(C[d.type]||"var(--mu)")+"18",color:C[d.type]||"var(--mu)",marginRight:6}}>{d.type}</span>{d.date}{d.auteur&&` · ${d.auteur}`}</div></div><div className="fxs"><button className="btn bs" style={{padding:"4px 10px",fontSize:11}}>Voir</button><button className="btn br" style={{padding:"4px 10px",fontSize:11}} onClick={()=>setDocs(p=>p.filter(x=>x.id!==d.id))}>×</button></div></div>)}</div></>;
}

function Famille({famille,setFamille}){
  const [showAdd,setShowAdd]=useState(false);
  const [nm,setNm]=useState({nom:"",role:"",tel:"",email:"",acces:"lecture",dispo:""});
  function add(){if(!nm.nom)return;setFamille(p=>[...p,{...nm,id:Date.now()}]);setNm({nom:"",role:"",tel:"",email:"",acces:"lecture",dispo:""});setShowAdd(false);}
  const AC={complet:"b-gn",lecture:"b-bl",soins:"b-am"};
  const AL={complet:"Accès complet",lecture:"Lecture seule",soins:"Soins uniquement"};
  return<><div className="ph"><div><div className="pt">Équipe aidants</div><div className="ps">{famille.length} membres connectés</div></div><button className="btn bp" onClick={()=>setShowAdd(!showAdd)}>+ Inviter</button></div>{showAdd&&<div className="card" style={{marginBottom:14}}><div className="g2"><div className="fg"><label className="fl">Nom</label><input className="fi" value={nm.nom} onChange={e=>setNm({...nm,nom:e.target.value})}/></div><div className="fg"><label className="fl">Rôle</label><input className="fi" value={nm.role} onChange={e=>setNm({...nm,role:e.target.value})}/></div><div className="fg"><label className="fl">Téléphone</label><input className="fi" value={nm.tel} onChange={e=>setNm({...nm,tel:e.target.value})}/></div><div className="fg"><label className="fl">Email</label><input className="fi" value={nm.email} onChange={e=>setNm({...nm,email:e.target.value})}/></div><div className="fg"><label className="fl">Accès</label><select className="fi fsel" value={nm.acces} onChange={e=>setNm({...nm,acces:e.target.value})}><option value="complet">Accès complet</option><option value="lecture">Lecture seule</option><option value="soins">Soins uniquement</option></select></div><div className="fg"><label className="fl">Disponibilités</label><input className="fi" value={nm.dispo} onChange={e=>setNm({...nm,dispo:e.target.value})}/></div></div><div className="fxs"><button className="btn bp" onClick={add}>Inviter</button><button className="btn bs" onClick={()=>setShowAdd(false)}>Annuler</button></div></div>}<div className="g2">{famille.map(m=><div key={m.id} className="fc"><div className="fxb" style={{marginBottom:8}}><div style={{width:42,height:42,borderRadius:"50%",background:"var(--bl2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:14,color:"var(--bl)"}}>{m.nom.split(" ").map(n=>n[0]).join("").slice(0,2)}</div><button className="btn br" style={{padding:"3px 8px",fontSize:11}} onClick={()=>setFamille(p=>p.filter(x=>x.id!==m.id))}>×</button></div><div style={{fontSize:14,fontWeight:600,marginBottom:2}}>{m.nom}</div><div style={{fontSize:12,color:"var(--mu)",marginBottom:8}}>{m.role}</div><span className={`badge ${AC[m.acces]||"b-mu"}`}>{AL[m.acces]||m.acces}</span><div style={{fontSize:12,color:"var(--mu)",marginTop:8,display:"flex",flexDirection:"column",gap:2}}>{m.tel&&<span>📞 {m.tel}</span>}{m.email&&<span>✉ {m.email}</span>}{m.dispo&&<span>🕐 {m.dispo}</span>}</div></div>)}</div></>;
}

function Aides(){
  return<><div className="ph"><div><div className="pt">Aides financières</div><div className="ps">{AIDES.filter(a=>a.statut==="eligible").length} aides éligibles identifiées</div></div></div><div className="al al-s" style={{marginBottom:16}}>💰 Estimation totale : <strong>≈ 14 000€/an</strong> d'aides potentielles. La plupart des aidants ne les réclament pas.</div><div className="g2">{AIDES.map((a,i)=><div key={i} className="ac" style={{borderColor:a.statut==="eligible"?"var(--gn3)":a.statut==="non-eligible"?"var(--rd3)":"var(--bd)",opacity:a.statut==="non-eligible"?0.6:1}}><div style={{marginBottom:8}}><span className={`badge ${a.statut==="eligible"?"b-gn":a.statut==="non-eligible"?"b-rd":"b-am"}`}>{a.statut==="eligible"?"✓ Éligible":a.statut==="non-eligible"?"✗ Non éligible":"À vérifier"}</span></div><div className="an">{a.nom}</div><div className="am-val" style={{color:a.statut==="eligible"?"var(--gn)":"var(--mu)"}}>{a.montant}</div><div className="ar">◎ {a.condition}</div><div className="ar">◷ Délai : {a.delai}</div><div className="ar">◈ Dossier : {a.dossier}</div>{a.statut==="eligible"&&<button className="btn bp mt14" style={{width:"100%",justifyContent:"center",fontSize:12}}>Voir le formulaire →</button>}</div>)}</div></>;
}

function Bienetre({zarit,setZarit,zaritPct,zaritColor}){
  const nb=Object.keys(zarit).length;
  const label=zaritPct<30?"Faible charge":zaritPct<60?"Charge modérée":"Charge élevée";
  const opts=["Jamais","Rarement","Parfois","Souvent","Toujours"];
  return<><div className="ph"><div><div className="pt">Mon bien-être</div><div className="ps">Échelle de Zarit · {nb}/{ZARIT_Q.length} questions</div></div>{nb>0&&<button className="btn bs" onClick={()=>setZarit({})}>Réinitialiser</button>}</div>{nb===ZARIT_Q.length&&<div className="card" style={{marginBottom:16}}><div className="ct">Score de charge aidant</div><div style={{display:"flex",alignItems:"center",gap:16}}><div style={{flex:1}}><div className="sb-bar"><div className="sb-fill" style={{width:`${zaritPct}%`,background:zaritColor}}/></div><div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--mu)",marginTop:4}}><span>Faible</span><span>Élevée</span></div></div><div style={{textAlign:"center",minWidth:100}}><div style={{fontFamily:"Syne,sans-serif",fontSize:32,fontWeight:800,color:zaritColor}}>{zaritPct}%</div><div style={{fontSize:13,fontWeight:600,color:zaritColor}}>{label}</div></div></div>{zaritPct>=60&&<div className="al al-d mt14">⚠ Charge élevée. Contactez le <strong>0 800 360 360</strong> (gratuit, 7j/7)</div>}</div>}{ZARIT_Q.map((q,i)=><div key={i} className="zq"><div className="zt"><strong style={{color:"var(--mu)",fontSize:12}}>{i+1}.</strong> {q}</div><div className="zo">{opts.map((opt,val)=><button key={val} className={`zob ${zarit[i]===val?`s${val}`:""}`} onClick={()=>setZarit(p=>({...p,[i]:val}))}>{opt}</button>)}</div></div>)}<div className="card mt14"><div className="ct">Ressources de soutien</div>{[{n:"Numéro national aidants",v:"0 800 360 360",s:"Gratuit · 7j/7"},{n:"France Alzheimer",v:"0 811 112 112",s:"Accompagnement familles"},{n:"Répit — Grenoble",v:"CCAS",s:"Groupes de parole"}].map((r,i)=><div key={i} className="ir"><div><div style={{fontSize:13,fontWeight:600}}>{r.n}</div><div style={{fontSize:11,color:"var(--mu)"}}>{r.s}</div></div><span className="badge b-bl">{r.v}</span></div>)}</div></>;
}

function Parametres({setRole}){
  const [notifs,setNotifs]=useState({meds:true,rdv:true,renouv:true,hebdo:false,urgent:true});
  return<><div className="ph"><div><div className="pt">Paramètres</div><div className="ps">Profil, notifications, abonnement</div></div></div><div className="g2"><div className="gap-b"><div className="card"><div className="ct">Mon profil</div><div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}><div style={{width:48,height:48,borderRadius:"50%",background:"var(--bl2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:16,color:"var(--bl)"}}>MD</div><div><div style={{fontSize:15,fontWeight:700}}>Marie Dubois</div><div style={{fontSize:12,color:"var(--mu)"}}>Aidant principal</div></div></div><div className="fg"><label className="fl">Email</label><input className="fi" defaultValue="marie.dubois@email.fr"/></div><div className="fg"><label className="fl">Téléphone</label><input className="fi" defaultValue="06 12 34 56 78"/></div><button className="btn bp mt8">Enregistrer</button></div><div className="card"><div className="ct">Abonnement</div><div className="ir"><span className="ik">Plan actuel</span><span className="iv"><span className="badge b-gn">Famille · 15€/mois</span></span></div><div className="ir"><span className="ik">Données hébergées</span><span className="iv"><span className="badge b-bl">🇫🇷 France</span></span></div><button className="btn bs mt14" style={{fontSize:12}}>Gérer l'abonnement</button></div><div className="card"><div className="ct">Changer d'interface</div><div style={{display:"flex",flexDirection:"column",gap:8,marginTop:4}}><button className="btn bs" onClick={()=>setRole("patient")} style={{justifyContent:"flex-start"}}>👴 Interface Patient</button><button className="btn bs" onClick={()=>setRole("soignant")} style={{justifyContent:"flex-start"}}>👨‍⚕️ Interface Soignant</button><button className="btn bs" onClick={()=>setRole(null)} style={{justifyContent:"flex-start"}}>⇄ Retour à l'accueil</button></div></div></div><div className="card"><div className="ct">Notifications</div>{[["meds","Rappels médicaments","Alertes pour les prises non confirmées"],["rdv","Rappels rendez-vous","48h et 2h avant chaque RDV"],["renouv","Renouvellements","Alerte 15 jours avant la fin"],["hebdo","Résumé hebdomadaire","Synthèse du journal chaque lundi"],["urgent","Alertes urgentes","Notifications critiques en temps réel"]].map(([k,l,s])=><div key={k} className="ir"><div><div style={{fontSize:13,fontWeight:500}}>{l}</div><div style={{fontSize:11,color:"var(--mu)"}}>{s}</div></div><div style={{position:"relative",width:40,height:22,borderRadius:11,background:notifs[k]?"var(--bl)":"var(--bd)",cursor:"pointer",transition:"background .2s",flexShrink:0}} onClick={()=>setNotifs(p=>({...p,[k]:!p[k]}))}><div style={{position:"absolute",top:2,left:notifs[k]?20:2,width:18,height:18,borderRadius:"50%",background:"#fff",transition:"left .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/></div></div>)}</div></div></>;
}

function SoignantApp({setRole}){
  const [email,setEmail]=useState("");
  const [sent,setSent]=useState(false);
  return(<div className="sgnt"><div className="sgnt-ic">👨‍⚕️</div><h2 className="sgnt-h">Interface Soignant — Bêta</h2><p className="sgnt-sub">L'espace dédié aux médecins, infirmières et professionnels de santé est en cours de finalisation. Inscrivez-vous pour accéder en avant-première.</p><div className="sgnt-feats"><div className="sgnt-feat"><div className="sgnt-feat-ic">📋</div><div className="sgnt-feat-t">Dossier partagé</div><div className="sgnt-feat-d">Accès au dossier médical complet</div></div><div className="sgnt-feat"><div className="sgnt-feat-ic">📖</div><div className="sgnt-feat-t">Journal de bord</div><div className="sgnt-feat-d">Observations de la famille</div></div><div className="sgnt-feat"><div className="sgnt-feat-ic">📤</div><div className="sgnt-feat-t">Dépôt documents</div><div className="sgnt-feat-d">Comptes-rendus et ordonnances</div></div><div className="sgnt-feat"><div className="sgnt-feat-ic">💬</div><div className="sgnt-feat-t">Messagerie sécurisée</div><div className="sgnt-feat-d">Communication avec la famille</div></div></div>{sent?<div style={{fontSize:18,fontWeight:700,color:"var(--gn)",marginBottom:24}}>✓ Vous serez notifié dès l'ouverture !</div>:<div className="sgnt-form"><input className="sgnt-input" type="email" placeholder="Votre email professionnel" value={email} onChange={e=>setEmail(e.target.value)}/><button className="sgnt-btn" onClick={()=>{if(email.trim())setSent(true)}}>Notifier</button></div>}<button className="btn bs" style={{marginTop:24}} onClick={()=>setRole(null)}>← Retour à l'accueil</button></div>);
}
