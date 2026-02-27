import './App.css'
import profileImage from './imagey.png'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ana icerige atla
      </a>

      <header>
        <h1>Yusuf Yonturk - Kisisel Portfolyo</h1>
      </header>

      <main id="main-content">
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

        <section aria-labelledby="contact-title">
          <h2 id="contact-title">Iletisim</h2>
          <form action="#" method="post" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <label htmlFor="name">Ad Soyad</label>
              <input id="name" name="name" type="text" required minLength={2} />

              <label htmlFor="email">E-posta</label>
              <input id="email" name="email" type="email" required />

              <label htmlFor="subject">Konu</label>
              <select id="subject" name="subject" required defaultValue="">
                <option value="" disabled>
                  Seciniz
                </option>
                <option value="is-teklifi">Is teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Oneri</option>
              </select>

              <label htmlFor="message">Mesajiniz</label>
              <textarea id="message" name="message" rows={5} required minLength={10} />

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Yusuf Yonturk</p>
      </footer>
    </>
  )
}

export default App
