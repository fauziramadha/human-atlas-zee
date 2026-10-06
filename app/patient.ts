/** Patient-friendly education cards, bilingual EN/ID.
 * Plain-language context only — general education, not medical advice or diagnosis.
 * Written to complement the clinical cards in knowledge.ts. */
export interface Bilingual {en:string;id:string}
export interface PatientCard {
  about:Bilingual
  symptoms:Bilingual[]
  ask:Bilingual[]
  urgency?:Bilingual
}
export const PATIENT:Record<string,PatientCard> = {
  'heart': {
    about:{en:'A muscular pump the size of your fist, slightly left of the centre of your chest. It beats around 60–100 times a minute at rest, sending blood to every part of your body.',id:'Pompa otot seukuran kepalan tangan Anda, sedikit di sebelah kiri tengah dada. Berdenyut sekitar 60–100 kali per menit saat istirahat, mengalirkan darah ke seluruh tubuh.'},
    symptoms:[{en:'Chest discomfort or pressure, especially with exertion',id:'Rasa tidak nyaman atau tertekan di dada, terutama saat beraktivitas'},{en:'Unusual shortness of breath',id:'Sesak napas yang tidak biasa'},{en:'Palpitations (racing or irregular heartbeat)',id:'Jantung berdebar (cepat atau tidak teratur)'},{en:'Swelling of the legs or feet',id:'Bengkak pada kaki atau telapak kaki'}],
    ask:[{en:'What do my blood pressure and cholesterol numbers mean for my heart?',id:'Apa arti angka tekanan darah dan kolesterol saya bagi jantung saya?'},{en:'Which warning symptoms should make me seek help quickly?',id:'Gejala peringatan apa yang harus membuat saya segera mencari pertolongan?'},{en:'How much exercise is safe for me?',id:'Berapa banyak olahraga yang aman bagi saya?'}],
    urgency:{en:'Call emergency services for crushing chest pain, pain spreading to the arm, neck, or jaw, cold sweat with nausea, or fainting.',id:'Segera hubungi layanan gawat darurat bila nyeri dada seperti diremas, nyeri menjalar ke lengan, leher, atau rahang, keringat dingin dengan mual, atau pingsan.'}
  },
  'aorta': {
    about:{en:'The largest blood vessel in your body. It carries oxygen-rich blood from the heart down through the chest and abdomen, branching to every major organ.',id:'Pembuluh darah terbesar dalam tubuh. Membawa darah kaya oksigen dari jantung melalui dada dan perut, bercabang ke setiap organ utama.'},
    symptoms:[{en:'Deep, tearing pain in the chest or back that comes on suddenly',id:'Nyeri dalam dan robek di dada atau punggung yang muncul mendadak'},{en:'A pulsating feeling in the abdomen',id:'Rasa berdenyut di perut'},{en:'Different blood pressure readings in each arm',id:'Tekanan darah berbeda di kedua lengan'}],
    ask:[{en:'Is my blood pressure controlled well enough to protect my aorta?',id:'Apakah tekanan darah saya terkontrol cukup baik untuk melindungi aorta?'},{en:'Should I have imaging to check my aorta if a family member had an aneurysm?',id:'Perlukah saya menjalani pemeriksaan pencitraan bila ada anggota keluarga dengan aneurisma?'}],
    urgency:{en:'Sudden severe tearing chest or back pain is an emergency — call for help immediately.',id:'Nyeri dada atau punggung yang mendadak, berat, dan terasa robek adalah kegawatdaruratan — segera minta pertolongan.'}
  },
  'brain': {
    about:{en:'The control centre of your body. It processes everything you sense, think, and feel, and commands movement, speech, memory, and automatic functions like breathing.',id:'Pusat kendali tubuh Anda. Memproses semua yang Anda rasakan, pikirkan, dan rasakan secara emosional, serta mengendalikan gerakan, bicara, ingatan, dan fungsi otomatis seperti bernapas.'},
    symptoms:[{en:'Sudden weakness or numbness on one side of the body',id:'Kelemahan atau kesemutan mendadak pada satu sisi tubuh'},{en:'Sudden confusion, trouble speaking, or understanding',id:'Kebingungan mendadak, sulit bicara atau memahami'},{en:'Sudden severe headache unlike any before',id:'Sakit kepala berat mendadak yang berbeda dari sebelumnya'},{en:'Vision loss or trouble walking',id:'Kehilangan penglihatan atau sulit berjalan'}],
    ask:[{en:'What can I do to lower my risk of stroke?',id:'Apa yang bisa saya lakukan untuk menurunkan risiko stroke?'},{en:'Are my headaches something to worry about?',id:'Apakah sakit kepala saya perlu dikhawatirkan?'}],
    urgency:{en:'Stroke is time-critical: sudden face drooping, arm weakness, or speech difficulty means call emergency services right away.',id:'Stroke sangat bergantung waktu: wajah mendadak turun, lengan lemah, atau sulit bicara berarti segera hubungi layanan gawat darurat.'}
  },
  'cerebellum': {
    about:{en:'The "little brain" at the back of your skull. It fine-tunes balance, coordination, and smooth movement — you never think about it until you wobble.',id:'"Otak kecil" di bagian belakang tengkorak. Menyempurnakan keseimbangan, koordinasi, dan gerakan halus — Anda tidak menyadarinya sampai tubuh goyah.'},
    symptoms:[{en:'Clumsiness or unsteady walking',id:'Canggung atau berjalan tidak stabil'},{en:'Tremor when reaching for objects',id:'Gemetar saat meraih benda'},{en:'Slurred or scanning speech',id:'Bicara pelo atau terpatah-patah'}],
    ask:[{en:'Could my balance problem come from the cerebellum?',id:'Bisakah masalah keseimbangan saya berasal dari otak kecil?'}]
  },
  'brainstem': {
    about:{en:'The stalk connecting brain and spinal cord. It runs the essentials you never think about: breathing, heartbeat, blood pressure, swallowing, and wakefulness.',id:'Batang penghubung otak dan sumsum tulang belakang. Mengelola fungsi penting yang tak pernah Anda pikirkan: napas, denyut jantung, tekanan darah, menelan, dan kesadaran.'},
    symptoms:[{en:'Double vision or dizziness',id:'Penglihatan ganda atau pusing'},{en:'Difficulty swallowing or speaking',id:'Sulit menelan atau bicara'},{en:'Irregular breathing or excessive sleepiness',id:'Napas tidak teratur atau mengantuk berlebihan'}],
    ask:[{en:'What is causing my dizziness or swallowing difficulty?',id:'Apa penyebab pusing atau kesulitan menelan saya?'}]
  },
  'spinal cord': {
    about:{en:'A thick bundle of nerves running inside your backbone from the brain down to the lower back. It carries movement commands outward and sensation inward, like a data cable.',id:'Berkas saraf tebal di dalam tulang belakang, dari otak hingga punggung bawah. Membawa perintah gerak keluar dan sensasi masuk, seperti kabel data.'},
    symptoms:[{en:'Numbness or tingling in arms or legs',id:'Matirasa atau kesemutan di lengan atau kaki'},{en:'Weakness that spreads or worsens',id:'Kelemahan yang menyebar atau memburuk'},{en:'Loss of bladder or bowel control',id:'Hilangnya kendali kandung kemih atau usus'}],
    ask:[{en:'Do my symptoms need an MRI of the spine?',id:'Apakah gejala saya memerlukan MRI tulang belakang?'},{en:'How can I protect my back in daily life?',id:'Bagaimana saya melindungi punggung dalam kehidupan sehari-hari?'}],
    urgency:{en:'Sudden numbness between the legs, loss of bladder control, or leg paralysis after injury needs emergency assessment.',id:'Matirasa mendadak di antara kaki, hilang kendali kandung kemih, atau kelumpuhan kaki setelah cedera perlu penilaian gawat darurat.'}
  },
  'lung': {
    about:{en:'A pair of spongy organs in your chest. They bring oxygen into your blood with every breath in, and release carbon dioxide with every breath out.',id:'Sepasang organ berongga di dada Anda. Mengambil oksigen ke dalam darah setiap kali menarik napas, dan melepaskan karbon dioksida setiap kali menghembuskannya.'},
    symptoms:[{en:'Shortness of breath, at rest or with activity',id:'Sesak napas, saat istirahat atau beraktivitas'},{en:'A cough lasting more than a few weeks',id:'Batuk yang berlangsung lebih dari beberapa minggu'},{en:'Coughing up blood',id:'Batuk berdarah'},{en:'Chest pain when breathing deeply',id:'Nyeri dada saat menarik napas dalam'}],
    ask:[{en:'How are my lungs doing — do I need a breathing test (spirometry)?',id:'Bagaimana kondisi paru saya — perlukah uji napas (spirometri)?'},{en:'What can help me stop smoking?',id:'Apa yang bisa membantu saya berhenti merokok?'}]
  },
  'larynx': {
    about:{en:'Your voice box, sitting in the front of the neck. It creates sound when air passes the vocal cords, and protects your airway when you swallow.',id:'Kotak suara Anda, di bagian depan leher. Menghasilkan suara saat udara melewati pita suara, dan melindungi jalan napas saat Anda menelan.'},
    symptoms:[{en:'Hoarseness lasting more than two weeks',id:'Suara serak lebih dari dua minggu'},{en:'Painful or difficult swallowing',id:'Menelan nyeri atau sulit'},{en:'Noisy breathing (stridor)',id:'Napas berbunyi (stridor)'}],
    ask:[{en:'Should my persistent hoarseness be examined with a scope?',id:'Apakah serak yang menetap perlu diperiksa dengan endoskop?'}]
  },
  'trachea': {
    about:{en:'Your windpipe: a firm tube reinforced by rings of cartilage, carrying air from the voice box down to the two lungs.',id:'Jalan napas Anda: tabung kuat yang diperkuat cincin tulang rawan, mengalirkan udara dari kotak suara ke kedua paru.'},
    symptoms:[{en:'Noisy or laboured breathing',id:'Napas berbunyi atau tersengal'},{en:'A constant urge to clear the throat',id:'Selalu ingin membersihkan tenggorokan'}],
    ask:[{en:'Could my breathing noise come from a narrowed airway?',id:'Bisakah bunyi napas saya berasal dari jalan napas yang menyempit?'}]
  },
  'bronchus': {
    about:{en:'The two large branches of the windpipe, one into each lung, splitting into ever smaller airways like tree branches.',id:'Dua cabang besar jalan napas, satu ke setiap paru, bercabang makin kecil seperti dahan pohon.'},
    symptoms:[{en:'Wheezing or whistling breath',id:'Mengi atau napas berbunyi'},{en:'Recurrent chest infections',id:'Infeksi dada berulang'},{en:'Cough with mucus that keeps returning',id:'Batuk berdahak yang terus kambuh'}],
    ask:[{en:'Could my recurring cough be asthma or chronic bronchitis?',id:'Bisakah batuk berulang saya asma atau bronkitis kronis?'}]
  },
  'diaphragm': {
    about:{en:'The dome-shaped muscle under your lungs. It does most of the work of breathing, flattening as you inhale to pull air in.',id:'Otot berbentuk kubah di bawah paru-paru. Melakukan sebagian besar pekerjaan bernapas, mendatar saat Anda menarik napas.'},
    symptoms:[{en:'Pain when breathing deeply or after meals',id:'Nyeri saat menarik napas dalam atau setelah makan'},{en:'Hiccups that will not stop',id:'Cegukan yang tidak berhenti'}],
    ask:[{en:'Is my breathing pattern using my diaphragm properly?',id:'Apakah pola napas saya memakai diafragma dengan benar?'}]
  },
  'esophagus': {
    about:{en:'The muscular tube that carries food and drink from your throat to your stomach when you swallow.',id:'Tabung otot yang membawa makanan dan minuman dari tenggorokan ke lambung saat Anda menelan.'},
    symptoms:[{en:'Heartburn or acid reflux more than twice a week',id:'Heartburn atau refluks asam lebih dari dua kali seminggu'},{en:'Food feeling stuck on the way down',id:'Makanan terasa tersangkut saat ditelan'},{en:'Painful swallowing',id:'Sulit menelan'}],
    ask:[{en:'Should I be checked for reflux or a narrowing?',id:'Perlukah saya diperiksa refluks atau penyempitan?'}],
    urgency:{en:'Food completely stuck with inability to swallow saliva needs urgent attention.',id:'Makanan tersangkut total dengan tidak bisa menelan ludah perlu penanganan segera.'}
  },
  'stomach': {
    about:{en:'A muscular bag in your upper abdomen where food is mixed with acid and enzymes before moving on to the intestine.',id:'Kantong otot di perut bagian atas tempat makanan dicampur asam dan enzim sebelum berlanjut ke usus.'},
    symptoms:[{en:'Burning upper-abdominal pain, worse when hungry or after certain foods',id:'Nyeri perit di perut bagian atas, memburuk saat lapar atau setelah makanan tertentu'},{en:'Nausea or vomiting',id:'Mual atau muntah'},{en:'Feeling full very quickly',id:'Cepat kenyang'},{en:'Black, tarry stools',id:'Tinja hitam seperti ter'}],
    ask:[{en:'Could a bacteria (H. pylori) or an ulcer explain my pain?',id:'Bisakah bakteri (H. pylori) atau tukak lambung menjelaskan nyeri saya?'},{en:'Which medications might be irritating my stomach?',id:'Obat apa saja yang mungkin mengiritasi lambung saya?'}]
  },
  'duodenum': {
    about:{en:'The first short C-shaped segment of small intestine. It receives food from the stomach plus bile and enzymes, and is the most common site of ulcers.',id:'Segmen usus halus pertama berbentuk C. Menerima makanan dari lambung ditambah empedu dan enzim, dan merupakan lokasi tukak paling umum.'},
    symptoms:[{en:'Gnawing pain that eases briefly with food',id:'Nyeri menggerogoti yang mereda sesaat setelah makan'},{en:'Pain that wakes you at night',id:'Nyeri yang membangunkan Anda malam hari'}],
    ask:[{en:'Could my symptoms be a duodenal ulcer?',id:'Bisakah gejala saya tukak duodeni?'}]
  },
  'small intestine': {
    about:{en:'A long, coiled tube (5–7 m) where most nutrients from your food are absorbed into the blood.',id:'Tabung panjang dan berlipat (5–7 m) tempat sebagian besar zat gizi makanan Anda diserap ke darah.'},
    symptoms:[{en:'Ongoing diarrhoea or bloating',id:'Diare atau kembung menetap'},{en:'Unintentional weight loss',id:'Penurunan berat badan tanpa sebab'},{en:'Pale, greasy, foul-smelling stools',id:'Tinja pucat, berminyak, dan berbau busuk'}],
    ask:[{en:'Could my symptoms mean poor nutrient absorption (like coeliac disease)?',id:'Bisakah gejala saya berarti penyerapan zat gizi buruk (seperti penyakit celiac)?'}]
  },
  'large intestine': {
    about:{en:'The wide final stretch of the digestive tube. It absorbs water and salts from what remains, and stores stool until a convenient time.',id:'Bagian akhir saluran pencernaan yang lebar. Menyerap air dan garam dari sisa makanan, dan menyimpan tinja hingga waktunya buang air.'},
    symptoms:[{en:'A change in bowel habit lasting more than a few weeks',id:'Perubahan kebiasaan buang air besar lebih dari beberapa minggu'},{en:'Blood in or on the stool',id:'Darah di atau pada tinja'},{en:'Cramping pain with bloating',id:'Nyeri kram dengan kembung'}],
    ask:[{en:'At my age, should I be screened for bowel cancer?',id:'Pada usia saya, perlukah skrining kanker usus?'},{en:'Is my diet giving me enough fibre?',id:'Apakah asupan serat saya cukup?'}],
    urgency:{en:'Blood in the stool always deserves a prompt medical review.',id:'Darah pada tinja selalu perlu pemeriksaan medis segera.'}
  },
  'appendix': {
    about:{en:'A small blind-ended tube hanging off the first part of the large intestine, usually in the lower right abdomen. Its function is unclear; removing it is safe.',id:'Tabung kecil buntu yang menempel di bagian awal usus besar, biasanya di perut kanan bawah. Fungsinya belum jelas; mengangkatnya aman.'},
    symptoms:[{en:'Pain starting near the navel, settling in the lower right abdomen',id:'Nyeri mulai dekat pusar, menetap di perut kanan bawah'},{en:'Pain that worsens with movement or coughing',id:'Nyeri memburuk saat bergerak atau batuk'},{en:'Loss of appetite with low-grade fever',id:'Nafsu makan hilang dengan demam ringan'}],
    ask:[{en:'How quickly should abdominal pain be checked?',id:'Seberapa cepat nyeri perut perlu diperiksa?'}],
    urgency:{en:'Worsening right-lower abdominal pain with fever may be appendicitis — go to an emergency department.',id:'Nyeri perut kanan bawah yang memburuk dengan demam mungkin apendisitis — segera ke gawat darurat.'}
  },
  'rectum': {
    about:{en:'The final storage chamber of the bowel, just before the anal canal. Stretching of its walls creates the urge to pass stool.',id:'Ruang penyimpanan akhir usus, tepat sebelum kanal anus. Peregangan dindingnya menimbulkan keinginan buang air besar.'},
    symptoms:[{en:'Bright red blood on the paper or in the bowl',id:'Darah merah segar di kertas atau di kloset'},{en:'A feeling of incomplete emptying',id:'Rasa tidak tuntas setelah buang air'},{en:'Urgency or leakage',id:'Mendesak atau menetes'}],
    ask:[{en:'Is the bleeding most likely haemorrhoids, or should we rule out anything higher up?',id:'Apakah pendarahan ini kemungkinan wasir, atau perlu menyingkirkan penyebab di atasnya?'}]
  },
  'liver': {
    about:{en:'Your largest internal organ, on the upper right of your abdomen. It filters blood, stores energy, makes bile for digestion, and can regrow after injury.',id:'Organ dalam terbesar Anda, di perut kanan atas. Menyaring darah, menyimpan energi, membuat empedu untuk pencernaan, dan dapat tumbuh kembali setelah cedera.'},
    symptoms:[{en:'Yellowing of skin or eyes (jaundice)',id:'Kulit atau mata menguning (ikterus)'},{en:'Swollen abdomen or legs',id:'Perut atau kaki bengkak'},{en:'Dark urine and pale stools',id:'Urin gelap dan tinja pucat'},{en:'Unusual tiredness',id:'Luar biasa lelah'}],
    ask:[{en:'Are my liver blood tests normal, and is my alcohol intake safe?',id:'Apakah hasil tes darah hati saya normal, dan apakah konsumsi alkohol saya aman?'},{en:'Should I be vaccinated against hepatitis?',id:'Perlukah saya divaksinasi hepatitis?'}]
  },
  'gallbladder': {
    about:{en:'A small pear-shaped pouch under the liver that stores bile and squeezes it into the gut when you eat fatty food.',id:'Kantong kecil berbentuk pir di bawah hati yang menyimpan empedu dan menyemprotkannya ke usus saat Anda makan makanan berlemak.'},
    symptoms:[{en:'Intense cramping pain in the upper right abdomen after fatty meals',id:'Nyeri kram hebat di perut kanan atas setelah makan berlemak'},{en:'Pain spreading to the right shoulder or back',id:'Nyeri menjalar ke bahu kanan atau punggung'},{en:'Nausea and vomiting with the pain',id:'Mual dan muntah disertai nyeri'}],
    ask:[{en:'Could my attacks be gallstones?',id:'Bisakah serangan nyeri saya batu empedu?'}],
    urgency:{en:'Pain lasting more than a few hours with fever or jaundice can mean an infected gallbladder — seek urgent care.',id:'Nyeri lebih dari beberapa jam disertai demam atau kuning dapat berarti kandung empedu terinfeksi — cari pertolongan segera.'}
  },
  'pancreas': {
    about:{en:'A gland tucked behind the stomach. It releases enzymes into the gut for digestion and the hormones insulin and glucagon into the blood to control sugar.',id:'Kelenjar yang bersembunyi di belakang lambung. Melepaskan enzim ke usus untuk pencernaan dan hormon insulin serta glukagon ke darah untuk mengendalikan gula.'},
    symptoms:[{en:'Severe, constant upper-abdominal pain boring through to the back',id:'Nyeri perut atas berat dan menetap yang menembus ke punggung'},{en:'Nausea and vomiting',id:'Mual dan muntah'},{en:'Greasy stools and weight loss',id:'Tinja berminyak dan penurunan berat badan'},{en:'New thirst and frequent urination',id:'Haus baru dan sering kencing'}],
    ask:[{en:'Could my abdominal pain be pancreatitis?',id:'Bisakah nyeri perut saya pankreatitis?'},{en:'How is my blood sugar tracking?',id:'Bagaimana tren gula darah saya?'}],
    urgency:{en:'Severe abdominal pain with vomiting that does not settle should be assessed urgently.',id:'Nyeri perut berat dengan muntah yang tidak mereda harus segera diperiksa.'}
  },
  'kidney': {
    about:{en:'A pair of bean-shaped organs at the back of your abdomen, below the ribs. They filter waste from blood into urine, balance water and salts, and help control blood pressure.',id:'Sepasang organ berbentuk kacang di belakang perut, di bawah iga. Menyaring limbah dari darah menjadi urin, menyeimbangkan air dan garam, serta membantu mengatur tekanan darah.'},
    symptoms:[{en:'Pain in the side or back below the ribs',id:'Nyeri di sisi atau punggung bawah iga'},{en:'Blood in the urine',id:'Darah dalam urin'},{en:'Burning when passing urine',id:'Perih saat berkemih'},{en:'Puffiness around the eyes or ankles',id:'Bengkak di sekitar mata atau pergelangan kaki'}],
    ask:[{en:'How is my kidney function on blood tests?',id:'Bagaimana fungsi ginjal saya pada tes darah?'},{en:'Am I drinking enough water?',id:'Apakah saya minum cukup air?'}]
  },
  'ureter': {
    about:{en:'The narrow muscular tube — one on each side — that carries urine from the kidney down to the bladder.',id:'Tabung otot sempit — satu di setiap sisi — yang membawa urin dari ginjal turun ke kandung kemih.'},
    symptoms:[{en:'Severe waves of pain from the side toward the groin',id:'Gelombang nyeri hebat dari sisi tubuh menuju selangkangan'},{en:'Blood in the urine',id:'Darah dalam urin'}],
    ask:[{en:'Could my pain be a kidney stone passing?',id:'Bisakah nyeri saya batu ginjal yang sedang turun?'}],
    urgency:{en:'Pain with fever and vomiting can mean an infected blocked kidney — seek emergency care.',id:'Nyeri dengan demam dan muntah dapat berarti ginjal tersumbat dan terinfeksi — segera ke gawat darurat.'}
  },
  'urinary bladder': {
    about:{en:'A stretchy muscular balloon in the pelvis that stores urine and signals when it is time to empty, via the urethra.',id:'Kantong otot elastis di panggul yang menyimpan urin dan memberi sinyal saat waktunya dikosongkan melalui uretra.'},
    symptoms:[{en:'Passing urine very often, including at night',id:'Sering berkemih, termasuk malam hari'},{en:'Sudden, hard-to-hold urges',id:'Mendesak tiba-tiba dan sulit ditahan'},{en:'Burning or blood when passing urine',id:'Perih atau darah saat berkemih'}],
    ask:[{en:'Could my symptoms be an infection or an overactive bladder?',id:'Bisakah gejala saya infeksi atau kandung kemih terlalu aktif?'}]
  },
  'spleen': {
    about:{en:'A fist-sized blood filter on your upper left abdomen, behind the stomach. It recycles old blood cells and helps fight certain infections.',id:'Penyaring darah seukuran kepalan di perut kiri atas, di belakang lambung. Mendaur ulang sel darah tua dan membantu melawan infeksi tertentu.'},
    symptoms:[{en:'Fullness or pain in the upper left abdomen',id:'Rasa penuh atau nyeri di perut kiri atas'},{en:'Feeling full after tiny meals',id:'Cepat kenyang setelah makan sedikit'},{en:'Frequent infections',id:'Infeksi berulang'}],
    ask:[{en:'Why is my spleen enlarged (if it is)?',id:'Mengapa limpa saya membesar (bila memang)?'}]
  },
  'pituitary gland': {
    about:{en:'A pea-sized "master gland" hanging below the brain. It tells other glands — thyroid, adrenals, ovaries or testes — how much hormone to make.',id:'"Kelenjar induk" seukuran kacang polong yang menggantung di bawah otak. Memerintahkan kelenjar lain — tiroid, adrenal, ovarium atau testis — berapa banyak hormon yang harus dibuat.'},
    symptoms:[{en:'Unexplained changes in growth, weight, or energy',id:'Perubahan pertumbuhan, berat badan, atau energi tanpa sebab'},{en:'Changes in vision, especially loss of side vision',id:'Perubahan penglihatan, terutama kehilangan lapangan pandang samping'},{en:'Altered periods or sexual function',id:'Perubahan siklus haid atau fungsi seksual'}],
    ask:[{en:'Should my hormone levels be checked?',id:'Perlukah kadar hormon saya diperiksa?'}]
  },
  'adrenal gland': {
    about:{en:'A small triangular gland sitting on top of each kidney. It makes adrenaline for the stress response, plus cortisol and salt-balancing hormones.',id:'Kelenjar segitiga kecil di atas setiap ginjal. Membuat adrenalin untuk respons stres, ditambah kortisol dan hormon penyeimbang garam.'},
    symptoms:[{en:'Episodes of pounding heart, headache, and sweating',id:'Episod jantung berdebar, sakit kepala, dan berkeringat'},{en:'Unexplained weight change or muscle weakness',id:'Perubahan berat badan atau kelemahan otot tanpa sebab'},{en:'Skin darkening in unusual places',id:'Penggelapan kulit di tempat tak lazim'}],
    ask:[{en:'Could my blood pressure spikes be hormone-related?',id:'Bisakah lonjakan tekanan darah saya berhubungan dengan hormon?'}]
  },
  'prostate': {
    about:{en:'A walnut-sized gland below the bladder in men. It adds fluid to semen; it naturally grows with age and can press on the urine passage.',id:'Kelenjar seukuran kenari di bawah kandung kemih pada pria. Menambahkan cairan ke semen; secara alami membesar seiring usia dan dapat menekan saluran kemih.'},
    symptoms:[{en:'Weak stream or straining to pass urine',id:'Aliran lemah atau perlu mengejan saat berkemih'},{en:'Getting up repeatedly at night to urinate',id:'Berulang kali bangun malam untuk berkemih'},{en:'Blood in urine or semen',id:'Darah dalam urin atau semen'}],
    ask:[{en:'Should I have a PSA test, and what would the results mean?',id:'Perlukah tes PSA, dan apa arti hasilnya?'},{en:'Are my urinary symptoms likely to be benign enlargement?',id:'Apakah gejala kemih saya kemungkinan pembesaran jinak?'}]
  },
  'testis': {
    about:{en:'The paired organs in the scrotum that make sperm and testosterone. They sit outside the body to stay a few degrees cooler.',id:'Organ berpasangan dalam skrotum yang memproduksi sperma dan testosteron. Berada di luar tubuh agar tetap beberapa derajat lebih dingin.'},
    symptoms:[{en:'A painless lump or heaviness in a testicle',id:'Benjolan tanpa nyeri atau rasa berat pada testis'},{en:'Sudden severe testicular pain',id:'Nyeri testis mendadak dan hebat'},{en:'A dull ache in the groin or scrotum',id:'Nyeri tumpul di selangkangan atau skrotum'}],
    ask:[{en:'Should a new lump be examined and scanned?',id:'Perlukah benjolan baru diperiksa dan dipindai?'}],
    urgency:{en:'Sudden severe testicular pain in a young man is torsion until proven otherwise — an emergency.',id:'Nyeri testis mendadak dan hebat pada pria muda dianggap torsio sampai terbukti bukan — kegawatdaruratan.'}
  },
  'uterus': {
    about:{en:'The womb: a muscular pear-shaped organ in the female pelvis. Its lining thickens each month for a possible pregnancy, and it expands enormously to hold a growing baby.',id:'Rahim: organ berotot berbentuk pir di panggul perempuan. Dindingnya menebal tiap bulan untuk kemungkinan kehamilan, dan membesar luar biasa untuk menampung bayi yang tumbuh.'},
    symptoms:[{en:'Very heavy or painful periods',id:'Haid sangat deras atau nyeri'},{en:'Bleeding between periods or after menopause',id:'Perdarahan di antara haid atau setelah menopause'},{en:'Pelvic pressure or a feeling of fullness',id:'Rasa tertekan atau penuh di panggul'}],
    ask:[{en:'Are my heavy periods affecting my iron levels?',id:'Apakah haid deras saya memengaruhi kadar zat besi?'},{en:'Should I be evaluated for fibroids?',id:'Perlukah saya diperiksa miom?'}]
  },
  'ovary': {
    about:{en:'The paired organs that store and release eggs and make the female hormones oestrogen and progesterone.',id:'Organ berpasangan yang menyimpan dan melepaskan sel telur serta memproduksi hormon wanita estrogen dan progesteron.'},
    symptoms:[{en:'Pelvic pain or painful periods',id:'Nyeri panggul atau nyeri haid'},{en:'Bloating that persists',id:'Kembung yang menetap'},{en:'Changes in menstrual cycle',id:'Perubahan siklus haid'}],
    ask:[{en:'Should persistent bloating and pelvic discomfort be investigated?',id:'Perlukah kembung dan nyeri panggul menetap diteliti lebih lanjut?'}]
  },
  'fallopian tube': {
    about:{en:'One slim tube on each side, carrying the egg from ovary to uterus. Fertilisation usually happens along the way — this is where an ectopic pregnancy can lodge.',id:'Satu tabung ramping di tiap sisi, membawa sel telur dari ovarium ke rahim. Pembuahan biasanya terjadi di perjalanan — di sinilah kehamilan ektopik dapat menempel.'},
    symptoms:[{en:'A missed period with one-sided pelvic pain',id:'Haid terlambat disertai nyeri panggul satu sisi'},{en:'Light abnormal vaginal bleeding with pain',id:'Perdarahan vagina ringan tidak normal disertai nyeri'}],
    ask:[{en:'If I have pelvic pain with a positive pregnancy test, how soon should I be seen?',id:'Bila nyeri panggul dengan tes kehamilan positif, seberapa cepat saya harus diperiksa?'}],
    urgency:{en:'One-sided pelvic pain with fainting in early pregnancy may be a ruptured ectopic pregnancy — call emergency services.',id:'Nyeri panggul satu sisi dengan pingsan pada kehamilan awal mungkin kehamilan ektopik yang pecah — hubungi gawat darurat.'}
  },
  'mammary gland': {
    about:{en:'The breast gland tissue, arranged in lobes that can make milk after childbirth. Breasts naturally change through the cycle and with age.',id:'Jaringan kelenjar payudara, tersusun dalam lobus yang dapat menghasilkan susu setelah melahirkan. Payudara secara alami berubah sepanjang siklus dan usia.'},
    symptoms:[{en:'A new lump or thickening in the breast or armpit',id:'Benjolan atau penebalan baru di payudara atau ketiak'},{en:'Skin dimpling, redness, or nipple discharge',id:'Kulit mengerut, kemerahan, atau keluar cairan puting'},{en:'A change in breast shape or size',id:'Perubahan bentuk atau ukuran payudara'}],
    ask:[{en:'When should I start mammogram screening, and how often?',id:'Kapan saya harus mulai skrining mamografi, dan seberapa sering?'},{en:'How do I check my own breasts properly?',id:'Bagaimana cara memeriksa payudara sendiri dengan benar?'}]
  },
  'placenta': {
    about:{en:'The baby’s life-support disc, attached to the inside of the womb. It passes oxygen and nutrients from mother to baby and removes waste; the umbilical cord connects it to the baby.',id:'Cakram penopang kehidupan bayi, menempel di dalam rahim. Meneruskan oksigen dan zat gizi dari ibu ke bayi serta membuang limbah; tali pusat menghubungkannya dengan bayi.'},
    symptoms:[{en:'Vaginal bleeding in pregnancy',id:'Perdarahan vagina saat hamil'},{en:'Severe abdominal pain or rigidity',id:'Nyeri perut hebat atau perut keras'},{en:'The baby moving noticeably less',id:'Bayi bergerak jauh lebih sedikit'}],
    ask:[{en:'Where is my placenta located, and is it clear of the cervix?',id:'Di mana plasenta saya berada, dan apakah bebas dari serviks?'}],
    urgency:{en:'Bleeding or constant pain in pregnancy, or a sudden drop in baby movements, needs immediate assessment.',id:'Perdarahan atau nyeri menetap saat hamil, atau gerakan bayi mendadak berkurang, perlu penilaian segera.'}
  },
  'vertebral column': {
    about:{en:'Your backbone: 33 stacked bones protecting the spinal cord, with shock-absorbing discs between them. It supports the head and trunk and allows bending and twisting.',id:'Tulang belakang Anda: 33 tulang bertumpuk yang melindungi sumsum tulang, dengan bantalan penahan kejut di antaranya. Menopang kepala dan badan serta memungkinkan menekuk dan memutar.'},
    symptoms:[{en:'Back pain radiating into a leg',id:'Nyeri punggung menjalar ke satu kaki'},{en:'Numbness or weakness in a leg',id:'Matirasa atau kelemahan pada kaki'},{en:'Pain that worsens at night or with weight loss',id:'Nyeri memburuk malam hari atau disertai penurunan berat badan'}],
    ask:[{en:'Do I need imaging, or is it safe to stay active with my back pain?',id:'Perlukah pencitraan, atau apakah aman tetap aktif dengan nyeri punggung saya?'}]
  },
  'skull': {
    about:{en:'The bony helmet protecting your brain, with openings for the spinal cord, nerves, and blood vessels. It also shapes the face.',id:'Helm tulang pelindung otak Anda, dengan lubang untuk sumsum tulang, saraf, dan pembuluh darah. Juga membentuk wajah.'},
    symptoms:[{en:'Head injury with loss of consciousness or confusion',id:'Cedera kepala dengan hilang kesadaran atau kebingungan'},{en:'Persistent headache after a blow',id:'Sakit kepala menetap setelah benturan'}],
    ask:[{en:'After hitting my head, what symptoms mean I need a scan?',id:'Setelah kepala terbentur, gejala apa yang berarti saya perlu pemindaian?'}]
  },
  'femur': {
    about:{en:'The thighbone — the longest and strongest bone in your body, from hip to knee.',id:'Tulang paha — tulang terpanjang dan terkuat di tubuh Anda, dari panggul ke lutut.'},
    symptoms:[{en:'Inability to stand or bear weight after a fall',id:'Tidak bisa berdiri atau menumpu berat setelah jatuh'},{en:'Hip or thigh pain with a shortened, turned-out leg',id:'Nyeri panggul atau paha dengan kaki tampak pendek dan mengarah keluar'}],
    ask:[{en:'How can I keep my bones strong and prevent fractures?',id:'Bagaimana menjaga tulang saya tetap kuat dan mencegah patah tulang?'}]
  },
  'tibia': {
    about:{en:'The shinbone — the weight-bearing bone between knee and ankle, in front of the calf.',id:'Tulang kering — tulang penopang berat antara lutut dan pergelangan kaki, di depan betis.'},
    symptoms:[{en:'Pain, swelling, or deformity after a blow to the shin',id:'Nyeri, bengkak, atau deformitas setelah tulang kering terbentur'},{en:'Shin pain that worsens with running (possible stress fracture)',id:'Nyeri tulang kering memburuk saat berlari (kemungkinan fraktur stres)'}],
    ask:[{en:'Is my leg pain muscular, or could it be a bone stress injury?',id:'Apakah nyeri kaki saya berasal dari otot, atau bisa jadi cedera stres tulang?'}]
  },
  'hip bone': {
    about:{en:'The large basin-shaped bone ring of the pelvis, joining the spine behind and the femurs at the hip sockets.',id:'Cincin tulang besar berbentuk mangkuk panggul, menyatu dengan tulang belakang di belakang dan femur di soket panggul.'},
    symptoms:[{en:'Groin or hip pain worse with walking or stairs',id:'Nyeri selangkangan atau panggul memburuk saat jalan atau naik tangga'},{en:'Pain after a fall in an older adult',id:'Nyeri setelah jatuh pada lansia'}],
    ask:[{en:'Am I at risk of osteoporosis, and should I be tested?',id:'Apakah saya berisiko osteoporosis, dan perlukah diperiksa?'}]
  },
  'tongue': {
    about:{en:'A highly mobile muscular organ that moves food for chewing and swallowing, and carries taste buds.',id:'Organ otot yang sangat lentur, menggerakkan makanan untuk dikunyah dan ditelan, serta memuat tunas pengecap.'},
    symptoms:[{en:'A sore, patch, or lump on the tongue lasting more than two weeks',id:'Luka, bercak, atau benjolan di lidah lebih dari dua minggu'},{en:'Pain or burning when eating',id:'Nyeri atau perih saat makan'}],
    ask:[{en:'Should a persistent tongue patch or ulcer be examined?',id:'Perlukah bercak atau tukak lidah yang menetap diperiksa?'}]
  },
}
export const PATIENT_FALLBACK:Bilingual={
  en:'A plain-language summary for this structure is still being prepared. The clinical overview below uses standard medical language.',
  id:'Ringkasan bahasa sederhana untuk struktur ini masih disiapkan. Gambaran klinis di bawah menggunakan bahasa medis standar.',
}
