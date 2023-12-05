import Layout from "../components/Layout"
import HelpAccordion from "../components/ProfileHelp/HelpAccordion"
import SideMenu from "../components/Sidemenu"
import '../styles/ProfileHelpListPage.css'

const helpArray = [
    {
        id: 1,
        title: 'Kenapa saya harus mendaftar?',
        desc: 'Lorem ipsum dolor sit amet consectetur. Felis integer nunc egestas quis. Faucibus cursus aliquet est pretium amet adipiscing. Egestas ultrices turpis sit tincidunt. Auctor pharetra netus odio fusce phasellus sed eget consequat.'
    },
    {
        id: 2,
        title: 'Apa Menggunakan website ini gratis?',
        desc: 'Lorem ipsum dolor sit amet consectetur. Felis integer nunc egestas quis. Faucibus cursus aliquet est pretium amet adipiscing. Egestas ultrices turpis sit tincidunt. Auctor pharetra netus odio fusce phasellus sed eget consequat.'
    },
    {
        id: 3,
        title: 'Saya punya pertanyaan medis, bagaimana cara menyampaikannya?',
        desc: 'Lorem ipsum dolor sit amet consectetur. Felis integer nunc egestas quis. Faucibus cursus aliquet est pretium amet adipiscing. Egestas ultrices turpis sit tincidunt. Auctor pharetra netus odio fusce phasellus sed eget consequat.'
    },
    {
        id: 4,
        title: 'Saya khawatir dengan Privasi',
        desc: 'Lorem ipsum dolor sit amet consectetur. Felis integer nunc egestas quis. Faucibus cursus aliquet est pretium amet adipiscing. Egestas ultrices turpis sit tincidunt. Auctor pharetra netus odio fusce phasellus sed eget consequat.'
    },
    {
        id: 5,
        title: 'Bila saya menghapus akun, apa yang akan terjadi pada data saya?',
        desc: 'Lorem ipsum dolor sit amet consectetur. Felis integer nunc egestas quis. Faucibus cursus aliquet est pretium amet adipiscing. Egestas ultrices turpis sit tincidunt. Auctor pharetra netus odio fusce phasellus sed eget consequat.'
    }
]
function ProfileHelpListPage() {
    return (
        <Layout>
            <div className="profile-layout">
                <SideMenu />
                <div className="profile-help">
                    <h1>Bantuan</h1>
                    <div className="profile-help__container">
                        {helpArray?.map((item, index) => {
                            const { id, title, desc } = item;
                            return (
                                <HelpAccordion
                                    key={index}
                                    id={id}
                                    title={title}
                                    desc={desc}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfileHelpListPage