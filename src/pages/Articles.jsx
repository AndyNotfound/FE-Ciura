import BreadCrumb from '../components/BreadCrumb'
import Navbar from '../components/Navbar'
import ArticleCard from '../components/ArticleCard'
import HighlightedArticles from '../components/Articles/HighlightedArticles'

const articlesArray = [
    {
        thumbnail: '/article-image-1.png',
        title: 'Apakah Anemia Mempengaruhi Kegiatan Sehari - Hari?',
        desc: 'Anemia menyebabkan organ tubuh tidak mendapat cukup oksigen sehingga membuat penderita anemia memiliki kulit yang pucat dan mudah lelah. Anemia juga menimbulkan berbagai macam masalah kesehatan.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-2.png',
        title: 'Apa itu anemia?',
        desc: 'Anemia merupakan kondisi medis yang terjadi ketika jumlah sel darah merah dalam tubuh lebih rendah dari jumlah normal.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-3.png',
        title: 'Nutrisi untuk anemia',
        desc: 'Salah satu sumber makanan yang dapat menambah asupan zat besi di dalam tubuh.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-4.png',
        title: 'Cara mencegah anemia',
        desc: 'Jika kamu ingin mencegah anemia, sebaiknya perbanyak konsumsi makanan yang kaya akan zat besi.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-5.png',
        title: 'Apa saja jenis-jenis anemia?',
        desc: 'Terdapat beberapa jenis anemia yang dapat mempengaruhi individu. Beberapa jenis anemia yang umum meliputi.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-6.png',
        title: 'Penyebab anemia',
        desc: 'Anemia dapat disebabkan oleh beberapa faktor dan penyebab yang berbeda, seperti kekurangan nutrisi dan bentuk malnutrisi.',
        postDate: '22 November 2023',
        link: '#',
    },
    {
        thumbnail: '/article-image-7.png',
        title: 'Edukasi anemia sejak dini',
        desc: 'Penting untuk mengedukasi masyarakat tentang anemia dan pentingnya pencegahan sejak dini.',
        postDate: '22 November 2023',
        link: '#',
    }
]

function ArticlesPage() {
    return (
        <>
            <Navbar />
            <BreadCrumb />
            <HighlightedArticles
                thumbnail={articlesArray[0]?.thumbnail}
                title={articlesArray[0]?.title}
                desc={articlesArray[0]?.desc}
                postDate={articlesArray[0]?.postDate}
            />
            <div className="article-container">
                <h2>Artikel Lainnya</h2>
                {articlesArray?.filter((_, index) => index !== 0).map((item, index) => {
                    const { thumbnail, title, desc, postDate, link } = item;
                    return (
                        <ArticleCard
                            key={index}
                            thumbnail={thumbnail}
                            title={title}
                            desc={desc}
                            postDate={postDate}
                            link={link}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ArticlesPage