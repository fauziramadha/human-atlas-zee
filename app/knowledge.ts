/** Bilingual clinical reference content for the Human Atlas detail panel.
 * Drafted from public-domain and standard references: Gray's Anatomy of the
 * Human Body (20th ed., 1918, public domain) and widely taught clinical
 * anatomy knowledge. Educational use only — not medical advice. */
export interface Bilingual {en:string;id:string}
export interface Condition {name:Bilingual;detail:Bilingual}
export interface ClinicalCard {
  nameId:string
  overview:Bilingual
  bloodSupply?:Bilingual
  innervation?:Bilingual
  drainage?:Bilingual
  conditions:Condition[]
  clinical?:Bilingual
}
export const CLINICAL:Record<string,ClinicalCard> = {
  'heart': {
    nameId:'Jantung',
    overview:{en:'A four-chambered muscular pump sitting in the middle mediastinum, about two-thirds to the left of the midline. The right side drives blood through the pulmonary circuit, while the left side drives the systemic circulation.',id:'Pompa muskuler beruang empat di mediastinum tengah, sekitar dua pertiganya di sebelah kiri garis tengah. Sisi kanan memompa darah ke sirkulasi pulmonal, sisi kiri ke sirkulasi sistemik.'},
    bloodSupply:{en:'Left anterior descending, left circumflex, and right coronary arteries arising from the aortic root; their territories define infarct patterns.',id:'Arteri desendens anterior kiri, sirkumfleks kiri, dan koronaria kanan yang berasal dari akar aorta; territorialnya menentukan pola infark.'},
    innervation:{en:'Cardiac plexus: vagus nerve (parasympathetic, slows rate) and sympathetic fibers from T1–T4 (accelerates and increases contractility).',id:'Pleksus kardial: nervus vagus (parasimpatis, memperlambat denyut) dan serat simpatis T1–T4 (mempercepat dan memperkuat kontraksi).'},
    drainage:{en:'Most venous blood returns via the coronary sinus into the right atrium.',id:'Sebagian besar darah vena kembali melalui sinus koronarius ke atrium kanan.'},
    conditions:[
      {name:{en:'Coronary artery disease',id:'Penyakit jantung koroner'},detail:{en:'Atherosclerotic stenosis of the coronary arteries causing angina or myocardial infarction.',id:'Stenosis aterosklerotik arteri koroner yang menyebabkan angina atau infark miokard.'}},
      {name:{en:'Heart failure',id:'Gagal jantung'},detail:{en:'Impaired pumping with congestion, dyspnea, edema, and reduced exercise tolerance.',id:'Gangguan pemompaan dengan kongesti, dispnea, edema, dan toleransi aktivitas menurun.'}},
      {name:{en:'Valvular disease',id:'Penyakit katup'},detail:{en:'Stenosis or regurgitation of the aortic, mitral, or other valves produces characteristic murmurs.',id:'Stenosis atau regurgitasi katup aorta, mitral, atau katup lain menimbulkan bising khas.'}}],
    clinical:{en:'The apex beat is normally palpated at the fifth intercostal space, mid-clavicular line; referred cardiac pain (T1–T4) may present in the left arm or jaw.',id:'Ictus kordis normalnya teraba di sela iga kelima garis midklavikula; nyeri jantung yang direfleksikan (T1–T4) dapat dirasakan di lengan kiri atau rahang.'}
  },
  'aorta': {
    nameId:'Aorta',
    overview:{en:'The largest artery of the body. It leaves the left ventricle, arches over the heart root, and descends through thorax and abdomen, distributing oxygenated blood to every major region.',id:'Arteri terbesar tubuh. Meninggalkan ventrikel kiri, melengkung di pangkal jantung, lalu turun melalui toraks dan abdomen, mendistribusikan darah teroksigenasi ke seluruh region utama.'},
    bloodSupply:{en:'Self-supplied by tiny vasa vasorum in its wall.',id:'Diperdarahi oleh vasa vasorum kecil di dindingnya sendiri.'},
    conditions:[
      {name:{en:'Abdominal aortic aneurysm',id:'Aneurisma aorta abdominalis'},detail:{en:'Focal dilation, usually infrarenal; rupture presents with back or flank pain and shock.',id:'Dilatasi fokal, biasanya infrarenal; ruptur menimbulkan nyeri punggung atau pinggang dengan syok.'}},
      {name:{en:'Aortic dissection',id:'Disseksi aorta'},detail:{en:'A tear in the intima creates a false channel; tearing pain radiating to the back with blood-pressure asymmetry between arms is classic.',id:'Robekan intima membentuk kanal palsu; nyeri robek yang menjalar ke punggung dengan asimetri tekanan darah antara kedua lengan adalah gambaran khas.'}},
      {name:{en:'Coarctation',id:'Koarktasio aorta'},detail:{en:'Congenital narrowing, classically just distal to the left subclavian artery, causing upper-limb hypertension with weak femoral pulses.',id:'Penyempitan kongenital, klasik tepat distal arteri subklavia kiri, menyebabkan hipertensi ekstremitas atas dengan denyut femoralis lemah.'}}],
    clinical:{en:'The abdominal aorta is palpated in the epigastrium; a pulsatile mass wider than 3 cm suggests aneurysm and urgent imaging.',id:'Aorta abdominalis dipalpasi di epigastrium; massa berdenyut lebih dari 3 cm mengesankan aneurisma dan memerlukan pencitraan segera.'}
  },
  'pulmonary artery': {
    nameId:'Arteri pulmonalis',
    overview:{en:'The pulmonary trunk and its branches carry deoxygenated blood from the right ventricle to the lungs — the only arteries that transport venous blood.',id:'Trunkus pulmonalis dan cabangnya membawa darah terdeoksigenasi dari ventrikel kanan ke paru — satu-satunya arteri yang mengangkut darah vena.'},
    bloodSupply:{en:'Vasa vasorum; the walls are elastic and low-pressure compared with systemic arteries.',id:'Vasa vasorum; dindingnya elastis dan bertekanan rendah dibanding arteri sistemik.'},
    conditions:[
      {name:{en:'Pulmonary embolism',id:'Embolisme paru'},detail:{en:'Thrombus, usually from leg veins, lodges in the pulmonary circulation causing sudden dyspnea, pleuritic pain, and hypoxia.',id:'Trombus, biasanya dari vena tungkai, menyumbat sirkulasi pulmonal dan menyebabkan dispnea mendadak, nyeri pleuritik, serta hipoksia.'}},
      {name:{en:'Pulmonary hypertension',id:'Hipertensi pulmonal'},detail:{en:'Chronically elevated pulmonary artery pressure leading to right ventricular strain and eventually cor pulmonale.',id:'Tekanan arteri pulmonal yang menahun meningkat, menyebabkan beban ventrikel kanan dan akhirnya kor pulmonale.'}}],
    clinical:{en:'A saddle embolism at the bifurcation obstructs both lungs and can cause sudden circulatory collapse — a medical emergency.',id:'Emboli sadel di bifurkasi menyumbat kedua paru dan dapat menyebabkan kolaps sirkulasi mendadak — kegawatdaruratan medis.'}
  },
  'superior vena cava': {
    nameId:'Vena kava superior',
    overview:{en:'A short, wide vein formed by the two brachiocephalic veins; it drains blood from the head, neck, upper limbs, and upper thorax into the right atrium.',id:'Vena pendek dan lebar yang dibentuk oleh dua vena brakiosefalika; mengalirkan darah dari kepala, leher, ekstremitas atas, dan toraks atas ke atrium kanan.'},
    drainage:{en:'Tributaries include the brachiocephalic, azygos, and internal thoracic veins.',id:'Tributerinya meliputi vena brakiosefalika, azygos, dan torasika interna.'},
    conditions:[
      {name:{en:'Superior vena cava syndrome',id:'Sindrom vena kava superior'},detail:{en:'Obstruction — classically from lung cancer or lymphoma — causes facial swelling, distended neck veins, and dyspnea.',id:'Obstruksi — klasik oleh kanker paru atau limfoma — menyebabkan edema wajah, distensi vena leher, dan dispnea.'}}],
    clinical:{en:'Central venous catheter tips are ideally positioned at the cavo-atrial junction; malposition risks perforation or arrhythmia.',id:'Ujung kateter vena sentral idealnya diposisikan di pertemuan kava-atrial; salah posisi berisiko perforasi atau aritmia.'}
  },
  'inferior vena cava': {
    nameId:'Vena kava inferior',
    overview:{en:'The largest vein, formed by the union of the common iliac veins at about L5. It ascends right of the aorta, pierces the diaphragm at T8, and enters the right atrium, draining everything below the diaphragm.',id:'Vena terbesar, dibentuk oleh penyatuan vena iliaka komunis kira-kira di L5. Naik di kanan aorta, menembus diafragma di T8, dan masuk atrium kanan, mengalirkan darah dari semua bagian bawah diafragma.'},
    drainage:{en:'Receives renal, gonadal (left), hepatic, lumbar, and phrenic veins along its course.',id:'Menerima vena renalis, gonadal (kiri), hepatika, lumbalis, dan frenikus sepanjang jalurnya.'},
    conditions:[
      {name:{en:'Deep vein thrombosis with propagation',id:'Trombosis vena dalam dengan propagasi'},detail:{en:'Clots from pelvic or leg veins can extend into the cava and embolise to the lungs.',id:'Bekuan dari vena pelvis atau tungkai dapat menjalar ke kava dan beremboli ke paru.'}},
      {name:{en:'Compression in pregnancy',id:'Kompresi pada kehamilan'},detail:{en:'The gravid uterus compresses the supine cava, causing supine hypotensive syndrome — pregnant patients are positioned tilted to the left.',id:'Uterus gravidus menekan kava pada posisi telentang, menyebabkan sindrom hipotensi supinasi — pasien hamil diposisikan miring ke kiri.'}}],
    clinical:{en:'IVC filters are deployed below the renal veins to catch emboli when anticoagulation is contraindicated.',id:'Filter vena kava inferior dipasang di bawah vena renalis untuk menangkap emboli bila antikoagulasi dikontraindikasikan.'}
  },
  'common carotid artery': {
    nameId:'Arteri karotis komunis',
    overview:{en:'The right arises from the brachiocephalic trunk and the left directly from the aortic arch. Each ascends in the neck and bifurcates at the upper thyroid cartilage (about C4) into internal and external carotid arteries.',id:'Yang kanan berasal dari trunkus brakiosefalikus dan yang kiri langsung dari arkus aorta. Masing-masing naik di leher dan berbifurkasi di kartilago tiroid atas (sekitar C4) menjadi arteri karotis interna dan eksterna.'},
    conditions:[
      {name:{en:'Carotid stenosis',id:'Stenosis karotis'},detail:{en:'Atherosclerotic narrowing is a major cause of transient ischemic attacks and stroke; a bruit may be audible.',id:'Penyempitan aterosklerotik adalah penyebab utama serangan iskemik sementara dan stroke; bising (bruit) dapat terdengar.'}},
      {name:{en:'Carotid dissection',id:'Diseksi karotis'},detail:{en:'A tear in the wall causes pain, Horner syndrome, or embolic stroke, sometimes after neck trauma or manipulation.',id:'Robekan dinding menyebabkan nyeri, sindrom Horner, atau stroke embolik, kadang setelah trauma atau manipulasi leher.'}}],
    clinical:{en:'The bifurcation hosts the carotid sinus (baroreceptor) and carotid body (chemoreceptor); carotid sinus massage and endarterectomy are clinically important here.',id:'Bifurkasi memuat sinus karotis (baroreseptor) dan badan karotis (kemoreseptor); massage sinus karotis dan endarterektomi penting secara klinis di lokasi ini.'}
  },
  'internal jugular vein': {
    nameId:'Vena jugularis interna',
    overview:{en:'Drains venous blood from the brain, skull, and face. It exits the jugular foramen and runs within the carotid sheath alongside the carotid artery and vagus nerve, joining the subclavian vein to form the brachiocephalic vein.',id:'Mengalirkan darah vena dari otak, tengkorak, dan wajah. Keluar dari foramen jugulare dan berjalan di dalam sarung karotis bersama arteri karotis dan nervus vagus, bergabung dengan vena subklavia membentuk vena brakiosefalika.'},
    conditions:[
      {name:{en:'Thrombophlebitis',id:'Tromboflebitis'},detail:{en:'IJV thrombosis (Lemierre syndrome) can follow oropharyngeal infection with septic pulmonary emboli.',id:'Trombosis vena jugularis interna (sindrom Lemierre) dapat mengikuti infeksi orofaring dengan emboli septik ke paru.'}}],
    clinical:{en:'The height of the internal jugular venous pulsation reflects central venous pressure — a core bedside assessment of right-heart filling.',id:'Ketinggian denyut vena jugularis interna mencerminkan tekanan vena sentral — penilaian samping tempat tidur inti untuk pengisian jantung kanan.'}
  },
  'femoral artery': {
    nameId:'Arteri femoralis',
    overview:{en:'Continuation of the external iliac artery below the inguinal ligament. It traverses the femoral triangle, gives the profunda femoris, and becomes the popliteal artery at the adductor hiatus.',id:'Kelanjutan arteri iliaka eksterna di bawah ligamentum inguinale. Melintasi segitiga femoralis, memberi arteri profunda femoris, lalu menjadi arteri poplitea di hiatus aduktorius.'},
    conditions:[
      {name:{en:'Peripheral artery disease',id:'Penyakit arteri perifer'},detail:{en:'Atherosclerotic stenosis causes claudication and, when critical, rest pain or tissue loss.',id:'Stenosis aterosklerotik menyebabkan klaudikasio, dan bila berat, nyeri istirahat atau kehilangan jaringan.'}},
      {name:{en:'Pseudoaneurysm',id:'Pseudoaneurisma'},detail:{en:'A common complication after catheterisation, presenting as a painful pulsatile groin mass.',id:'Komplikasi umum setelah kateterisasi, tampak sebagai massa inguinal berdenyut dan nyeri.'}}],
    clinical:{en:'In the femoral triangle the nerve lies lateral, artery medial, and vein most medial (NAVY) — the artery is the standard access route for angiography.',id:'Di segitiga femoralis urutannya saraf di lateral, arteri di medial, vena paling medial (NAVY) — arteri ini adalah akses standar untuk angiografi.'}
  },
  'femoral vein': {
    nameId:'Vena femoralis',
    overview:{en:'Medial companion of the femoral artery in the femoral triangle; it becomes the external iliac vein above the inguinal ligament and is the main drainage of the lower limb.',id:'Pendamping medial arteri femoralis di segitiga femoralis; menjadi vena iliaka eksterna di atas ligamentum inguinale dan merupakan drainase utama tungkai.'},
    conditions:[
      {name:{en:'Deep vein thrombosis',id:'Trombosis vena dalam'},detail:{en:'The femoral and iliac veins are common sites; leg swelling and tenderness warrant compression ultrasound.',id:'Vena femoralis dan iliaka adalah lokasi umum; pembengkakan dan nyeri tungkai memerlukan ultrasonografi kompresi.'}}],
    clinical:{en:'The femoral vein offers a classic alternative central venous access site when internal jugular or subclavian routes are unavailable.',id:'Vena femoralis merupakan alternatif klasik akses vena sentral bila jalur jugularis interna atau subklavia tidak tersedia.'}
  },
  'portal vein': {
    nameId:'Vena porta',
    overview:{en:'Formed behind the pancreatic neck by the union of the superior mesenteric and splenic veins. It carries nutrient-rich blood to the liver sinusoids, functioning as the core vessel of the portal system.',id:'Dibentuk di belakang kolumna pankreas oleh penyatuan vena mesenterika superior dan vena lienal. Membawa darah kaya nutrien ke sinusoid hati, berfungsi sebagai pembuluh inti sistem porta.'},
    drainage:{en:'Portal-systemic anastomoses at the esophagus, rectum, and abdominal wall decompress the portal system when it is obstructed.',id:'Anastomosis porta-sistemik di esofagus, rektum, dan dinding abdomen mendekompresi sistem porta saat tersumbat.'},
    conditions:[
      {name:{en:'Portal hypertension',id:'Hipertensi portal'},detail:{en:'Usually from cirrhosis; leads to varices, splenomegaly, ascites, and caput medusae.',id:'Biasanya karena sirosis; menyebabkan varises, splenomegali, asites, dan kaput medusae.'}},
      {name:{en:'Esophageal varices',id:'Varises esofagus'},detail:{en:'Dilated submucosal veins at the distal esophagus that can bleed massively and are a leading cause of upper-GI hemorrhage in cirrhosis.',id:'Vena submukosa yang melebar di esofagus distal yang dapat berdarah masif dan merupakan penyebab utama perdarahan saluran cerna atas pada sirosis.'}}],
    clinical:{en:'A transjugular intrahepatic portosystemic shunt (TIPS) decompresses the portal system in refractory variceal bleeding or ascites.',id:'Transjugular intrahepatic portosystemic shunt (TIPS) mendekompresi sistem porta pada perdarahan varises atau asites yang refrakter.'}
  },
  'hepatic artery': {
    nameId:'Arteri hepatika',
    overview:{en:'Arises from the celiac trunk as the common hepatic artery, becomes the proper hepatic artery after the gastroduodenal branch, and supplies the liver with oxygenated blood — roughly a quarter of hepatic inflow.',id:'Berasal dari trunkus seliakus sebagai arteri hepatika komunis, menjadi arteri hepatika propria setelah cabang gastroduodenalis, dan memasok darah teroksigenasi ke hati — sekitar seperempat aliran masuk hepatik.'},
    conditions:[
      {name:{en:'Hepatic artery aneurysm',id:'Aneurisma arteri hepatika'},detail:{en:'Rare but can rupture; found incidentally on imaging.',id:'Jarang tetapi dapat ruptur; ditemukan insidental pada pencitraan.'}},
      {name:{en:'Chemoembolization target',id:'Target kemoembolisasi'},detail:{en:'Trans-arterial chemoembolization delivers chemotherapy selectively to liver tumors through this artery.',id:'Kemoembolisasi trans-arterial mengantarkan kemoterapi secara selektif ke tumor hati melalui arteri ini.'}}],
    clinical:{en:'The Pringle maneuver compresses the hepatoduodenal ligament (portal triad) to control hepatic bleeding during surgery.',id:'Maneuver Pringle menekan ligamentum hepatoduodenale (triada porta) untuk mengendalikan perdarahan hati saat operasi.'}
  },
  'celiac trunk': {
    nameId:'Trunkus seliakus',
    overview:{en:'A short, wide artery arising from the aorta at about T12, immediately dividing into the left gastric, splenic, and common hepatic arteries to supply the foregut organs.',id:'Arteri pendek dan lebar yang keluar dari aorta sekitar T12, langsung terbagi menjadi arteri gastrika sinistra, lienalis, dan hepatika komunis untuk memperdarahi organ usus depan (foregut).'},
    conditions:[
      {name:{en:'Median arcuate ligament syndrome',id:'Sindrom ligamentum arkusatum medianum'},detail:{en:'Ligamentous compression of the celiac trunk causes postprandial abdominal pain and a bruit.',id:'Kompresi trunkus seliakus oleh ligamen menyebabkan nyeri perut pasca-makan dan bising.'}}],
    clinical:{en:'A celiac plexus block — injecting anesthetic around the celiac trunk — relieves intractable pain, classically from pancreatic cancer.',id:'Blok pleksus seliakus — menyuntik anestetik di sekitar trunkus seliakus — meredakan nyeri yang refrakter, klasik pada kanker pankreas.'}
  },
  'lung': {
    nameId:'Paru',
    overview:{en:'The right lung has three lobes and the left two, the latter partly replaced by the cardiac notch. Thin, spongy organs of gas exchange, their apices project above the clavicles.',id:'Paru kanan memiliki tiga lobus dan kiri dua lobus, yang kiri sebagian diganti oleh inkisur kardiak. Organ bertekstur lembut dan berongga untuk pertukaran gas, apeksnya menonjol di atas klavikula.'},
    bloodSupply:{en:'Dual supply: pulmonary arteries for gas exchange and bronchial arteries from the aorta for the lung tissue itself.',id:'Perdarahan ganda: arteri pulmonalis untuk pertukaran gas dan arteri bronkialis dari aorta untuk jaringan paru itu sendiri.'},
    innervation:{en:'Pulmonary plexus from the vagus (parasympathetic, secretomotor) and sympathetic fibers; visceral afferents mediate cough and stretch reflexes.',id:'Pleksus pulmonalis dari nervus vagus (parasimpatis, sekretomotor) dan serat simpatis; aferen viseral memediasi refleks batuk dan peregangan.'},
    conditions:[
      {name:{en:'Pneumonia',id:'Pneumonia'},detail:{en:'Infection of the alveoli with fever, productive cough, and focal consolidation on imaging.',id:'Infeksi alveolus dengan demam, batuk produktif, dan konsolidasi fokal pada pencitraan.'}},
      {name:{en:'Lung cancer',id:'Kanker paru'},detail:{en:'Leading cause of cancer death; smoking is the dominant risk factor, and presentation ranges from cough to paraneoplastic syndromes.',id:'Penyebab utama kematian akibat kanker; merokok adalah faktor risiko dominan, manifestasi dari batuk sampai sindrom paraneoplastik.'}},
      {name:{en:'Pneumothorax',id:'Pneumotoraks'},detail:{en:'Air in the pleural space collapses the lung; tension pneumothorax shifts the mediastinum and is immediately life-threatening.',id:'Udara di rongga pleura membuat paru kolaps; pneumotoraks tegak menggeser mediastinum dan mengancam nyawa seketika.'}}],
    clinical:{en:'Auscultation maps roughly to the lobes; breath sounds are best heard over the upper back and lateral chest, and the oblique fissure lets the anterior upper lobe be examined separately.',id:'Auskultasi secara kasar mengikuti lobus; bunyi napas paling jelas di punggung atas dan dada lateral, dan fisura oblikus memungkinkan lobus atas anterior diperiksa terpisah.'}
  },
  'larynx': {
    nameId:'Laring',
    overview:{en:'The voice box, spanning roughly C3–C6, is built from thyroid, cricoid, and paired cartilages. It guards the airway during swallowing and produces voice by vibrating the vocal folds.',id:'Kotak suara, membentang kira-kira C3–C6, dibangun dari kartilago tiroid, krikoid, dan kartilago berpasangan. Melindungi jalan napas saat menelan dan menghasilkan suara melalui getaran pita vokal.'},
    innervation:{en:'The recurrent laryngeal nerve supplies all intrinsic muscles except the cricothyroid (external laryngeal nerve); sensory above the cords is via the internal laryngeal nerve.',id:'Nervus laringeus rekurens mempersarafi semua muskulus intrinsik kecuali muskulus krikotiroid (nervus laringeus eksternus); sensorik di atas pita suara melalui nervus laringeus internus.'},
    conditions:[
      {name:{en:'Laryngitis',id:'Laringitis'},detail:{en:'Inflammation, usually viral, causing hoarseness that typically resolves with voice rest.',id:'Peradangan, biasanya virus, menyebabkan serak yang umumnya membaik dengan istirahat suara.'}},
      {name:{en:'Vocal cord paralysis',id:'Paralisis pita vokal'},detail:{en:'Recurrent laryngeal nerve injury (thyroid surgery, malignancy) causes hoarseness; bilateral lesions can obstruct the airway.',id:'Cedera nervus laringeus rekurens (operasi tiroid, keganasan) menyebabkan serak; lesi bilateral dapat menyumbat jalan napas.'}}],
    clinical:{en:'The cricothyroid membrane between the thyroid and cricoid cartilages is the landmark for emergency cricothyrotomy when the upper airway is obstructed.',id:'Membrana krikotiroid antara kartilago tiroid dan krikoid adalah penanda untuk krikotirotomi darurat bila jalan napas atas tersumbat.'}
  },
  'trachea': {
    nameId:'Trakea',
    overview:{en:'A flexible airway from the lower border of the cricoid cartilage (C6) to its bifurcation at the carina (T4/T5), supported by 16–20 C-shaped cartilage rings completed posteriorly by smooth muscle.',id:'Jalan napas yang fleksibel dari batas bawah kartilago krikoid (C6) hingga bifurkasi di karina (T4/T5), ditopang oleh 16–20 cincin kartilago berbentuk C yang dilengkapi otot polos di posterior.'},
    bloodSupply:{en:'Segmental branches of the inferior thyroid and bronchial arteries.',id:'Cabang segmen dari arteri tiroidea inferior dan arteri bronkialis.'},
    conditions:[
      {name:{en:'Tracheal stenosis',id:'Stenosis trakea'},detail:{en:'Narrowing after prolonged intubation or tracheostomy presents as stridor and exertional dyspnea.',id:'Penyempitan setelah intubasi lama atau trakeostomi menimbulkan stridor dan dispnea saat aktivitas.'}},
      {name:{en:'Foreign body aspiration',id:'Aspirasi benda asing'},detail:{en:'Objects lodge at the carina or a main bronchus, causing choking and unilateral air trapping.',id:'Benda asing tersangkut di karina atau bronkus utama, menyebabkan tersedak dan udara terjebak unilateral.'}}],
    clinical:{en:'The carina lies level with the sternal angle; endotracheal tube depth is confirmed by hearing equal breath sounds on both sides.',id:'Karina terletak setinggi angulus sterni; kedalaman tuba endotrakeal dipastikan dengan bunyi napas yang setara di kedua sisi.'}
  },
  'bronchus': {
    nameId:'Bronkus',
    overview:{en:'The right main bronchus is wider, shorter, and more vertical; the left is longer and passes beneath the aortic arch. They divide repeatedly into segmental bronchi supplying bronchopulmonary segments.',id:'Bronkus utama kanan lebih lebar, pendek, dan vertikal; yang kiri lebih panjang dan berjalan di bawah arkus aorta. Keduanya terbagi berulang menjadi bronkus segmental yang memperdarahi segmen bronkopulmonal.'},
    conditions:[
      {name:{en:'Bronchial carcinoma',id:'Karsinoma bronkogenik'},detail:{en:'Tumors arising in the bronchial epithelium; central lesions cause cough, hemoptysis, and post-obstructive pneumonia.',id:'Tumor yang berasal dari epitel bronkus; lesi sentral menimbulkan batuk, hemoptisis, dan pneumonia pasca-obstruksi.'}},
      {name:{en:'Bronchiectasis',id:'Bronkiektasis'},detail:{en:'Permanent airway dilation from chronic infection or obstruction, producing copious sputum and recurrent infections.',id:'Dilatasi jalan napas permanen akibat infeksi atau obstruksi kronis, menghasilkan sputum berlebih dan infeksi berulang.'}}],
    clinical:{en:'Because the right main bronchus is more vertical, aspirated foreign bodies and misplaced tubes preferentially enter the right lung.',id:'Karena bronkus utama kanan lebih vertikal, benda asing yang teraspirasi dan tubu yang salah posisi lebih sering masuk ke paru kanan.'}
  },
  'diaphragm': {
    nameId:'Diafragma',
    overview:{en:'A dome-shaped musculotendinous partition between thorax and abdomen, and the principal muscle of breathing. Its contraction flattens the dome, increasing thoracic volume and drawing air in.',id:'Septum muskulotendinus berbentuk kubah antara toraks dan abdomen, serta otot utama pernapasan. Kontraksinya mendatarkan kubah, memperbesar volume toraks, dan menarik udara masuk.'},
    innervation:{en:'The phrenic nerve from C3, C4, and C5 — "C3, 4, 5 keeps the diaphragm alive"; peripherally, lower intercostal nerves supply the rim.',id:'Nervus frenikus dari C3, C4, dan C5; tepi perifer dipersarafi nervus interkostalis bawah.'},
    conditions:[
      {name:{en:'Hiatal hernia',id:'Hernia hiatal'},detail:{en:'Gastric cardia slips through the esophageal hiatus, producing reflux symptoms.',id:'Kardia lambung menyelip melalui hiatus esofagus, menimbulkan gejala refluks.'}},
      {name:{en:'Diaphragmatic paralysis',id:'Paralisis diafragma'},detail:{en:'Phrenic nerve injury elevates the hemidiaphragm and causes dyspnea, evident on chest X-ray fluoroscopy.',id:'Cedera nervus frenikus meninggikan hemidiafragma dan menyebabkan dispnea, terlihat pada foto toraks.'}},
      {name:{en:'Congenital diaphragmatic hernia',id:'Hernia diafragma kongenital'},detail:{en:'A developmental defect allows abdominal viscera into the chest, causing neonatal respiratory failure.',id:'Cacat perkembangan membiarkan isi abdomen masuk toraks, menyebabkan gagal napas neonatal.'}}],
    clinical:{en:'Diaphragmatic irritation refers pain to the shoulder tip (C4 dermatome) — seen in splenic rupture, subphrenic abscess, and after laparoscopic insufflation.',id:'Iritasi diafragma memantulkan nyeri ke ujung bahu (dermatom C4) — ditemukan pada ruptur limpa, abses subfrenikus, dan setelah insuflasi laparoskopi.'}
  },
  'esophagus': {
    nameId:'Esofagus',
    overview:{en:'A muscular tube from the pharynx (C6) to the gastric cardia (T10) that transports swallowed boluses by peristalsis. It has three narrowings: the cricopharyngeus, the aortic/bronchial crossing, and the diaphragmatic hiatus.',id:'Tabung muskuler dari faring (C6) ke kardia lambung (T10) yang mengangkut makanan dengan peristaltik. Memiliki tiga penyempitan: krikofaringeus, persilangan aorta/bronkus, dan hiatus diafragma.'},
    bloodSupply:{en:'Segmental supply from inferior thyroid, bronchial, and esophageal arteries; venous drainage to the azygos (systemic) and left gastric (portal) veins.',id:'Perdarahan segmen dari arteri tiroidea inferior, bronkialis, dan esofageal; drainase vena ke vena azygos (sistemik) dan gastrika sinistra (porta).'},
    innervation:{en:'Vagus trunks and the esophageal plexus; enteric innervation coordinates peristalsis.',id:'Trunkus vagus dan pleksus esofageal; inervasi enterik mengoordinasikan peristaltik.'},
    conditions:[
      {name:{en:'GERD',id:'Penyakit refluks gastroesofageal'},detail:{en:'Reflux of gastric contents causes heartburn; chronic disease can progress to Barrett esophagus.',id:'Refluks isi lambung menyebabkan nyeri ulu hati; penyakit kronis dapat berkembang menjadi esofagus Barrett.'}},
      {name:{en:'Esophageal varices',id:'Varises esofagus'},detail:{en:'Portal-hypertensive submucosal veins at the lower esophagus that may bleed massively.',id:'Vena submukosa hipertensi portal di esofagus bawah yang dapat berdarah masif.'}},
      {name:{en:'Esophageal carcinoma',id:'Karsinoma esofagus'},detail:{en:'Progressive dysphagia, first to solids then liquids, with weight loss.',id:'Disfagia progresif, mula-mula terhadap makanan padat lalu cair, disertai penurunan berat badan.'}}],
    clinical:{en:'The three anatomic narrowings are where foreign bodies lodge and where endoscopic perforation risk is highest.',id:'Ketiga penyempitan anatomis adalah tempat benda asing tersangkut dan risiko perforasi endoskopik tertinggi.'}
  },
  'stomach': {
    nameId:'Lambung',
    overview:{en:'A J-shaped reservoir between esophagus and duodenum with cardia, fundus, body, antrum, and pylorus. Its mucosa hosts parietal cells secreting acid and intrinsic factor, chief cells secreting pepsinogen, and G cells releasing gastrin.',id:'Kantong berbentuk J antara esofagus dan duodenum dengan kardia, fundus, korpus, antrum, dan pilorus. Mukosanya memuat sel parietal yang mensekresi asam dan faktor intrinsik, sel utama yang mensekresi pepsinogen, dan sel G yang melepaskan gastrin.'},
    bloodSupply:{en:'Rich celiac supply: left and right gastric (lesser curvature), left and right gastro-omental and short gastrics (greater curvature).',id:'Perdarahan seliak yang kaya: gastrika sinistra dan dekstra (kurvatura minor), gastro-omental sinistra dan dekstra serta gastrika breves (kurvatura mayor).'},
    innervation:{en:'Vagal stimulation promotes motility and acid secretion; sympathetic fibers from the celiac plexus are inhibitory and vasomotor.',id:'Stimulasi vagal meningkatkan motilitas dan sekresi asam; serat simpatis dari pleksus seliakus bersifat inhibitif dan vasomotor.'},
    conditions:[
      {name:{en:'Peptic ulcer disease',id:'Penyakit ulkus peptikum'},detail:{en:'H. pylori infection or NSAIDs erode the mucosa; posterior antral ulcers can erode the gastroduodenal artery.',id:'Infeksi H. pylori atau NSAID mengikis mukosa; ulkus antrum posterior dapat mengerosi arteri gastroduodenalis.'}},
      {name:{en:'Gastric cancer',id:'Kanker lambung'},detail:{en:'Often late-presenting with weight loss and early satiety; intestinal-type is linked to chronic atrophic gastritis.',id:'Sering terlambat ditemukan dengan penurunan berat badan dan cepat kenyang; tipe intestinal berkaitan dengan gastritis atrofik kronis.'}}],
    clinical:{en:'Loss of parietal-cell function (atrophic gastritis, gastrectomy) causes vitamin B12 deficiency and pernicious anemia.',id:'Kehilangan fungsi sel parietal (gastritis atrofik, gastrektomi) menyebabkan defisiensi vitamin B12 dan anemia pernisiosa.'}
  },
  'duodenum': {
    nameId:'Duodenum',
    overview:{en:'A C-shaped, mostly retroperitoneal loop around the pancreatic head, about 25 cm long, receiving bile and pancreatic juice at the ampulla of Vater. The ligament of Treitz marks the duodenojejunal flexure.',id:'Lingkaran berbentuk C yang sebagian besar retroperitoneal di sekitar kepala pankreas, panjangnya sekitar 25 cm, menerima empedu dan getah pankreas di ampula Vater. Ligamentum Treitz menandai fleksura duodenojejunal.'},
    bloodSupply:{en:'Superior pancreaticoduodenal (from the gastroduodenal) and inferior pancreaticoduodenal (from the SMA) arteries meet at a watershed in the second part.',id:'Arteri pancreaticoduodenalis superior (dari gastroduodenalis) dan inferior (dari SMA) bertemu di daerah watershed di bagian kedua.'},
    conditions:[
      {name:{en:'Duodenal ulcer',id:'Ulkus duodeni'},detail:{en:'Posterior erosions risk gastroduodenal artery hemorrhage; anterior ones may perforate into the peritoneum.',id:'Erosi posterior berisiko perdarahan arteri gastroduodenalis; yang anterior dapat perforasi ke peritoneum.'}},
      {name:{en:'Duodenal atresia',id:'Atresia duodeni'},detail:{en:'Congenital obstruction presenting with bilious vomiting and a "double bubble" on neonatal imaging.',id:'Obstruksi kongenital dengan muntah bilius dan gambaran "double bubble" pada pencitraan neonatal.'}}],
    clinical:{en:'The second part is the classic site of ampullary tumors causing obstructive jaundice with a palpable gallbladder.',id:'Bagian kedua adalah lokasi klasik tumor ampula yang menyebabkan ikterus obstruktif dengan kandung empedu teraba.'}
  },
  'small intestine': {
    nameId:'Usus halus',
    overview:{en:'Roughly six meters of jejunum and ileum suspended on the mesentery — the principal site of digestion and nutrient absorption. Circular folds, villi, and microvilli multiply the absorptive surface enormously.',id:'Sekitar enam meter jejunum dan ileum yang tergantung pada mesenterium — tempat utama pencernaan dan absorpsi nutrien. Lipatan sirkular, vili, dan mikrovili memperbesar permukaan absorpsi secara masif.'},
    bloodSupply:{en:'Jejunal and ileal branches of the superior mesenteric artery arranged in arcades feeding long vasa recta.',id:'Cabang jejunal dan ileal dari arteri mesenterika superior yang tersusun dalam arkade menuju vasa rekta panjang.'},
    innervation:{en:'Vagus (parasympathetic, secretomotor) and superior mesenteric plexus (sympathetic, inhibitory).',id:'Nervus vagus (parasimpatis, sekretomotor) dan pleksus mesenterika superior (simpatis, inhibitif).'},
    conditions:[
      {name:{en:'Celiac disease',id:'Penyakit seliak'},detail:{en:'Gluten-triggered villous atrophy causes malabsorption, diarrhea, and iron-deficiency anemia.',id:'Atrofi vili yang dipicu gluten menyebabkan malabsorpsi, diare, dan anemia defisiensi besi.'}},
      {name:{en:'Crohn disease',id:'Penyakit Crohn'},detail:{en:'Transmural skip lesions, most often in the terminal ileum, with strictures, fistulas, and B12 deficiency.',id:'Lesi skip transmural, paling sering di ileum terminal, dengan striktur, fistula, dan defisiensi B12.'}},
      {name:{en:'Small bowel obstruction',id:'Obstruksi usus halus'},detail:{en:'Adhesions or hernias cause colicky pain, distension, vomiting, and constipation.',id:'Adhesi atau hernia menyebabkan nyeri kolik, distensi, muntah, dan konstipasi.'}}],
    clinical:{en:'The terminal ileum absorbs vitamin B12 and reabsorbs bile salts — its resection leads to B12 deficiency, gallstones, and steatorrhea.',id:'Ileum terminal menyerap vitamin B12 dan mereabsorpsi garam empedu — reseksinya menyebabkan defisiensi B12, batu empedu, dan steator.'}
  },
  'jejunum': {
    nameId:'Jejunum',
    overview:{en:'The proximal two-fifths of the small intestine beyond the duodenum. It has a thicker wall, wider lumen, longer vasa recta, and more prominent circular folds than the ileum.',id:'Dua per lima proksimal usus halus setelah duodenum. Dindingnya lebih tebal, lumennya lebih lebar, vasa rekta lebih panjang, dan lipatan sirkularnya lebih menonjol dibanding ileum.'},
    bloodSupply:{en:'Few long-looped vascular arcades with long vasa recta from the SMA — a surgical clue to identify it.',id:'Sedikit arkade vaskular dengan vasa rekta panjang dari SMA — petunjuk bedah untuk mengidentifikasinya.'},
    conditions:[
      {name:{en:'Jejunal diverticulosis',id:'Divertikulosis jejunum'},detail:{en:'Rare pseudodiverticula that can cause bacterial overgrowth and bleeding.',id:'Pseudodivertikula jarang yang dapat menyebabkan pertumbuhan bakteri berlebih dan perdarahan.'}}],
    clinical:{en:'At laparotomy the jejunum is identified by its red, thick wall and sparse arcades, contrasting with the paler, fat-encased ileum.',id:'Pada laparotomi, jejunum dikenali dari dindingnya yang merah dan tebal dengan arkade jarang, kontras dengan ileum yang lebih pucat dan terbungkus lemak.'}
  },
  'ileum': {
    nameId:'Ileum',
    overview:{en:'The distal three-fifths of the small intestine, ending at the ileocecal valve. Its wall is thinner with shorter vasa recta, more fat-wrapped arcades, and abundant Peyer patches in the submucosa.',id:'Tiga per lima distal usus halus, berakhir di klep ileosekal. Dindingnya lebih tipis dengan vasa rekta lebih pendek, arkade lebih banyak terbungkus lemak, dan bercak Peyer berlimpah di submukosa.'},
    bloodSupply:{en:'Ileal branches of the SMA with short vasa recta and dense arcades.',id:'Cabang ileal dari SMA dengan vasa rekta pendek dan arkade rapat.'},
    conditions:[
      {name:{en:'Meckel diverticulum',id:'Divertikulum Meckel'},detail:{en:'A congenital vitelline remnant ("rule of twos") that can bleed, inflame, or intussuscept.',id:'Sisa duktus vitelinus kongenital ("aturan dua") yang dapat berdarah, meradang, atau mengalami intususepsi.'}},
      {name:{en:'Terminal ileitis',id:'Ileitis terminal'},detail:{en:'Crohn disease classically inflames the terminal ileum with right-lower-quadrant pain mimicking appendicitis.',id:'Penyakit Crohn klasik meradangi ileum terminal dengan nyeri kuadran kanan bawah menyerupai apendisitis.'}}],
    clinical:{en:'Massive Peyer-patch hyperplasia makes the ileum the commonest lead point for pediatric intussusception.',id:'Hiperplasia bercak Peyer yang masif menjadikan ileum titik terdepan tersering intususepsi pada anak.'}
  },
  'large intestine': {
    nameId:'Usus besar',
    overview:{en:'From cecum to rectum: about 1.5 m of wider bowel characterised by haustra, teniae coli, and epiploic appendages. It recovers water and electrolytes and hosts the gut microbiome.',id:'Dari sekum sampai rektum: sekitar 1,5 m usus yang lebih lebar dengan ciri haustra, teniae koli, dan apendiks epiploika. Fungsinya menyerap kembali air dan elektrolit serta menampung mikrobioma usus.'},
    bloodSupply:{en:'SMA to the mid-transverse colon and IMA distally, meeting at the watershed of the splenic flexure.',id:'SMA sampai kolon transversum tengah dan IMA distal, bertemu di daerah watershed fleksura lienalis.'},
    innervation:{en:'Vagal parasympathetics to mid-transverse, pelvic splanchnic nerves (S2–S4) beyond; sympathetic supply via superior and inferior mesenteric plexuses.',id:'Parasimpatis vagal sampai transversum tengah, nervus splanknik pelvis (S2–S4) setelahnya; simpatis melalui pleksus mesenterika superior dan inferior.'},
    conditions:[
      {name:{en:'Colorectal cancer',id:'Kanker kolorektal'},detail:{en:'A leading malignancy arising from adenomatous polyps; screening colonoscopy is preventive.',id:'Keganasan utama yang berasal dari polip adenomatosa; skrining kolonoskopi bersifat preventif.'}},
      {name:{en:'Diverticulitis',id:'Divertikulitis'},detail:{en:'Inflamed colonic pseudodiverticula, usually sigmoid, causing left-lower-quadrant pain and fever.',id:'Pseudodivertikula kolon yang meradang, biasanya sigmoid, menyebabkan nyeri kuadran kiri bawah dan demam.'}},
      {name:{en:'Ulcerative colitis',id:'Kolitis ulserativa'},detail:{en:'Continuous mucosal inflammation from the rectum upward, with bloody diarrhea and cancer risk after long duration.',id:'Peradangan mukosa kontinu dari rektum ke proksimal, dengan diare berdarah dan risiko kanker setelah lama.'}}],
    clinical:{en:'The splenic flexure watershed is vulnerable to ischemic colitis in low-flow states.',id:'Daerah watershed fleksura lienalis rentan terhadap kolitis iskemik pada kondisi aliran rendah.'}
  },
  'appendix': {
    nameId:'Apendiks',
    overview:{en:'A blind-ended lymphoid tube hanging from the cecum, usually retrocecal but highly variable in position. Its base lies where the teniae converge on the cecum.',id:'Tabung limfoid buntu yang menggantung dari sekum, biasanya retrosekal namun posisinya sangat bervariasi. Basisnya terletak tempat teniae berkonvergensi di sekum.'},
    bloodSupply:{en:'The appendicular artery, an end artery from the ileocolic — thrombosis leads to gangrene.',id:'Arteri apendikularis, arteri terminal dari iliokolika — trombosis menyebabkan gangren.'},
    conditions:[
      {name:{en:'Appendicitis',id:'Apendisitis'},detail:{en:'Obstruction and bacterial overgrowth cause migrating periumbilical pain localising to the right lower quadrant with tenderness.',id:'Obstruksi dan proliferasi bakteri menyebabkan nyeri periumbilikal yang bermigrasi ke kuadran kanan bawah dengan nyeri tekan.'}}],
    clinical:{en:'McBurney point — one third from the ASIS to the umbilicus — marks maximal tenderness and the standard open appendectomy incision.',id:'Titik McBurney — sepertiga dari SIAS ke umbilikus — menandai nyeri tekan maksimal dan insisi apendektomi terbuka standar.'}
  },
  'rectum': {
    nameId:'Rektum',
    overview:{en:'The final 12–15 cm of large intestine, continuing as the anal canal. It is distinguished by transverse folds and an expandable ampulla that accommodates stool.',id:'12–15 cm terakhir usus besar, berlanjut sebagai kanalis analis. Cirinya lipatan transversal dan ampula yang dapat mengembang untuk menampung feses.'},
    bloodSupply:{en:'Superior rectal (IMA), middle rectal (internal iliac), and inferior rectal (pudendal) arteries — an important portosystemic watershed.',id:'Arteri rekta superior (IMA), media (iliaka interna), dan inferior (pudendus) — daerah pertemuan porta-sistemik yang penting.'},
    innervation:{en:'Above the dentate line: visceral afferents and autonomic control; below: somatic innervation by the inferior rectal nerve.',id:'Di atas garis dentate: aferen viseral dan kendali autonom; di bawah: inervasi somatik oleh nervus rekta inferior.'},
    conditions:[
      {name:{en:'Hemorrhoids',id:'Hemoroid'},detail:{en:'Engorged anal cushions above the dentate line bleed painlessly; external ones below are painful.',id:'Bantalan anus yang membengkak di atas garis dentate berdarah tanpa nyeri; yang eksternal di bawah nyeri.'}},
      {name:{en:'Rectal cancer',id:'Kanker rektum'},detail:{en:'Low tumors cause tenesmus and fresh bleeding; digital examination is essential.',id:'Tumor rendah menyebabkan tenesmus dan perdarahan segar; pemeriksaan jari essentials.'}}],
    clinical:{en:'The dentate line divides embryological origins — pain perception, drainage, and tumor histology all change across it.',id:'Garis dentate membagi asal embrionologis — persepsi nyeri, drainase, dan histologi tumor berubah di bagiannya.'}
  },
  'colon': {
    nameId:'Kolon',
    overview:{en:'The cecum, ascending, transverse, descending, and sigmoid colon frame the small intestine. The ascending and descending limbs are retroperitoneal; the transverse and sigmoid hang on mesenteries.',id:'Sekum, kolon asendens, transversum, desendens, dan sigmoid membingkai usus halus. Kaki asendens dan desendens retroperitoneal; transversum dan sigmoid tergantung pada mesenterium.'},
    bloodSupply:{en:'Ileocolic and right colic for the ascending colon, middle colic for the transverse, left colic and sigmoid branches of the IMA distally.',id:'Iliokolika dan kolika dekstra untuk kolon asendens, kolika media untuk transversum, kolika sinistra dan cabang sigmoid dari IMA di distal.'},
    conditions:[
      {name:{en:'Sigmoid volvulus',id:'Volvulus sigmoid'},detail:{en:'The redundant sigmoid twists on its mesentery, causing closed-loop obstruction with a "coffee-bean" sign.',id:'Sigmoid yang berlebih memuntir pada mesenteriumnya, menyebabkan obstruksi loop tertutup dengan tanda "biji kopi".'}},
      {name:{en:'Colonic polyps',id:'Polip kolon'},detail:{en:'Adenomatous polyps are premalignant; detection and removal at colonoscopy prevents cancer.',id:'Polip adenomatosa bersifat pramalignan; deteksi dan pengangkatan saat kolonoskopi mencegah kanker.'}}],
    clinical:{en:'Colonoscopy reaches the cecum by following the lumen and straightening the sigmoid and splenic flexure loops.',id:'Kolonoskopi mencapai sekum dengan mengikuti lumen dan meluruskan lipatan sigmoid serta fleksura lienalis.'}
  },
  'liver': {
    nameId:'Hati',
    overview:{en:'The largest internal organ, occupying the right upper quadrant beneath the diaphragm. It metabolises nutrients, synthesises albumin and clotting factors, stores glycogen, and produces bile, with regenerative capacity.',id:'Organ dalam terbesar, menempati kuadran kanan atas di bawah diafragma. Memetabolisme nutrien, mensintesis albumin dan faktor pembekuan, menyimpan glikogen, dan memproduksi empedu, dengan kapasitas regeneratif.'},
    bloodSupply:{en:'Dual inflow: the portal vein (about 75%) and hepatic artery (about 25%); venous outflow via hepatic veins to the IVC.',id:'Aliran masuk ganda: vena porta (sekitar 75%) dan arteri hepatika (sekitar 25%); aliran keluar vena melalui vena hepatika ke vena kava inferior.'},
    innervation:{en:'Hepatic plexus — sympathetic from the celiac plexus and parasympathetic from the vagus; capsular stretch causes right shoulder-tip pain.',id:'Pleksus hepatikus — simpatis dari pleksus seliakus dan parasimpatis dari vagus; peregangan kapsul menimbulkan nyeri ujung bahu kanan.'},
    conditions:[
      {name:{en:'Cirrhosis',id:'Sirosis hati'},detail:{en:'Chronic injury from hepatitis, alcohol, or fatty liver disease leads to fibrosis, portal hypertension, and liver failure.',id:'Cedera kronis dari hepatitis, alkohol, atau penyakit hati berlemak menyebabkan fibrosis, hipertensi portal, dan gagal hati.'}},
      {name:{en:'Hepatocellular carcinoma',id:'Karsinoma hepatoseluler'},detail:{en:'Usually arising on cirrhotic background; surveillance ultrasound and AFP detect it early.',id:'Biasanya muncul di atas latar sirosis; ultrasonografi surveilans dan AFP mendeteksinya dini.'}},
      {name:{en:'Metabolic dysfunction-associated fatty liver',id:'Penyakit hati berlemak'},detail:{en:'Hepatic steatosis linked to obesity and metabolic syndrome, which can progress to steatohepatitis and fibrosis.',id:'Steatosis hepatik yang berkaitan dengan obesitas dan sindrom metabolik, dapat berkembang menjadi steatohepatitis dan fibrosis.'}}],
    clinical:{en:'Eight Couinaud segments each with independent inflow and outflow allow partial hepatectomy while sparing functional remnant.',id:'Delapan segmen Couinaud masing-masing dengan aliran masuk dan keluar independen memungkinkan hepatektomi parsial dengan menyisakan sisa fungsi.'}
  },
  'gallbladder': {
    nameId:'Kandung empedu',
    overview:{en:'A pear-shaped reservoir under the liver that stores and concentrates bile. Its fundus projects to the ninth costal cartilage, and its neck leads via the cystic duct into the common bile duct.',id:'Kantong berbentuk pir di bawah hati yang menyimpan dan memekatkan empedu. Fundusnya menonjol ke kartilago kostalis kesembilan, dan lehernya menuju duktus sistikus ke duktus koledokus.'},
    bloodSupply:{en:'Cystic artery from the right hepatic artery within the hepatocystic triangle.',id:'Arteri sistikus dari arteri hepatika dekstra di dalam segitiga hepatosistikus.'},
    innervation:{en:'Celiac plexus, vagus, and right phrenic afferents — biliary pain can refer to the right shoulder.',id:'Pleksus seliakus, vagus, dan aferen frenikus dekstra — nyeri bilier dapat menjalar ke bahu kanan.'},
    conditions:[
      {name:{en:'Cholelithiasis',id:'Kolelitiasis'},detail:{en:'Stones form from cholesterol or bilirubin; postprandial right-upper-quadrant biliary colic follows fatty meals.',id:'Batu terbentuk dari kolesterol atau bilirubin; kolik bilier kuadran kanan atas pasca-makan mengikuti makanan berlemak.'}},
      {name:{en:'Cholecystitis',id:'Kolesistitis'},detail:{en:'Gallbladder inflammation with a positive Murphy sign — inspiratory arrest on palpation at the costal margin.',id:'Peradangan kandung empedu dengan tanda Murphy positif — henti napas inspirasi saat palpasi di tepi kostal.'}},
      {name:{en:'Choledocholithiasis',id:'Koledokolitiasis'},detail:{en:'Stones in the common bile duct cause obstructive jaundice; Charcot triad of fever, pain, and jaundice signals cholangitis.',id:'Batu di duktus koledokus menyebabkan ikterus obstruktif; triad Charcot demam, nyeri, dan ikterus menandakan kolangitis.'}}],
    clinical:{en:"Courvoisier law — a palpable, non-tender gallbladder with jaundice points to malignancy rather than stones.",id:'Hukum Courvoisier — kandung empedu yang teraba, tidak nyeri, disertai ikterus mengarah ke keganasan daripada batu.'}
  },
  'pancreas': {
    nameId:'Pankreas',
    overview:{en:'A retroperitoneal organ with head, neck, body, and tail stretching from the duodenal C-loop to the splenic hilum. Exocrine acini make digestive enzymes; islets of Langerhans secrete insulin, glucagon, and other hormones.',id:'Organ retroperitoneal dengan kepala, kolumna, korpus, dan kauda membentang dari lingkar C duodenum ke hilum lienal. Asinus eksokrin menghasilkan enzim pencernaan; pulau Langerhans mensekresi insulin, glukagon, dan hormon lain.'},
    bloodSupply:{en:'Splenic artery along the body and tail; superior and inferior pancreaticoduodenal arteries for the head.',id:'Arteri lienal di sepanjang korpus dan kauda; arteri pancreaticoduodenalis superior dan inferior untuk kepala.'},
    innervation:{en:'Vagal parasympathetics and celiac/superior mesenteric sympathetic plexuses; pain is epigastric and bores through to the back.',id:'Parasimpatis vagal dan pleksus simpatis seliakus/mesenterika superior; nyeri epigastrium dan menembus ke punggung.'},
    conditions:[
      {name:{en:'Acute pancreatitis',id:'Pankreatitis akut'},detail:{en:'Gallstones and alcohol are the leading causes; enzymatic autodigestion produces severe epigastric pain and raised lipase.',id:'Batu empedu dan alkohol adalah penyebab utama; autodigesti enzimatik menimbulkan nyeri epigastrium berat dan lipase meningkat.'}},
      {name:{en:'Pancreatic carcinoma',id:'Karsinoma pankreas'},detail:{en:'Head tumors present with painless obstructive jaundice and weight loss, usually at advanced stage.',id:'Tumor kepala menimbulkan ikterus obstruktif tanpa nyeri dan penurunan berat badan, biasanya pada stadium lanjut.'}}],
    clinical:{en:'The Whipple procedure (pancreaticoduodenectomy) resects the head together with duodenum and distal bile duct.',id:'Prosedur Whipple (pankreatikoduodenektomi) mengangkat kepala bersama duodenum dan duktus bilier distal.'}
  },
  'kidney': {
    nameId:'Ginjal',
    overview:{en:'Paired retroperitoneal organs from T12 to L3, the right slightly lower because of the liver. Each contains about a million nephrons that filter blood, regulate fluid and electrolytes, and produce erythropoietin and active vitamin D.',id:'Organ retroperitoneal berpasangan dari T12 sampai L3, yang kanan sedikit lebih rendah karena hati. Masing-masing memuat sekitar satu juta nefron yang menyaring darah, mengatur cairan dan elektrolit, serta memproduksi eritropoietin dan vitamin D aktif.'},
    bloodSupply:{en:'Renal arteries directly from the aorta; the left renal vein is longer and crosses anterior to the aorta.',id:'Arteri renalis langsung dari aorta; vena renalis sinistra lebih panjang dan menyilang anterior aorta.'},
    innervation:{en:'Renal plexus (T10–L1); renal pain is referred to the flank and groin.',id:'Pleksus renalis (T10–L1); nyeri ginjal memantul ke pinggang dan inguinal.'},
    conditions:[
      {name:{en:'Nephrolithiasis',id:'Nefrolitiasis'},detail:{en:'Stones cause severe loin-to-groin colic with hematuria; distal ureteric stones are the most painful.',id:'Batu menimbulkan kolik berat dari pinggang ke inguinal dengan hematuria; batu ureter distal paling nyeri.'}},
      {name:{en:'Chronic kidney disease',id:'Penyakit ginjal kronik'},detail:{en:'Progressive nephron loss from diabetes or hypertension leads to uremia, anemia, and bone disease.',id:'Kehilangan nefron progresif akibat diabetes atau hipertensi menuju uremia, anemia, dan penyakit tulang.'}},
      {name:{en:'Renal cell carcinoma',id:'Karsinoma sel renal'},detail:{en:'The classic triad of hematuria, flank pain, and mass is late; many tumors are found incidentally.',id:'Triad klasik hematuria, nyeri pinggang, dan massa terlambat muncul; banyak tumor ditemukan insidental.'}}],
    clinical:{en:'Costovertebral-angle tenderness on examination points to renal inflammation; kidney function is tracked with estimated GFR.',id:'Nyeri ketok sudut kostovertebral menunjukkan peradangan ginjal; fungsi ginjal dipantau dengan estimasi LFG.'}
  },
  'ureter': {
    nameId:'Ureter',
    overview:{en:'A 25 cm muscular tube running retroperitoneally from the renal pelvis to the bladder, propelling urine by peristalsis. It crosses the pelvic brim over the iliac vessels and enters the bladder obliquely.',id:'Tabung muskuler 25 cm yang berjalan retroperitoneal dari pelvis renalis ke kandung kemih, mendorong urine secara peristaltik. Menyilang tepi pelvis di atas pembuluh iliaka dan masuk kandung kemih secara oblik.'},
    bloodSupply:{en:'Segmental from renal, gonadal, aortic, iliac, and vesical arteries — incisions risk ischemic strictures.',id:'Segmen dari arteri renalis, gonadal, aorta, iliaka, dan vesika — insisi berisiko striktur iskemik.'},
    innervation:{en:'T11–L2 afferents; ureteric colic is severe and radiates "loin to groin".',id:'Aferen T11–L2; kolik ureter berat dan menjalar dari pinggang ke inguinal.'},
    conditions:[
      {name:{en:'Ureteric stone',id:'Batu ureter'},detail:{en:'Impaction at one of three narrowings causes acute colic; most stones under 5 mm pass spontaneously.',id:'Tersekat di salah satu dari tiga penyempitan menyebabkan kolik akut; sebagian besar batu di bawah 5 mm keluar spontan.'}},
      {name:{en:'Obstruction',id:'Obstruksi ureter'},detail:{en:'Chronic back-pressure dilates the renal pelvis (hydronephrosis) and threatens renal function.',id:'Tekanan balik kronis mendilatasi pelvis renalis (hidronefrosis) dan mengancam fungsi ginjal.'}}],
    clinical:{en:'The three physiologic narrowings — pelviureteric junction, pelvic brim, and vesicoureteric junction — are where stones lodge.',id:'Tiga penyempitan fisiologis — pertemuan pelviureter, tepi pelvis, dan pertemuan vesikoureter — adalah tempat batu tersangkut.'}
  },
  'urinary bladder': {
    nameId:'Kandung kemih',
    overview:{en:'A distensible muscular reservoir in the pelvis, lined by transitional epithelium. The trigone between the two ureteric orifices and the internal urethral orifice is fixed and smooth.',id:'Kantong muskuler yang dapat mengembang di pelvis, dilapisi epitel transisional. Trigonum antara dua ostium ureter dan ostium uretra interna bersifat tetap dan halus.'},
    innervation:{en:'Sympathetic storage and parasympathetic voiding via pelvic splanchnic nerves (S2–S4); the external sphincter is somatic (pudendal nerve).',id:'Simpan oleh simpatis dan berkemih oleh parasimpatis melalui nervus splanknik pelvis (S2–S4); sfingter eksterna somatik (nervus pudendus).'},
    conditions:[
      {name:{en:'Urinary tract infection',id:'Infeksi saluran kemih'},detail:{en:'Cystitis causes dysuria, frequency, and urgency; short female urethras explain the higher incidence.',id:'Sistitis menyebabkan disuria, frekuensi, dan urgensi; uretra perempuan yang pendek menjelaskan insidens lebih tinggi.'}},
      {name:{en:'Bladder cancer',id:'Kanker kandung kemih'},detail:{en:'Painless hematuria is the presenting complaint in most urothelial carcinomas.',id:'Hematuria tanpa nyeri adalah keluhan utama pada sebagian besar karsinoma urotelium.'}},
      {name:{en:'Acute retention',id:'Retensi urin akut'},detail:{en:'Sudden inability to void — from obstruction, medications, or neurogenic causes — needs urgent catheterization.',id:'Ketidakmampuan mendadak berkemih — karena obstruksi, obat, atau neurogenik — memerlukan kateterisasi segera.'}}],
    clinical:{en:'A palpable, percussible bladder above the pubis holds roughly 500 mL; patients on diuretics need timely access to toileting.',id:'Kandung kemih yang teraba dan perkusi positif di atas simfisis menampung sekitar 500 mL; pasien dengan diuretik memerlukan akses toilet tepat waktu.'}
  },
  'urethra': {
    nameId:'Uretra',
    overview:{en:'The final passage from bladder to exterior. In males it is about 20 cm with prostatic, membranous, and spongy parts; in females about 4 cm, which predisposes to ascending infections.',id:'Jalur terakhir dari kandung kemih ke luar. Pada laki-laki sekitar 20 cm dengan bagian prostatika, membranasea, dan spongiosa; pada perempuan sekitar 4 cm, yang mempermudah infeksi asenden.'},
    innervation:{en:'Pudendal nerve for the external sphincter and distal sensation; autonomic fibers to the smooth muscle.',id:'Nervus pudendus untuk sfingter eksterna dan sensasi distal; serat autonom ke otot polos.'},
    conditions:[
      {name:{en:'Urethritis',id:'Uretritis'},detail:{en:'Sexually transmitted infections cause dysuria and discharge; gonococcal and chlamydial are commonest.',id:'Infeksi menular seksual menyebabkan disuria dan sekret; gonokokus dan klamidia tersering.'}},
      {name:{en:'Urethral stricture',id:'Striktur uretra'},detail:{en:'Fibrotic narrowing from trauma or infection produces a weak stream and straining.',id:'Penyempitan fibrotik dari trauma atau infeksi menghasilkan pancaran lemah dan mengejan.'}}],
    clinical:{en:'The male membranous urethra is injured in pelvic fractures; urethral catheterisation is then deferred until imaging.',id:'Uretra membranasea laki-laki cedera pada fraktur pelvis; kateterisasi uretra kemudian ditunda sampai pencitraan.'}
  },
  'brain': {
    nameId:'Otak',
    overview:{en:'The cerebrum, diencephalon, brainstem, and cerebellum — the body’s control center for perception, movement, cognition, emotion, and autonomic regulation. Neurons communicate through roughly a hundred trillion synapses.',id:'Serebrum, diensefalon, batang otak, dan serebellum — pusat kendali tubuh untuk persepsi, gerakan, kognisi, emosi, dan regulasi autonom. Neuron berkomunikasi melalui sekitar seratus triliun sinapsis.'},
    bloodSupply:{en:'Internal carotid arteries (anterior and middle cerebral) and vertebral arteries (posterior cerebral) anastomose in the Circle of Willis.',id:'Arteri karotis interna (serebri anterior dan media) dan arteri vertebralis (serebri posterior) beranastomosis di sirkulus Willisi.'},
    conditions:[
      {name:{en:'Stroke',id:'Stroke'},detail:{en:'Middle-cerebral-artery occlusion causes contralateral face and arm weakness with aphasia when the dominant hemisphere is affected.',id:'Oklusi arteri serebri media menyebabkan kelemahan kontralateral wajah dan lengan disertai afasia bila hemisfer dominan terkena.'}},
      {name:{en:'Traumatic brain injury',id:'Cedera otak traumatik'},detail:{en:'Extradural, subdural, and intraparenchymal hemorrhage raise intracranial pressure; the GCS grades severity.',id:'Perdarahan ekstradural, subdural, dan intraparenkim meningkatkan tekanan intrakranial; GCS menilai keparahan.'}},
      {name:{en:'Epilepsy',id:'Epilepsi'},detail:{en:'Cortical hyperexcitability produces recurrent seizures, classifiable by semiology and EEG.',id:'Hiperexitabilitas korteks menghasilkan kejang berulang, diklasifikasi berdasarkan semiologi dan EEG.'}}],
    clinical:{en:'Rising intracranial pressure first widens the pupil (CN III compression), then induces Cushings triad of hypertension, bradycardia, and irregular respiration.',id:'Peningkatan tekanan intrakranial mula-mula melebarkan pupil (kompresi N. III), lalu menimbulkan triad Cushing hipertensi, bradikardia, dan napas tidak teratur.'}
  },
  'cerebellum': {
    nameId:'Serebellum',
    overview:{en:'The "little brain" of the posterior fossa, dorsal to the brainstem. The vermis coordinates trunk and gait, while each hemisphere controls the ipsilateral limb coordination, comparing intended with actual movement.',id:'Otak kecil di fossa posterior, dorsal dari batang otak. Vermis mengoordinasikan badan dan cara berjalan, sedangkan setiap hemisfer mengendalikan koordinasi tungkai ipsilateral, membandingkan gerakan yang direncanakan dengan aktual.'},
    bloodSupply:{en:'Superior, anterior inferior, and posterior inferior cerebellar arteries from the vertebrobasilar system.',id:'Arteri serebellaris superior, anterior inferior, dan posterior inferior dari sistem vertebrobasiler.'},
    conditions:[
      {name:{en:'Cerebellar lesion',id:'Lesi serebellum'},detail:{en:'Signs are ipsilateral: ataxia, intention tremor, dysdiadochokinesia, nystagmus, slurred speech, and hypotonia.',id:'Tanda-tanda ipsilateral: ataksia, tremor intensional, disdiadokokinesia, nistagmus, bicara pelan, dan hipotonia.'}},
      {name:{en:'Medulloblastoma',id:'Meduloblastoma'},detail:{en:'A childhood tumor of the vermis causing truncal ataxia and signs of raised intracranial pressure.',id:'Tumor masa kanak-kanak di vermis yang menyebabkan ataksia badan dan tanda peningkatan tekanan intrakranial.'}}],
    clinical:{en:'Tonsillar herniation through the foramen magnum compresses the medulla — respiratory arrest; the posterior fossa leaves little room for expansion.',id:'Herniasi tonsil melalui foramen magnum menekan medula — henti napas; fossa posterior menyisakan sedikit ruang untuk ekspansi.'}
  },
  'brainstem': {
    nameId:'Batang otak',
    overview:{en:'Midbrain, pons, and medulla oblongata: a stalk carrying all ascending and descending tracts, housing the cranial nerve nuclei III–XII and the vital respiratory and cardiovascular centers.',id:'Mesensefalon, pons, dan medula oblongata: tangkai yang membawa semua traktus asenden dan desenden, menampung nukleus saraf kranial III–XII serta pusat vital pernapasan dan kardiovaskular.'},
    bloodSupply:{en:'Vertebral and basilar arteries with paramedian, short circumferential, and long circumferential branches.',id:'Arteri vertebralis dan basilaris dengan cabang paramedian, sirkumferensial pendek, dan panjang.'},
    conditions:[
      {name:{en:'Central herniation',id:'Herniasi sentral'},detail:{en:'Downward pressure through the tentorial notch damages the midbrain — pupils fix mid-position and consciousness is lost.',id:'Tekanan ke bawah melalui insisura tentorium merusak mesensefalon — pupil tetap di posisi tengah dan kesadaran hilang.'}},
      {name:{en:'Locked-in syndrome',id:'Sindrom locked-in'},detail:{en:'Basilar-artery pontine infarction spares only vertical eye movement while quadriplegia and anarthria persist.',id:'Infark pons arteri basilaris hanya menyisakan gerakan mata vertikal sementara kuadriplegia dan anartria menetap.'}}],
    clinical:{en:'Brain death testing probes medullary function — the apnea test with loss of all brainstem reflexes.',id:'Pemeriksaan kematian batang otak menguji fungsi medula — uji apnea dengan hilangnya semua refleks batang otak.'}
  },
  'spinal cord': {
    nameId:'Medula spinalis',
    overview:{en:'A 45 cm cylinder of neural tissue in the vertebral canal from the medulla to about L1–L2, where it tapers to the conus medullaris. Thirty-one paired spinal nerves emerge along it.',id:'Silinder jaringan saraf sepanjang 45 cm di kanalis vertebralis dari medula sampai sekitar L1–L2, meruncing menjadi conus medullaris. Tiga puluh satu pasang saraf spinal keluar di sepanjangnya.'},
    bloodSupply:{en:'A single anterior spinal artery (anterior two-thirds) and paired posterior spinal arteries, reinforced by radiculomedullary branches such as the artery of Adamkiewicz.',id:'Satu arteri spinalis anterior (dua pertiga anterior) dan dua arteri spinalis posterior, diperkuat cabang radikulomedularis seperti arteri Adamkiewicz.'},
    conditions:[
      {name:{en:'Cord compression',id:'Kompresi medula spinalis'},detail:{en:'Tumor, disc, or abscess causing bilateral weakness, sensory level, and sphincter dysfunction — urgent MRI and decompression.',id:'Tumor, diskus, atau abses menyebabkan kelemahan bilateral, level sensorik, dan disfungsi sfingter — MRI segera dan dekompresi.'}},
      {name:{en:'Cauda equina syndrome',id:'Sindrom kauda ekuina'},detail:{en:'Saddle anesthesia, urinary retention, and bilateral sciatica; surgical emergency within hours.',id:'Anestesia sadel, retensi urin, dan sciatica bilateral; kegawatdaruratan bedah dalam hitungan jam.'}},
      {name:{en:'Syringomyelia',id:'Siringomielia'},detail:{en:'A central cavity disrupts crossing spinothalamic fibers, causing cape-like loss of pain and temperature.',id:'Kavitas sentral memutus serat spino-talamikus yang menyilang, menyebabkan hilangnya nyeri dan suhu seperti jubah.'}}],
    clinical:{en:'In aortic surgery the segmental artery of Adamkiewicz (T9–L2) may be sacrificed, risking anterior cord ischemia and paraplegia.',id:'Pada operasi aorta, arteri segmental Adamkiewicz (T9–L2) dapat dikorbankan, berisiko iskemia korda anterior dan paraplegia.'}
  },
  'cranial nerve': {
    nameId:'Nervus kranialis',
    overview:{en:'Twelve paired nerves emerging from the brainstem and brain: olfactory, optic, oculomotor, trochlear, trigeminal, abducens, facial, vestibulocochlear, glossopharyngeal, vagus, accessory, and hypoglossal.',id:'Dua belas pasang saraf yang keluar dari batang otak dan otak: olfaktorius, optikus, okulomotorius, troklearis, trigeminus, abdusens, fasialis, vestibulokoklearis, glossofaringeus, vagus, asesorius, dan hipoglosus.'},
    conditions:[
      {name:{en:'Oculomotor palsy',id:'Paralisis okulomotorius'},detail:{en:'The eye deviates down and out; a blown (dilated) pupil signals compressive causes such as aneurysm — emergency.',id:'Mata berdeviasi ke bawah dan keluar; pupil melebar menandakan penyebab kompresif seperti aneurisma — kegawatdaruratan.'}},
      {name:{en:'Facial nerve palsy',id:'Paralisis nervus fasialis'},detail:{en:'Bell palsy causes unilateral lower-motor-neuron weakness of the whole hemiface, forehead included.',id:'Paralisis Bell menyebabkan kelemahan neuron motor bawah unilateral seluruh setengah wajah, termasuk dahi.'}}],
    clinical:{en:'A quick cranial-nerve screen localizes brainstem lesions in seconds and is part of every focused neurologic examination.',id:'Skrining nervus kranialis yang cepat melokalisasi lesi batang otak dalam hitungan detik dan menjadi bagian setiap pemeriksaan neurologis terarah.'}
  },
  'optic nerve': {
    nameId:'Nervus optikus',
    overview:{en:'The second cranial nerve, a CNS tract of about 1.2 million retinal ganglion axons running from retina to lateral geniculate nucleus, with partial decussation at the chiasm.',id:'Nervus kranialis kedua, traktus SSP dengan sekitar 1,2 juta akson ganglion retina dari retina menuju nukleus genikulatum lateral, dengan dekusasi parsial di kiasma.'},
    conditions:[
      {name:{en:'Optic neuritis',id:'Neuritis optik'},detail:{en:'Inflammatory demyelination with painful vision loss on eye movement; a common first presentation of multiple sclerosis.',id:'Demielinasi inflamasi dengan kehilangan penglihatan dan nyeri saat gerak mata; presentasi pertama yang sering pada sklerosis multipel.'}},
      {name:{en:'Papilledema',id:'Papiledema'},detail:{en:'Bilateral optic disc swelling from raised intracranial pressure — an alarming fundoscopic finding.',id:'Bengkak diskus optikus bilateral akibat tekanan intrakranial meningkat — temuan funduskopi yang mengkhawatirkan.'}}],
    clinical:{en:'Field defects localize lesions: bitemporal hemianopia points to chiasmal compression, homonymous defects to retrochiasmal lesions.',id:'Defek lapang pandang melokalisasi lesi: hemianopia bitemporal mengarah ke kompresi kiasma, defek homonim ke lesi retrokiasmal.'}
  },
  'pituitary gland': {
    nameId:'Kelenjar hipofisis',
    overview:{en:'The master gland in the sella turcica below the optic chiasm. The anterior lobe releases GH, prolactin, ACTH, TSH, LH, and FSH; the posterior lobe stores ADH and oxytocin made in the hypothalamus.',id:'Kelenjar induk di sella turcica di bawah kiasma optikum. Lobus anterior melepaskan GH, prolaktin, ACTH, TSH, LH, dan FSH; lobus posterior menyimpan ADH dan oksitosin yang dibuat di hipotalamus.'},
    conditions:[
      {name:{en:'Pituitary adenoma',id:'Adenoma hipofisis'},detail:{en:'Functioning tumors cause prolactinoma, acromegaly, or Cushing disease; non-functioning ones compress the chiasm.',id:'Tumor berfungsi menyebabkan prolaktinoma, akromegali, atau penyakit Cushing; yang tidak berfungsi menekan kiasma.'}},
      {name:{en:'Sheehan syndrome',id:'Sindrom Sheehan'},detail:{en:'Postpartum pituitary infarction presents with failure of lactation and secondary amenorrhea.',id:'Infark hipofisis pasca-persalinan menimbulkan kegagalan laktasi dan amenorea sekunder.'}}],
    clinical:{en:'Chiasmal compression classically produces bitemporal superior quadrantanopia; surgery uses the transsphenoidal route.',id:'Kompresi kiasma klasik menimbulkan kuadrananopia bitemporal superior; operasi memakai jalur transsfenoidal.'}
  },
  'adrenal gland': {
    nameId:'Kelenjar adrenal (suprarenalis)',
    overview:{en:'Pyramid on the right, crescent on the left, capping each kidney. The cortex makes aldosterone, cortisol, and androgens; the medulla releases catecholamines.',id:'Berbentuk piramida di kanan dan sabit di kiri, menutupi setiap ginjal. Korteks menghasilkan aldosteron, kortisol, dan androgen; medulla melepaskan katekolamin.'},
    bloodSupply:{en:'Inferior phrenic, aortic, and renal arteries; a single right vein drains to the IVC and the left to the left renal vein.',id:'Arteri frenika inferior, aorta, dan renalis; satu vena kanan bermuara ke vena kava inferior dan kiri ke vena renalis sinistra.'},
    conditions:[
      {name:{en:'Pheochromocytoma',id:'Feokromositoma'},detail:{en:'Catecholamine-secreting tumor with episodic headache, sweating, palpitations, and hypertension — rule of 10s.',id:'Tumor penghasil katekolamin dengan episode sakit kepala, keringat, palpitasi, dan hipertensi — aturan sepuluh.'}},
      {name:{en:'Addison disease',id:'Penyakit Addison'},detail:{en:'Primary adrenal insufficiency with fatigue, hyperpigmentation, hypotension, and hyponatremia; crisis is life-threatening.',id:'Insufisiensi adrenal primer dengan lelah, hiperpigmentasi, hipotensi, dan hiponatremia; krisis mengancam nyawa.'}},
      {name:{en:'Cushing syndrome',id:'Sindrom Cushing'},detail:{en:'Cortisol excess — striae, moon face, proximal myopathy, and glucose intolerance.',id:'Kelebihan kortisol — striae, muka bulan, miopati proksimal, dan intoleransi glukosa.'}}],
    clinical:{en:'Adrenal incidentalomas are common; functioning and malignant potential must be excluded before observation.',id:'Insidentaloma adrenal sering ditemukan; potensi berfungsi dan keganasan harus disingkirkan sebelum observasi.'}
  },
  'tongue': {
    nameId:'Lidah',
    overview:{en:'A muscular organ of taste, manipulation, and speech. General sensation and taste split by thirds — anterior two-thirds via the facial (taste) and lingual (sensation) nerves, posterior third via the glossopharyngeal.',id:'Organ muskuler untuk pengecap, manipulasi makanan, dan bicara. Sensasi umum dan pengecapan terbagi per sepertiga — dua pertiga anterior melalui nervus fasialis (pengecapan) dan lingualis (sensasi), sepertiga posterior melalui glossofaringeus.'},
    innervation:{en:'Motor: hypoglossal (CN XII), except palatoglossus (vagus). Taste: chorda tympani (VII) anterior, IX posterior.',id:'Motorik: hipoglosus (N. XII), kecuali muskulus palatoglosus (vagus). Pengecapan: korda timpani (VII) anterior, IX posterior.'},
    conditions:[
      {name:{en:'Tongue carcinoma',id:'Karsinoma lidah'},detail:{en:'Lateral-border ulcers in smokers that fail to heal need urgent biopsy.',id:'Ulkus tepi lateral pada perokok yang tidak sembuh memerlukan biopsi segera.'}},
      {name:{en:'Glossitis',id:'Glositis'},detail:{en:'Smooth, painful tongue from B-vitamin deficiency, anemia, or infection.',id:'Lidah licin dan nyeri akibat defisiensi vitamin B, anemia, atau infeksi.'}}],
    clinical:{en:'Hypoglossal lesions make the tongue deviate toward the damaged side on protrusion.',id:'Lesi hipoglosus membuat lidah menyimpang ke sisi yang rusak saat dijulurkan.'}
  },
  'spleen': {
    nameId:'Lien (limpa)',
    overview:{en:'The largest lymphoid organ, tucked under ribs 9–11 in the left upper quadrant. Red pulp filters blood and recycles aged erythrocytes; white pulp mounts immune responses to blood-borne antigens.',id:'Organ limfoid terbesar, tersembunyi di bawah iga 9–11 di kuadran kiri atas. Pulpa merah menyaring darah dan mendaur ulang eritrosit tua; pulpa putih membangun respons imun terhadap antigen dalam darah.'},
    bloodSupply:{en:'Splenic artery from the celiac trunk; splenic vein joins the SMV to form the portal vein.',id:'Arteri lienalis dari trunkus seliakus; vena lienalis bergabung dengan vena mesenterika superior membentuk vena porta.'},
    conditions:[
      {name:{en:'Splenic rupture',id:'Ruptur limpa'},detail:{en:'The most commonly injured abdominal organ in blunt trauma; delayed rupture can occur weeks after injury.',id:'Organ abdomen yang paling sering cedera pada trauma tumpul; ruptur tertunda dapat terjadi berminggu-minggu setelah cedera.'}},
      {name:{en:'Splenomegaly',id:'Splenomegali'},detail:{en:'Enlargement from portal hypertension, hematologic disease, or infection; massive spleens reach the right lower quadrant.',id:'Pembesaran akibat hipertensi portal, penyakit hematologik, atau infeksi; limpa masif dapat mencapai kuadran kanan bawah.'}}],
    clinical:{en:'After splenectomy, patients need vaccination against encapsulated organisms; Howell-Jolly bodies on smear confirm asplenia.',id:'Setelah splenektomi, pasien memerlukan vaksinasi terhadap kapsul-berbunga; badan Howell-Jolly pada apusan menegaskan asplenia.'}
  },
  'thymus': {
    nameId:'Timus',
    overview:{en:'A bilobed lymphoid organ behind the sternum, prominent in children and gradually replaced by fat after puberty. It is where T lymphocytes mature and learn self-tolerance.',id:'Organ limfoid berlobus dua di belakang sternum, menonjol pada anak dan berangsur digantikan lemak setelah pubertas. Tempat limfosit T matang dan belajar toleransi-diri.'},
    bloodSupply:{en:'Inferior thyroid and internal thoracic arteries.',id:'Arteri tiroidea inferior dan torasika interna.'},
    conditions:[
      {name:{en:'Thymoma',id:'Timoma'},detail:{en:'An anterior mediastinal mass strongly associated with myasthenia gravis — about half of thymoma patients have MG.',id:'Massa mediastinum anterior yang berkaitan kuat dengan miastenia gravis — sekitar separuh pasien timoma memiliki MG.'}},
      {name:{en:'Thymic hyperplasia',id:'Hiperplasia timus'},detail:{en:'Reactive enlargement in illness and recovery; a common incidental anterior mediastinal mass.',id:'Pembesaran reaktif saat sakit dan pemulihan; massa mediastinum anterior insidental yang umum.'}}],
    clinical:{en:'The anterior mediastinal mass differential is memorized as the 4 Ts — thymoma, teratoma, thyroid enlargement, and terrible lymphoma.',id:'Diagnosis banding massa mediastinum anterior dihafal sebagai 4 T — timoma, teratoma, pembesaran tiroid, dan limfoma.'}
  },
  'skull': {
    nameId:'Tengkorak',
    overview:{en:'Twenty-two bones — eight cranial and fourteen facial — joined by sutures, encasing the brain and anchoring the face. The pterion, where frontal, parietal, temporal, and sphenoid meet, is its thinnest point.',id:'Dua puluh dua tulang — delapan kranial dan empat belas fasial — disatukan oleh sutura, membungkus otak dan menambatkan wajah. Pterion, tempat frontal, parietal, temporal, dan sfenoid bertemu, adalah titik tertipisnya.'},
    bloodSupply:{en:'Middle meningeal arteries grooving the inner table; scalp supply is rich and anastomotic.',id:'Arteri meningeus media yang membentuk alur pada tabula interna; perdarahan kulit kepala kaya dan anastomotik.'},
    innervation:{en:'Trigeminal divisions supply the face and dura; the scalp receives cervical plexus branches posteriorly.',id:'Divisi trigeminus memperdarahi wajah dan dura; kulit kepala posterior menerima cabang pleksus servikal.'},
    conditions:[
      {name:{en:'Extradural hematoma',id:'Hematoma ekstradural'},detail:{en:'A pterion fracture lacerates the middle meningeal artery; classically a lucid interval precedines deterioration.',id:'Fraktur pterion melukai arteri meningeus media; klasiknya terdapat interval jernih sebelum memburuk.'}},
      {name:{en:'Basal skull fracture',id:'Fraktur basis kranii'},detail:{en:'Raccoon eyes, Battle sign, and CSF rhinorrhea indicate a base-of-skull fracture — avoid nasogastric intubation.',id:'Mata rakun, tanda Battle, dan rinorea LCR menandakan fraktur basis kranii — hindari intubasi nasogastrik.'}}],
    clinical:{en:'The scalp bleeds profusely because its vessels are held open by dense connective tissue; lacerations can cause shock in children.',id:'Kulit kepala berdarah deras karena pembuluhnya terjaga terbuka oleh jaringan ikat padat; laserasi dapat menyebabkan syok pada anak.'}
  },
  'mandible': {
    nameId:'Mandibula',
    overview:{en:'The strongest and only mobile facial bone, articulating at the temporomandibular joints. It carries the lower teeth and transmits the inferior alveolar nerve through its canal.',id:'Tulang fasial terkuat dan satu-satunya yang mobile, berartikulasi di sendi temporomandibular. Membawa gigi bawah dan meneruskan nervus alveolaris inferior melalui kandalanya.'},
    innervation:{en:'Inferior alveolar branch of the mandibular division (V3); mental nerve emerges at the premolar root.',id:'Cabang alveolaris inferior dari divisi mandibular (V3); nervus mentalis keluar di akar premolar.'},
    conditions:[
      {name:{en:'Mandibular fracture',id:'Fraktur mandibula'},detail:{en:'Condyle and angle are common sites; asymmetry, malocclusion, and drooling suggest fracture — always image both jaws.',id:'Kondilus dan angulus adalah lokasi umum; asimetri, maloklusi, dan mengiler mengesankan fraktur — selalu periksa kedua rahang.'}},
      {name:{en:'TMJ dislocation',id:'Dislokasi TMJ'},detail:{en:'The condyle slides anteriorly out of the fossa; the mouth stays open and reduction is needed.',id:'Kondilus meluncur anterior keluar dari fossa; mulut tetap terbuka dan diperlukan reposisi.'}}],
    clinical:{en:'An inferior alveolar nerve block anesthetises the ipsilateral lower teeth and lower lip for dental procedures.',id:'Blok nervus alveolaris inferior men-anestesi gigi bawah dan bibir bawah ipsilateral untuk prosedur dental.'}
  },
  'vertebral column': {
    nameId:'Kolumna vertebralis',
    overview:{en:'Thirty-three vertebrae — 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, 4 coccygeal — stacked in cervical and lumbar lordoses between thoracic and sacral kyphoses, protecting the cord and transmitting body weight.',id:'Tiga puluh tiga vertebra — 7 servikal, 12 torakal, 5 lumbal, 5 sakral yang berfusi, 4 koksigeus — tersusun dalam lordosis servikal dan lumbal di antara kifosis torakal dan sakral, melindungi medula dan meneruskan berat badan.'},
    bloodSupply:{en:'Segmental medullary and radicular arteries; the vertebral bodies are supplied by anterior and posterior spinal branches.',id:'Arteri medularis dan radikularis segmental; korpus vertebra diperdarahi cabang spinal anterior dan posterior.'},
    innervation:{en:'The meninges and posterior longitudinal ligament are innervated by the sinuvertebral nerve — a disc prolapse is painful.',id:'Meningen dan ligamentum longitudinale posterior dipersarafi nervus sinuvertebralis — prolaps diskus menimbulkan nyeri.'},
    conditions:[
      {name:{en:'Disc herniation',id:'Herniasi diskus intervertebralis'},detail:{en:'L4–L5 and L5–S1 prolapses compress the traversing nerve root, causing sciatica.',id:'Prolaps L4–L5 dan L5–S1 menekan akar saraf yang melintas, menyebabkan nyeri iskiadikus.'}},
      {name:{en:'Vertebral fracture',id:'Fraktur vertebra'},detail:{en:'Osteoporotic compression fractures cause acute back pain in the elderly; burst fractures retropulse bone into the canal.',id:'Fraktur kompresi osteoporotik menimbulkan nyeri punggung akut pada lansia; fraktur burst mendorong fragmen ke kanalis.'}},
      {name:{en:'Spinal metastasis',id:'Metastasis tulang belakang'},detail:{en:'Breast, lung, and prostate cancers commonly spread to the spine and threaten the cord.',id:'Kanker payudara, paru, dan prostat sering metastasis ke tulang belakang dan mengancam medula.'}}],
    clinical:{en:'A straight-leg-raise test reproduces radicular pain; an L4–L5 disc typically compresses the L5 root.',id:'Uji angkat kaki lurus menggandakan nyeri radikular; diskus L4–L5 khas menekan akar L5.'}
  },
  'rib': {
    nameId:'Kosta (iga)',
    overview:{en:'Twelve pairs of curved, springy bones: true ribs 1–7 join the sternum directly, false ribs 8–10 join via the costal cartilage, and floating ribs 11–11 have free anterior ends.',id:'Dua belas pasang tulang melengkung dan lentur: kosta sejati 1–7 langsung menuju sternum, kosta palsu 8–10 melalui kartilago kostalis, dan kota mengambang 11–12 ujung anterior bebas.'},
    bloodSupply:{en:'Posterior intercostal arteries from the aorta and anterior intercostals from the internal thoracic artery.',id:'Arteri interkostalis posterior dari aorta dan interkostalis anterior dari arteri torasika interna.'},
    innervation:{en:'Intercostal nerves running in the costal groove with the vessels.',id:'Nervus interkostalis berjalan di sulkus kosta bersama pembuluh darah.'},
    conditions:[
      {name:{en:'Rib fracture',id:'Fraktur kosta'},detail:{en:'Chest-wall pain with splinting; multiple fractures cause flail chest with paradoxical movement and need ventilation.',id:'Nyeri dinding dada dengan kaku; fraktur ganda menyebabkan flail chest dengan gerakan paradoksal dan memerlukan ventilasi.'}},
      {name:{en:'First rib fracture',id:'Fraktur kosta pertama'},detail:{en:'Requires major force — suspect great-vessel and brachial plexus injury.',id:'Memerlukan gaya besar — curigai cedera pembuluh besar dan pleksus brakialis.'}}],
    clinical:{en:'Intercostal vessels run in the costal groove near the rib’s lower edge — chest drains and needles are placed just above a rib.',id:'Pembuluh interkostal berjalan di sulkus kosta dekat tepi bawah iga — drain dada dan jarum dipasang tepat di atas iga.'}
  },
  'sternum': {
    nameId:'Sternum',
    overview:{en:'The flat breastbone of manubrium, body, and xiphoid process, forming the midline anterior thoracic cage. The manubriosternal (sternal) angle marks T4/T5.',id:'Tulang dada pipih dari manubrium, korpus, dan prosesus xifoideus, membentuk sangkar toraks anterior garis tengah. Angulus sterni menandai T4/T5.'},
    bloodSupply:{en:'Internal thoracic arteries perforating anteriorly — the basis for harvesting bone for grafts.',id:'Arteri torasika interna yang berperforasi di anterior — dasar pengambilan cangkok tulang.'},
    innervation:{en:'Anterior branches of the intercostal nerves.',id:'Cabang anterior nervus interkostalis.'},
    conditions:[
      {name:{en:'Sternal fracture',id:'Fraktur sternum'},detail:{en:'Usually from deceleration trauma; suspect blunt cardiac injury beneath.',id:'Biasanya dari trauma deselerasi; curigai cedera jantung tumpul di bawahnya.'}},
      {name:{en:'Post-sternotomy dehiscence',id:'Disrupsi pasca-sternotomi'},detail:{en:'Wound separation after cardiac surgery risks mediastinitis.',id:'Pisahnya luka setelah operasi jantung berisiko mediastinitis.'}}],
    clinical:{en:'The sternum is the standard site for adult bone-marrow biopsy; the sternal angle marks the aortic arch, carina, and thoracic-duct crossing.',id:'Sternum adalah lokasi standar biopsi sumsum tulang dewasa; angulus sterni menandai arkus aorta, karina, dan persilangan duktus torasikus.'}
  },
  'clavicle': {
    nameId:'Klavikula',
    overview:{en:'The strut-like collarbone, the first bone to ossify and the most frequently fractured. It links the sternum to the acromion and shields the subclavian vessels and brachial plexus.',id:'Tulang selangka seperti penyangga, tulang pertama yang mengossifikasi dan paling sering patah. Menghubungkan sternum ke akromion dan melindungi pembuluh subklavia serta pleksus brakialis.'},
    conditions:[
      {name:{en:'Midshaft clavicle fracture',id:'Fraktur klavikula sepertiga tengah'},detail:{en:'From a fall on the shoulder; the arm droops and most heal with a sling despite angulation.',id:'Dari jatuh pada bahu; lengan jatuh dan mayoritas sembuh dengan sangkuran meski ada angulasi.'}}],
    clinical:{en:'The subclavian vein runs behind the clavicle’s middle third — the landmarks for infraclavicular central lines.',id:'Vena subklavia berjalan di belakang sepertiga tengah klavikula — penanda untuk jalur vena sentral infraklavikular.'}
  },
  'scapula': {
    nameId:'Skapula',
    overview:{en:'A flat triangular bone suspended on the posterior thorax by muscles. Its glenoid cavity forms the shoulder joint with the humeral head, capped by the acromion and coracoid processes.',id:'Tulang pipih segitiga yang tergantung di toraks posterior oleh otot. Kavitas glenoidalisnya membentuk sendi bahu dengan kaput humeri, ditutup prosesus akromion dan korakoid.'},
    conditions:[
      {name:{en:'Scapular winging',id:'Scapula alata (winging)'},detail:{en:'Long thoracic nerve injury paralyzes the serratus anterior and lifts the medial border.',id:'Cedera nervus torasikus longus melumpuhkan muskulus serratus anterior dan mengangkat tepi medial skapula.'}},
      {name:{en:'Scapular fracture',id:'Fraktur skapula'},detail:{en:'Requires substantial energy — look for underlying pulmonary and vascular injuries.',id:'Memerlukan energi besar — cari cedera paru dan vaskular di bawahnya.'}}],
    clinical:{en:'The scapula floats on muscle — good mobility for overhead reach, but its stability depends entirely on the rotator cuff and periscapular muscles.',id:'Skapula mengapung pada otot — mobilitas baik untuk jangkauan atas kepala, tetapi stabilitasnya sepenuhnya bergantung pada manset rotator dan otot periskapular.'}
  },
  'humerus': {
    nameId:'Humerus',
    overview:{en:'The arm bone from shoulder to elbow. Its head fits the glenoid, the surgical neck and shaft carry the radial and axillary nerves in harm’s way, and its distal end forms the hinge with the ulna.',id:'Tulang lengan dari bahu ke siku. Kaputnya masuk glenoid, kolumna kolumna surgicalis dan diafisis membawa nervus radialis dan aksilaris di jalur rawan, ujung distalnya membentuk engsel dengan ulna.'},
    innervation:{en:'Axillary nerve at the surgical neck; radial nerve in the spiral groove; ulnar nerve behind the medial epicondyle.',id:'Nervus aksilaris di kolumna surgicalis; nervus radialis di sulkus nervi radialis; nervus ulnaris di belakang epikondylus medialis.'},
    conditions:[
      {name:{en:'Supracondylar fracture',id:'Fraktur suprakondiler'},detail:{en:'A childhood fall-extension injury endangering the brachial artery — check the radial pulse and median nerve.',id:'Cedera jatuh-ekstensi pada anak yang membahayakan arteri brakialis — periksa denyut radialis dan nervus medianus.'}},
      {name:{en:'Midshaft fracture',id:'Fraktur diafisis'},detail:{en:'Radial-nerve palsy in the spiral groove causes wrist drop.',id:'Paralisis nervus radialis di sulkus menyebabkan wrist drop.'}}],
    clinical:{en:'Each fracture level predicts its nerve injury: surgical neck-axillary, shaft-radial, and medial epicondyle-ulnar.',id:'Setiap tingkat fraktur memprediksi cedera sarafnya: kolumna surgicalis-aksilaris, diafisis-radialis, dan epikondylus medialis-ulnaris.'}
  },
  'radius': {
    nameId:'Radius',
    overview:{en:'The thumb-side forearm bone, rotating around the ulna to let the palm turn. Its distal end carries the wrist and is the most commonly fractured site in the adult skeleton.',id:'Tulang lengan bawah sisi ibu jari, berputar mengelilingi ulna agar telapak dapat menoleh. Ujung distalnya menopang pergelangan dan adalah lokasi fraktur tersering pada kerangka dewasa.'},
    bloodSupply:{en:'Radial artery and its recurrent branches; the scaphoid relies on retrograde flow — prone to non-union.',id:'Arteri radialis dan cabang rekurensnya; skafoid bergantung pada aliran retrograde — rentan non-union.'},
    conditions:[
      {name:{en:'Distal radius fracture',id:'Fraktur radius distal'},detail:{en:'A fall on an outstretched hand in osteoporotic patients — Colles fracture with dinner-fork deformity.',id:'Jatuh dengan tangan terbuka pada pasien osteoporosis — fraktur Colles dengan deformitas dinner-fork.'}},
      {name:{en:'Galeazzi injury',id:'Cedera Galeazzi'},detail:{en:'Radius shaft fracture with distal radioulnar joint disruption.',id:'Fraktur diafisis radius disertai disrupsi sendi radioulnar distal.'}}],
    clinical:{en:'Median-nerve function must be checked before and after reduction of a distal radius fracture.',id:'Fungsi nervus medianus harus diperiksa sebelum dan sesudah reposisi fraktur radius distal.'}
  },
  'ulna': {
    nameId:'Ulna',
    overview:{en:'The little-finger-side forearm bone. Its olecranon forms the point of the elbow and its shaft, with the radius, completes the forearm’s parallel strut system.',id:'Tulang lengan bawah sisi kelingking. Olekranonnya membentuk titik siku dan diafisisnya, bersama radius, melengkapi sistem penyangga paralel lengan bawah.'},
    innervation:{en:'The ulnar nerve grooves behind the medial epicondyle — the “funny bone”.',id:'Nervus ulnaris berlekuk di belakang epikondylus medialis — “funny bone”.'},
    conditions:[
      {name:{en:'Olecranon fracture',id:'Fraktur olekranon'},detail:{en:'Direct blow or triceps avulsion; the patient cannot extend the elbow against gravity.',id:'Pukulan langsung atau avulsi triseps; pasien tidak dapat meluruskan siku melawan gravitasi.'}},
      {name:{en:'Monteggia injury',id:'Cedera Monteggia'},detail:{en:'Ulna shaft fracture with dislocation of the radial head — the radius head must always be imaged.',id:'Fraktur diafisis ulna dengan dislokasi kaput radius — kaput radius selalu harus diperiksa.'}}],
    clinical:{en:'Ulnar neuropathy at the elbow causes clawing of the ring and little fingers with hypothenar wasting.',id:'Neuropati ulnaris di siku menyebabkan cakar jari manis dan kelingking dengan atrofi hipotenar.'}
  },
  'femur': {
    nameId:'Femur',
    overview:{en:'The longest, strongest, and heaviest bone, carrying the body’s weight from hip to knee. Its angled neck is a mechanical weak point, and its spherical head is supplied by fragile retinacular vessels.',id:'Tulang terpanjang, terkuat, dan terberat, menopang berat badan dari panggul ke lutut. Kolumnya yang miring adalah titik lemah mekanis, dan kaput sferisnya diperdarahi pembuluh retinakular yang rapuh.'},
    bloodSupply:{en:'Medial circumflex femoral artery retinacular branches — the basis of avascular necrosis after neck fractures.',id:'Cabang retinakular arteri circumflexa femoris medialis — dasar nekrosis avaskular setelah fraktur kolumna.'},
    conditions:[
      {name:{en:'Neck of femur fracture',id:'Fraktur kolumna femur'},detail:{en:'The elderly fall: leg shortening and external rotation; intracapsular fractures risk AVN.',id:'Jatuh pada lansia: pemendekan dan rotasi eksternal tungkai; fraktur intrakapsular berisiko NAV.'}},
      {name:{en:'Femoral shaft fracture',id:'Fraktur diafisis femur'},detail:{en:'High-energy injury that can hide 1.5 L of blood loss; traction splintage is essential.',id:'Cedera energi tinggi yang dapat menyembunyikan kehilangan darah 1,5 L; traksi bidai esensial.'}}],
    clinical:{en:'Displaced neck fractures in the elderly are usually treated with hip arthroplasty rather than fixation.',id:'Fraktur kolumna dengan dislokasi pada lansia biasanya ditangani artroplasti panggul daripada fiksasi.'}
  },
  'patella': {
    nameId:'Patella',
    overview:{en:'The largest sesamoid bone, embedded in the quadriceps tendon. It improves the leverage of knee extension and shields the knee joint frontally.',id:'Tulang sesamoid terbesar, tertanam di tendo kuadriseps. Meningkatkan daya ungkit ekstensi lutut dan melindungi sendi lutut di depan.'},
    conditions:[
      {name:{en:'Patellar dislocation',id:'Dislokasi patela'},detail:{en:'The patella slides laterally, typically in adolescent women; the apprehension test is positive.',id:'Patela meluncur lateral, khas pada remaja perempuan; uji apprehension positif.'}},
      {name:{en:'Patellar fracture',id:'Fraktur patela'},detail:{en:'Direct trauma splits the patella; the ability to straight-leg-raise tests the extensor mechanism.',id:'Trauma langsung membelah patela; kemampuan angkat kaki lurus menguji mekanisme ekstensor.'}}],
    clinical:{en:'Patellar reflex (L3–L4) is the bedside test of the quadriceps circuit.',id:'Refleks patela (L3–L4) adalah uji samping tempat tidur untuk sirkuit kuadriseps.'}
  },
  'tibia': {
    nameId:'Tibia',
    overview:{en:'The weight-bearing shin bone. Its anteromedial surface is subcutaneous — hence open fractures are common — and its plateau articulates with the femoral condyles.',id:'Tulang kering penopang berat badan. Permukaan anteromedialnya subkutan — karena itu fraktur terbuka sering — dan plateaunya berartikulasi dengan kondilus femur.'},
    bloodSupply:{en:'Nutrient branches and a periosteal wrap; distal-third fractures are notorious for delayed union.',id:'Cabang nutrient dan pembungkus periosteum; fraktur sepertiga distal terkenal dengan penyembuhan lambat.'},
    conditions:[
      {name:{en:'Tibial fracture',id:'Fraktur tibia'},detail:{en:'The most frequently fractured long bone; the subcutaneous border makes open injuries common.',id:'Tulang panjang yang paling sering patah; tepi subkutan membuat cedera terbuka sering terjadi.'}},
      {name:{en:'Compartment syndrome',id:'Sindrom kompartemen'},detail:{en:'Pain on passive stretch out of proportion heralds it; the anterior compartment is the first affected.',id:'Nyeri saat peregangan pasif yang tidak sebanding menjadi pertanda; kompartemen anterior pertama terkena.'}},
      {name:{en:'Osgood-Schlatter disease',id:'Penyakit Osgood-Schlatter'},detail:{en:'Traction apophysitis at the tibial tuberosity in athletic adolescents.',id:'Apofisitis traksi di tuberositas tibia pada remaja atletik.'}}],
    clinical:{en:'The five Ps are late signs; pain with passive toe extension is the earliest reliable compartment-syndrome sign.',id:'Lima P adalah tanda lanjut; nyeri saat ekstensi jari kaki pasif adalah tanda paling awal yang andal untuk sindrom kompartemen.'}
  },
  'fibula': {
    nameId:'Fibula',
    overview:{en:'The slender lateral strut of the leg. It bears little weight but anchors muscles, stabilizes the ankle as the lateral malleolus, and lets the common peroneal nerve wrap around its neck.',id:'Penyangga lateral yang ramping. Menanggung sedikit beban tetapi menambatkan otot, menstabilkan pergelangan sebagai malleolus lateralis, dan membiarkan nervus peroneus komunis melilit lehernya.'},
    innervation:{en:'The common peroneal nerve is palpable against the fibular neck.',id:'Nervus peroneus komunis teraba terhadap leher fibula.'},
    conditions:[
      {name:{en:'Lateral malleolus fracture',id:'Fraktur malleolus lateralis'},detail:{en:'Ankle inversion injuries; Weber classification guides management.',id:'Cedera inversi pergelangan; klasifikasi Weber memandu tatalaksana.'}},
      {name:{en:'Common peroneal palsy',id:'Paralisis peroneus komunis'},detail:{en:'Pressure at the fibular neck causes foot drop with a high-stepping gait.',id:'Tekanan di leher fibula menyebabkan foot drop dengan pola jalan mengangkat kaki.'}}],
    clinical:{en:'A Maisonneuve injury couples a proximal fibula fracture with syndesmotic disruption — the whole fibula must be imaged in ankle trauma.',id:'Cedera Maisonneuve menggabungkan fraktur fibula proksimal dengan disrupsi sindesmosis — seluruh fibula harus diperiksa pada trauma pergelangan.'}
  },
  'hip bone': {
    nameId:'Os coxae (tulang panggul)',
    overview:{en:'Each hip bone fuses from ilium, ischium, and pubis at the triradiate cartilage of the acetabulum. Two hip bones with the sacrum form the bony pelvis, transmitting weight to the femora.',id:'Setiap tulang panggul berfusi dari ilium, iskium, dan pubis pada kartilago triradiata asetabulum. Dua tulang panggul dengan sakrum membentuk pelvis tulang, meneruskan berat badan ke femur.'},
    bloodSupply:{en:'Rich anastomoses around the acetabulum from the internal and external iliac systems.',id:'Anastomosis kaya di sekitar asetabulum dari sistem iliaka interna dan eksterna.'},
    conditions:[
      {name:{en:'Pelvic ring disruption',id:'Disrupsi cincin pelvis'},detail:{en:'High-energy trauma with potential litres of concealed blood loss; a pelvic binder saves lives.',id:'Trauma energi tinggi dengan potensi kehilangan darah tersembunyi berliter-liter; pelvic binder menyelamatkan nyawa.'}},
      {name:{en:'Acetabular fracture',id:'Fraktur asetabulum'},detail:{en:'Dashboard injury driving the femoral head through the socket; associated with sciatic-nerve injury.',id:'Cedera dashboard yang mendorong kaput femur menembus soket; berkaitan dengan cedera nervus iskiadikus.'}}],
    clinical:{en:'Blood at the urethral meatus, high-riding prostate, or perineal bruising suggests pelvic fracture with urethral injury before catheterisation.',id:'Darah di meatus uretra, prostate tinggi, atau lebam perineum mengesankan fraktur pelvis dengan cedera uretra sebelum kateterisasi.'}
  },
  'sacrum': {
    nameId:'Os sacrum',
    overview:{en:'Five fused vertebrae forming the wedged posterior wall of the pelvis. Its anterior face carries the sacral plexus; the midline crest ends below at the sacral hiatus.',id:'Lima vertebra yang berfusi membentuk dinding posterior baji pelvis. Wajah anteriornya membawa pleksus sakral; krista midline berakhir di bawah pada hiatus sakralis.'},
    innervation:{en:'Sacral spinal nerves S1–S5 emerge through anterior and posterior foramina, forming the sacral plexus.',id:'Nervus spinalis sakral S1–S5 keluar melalui foramina anterior dan posterior, membentuk pleksus sakral.'},
    conditions:[
      {name:{en:'Sacral insufficiency fracture',id:'Fraktur insufisiensi sakrum'},detail:{en:'Osteoporotic patients get low-back and buttock pain; MRI distinguishes it from metastasis.',id:'Pasien osteoporosis mendapat nyeri punggung bawah dan bokong; Membedakan MRI dari metastasis.'}},
      {name:{en:'Sacroiliitis',id:'Sakroiliitis'},detail:{en:'Inflammatory disease of the SI joints, characteristic of axial spondyloarthritis.',id:'Penyakit inflamasi sendi SI, khas untuk spondiloartritis aksial.'}}],
    clinical:{en:'The sacral hiatus is the needle target for caudal epidural anesthesia.',id:'Hiatus sakralis adalah target jarum untuk anestesi epidural kaudal.'}
  },
  'testis': {
    nameId:'Testis',
    overview:{en:'Paired male gonads in the scrotum, kept below core temperature for spermatogenesis. Seminiferous tubules produce sperm; interstitial Leydig cells produce testosterone.',id:'Gonad laki-laki berpasangan di skrotum, dijaga di bawah suhu inti untuk spermatogenesis. Tubulus seminiferus memproduksi sperma; sel Leydig interstisial memproduksi testosteron.'},
    bloodSupply:{en:'Testicular arteries from the aorta; the left testicular vein drains to the left renal vein and the right directly to the IVC.',id:'Arteri testikularis dari aorta; vena testikularis sinistra bermuara ke vena renalis sinistra dan dekstra langsung ke vena kava inferior.'},
    innervation:{en:'T10–T11 visceral afferents — testicular pain refers to the abdomen.',id:'Aferen viseral T10–T11 — nyeri testis memantul ke abdomen.'},
    conditions:[
      {name:{en:'Testicular torsion',id:'Torsio testis'},detail:{en:'Six hours to salvage the organ; sudden severe pain, a high-riding transverse testis, and an absent cremasteric reflex.',id:'Enam jam untuk menyelamatkan organ; nyeri berat mendadak, testis terangkat melintang, dan refleks kremaster hilang.'}},
      {name:{en:'Testicular cancer',id:'Kanker testis'},detail:{en:'The commonest malignancy of young men; a painless firm lump with elevated AFP or hCG.',id:'Keganasan tersering pria muda; benjolan keras tanpa nyeri dengan AFP atau hCG meningkat.'}},
      {name:{en:'Varicocele',id:'Varikokel'},detail:{en:'Left-sided venous dilatation, a bag-of-worms feeling, linked to subfertility.',id:'Dilatasi vena sisi kiri, teraba seperti kantong cacing, berkaitan dengan infertilitas.'}}],
    clinical:{en:'The left testicular vein drains into the left renal vein at a right angle — explaining why varicoceles are usually left-sided.',id:'Vena testikularis sinistra bermuara ke vena renalis sinistra dengan sudut siku — menjelaskan mengapa varikokel biasanya di kiri.'}
  },
  'prostate': {
    nameId:'Prostat',
    overview:{en:'A walnut-sized gland below the bladder encircling the urethra. Its secretions form part of semen, and PSA is its measurable serum product.',id:'Kelenjar seukuran kenari di bawah kandung kemih yang mengelilingi uretra. Sekresinya membentuk bagian cairan mani, dan PSA adalah produk serumnya yang terukur.'},
    bloodSupply:{en:'Inferior vesical, internal pudendal, and middle rectal arteries.',id:'Arteri vesika inferior, pudenda interna, dan rekta media.'},
    innervation:{en:'Prostatic plexus from the pelvic splanchnic nerves; ejaculation is coordinated via sympathetic fibers.',id:'Pleksus prostatikus dari nervus splanknik pelvis; ejakulasi dikoordinasi serat simpatis.'},
    conditions:[
      {name:{en:'Benign prostatic hyperplasia',id:'Hiperplasia prostat jinak'},detail:{en:'Transition-zone growth causes obstructive urinary symptoms; treated medically or by TURP.',id:'Pertumbuhan zona transisi menyebabkan gejala obstruktif berkemih; ditangani medis atau TURP.'}},
      {name:{en:'Prostate cancer',id:'Kanker prostat'},detail:{en:'The commonest male cancer, arising in the peripheral zone; PSA screening and digital examination detect it.',id:'Kanker tersering pria, berasal dari zona perifer; skrining PSA dan pemeriksaan jari mendeteksinya.'}}],
    clinical:{en:'A craggy hard prostate on digital rectal examination suggests carcinoma; the neurovascular bundles posterolateral to the prostate govern erectile function after surgery.',id:'Prostat keras dan bergelombang pada pemeriksaan jari mengesankan karsinoma; berkas neurovaskular posterolateral prostat menentukan fungsi ereksi pasca operasi.'}
  },
  'uterus': {
    nameId:'Uterus',
    overview:{en:'A thick-walled muscular organ between bladder and rectum, normally anteverted and anteflexed. Its endometrium cycles under hormonal control and hosts the placenta in pregnancy.',id:'Organ muskuler berdinding tebal antara kandung kemih dan rektum, normalnya antefleksi dan anteversi. Endometriumnya bersiklus di bawah kendali hormonal dan menjadi tempat plasenta saat kehamilan.'},
    bloodSupply:{en:'Uterine arteries from the internal iliac, anastomosing with ovarian arteries; the ureter passes beneath each uterine artery.',id:'Arteri uterina dari iliaka interna, beranastomosis dengan arteri ovarika; ureter berjalan di bawah setiap arteri uterina.'},
    innervation:{en:'Uterovaginal plexus; labor pain travels with sympathetic afferents to T10–L1.',id:'Pleksus uterovaginal; nyeri persalinan mengikuti aferen simpatis ke T10–L1.'},
    conditions:[
      {name:{en:'Uterine fibroids',id:'Mioma uteri'},detail:{en:'The commonest female tumor — benign myometrial growths causing heavy bleeding or pressure effects.',id:'Tumor tersering perempuan — pertumbuhan miometrium jinak yang menyebabkan perdarahan banyak atau efek penekanan.'}},
      {name:{en:'Endometrial cancer',id:'Kanker endometrium'},detail:{en:'Postmenopausal bleeding demands endometrial sampling; prognosis is comparatively good.',id:'Perdarahan pascamenopause menuntut sampel endometrium; prognosisnya relatif baik.'}},
      {name:{en:'Uterine prolapse',id:'Prolaps uteri'},detail:{en:'Weakened pelvic-floor support descends the uterus through the vagina.',id:'Penopang lantai pelvis yang melemah membuat uterus turun melalui vagina.'}}],
    clinical:{en:'During hysterectomy the ureter lies “water under the bridge” — it is endangered when clamping the uterine artery.',id:'Saat histerektomi, ureter berada di bawah arteri uterina seperti “air di bawah jembatan” — berisiko saat klem arteri uterina.'}
  },
  'ovary': {
    nameId:'Ovarium',
    overview:{en:'Paired female gonads held in the ovarian fossae of the pelvic sidewall. Follicles mature cyclically, release the oocyte at ovulation, and become the progesterone-secreting corpus luteum.',id:'Gonad perempuan berpasangan di fossa ovarika dinding lateral pelvis. Folikel matang secara siklik, melepaskan oosit saat ovulasi, dan menjadi korpus luteum penghasil progesteron.'},
    bloodSupply:{en:'Ovarian arteries straight from the aorta; the left ovarian vein drains to the left renal vein.',id:'Arteri ovarika langsung dari aorta; vena ovarika sinistra bermuara ke vena renalis sinistra.'},
    innervation:{en:'T10–L1 afferents along the ovarian plexus — ovarian pain localises to the iliac fossa.',id:'Aferen T10–L1 sepanjang pleksus ovarikus — nyeri ovarium terlokalisasi di fossa iliaka.'},
    conditions:[
      {name:{en:'Ovarian torsion',id:'Torsio ovarii'},detail:{en:'Sudden unilateral pain with vomiting; the ovary must be detorted urgently to survive.',id:'Nyeri unilateral mendadak dengan muntah; ovarium harus segera detorsi agar bertahan.'}},
      {name:{en:'Polycystic ovary syndrome',id:'Sindrom ovarium polikistik'},detail:{en:'Hyperandrogenism and oligo-ovulation with multiple small follicles and insulin resistance.',id:'Hiperandrogenisme dan oligo-ovulasi dengan banyak folikel kecil dan resistensi insulin.'}},
      {name:{en:'Ovarian cancer',id:'Kanker ovarium'},detail:{en:'Insidious late presentation with bloating and ascites; CA-125 and imaging aid assessment.',id:'Presentasi terlambat yang tidak khas dengan kembung dan asites; CA-125 dan pencitraan membantu penilaian.'}}],
    clinical:{en:'Ovarian cancer is the deadliest gynecologic malignancy because it spreads silently — BRCA carriers warrant intensive surveillance.',id:'Kanker ovarium adalah keganasan ginekologis paling mematikan karena menyebar secara diam-diam — pembawa BRCA memerlukan surveilans intensif.'}
  },
  'fallopian tube': {
    nameId:'Tuba uterina (tuba falopii)',
    overview:{en:'Ten-centimeter muscular tubes from each uterine horn to the ovarian fimbriae. Cilia and peristalsis transport the oocyte — and fertilisation normally occurs in the ampulla.',id:'Tabung muskuler sepuluh sentimeter dari setiap tanduk uterus ke fimbria ovarium. Silia dan peristaltik mengangkut oosit — dan fertilisasi normalnya terjadi di ampula.'},
    bloodSupply:{en:'Tubal branches of the uterine and ovarian arteries.',id:'Cabang tubal dari arteri uterina dan ovarika.'},
    conditions:[
      {name:{en:'Ectopic pregnancy',id:'Kehamilan ektopik'},detail:{en:'A positive pregnancy test with pain and bleeding; tubal rupture causes hemoperitoneum and collapse.',id:'Tes kehamilan positif dengan nyeri dan perdarahan; ruptur tuba menyebabkan hemoperitoneum dan kolaps.'}},
      {name:{en:'Pelvic inflammatory disease',id:'Penyakit radang panggul'},detail:{en:'Ascending infection scars the tubes, causing infertility or ectopic pregnancy.',id:'Infeksi asenden menyikatri tuba, menyebabkan infertilitas atau kehamilan ektopik.'}}],
    clinical:{en:'Every reproductive-age woman with pelvic pain and a positive hCG needs ectopic exclusion — the ampulla is the commonest implantation site.',id:'Setiap perempuan usia reproduksi dengan nyeri panggul dan hCG positif perlu menyingkirkan ektopik — ampula adalah tempat implantasi tersering.'}
  },
  'uterine cervix': {
    nameId:'Serviks uteri',
    overview:{en:'The fibromuscular neck of the uterus projecting into the vaginal vault. Its transformation zone, where columnar meets squamous epithelium, is the origin of nearly all cervical cancers.',id:'Leher fibromuskular uterus yang menonjol ke forniks vagina. Zona transformasinya, tempat epitel kolumnar bertemu skuamosa, adalah asal hampir semua kanker serviks.'},
    conditions:[
      {name:{en:'Cervical cancer',id:'Kanker serviks'},detail:{en:'HPV 16/18-driven; screening by Pap smear and HPV DNA plus vaccination prevents most cases.',id:'Dorongan HPV 16/18; skrining Pap dan HPV DNA serta vaksinasi mencegah sebagian besar kasus.'}},
      {name:{en:'Cervical insufficiency',id:'Inkompetensi serviks'},detail:{en:'Painless mid-trimester dilatation; a cerclage suture can rescue the pregnancy.',id:'Dilatasi trimester kedua tanpa nyeri; jahatan serklase dapat menyelamatkan kehamilan.'}}],
    clinical:{en:'Cervical cancer is a national screening priority — vaccination and regular Pap smears have dramatically reduced its incidence.',id:'Kanker serviks adalah prioritas skrining nasional — vaksinasi dan Pap smear teratur menurunkan insidensnya secara dramatis.'}
  },
  'vagina': {
    nameId:'Vagina',
    overview:{en:'A distensible fibromuscular canal from the vestibule to the cervix, with rugae for expansion. Lactobacilli keep its pH acidic, a natural defense against pathogens.',id:'Kanal fibromuskuler yang dapat mengembang dari vestibulum ke serviks, dengan rugae untuk ekspansi. Laktobasilus menjaga pH-nya asam, pertahanan alami terhadap patogen.'},
    bloodSupply:{en:'Vaginal branches of the uterine and internal pudendal arteries with anastomoses along the walls.',id:'Cabang vaginal dari arteri uterina dan pudenda interna dengan anastomosis di sepanjang dinding.'},
    innervation:{en:'Upper two-thirds visceral and painless; lower third somatic via the pudendal nerve.',id:'Dua pertiga atas viseral dan tidak nyeri; sepertiga bawah somatik melalui nervus pudendus.'},
    conditions:[
      {name:{en:'Bacterial vaginosis',id:'Vaginosis bakterial'},detail:{en:'Disrupted flora with malodorous thin discharge and a raised pH.',id:'Flora terganggu dengan sekret encit berbau dan pH meningkat.'}},
      {name:{en:'Candidiasis',id:'Kandidiasis'},detail:{en:'Thick itchy white discharge following antibiotics or in diabetes and pregnancy.',id:'Sekret putih kental dan gatal setelah antibiotik atau pada diabetes dan kehamilan.'}}],
    clinical:{en:'The posterior fornix lies adjacent to the rectouterine pouch (of Douglas) — the lowest point of the peritoneal cavity and a site for culdocentesis.',id:'Forniks posterior bersebelahan dengan rekto-uterin (kantong Douglas) — titik terendah rongga peritoneum dan lokasi kuldosentesis.'}
  },
  'mammary gland': {
    nameId:'Kelenjar mamae (payudara)',
    overview:{en:'Fifteen to twenty lobes of glandular tissue embedded in fat, separated by suspensory ligaments of Cooper and draped over the pectoral muscles. Lymph drains chiefly to the axilla.',id:'Lima belas sampai dua puluh lobus jaringan kelenjar tertanam dalam lemak, dipisahkan ligamentum suspensorium Cooper, dan menyelimuti muskulus pektoralis. Drainase limfe terutama ke aksila.'},
    bloodSupply:{en:'Internal thoracic perforators, lateral thoracic, and intercostal arteries.',id:'Perforator torasika interna, arteri torasika lateralis, dan interkostalis.'},
    drainage:{en:'About 75% of lymph flows to axillary nodes, the rest to internal mammary chains — the first stop for breast cancer spread.',id:'Sekitar 75% limfe mengalir ke nodus aksila, sisanya ke rantai mamaria interna — stasiun pertama penyebaran kanker payudara.'},
    conditions:[
      {name:{en:'Breast cancer',id:'Kanker payudara'},detail:{en:'The commonest cancer in women: a hard lump with dimpling, nipple retraction, or peau d’orange.',id:'Kanker tersering pada perempuan: benjolan keras dengan cekungan kulit, retraksi putting, atau peau d’orange.'}},
      {name:{en:'Fibroadenoma',id:'Fibroadenoma'},detail:{en:'A mobile, rubbery, painless lump in young women — benign.',id:'Benjolan mobil, kenyal, tanpa nyeri pada perempuan muda — jinak.'}},
      {name:{en:'Mastitis',id:'Mastitis'},detail:{en:'Lactational inflammation, usually staphylococcal, with a painful red segment.',id:'Peradangan masa laktasi, biasanya stafilokokal, dengan segmen merah nyeri.'}}],
    clinical:{en:'Triple assessment — clinical examination, imaging, and biopsy — is the standard for any dominant breast lump; axillary node status drives staging.',id:'Penilaian ganda tiga — pemeriksaan klinis, pencitraan, dan biopsi — adalah standar untuk setiap benjolan dominan; status nodus aksila menentukan stadium.'}
  },
  'placenta': {
    nameId:'Plasenta',
    overview:{en:'The disc-shaped fetomaternal exchange organ formed from decidua basalis and chorion frondosum. It transfers gases and nutrients, and secretes hCG, progesterone, and hPL.',id:'Organ pertukaran fetomaternal berbentuk cakram yang dibentuk dari desidua basalis dan korion frondosum. Mentransfer gas dan nutrien, serta mensekresi hCG, progesteron, dan hPL.'},
    bloodSupply:{en:'Maternal spiral arteries, remodeled to low resistance by trophoblast invasion; fetal blood arrives through two umbilical arteries and leaves via one vein.',id:'Arteri spiralis maternal, dirombak menjadi resistensi rendah oleh invasi trofoblas; darah janin datang melalui dua arteri umbilikalis dan kembali lewat satu vena.'},
    conditions:[
      {name:{en:'Placenta previa',id:'Plasenta previa'},detail:{en:'The placenta covers the internal os, causing painless third-trimester bleeding; delivery is by cesarean.',id:'Plasenta menutupi ostium uteri interna, menyebabkan perdarahan trimester tiga tanpa nyeri; persalinan dengan seksio.'}},
      {name:{en:'Placental abruption',id:'Solusio plasenta'},detail:{en:'Premature separation with painful bleeding, uterine tenderness, and consumptive coagulopathy risk.',id:'Pelepasan prematur dengan perdarahan nyeri, nyeri tekan uterus, dan risiko koagulopati konsumtif.'}},
      {name:{en:'Preeclampsia',id:'Preeklampsia'},detail:{en:'Defective spiral-artery remodeling underlies hypertension and proteinuria after 20 weeks.',id:'Remodeling arteri spiralis yang cacat mendasari hipertensi dan proteinuria setelah 20 minggu.'}}],
    clinical:{en:'Never perform a vaginal examination before imaging excludes previa; a single umbilical artery on ultrasound warrants fetal anomaly screening.',id:'Jangan pernah melakukan pemeriksaan vaginal sebelum pencitraan menyingkirkan previa; arteri umbilikalis tunggal pada ultrasonografi memerlukan skrining anomal janin.'}
  }
}
