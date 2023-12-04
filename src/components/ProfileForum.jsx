import console from "console";

function ProfileForum() {
  return (
    <div className="menuprofile-section">
      <div className="forum-akun-section">
        <div className="judul-edit">Forum Diskusi</div>
        <a className="akun-create-forum" href="#">
          Buat Forum
        </a>
      </div>
      <div className="profile-forum-container">
        <div className="discusion-container">
          <img className="profile-img-user" src="/profil-img.svg" alt="" />
          <div className="title-discusion">Apa saja ciri - ciri anemia pada remaja ?</div>
        </div>
        <div className="discusion-container-right">
          <div className="discusion-container-right1">
            <p>3 Komentar</p>
            <img src="/comment-icon.png" alt="" />
          </div>
          <div className="discusion-container-right2">
            <p>2 hari yang lalu</p>
            <img src="/clock-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="profile-comment">Saya seorang guru SMA, ada salah satu anak murid saya dia perempuan usia 17 th. di kelar sering terlihat lemas, pucat, loyo kaya gada tenaga serta......</div>
      <div className="profile-forum-container">
        <div className="discusion-container">
          <img className="profile-img-user" src="/profil-img.svg" alt="" />
          <div className="title-discusion">Pengaruh anemia dalam beraktivitas</div>
        </div>
        <div className="discusion-container-right">
          <div className="discusion-container-right1">
            <p>3 Komentar</p>
            <img src="/comment-icon.png" alt="" />
          </div>
          <div className="discusion-container-right2">
            <p>2 hari yang lalu</p>
            <img src="/clock-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="profile-comment">Saya seorang guru SMA, ada salah satu anak murid saya dia perempuan usia 17 th. di kelar sering terlihat lemas, pucat, loyo kaya gada tenaga serta......</div>
    </div>
  );
}
export default ProfileForum;
