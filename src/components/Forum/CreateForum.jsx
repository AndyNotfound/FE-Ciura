function CreateForum() {
  return (
    <>
      <div className="CreateForum-section">
        <div className="forum-judul">Buat Forum</div>
        <form className="create-form">
          <div className="create">
            <div className="create-nama">
              <label className="label-nama" for="">
                Nama
              </label>
              <input className="input-nama" type="text" />
            </div>
            <div className="create-topik">
              <label className="label-topik" for="">
                Topik
              </label>
              <input className="input-topik" type="text" />
              <input className="input-topik" type="text" />
            </div>
            <div>
              <label className="upload-img" for="upload-img">
                Tambah Foto <i className="fa-solid fa-plus"></i>
              </label>
              <input id="upload-img" type="file" />
            </div>
          </div>
          <a className="btn-create">Buat</a>
        </form>
      </div>
    </>
  );
}
export default CreateForum;
