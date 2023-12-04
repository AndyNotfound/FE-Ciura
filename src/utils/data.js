const articlesArray = [
  {
    id: 1,
    thumbnail: "/article-image-1.png",
    title: "Apakah Anemia Mempengaruhi Kegiatan Sehari - Hari?",
    desc: "Anemia menyebabkan organ tubuh tidak mendapat cukup oksigen sehingga membuat penderita anemia memiliki kulit yang pucat dan mudah lelah. Anemia juga menimbulkan berbagai macam masalah kesehatan.",
    postDate: "22 November 2023",
  },
  {
    id: 2,
    thumbnail: "/article-image-2.png",
    title: "Apa itu anemia?",
    desc: "Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.",
    postDate: "22 November 2023",
  },
  {
    id: 3,
    thumbnail: "/article-image-3.png",
    title: "Nutrisi untuk anemia",
    desc: "Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.",
    postDate: "22 November 2023",
  },
  {
    id: 4,
    thumbnail: "/article-image-4.png",
    title: "Cara mencegah anemia",
    desc: "Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.",
    postDate: "22 November 2023",
  },
  {
    id: 5,
    thumbnail: "/article-image-5.png",
    title: "Apa saja jenis-jenis anemia?",
    desc: "Terdapat beberapa jenis anemia yang dapat mempengaruhi individu. Beberapa jenis anemia yang umum meliputi.",
    postDate: "22 November 2023",
  },
  {
    id: 6,
    thumbnail: "/article-image-6.png",
    title: "Penyebab anemia",
    desc: "Anemia dapat disebabkan oleh beberapa faktor dan penyebab yang berbeda, seperti kekurangan nutrisi dan bentuk malnutrisi.",
    postDate: "22 November 2023",
  },
  {
    id: 7,
    thumbnail: "/article-image-7.png",
    title: "Edukasi anemia sejak dini",
    desc: "Penting untuk mengedukasi masyarakat tentang anemia dan pentingnya pencegahan sejak dini.",
    postDate: "22 November 2023",
  },
];

const faqArray = [
  {
    id: 1,
    title: "Yang di Rasakan saat anemia",
    explanation:
      "Anemia sering dikenal dengan gejala 5L : lemah, letih, lesu, lelah, dan lalai. “5L merupakan gejala yang sering dirasakan oleh penderita anemia. Selain 5 gejala tersebut, biasanya orang lain akan menyadari bahwa penderita anemia berwajah pucat",
  },
  {
    id: 2,
    title: "Diagnosis anemia dibuat",
    explanation:
      "Dokter dapat melakukan tes darah untuk memeriksa kadar hemoglobin dan jumlah sel darah merah. Tes tambahan mungkin diperlukan untuk menentukan penyebab anemia.",
  },
  {
    id: 3,
    title: "Cara mengobati anemia",
    explanation:
      "Pengobatan anemia tergantung pada penyebabnya. Ini mungkin melibatkan suplemen zat besi, vitamin B12, atau asam folat, atau perubahan gaya hidup dan diet.",
  },
  {
    id: 4,
    title: "Pola makan yang dianjurkan untuk penderita anemia",
    explanation:
      "Diet seimbang yang kaya zat besi, vitamin B12, asam folat, dan nutrisi penting lainnya dapat membantu mengelola anemia. Makanan seperti daging, sayuran berdaun hijau, kacang-kacangan, dan sereal diperkaya sering disarankan.",
  },
  {
    id: 5,
    title: "Gejala umum pada anemia",
    explanation:
      "Terlihat sangat lelah. Mengalami perubahan suasana hati. Kulit yang terlihat lebih pucat. Sering mengalami pusing. Mengalami jaundice (kulit dan mata menjadi kuning). Detak jantung berdebar lebih cepat dari biasanya. Mengalami sesak nafas, sindrom kaki gelisah hingga kaki dan tangan bengkak apabila mengalami anemia berat.",
  },
  {
    id: 6,
    title: "Cara mengatasi kelelahan dan kelemahan",
    explanation:
      "Penderita anemia sering mengalami kelelahan. Mengelola kegiatan sehari-hari, tidur cukup, dan menjaga pola makan yang seimbang dapat membantu mengatasi gejala tersebut.",
  },
  {
    id: 7,
    title: "Apakah anemia dapat disembuhkan sepenuhnya",
    explanation:
      "Dapat disembuhkan dengan pemberian obat-obatan sesuai dengan penyebabnya, seperti: Erythropoietin, obat yang membantu sumsum tulang memproduksi sel darah merah. Mengonsumsi suplemen asam folat, zat besi dan vitamin B12. Melakukan transfusi darah jika diperlukan.",
  },
  {
    id: 8,
    title: "Anemia memerlukan perhatian medis segera",
    explanation:
      "Beberapa jenis anemia dapat menjadi kondisi serius dan memerlukan perhatian medis segera. Penderita anemia sebaiknya berkonsultasi dengan dokter untuk diagnosis dan penanganan yang tepat.",
  },
];

const forumQuestion = [
  {
    id: 1,
    author: "Rimuru Tempest",
    link: "/",
    authorProfilePicture: "/profil-forum.svg",
    title: "Apa saja ciri - ciri anemia pada remaja?",
    thumbnail: "/forum-img.png",
    postedDate: "22 November 2023",
    question:
      "Saya seorang guru SMA, ada salah satu anak murid saya dia perempuan usia 17 th. di kelar sering terlihat lemas, pucat, loyo kaya gada tenaga serta dia juga beberapa kali minta ijin untuk ke UKS karena pusing. Apakah siswa tersebut mengalami ciri-ciri gejala penyakit anemia?",
    comments: [
      {
        id: 1,
        author: "Ramiris",
        authorProfilePicture: "/profil-forum.svg",
        postedDate: "23 November 2023",
        like: 2,
        comment: "Aku juga gatau anjir",
      },
    ],
    relatedQuestion: [
      {
        id: 1,
        title: "Bagaimana cara mencegah Anemia?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 2,
        title: "Bagaimana cara mencegah Anemia?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 3,
        title: "Bagaimana cara mencegah Anemia?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    author: "Diablo",
    link: "/",
    authorProfilePicture: "/profil-forum.svg",
    title: "Bagaimana cara mencegah mati kena Anemia ngoding?",
    thumbnail: "/forum-img.png",
    postedDate: "22 November 2023",
    question:
      "Jadi saya baru mengetahui tentang anemia setelah tetangga saya mengalami Anemia, apa yang dapat saya lakukan untuk mencegah terjadi nya anemia?",
    comments: [
      {
        id: 1,
        author: "Ramiris",
        authorProfilePicture: "/profil-forum.svg",
        postedDate: "23 November 2023",
        like: 2,
        comment: "Aku juga gatau anjir",
      },
    ],
    relatedQuestion: [
      {
        id: 1,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 2,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 3,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    author: "Diablo",
    link: "/",
    authorProfilePicture: "/profil-forum.svg",
    title: "Bagaimana cara mencegah mati kena Anemia ngoding?",
    thumbnail: "/forum-img.png",
    postedDate: "22 November 2023",
    question:
      "Jadi saya baru mengetahui tentang anemia setelah tetangga saya mengalami Anemia, apa yang dapat saya lakukan untuk mencegah terjadi nya anemia?",
    comments: [
      {
        id: 1,
        author: "Ramiris",
        authorProfilePicture: "/profil-forum.svg",
        postedDate: "23 November 2023",
        like: 2,
        comment: "Aku juga gatau anjir",
      },
    ],
    relatedQuestion: [
      {
        id: 1,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 2,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 3,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    author: "Johny Sins",
    link: "/",
    authorProfilePicture: "/profil-forum.svg",
    title: "Apa saja ciri - ciri anemia pada remaja?",
    thumbnail: "/forum-img.png",
    postedDate: "22 November 2023",
    question:
      "Jadi saya baru mengetahui tentang anemia setelah tetangga saya mengalami Anemia, apa yang dapat saya lakukan untuk mencegah terjadi nya anemia?",
    comments: [
      {
        id: 1,
        author: "Ramiris",
        authorProfilePicture: "/profil-forum.svg",
        postedDate: "23 November 2023",
        like: 2,
        comment: "Aku juga gatau anjir",
      },
    ],
    relatedQuestion: [
      {
        id: 1,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 2,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
      {
        id: 3,
        title: "Apa saja ciri - ciri anemia pada remaja?",
        authorProfilePicture: "/profil-forum.svg",
        link: "/",
      },
    ],
  },
];

const avoidArray = [
  {
    id: 1,
    thumbnail: "/rekomendasi-img3.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 2,
    thumbnail: "/rekomendasi-img4.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 3,
    thumbnail: "/rekomendasi-img5.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 4,
    thumbnail: "/rekomendasi-img6.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 5,
    thumbnail: "/rekomendasi-img7.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 6,
    thumbnail: "/rekomendasi-img8.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 7,
    thumbnail: "/rekomendasi-img9.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 8,
    thumbnail: "/rekomendasi-img10.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 9,
    thumbnail: "/rekomendasi-img11.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 10,
    thumbnail: "/rekomendasi-img12.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
];

const recomendationArray = [
  {
    id: 11,
    thumbnail: "/rekomendasi-img13.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 12,
    thumbnail: "/rekomendasi-img14.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 13,
    thumbnail: "/rekomendasi-img15.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 14,
    thumbnail: "/rekomendasi-img16.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 15,
    thumbnail: "/rekomendasi-img17.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 16,
    thumbnail: "/rekomendasi-img18.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 17,
    thumbnail: "/rekomendasi-img19.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 18,
    thumbnail: "/rekomendasi-img20.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 19,
    thumbnail: "/rekomendasi-img21.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 20,
    thumbnail: "/rekomendasi-img22.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 21,
    thumbnail: "/rekomendasi-img23.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
  {
    id: 22,
    thumbnail: "/rekomendasi-img24.png",
    title: "Judul",
    desc: "Isi teks atau konten lainnya...",
  },
];

export { articlesArray, faqArray, forumQuestion, recomendationArray, avoidArray };
