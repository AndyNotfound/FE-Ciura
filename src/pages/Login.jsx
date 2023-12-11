import '../styles/LoginPage.css'
import { useForm } from "react-hook-form";
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <div className="teks-atas">
        <div className="welcome">
          Selamat datang di <span className="ciura">Ciura</span>
        </div>
        <p>
          Belum punya akun? <Link to="/signup">daftar</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="login-form">
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
              <input
                style={{ textAllign: "left" }}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                {...register('username')}
              />
            </div>

            <label htmlFor="password">Masukan password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              {...register('password')}
            />
            <a className="fp" href="">
              Lupa password
            </a>
          </div>

          <div className="lgn">
            <button type='submit' className='login-btnn'>
              Masuk
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;
