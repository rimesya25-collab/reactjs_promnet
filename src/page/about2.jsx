import fotoKegiatan1 from "../assets/foto kegiatan 1.jpeg";
import fotoKegiatan2 from "../assets/foto kegiatan 2.jpeg";
import fotoKegiatan3 from "../assets/foto kegiatan 3.jpeg";

function About2() {
  return (
    <main className="about-page">

      {/* ABOUT ME */}
      <section className="about-intro">

        <p className="section-label">
          LITTLE ABOUT ME~~
        </p>

        <h1>~ WELCOME ~</h1>

        <p>
          Saya Rifdha Medina Shasya. sekarang saya sedang
          melanjutkan studi di Universitas Pendidikan Indonesia
          jurusan Pendidikan Ilmu Komputer.
        </p>
      </section>

      {/* HOBBIES */}
      <section className="hobbies-section">

        <p className="section-label">
          WHAT I LIKE
        </p>
        <h2>my hobbies</h2>
        <div className="hobby-container">
          <div className="hobby-card">
            <div className="hobby-icon">
              🎧
            </div>
            <h3>LISTENING TO SONG</h3>
            <p>
              I LIKE TO LISTEN SONG! soalnyaaa kadang
              kita bisa deskripisiin suasana mood kita xixi
            </p>
          </div>
          <div className="hobby-card">
            <div className="hobby-icon">
              🎬
            </div>
            <h3>WATCHING MOVIES</h3>

            <p>
              dan yang ke 2, I LIKE WATCH THE MOVIES TOO!
              biar ga bosen ajaa hehehe
            </p>

          </div>

        </div>

      </section>


      {/* CAMPUS ACTIVITIES */}
      <section className="activities-section">

        <p className="section-label">
          CAMPUS ACTIVITIES
        </p>

        <h2>~ HERE WE ARE ~</h2>

        <p className="activities-description">
          Beberapa kegiatan yang saya lakukan selama menjalani
          perkuliahan bersama teman-teman.
        </p>
        <div className="activities-container">
          <div className="activity-card">
            <div className="activity-photo">
            <img src={fotoKegiatan1} alt="Kegiatan bersama PILKOM B 25" />
            </div>

            <h3>BERSAMA PILKOM B 25</h3>

            <p>
              bersama teman sekelas di kampus
            </p>

          </div>


          <div className="activity-card">

           <div className="activity-photo">
           <img src={fotoKegiatan2} alt="Belajar bersama" />
           </div>

            <h3>BELAJAR BARENG</h3>

            <p>
              belajar bersama di kelas
            </p>

          </div>

          <div className="activity-card">

            <div className="activity-photo">
            <img src={fotoKegiatan3} alt="Kegiatan organisasi" />
            </div>

            <h3>ORGANISASI</h3>

            <p>
              mengikuti organisasi di kampus
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About2;