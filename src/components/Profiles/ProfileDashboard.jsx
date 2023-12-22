function ProfileDashboard() {
  return (
    <div className="menuprofile-section">
      <div className="profilepicture-section">
        <img className="ganti-img" src="/profil-img.svg" alt="" />
        <a className="change-img" href="#">
          Ubah Foto
        </a>
      </div>
      <div className="edit-akun-section">
        <div className="judul-edit">Edit Akun Saya</div>
        <div className="edit-name">
          <label htmlFor="label-edit">Nama</label>
          <input className="input-edit-name" placeholder="Contoh : Novida Putri" type="text" />
          <img className="icon-edit" src="/Icon-edit.svg" alt="" />
        </div>
        <div className="edit-name">
          <label htmlFor="label-edit">Email</label>
          <input className="input-edit-name" placeholder="Contoh : Novidaa98@gmail.com" type="text" />
          <img className="icon-edit" src="/Icon-edit.svg" alt="" />
        </div>
        <div className="edit-name">
          <label htmlFor="label-edit">Jenis Kelamin</label>
          <input className="input-edit-name" placeholder="Contoh : Perempuan" type="text" />
          <img className="icon-edit" src="/Icon-edit.svg" alt="" />
        </div>
        <div className="edit-name">
          <label htmlFor="label-edit">Nomer Telepon</label>
          <input className="input-edit-name" placeholder="Contoh : 085632574876" type="text" />
          <img className="icon-edit" src="/Icon-edit.svg" alt="" />
        </div>
        <div className="edit-name">
          <label htmlFor="label-edit">Tempat Tinggal</label>
          <input className="input-edit-name" placeholder="Contoh : Yogyakarta" type="text" />
          <img className="icon-edit" src="/Icon-edit.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;
