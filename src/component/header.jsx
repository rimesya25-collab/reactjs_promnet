function Header() {
  return (
    <>
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
            welcomee!!!! disini ada biodata
            tentang saya 🤩 semoga suka ya! 🌟
            *dan kenapa warna biru? karena saya
            suka warna biru 🩵
          </p>

          <a href="#biodata" className="button">
            Lihat Biodata
          </a>
        </div>

        <img
          src="/foto.jpg"
          alt="Foto Rifdha"
          className="profile"
        />
      </section>
    </>
  );
}

export default Header;