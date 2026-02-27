import './App.css'
import profileImage from './imagey.png'

function App() {
  return (
    <>
      <header>
        <h1>Yusuf Yonturk - Kisisel Portfolyo</h1>
      </header>

      <main>
        <section aria-labelledby="about-title">
          <h2 id="about-title">Hakkimda</h2>
          <figure>
            <img src={profileImage} alt="Yusuf Yonturk profil fotografi" width="180" />
            <figcaption>Bilgisayar programciligi ogrencisi</figcaption>
          </figure>
          <p>Web teknolojileri ve erisilebilir arayuzler gelistirmekle ilgileniyorum.</p>
        </section>

        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Projeler</h2>
          <article>
            <h3>Deney Lab Demo Sitesi</h3>
            <p>Temel HTML, CSS ve JavaScript konularini uyguladigim ilk demo calismasi.</p>
          </article>
          <article>
            <h3>Lab Uygulamasi</h3>
            <p>Form, semantik yapi ve erisilebilirlik odakli bir sinif ici proje calismasi.</p>
          </article>
        </section>
      </main>

      <footer>
        <p>© 2026 Yusuf Yonturk</p>
      </footer>
    </>
  )
}

export default App
