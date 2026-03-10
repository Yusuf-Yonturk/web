import profileImage from './imagey.png'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-800 text-white p-2 rounded-md z-50"
      >
        Ana icerige atla
      </a>

      <button
        type="button"
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Yusuf Yonturk
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2" role="list">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <a
                  href="/ui-kit"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4">
        <section id="hakkimda" className="py-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src={profileImage}
                alt="Yusuf Yonturk profil fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <figcaption className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">
                Yazilim Muhendisligi Ogrencisi
              </figcaption>
            </figure>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Frontend gelistirme ve erisilebilir web arayuzleriyle ilgileniyorum.
              </p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'].map((t) => (
                  <li
                    key={t}
                    className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 bg-gray-50 dark:bg-gray-900 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Deney Lab Demo Sitesi',
                  desc: 'Semantik etiketler ve temel stil kurallari ile demo calismasi.',
                  tags: ['HTML', 'CSS', 'A11y'],
                },
                {
                  title: 'Lab Uygulamasi',
                  desc: 'Form, semantik yapi ve erisilebilirlik odakli proje calismasi.',
                  tags: ['React', 'Responsive', 'Forms'],
                },
              ].map((p) => (
                <Card
                  key={p.title}
                  title={p.title}
                  image={profileImage}
                  imageAlt={`${p.title} gorseli`}
                  variant="elevated"
                >
                  <p className="text-sm mb-4">{p.desc}</p>
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Proje becerileri">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-4">
              <Input id="name" name="name" label="Ad Soyad" required minLength={2} autoComplete="name" />
              <Input
                id="email"
                name="email"
                label="E-posta"
                type="email"
                required
                autoComplete="email"
                helpText="Ornek: ad@mail.com"
              />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button variant="primary" size="lg" type="submit">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2026 Yusuf Yonturk. Tum haklari saklidir.</p>
      </footer>
    </div>
  )
}

export default App
