import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div className="teks-atas">
        <div className="welcome">
          Selamat datang di <span className="ciura">Ciura</span>
        </div>
        <p>
          Belum punya akun? <Link to="/signup">Daftar</Link>
        </p>
      </div>

      <form className="login-form">
        <div className="isi-form">
          <h1 className="masuk">Masuk</h1>
          <button className="form-btn">
            <img className="btn-login" src="/google.png" alt="" />
            <a href="">Lanjut dengan Google</a>
          </button>
          <p className="atau">Atau</p>
          <div className="isi-form2">
            <div className="username">
              <label htmlFor="username">Masukan nama pengguna atau email</label>
              <input style={{ textAllign: "left" }} type="text" id="username" name="username" placeholder="Username or email" required />
            </div>

            <label htmlFor="email">Masukan password</label>
            <input type="password" id="email" name="email" required placeholder="Password" />
            <a className="fp" href="">
              Lupa password
            </a>
          </div>

          <div className="lgn">
            <button>
              <a className="login-btnn" href="">
                Masuk
              </a>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default LoginForm;
