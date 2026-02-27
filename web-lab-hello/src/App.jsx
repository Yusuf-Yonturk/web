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
        <nav aria-label="Sayfa bolumleri">
          <a href="#hakkimda">Hakkimda</a> | <a href="#projeler">Projeler</a> |{' '}
          <a href="#iletisim">Iletisim</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" aria-labelledby="about-title">
          <h2 id="about-title">Hakkimda</h2>
          <figure>
            <img src={profileImage} alt="Yusuf Yonturk profil fotografi" width="180" />
            <figcaption>Bilgisayar programciligi ogrencisi</figcaption>
          </figure>
          <p>Frontend gelistirme ve erisilebilir web arayuzleriyle ilgileniyorum.</p>
          <ul>
            <li>HTML5 ve Semantik Yapi</li>
            <li>CSS ile responsive tasarim</li>
            <li>React temelleri</li>
          </ul>
        </section>

        <section id="projeler" aria-labelledby="projects-title">
          <h2 id="projects-title">Projeler</h2>
          <article>
            <h3>Deney Lab Demo Sitesi</h3>
            <p>Semantik etiketler ve temel stil kurallari ile olusturulmus demo calismasi.</p>
          </article>
          <article>
            <h3>Lab Uygulamasi</h3>
            <p>Form, semantik yapi ve erisilebilirlik odakli bir sinif ici proje calismasi.</p>
          </article>
        </section>

        <section id="iletisim" aria-labelledby="contact-title">
          <h2 id="contact-title">Iletisim</h2>
          <form action="#" method="post" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              <p id="form-hint">Tum alanlar zorunludur.</p>

              <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                autoComplete="name"
                aria-describedby="form-hint name-error"
              />
              <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-describedby="form-hint email-error"
              />
              <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
              <label htmlFor="subject">Konu</label>
              <select id="subject" name="subject" required defaultValue="" aria-describedby="subject-error">
                <option value="" disabled>
                  Seciniz
                </option>
                <option value="is-teklifi">Is teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Oneri</option>
              </select>
              <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
              <label htmlFor="message">Mesajiniz</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                aria-describedby="form-hint message-error"
              />
              <small id="message-error" className="error-msg" role="alert"></small>
              </div>

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
