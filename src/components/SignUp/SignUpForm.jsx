import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <>
      <div className="teks-atas">
        <div className="welcome">
          Selamat datang di <span className="ciura">Ciura</span>
        </div>
        <p>
          Sudah punya akun? <Link to="/login">masuk</Link>
        </p>
      </div>

      <form>
        <div className="isi-form">
          <h1 className="masuk">Daftar</h1>
          <button className="form-btn">
            <img className="btn-login" src="/google.png" alt="" />
            <a href="">Lanjut dengan Google</a>
          </button>
          <p className="atau">Atau</p>
          <div className="isi-form2">
            <div className="email">
              <label htmlFor="email">Masukan email</label>
              <input style={{ textAllign: "left" }} type="text" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="username">
              <label htmlFor="username">Buat nama pengguna</label>
              <input style={{ textAllign: "left" }} type="text" id="username" name="username" placeholder="Nama pengguna" required />
            </div>
            <label htmlFor="passowrd">Buat password</label>
            <input type="password" id="email" name="email" required placeholder="Password" />
          </div>

          <div className="lgn">
            <button>
              <a className="login-btnn" href="">
                Daftar
              </a>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default SignUpForm;
