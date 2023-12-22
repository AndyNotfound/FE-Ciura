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
              <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Tulis di sini..." />
              <input className="input-topik" type="text" />
            </div>
            <div>
              <label className="upload-img" for="upload-img">
                Tambah Foto
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
