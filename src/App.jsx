import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2>My Profile</h2>

        <div className="menu">
          <a href="#home">Beranda</a>
          <a href="#biodata">Biodata</a>
          <a href="#tentang">Tentang Saya</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="hello">HALO, SAYA</p>
          <h1>Rifdha Medina</h1>
          <h3>Mahasiswa Pendidikan Ilmu Komputer</h3>
          <p>
            Selamat datang di website biodata saya.
            Website ini dibuat menggunakan React JS.
          </p>

          <a href="#biodata" className="button">
            Lihat Biodata
          </a>
        </div>

        <img src="/foto.jpg" alt="Foto Rifdha" className="profile" />
      </section>

      <section className="biodata-section" id="biodata">
        <h2>Biodata Diri</h2>

        <div className="card">
          <p><b>Nama</b> : Rifdha Medina</p>
          <p><b>NIM</b> : 2400000</p>
          <p><b>Program Studi</b> : Pendidikan Ilmu Komputer</p>
          <p><b>Universitas</b> : Universitas Pendidikan Indonesia</p>
          <p><b>Tempat, Tanggal Lahir</b> : Bandung, 00 Januari 2006</p>
          <p><b>Alamat</b> : Bandung, Jawa Barat</p>
          <p><b>Email</b> : rifdha@email.com</p>
          <p><b>Hobi</b> : Mendengarkan musik dan menonton film</p>
        </div>
      </section>

      <section className="about" id="tentang">
        <h2>Tentang Saya</h2>

        <p>
          Saya adalah mahasiswa Pendidikan Ilmu Komputer yang sedang
          mempelajari berbagai hal tentang teknologi dan pemrograman.
          Saya senang mencoba hal-hal baru dan terus belajar untuk
          mengembangkan kemampuan saya.
        </p>
      </section>

      <footer>
        <p>© 2026 Rifdha Medina | Biodata Pribadi</p>
      </footer>
    </div>
  );
}

export default App;