import "../styles/SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useForm } from 'react-hook-form'
import fetchData from '../helpers/fetch/index'

function SignUpPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmitForm = ((data) => {
    fetchData({
      url: '/api/register',
      method: 'POST',
      body: JSON.stringify(data)
    }).then(
      navigate('/login')
    )
  })

  return (
    <Layout>
      <div className="teks-atas">
        <div className="welcome">
          Selamat datang di <span className="ciura">Ciura</span>
        </div>
        <p>
          Sudah punya akun? <Link to="/login">masuk</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmitForm)} className="form-daftar">
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
              <input
                style={{ textAllign: "left" }}
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                {...register('email')}
              />
            </div>
            <div className="username">
              <label htmlFor="username">Buat nama pengguna</label>
              <input
                style={{ textAllign: "left" }}
                type="text"
                id="username"
                name="username"
                placeholder="Nama pengguna"
                required
                {...register('username')}
              />
            </div>
            <label htmlFor="password">Buat password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              {...register('password')}
            />
          </div>

          <div className="lgn">
            <button type="submit" className="login-btnn">
              Daftar
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default SignUpPage;
