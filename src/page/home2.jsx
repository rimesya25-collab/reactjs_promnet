function Home2() {
  return (
    <main className="home-page">
      <section className="hero-section">

        {/* Hiasan */}
        <div className="decoration decoration-left"></div>
        <div className="decoration decoration-right"></div>
        <div className="decoration decoration-bottom"></div>

        {/* Foto */}
        <div className="hero-image">
          <img src="/foto.jpg" alt="Rifdha Medina Shasya" />
        </div>

        {/* Tulisan */}
        <div className="hero-content">

          <p className="hero-small">HAIIYY, I'M</p>

          <h1>RIFDHA MEDINA SHASYA</h1>

          <h2>Mahasiswa Pendidikan Ilmu Komputer</h2>

          <div className="hero-divider">
          <span></span>
          <span></span>
          </div>

          <p className="hero-welcome">
            (｡'▽'｡) WELCOME TO RIFDHA'S WEBSITE!
          </p>

          <p className="hero-description">
            lets get to know me
          </p>

        </div>

      </section>
    </main>
  );
}

export default Home2;