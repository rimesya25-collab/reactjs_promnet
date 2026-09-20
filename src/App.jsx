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
          <p><b>NIM</b> : 2503127</p>
          <p><b>Program Studi</b> : Pendidikan Ilmu Komputer</p>
          <p><b>Universitas</b> : Universitas Pendidikan Indonesia</p>
          <p><b>Tempat, Tanggal Lahir</b> : Cirebon, 25 Oktober 2007</p>
          <p><b>Alamat</b> : Sumber, Cirebon, Jawa Barat</p>
          <p><b>Email</b> : rimesya25@email.com</p>
          <p><b>Hobi</b> : Mendengarkan musik dan menonton film</p>
        </div>
      </section>

      <section className="about" id="tentang">
        <h2>Tentang Saya</h2>

        <p>
          Saya adalah mahasiswa Pendidikan Ilmu Komputer 
          di Universitas Pendidikan Indonesia 
          angkatan 2025.
        </p>
      </section>

      <footer>
        <p>© 2026 Rifdha Medina | Biodata Pribadi</p>
      </footer>
    </div>
  );
}

export default App;