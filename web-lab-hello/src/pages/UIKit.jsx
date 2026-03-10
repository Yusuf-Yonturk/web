import { useState } from 'react'
import Alert from '../components/Alert.jsx'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Input from '../components/Input.jsx'

export default function UIKit() {
  const [showError, setShowError] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 text-gray-900 dark:text-white">
      <button
        type="button"
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>

      <header className="max-w-6xl mx-auto space-y-3">
        <h1 className="text-4xl font-bold">UI Kit</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Button, Input, Card ve Alert component varyantlari.
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-700 dark:text-blue-300 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 rounded"
        >
          Portfoye don
        </a>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* --- BUTTONS --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* --- INPUTS --- */}
        <section className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
            Inputs
          </h2>
          <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
          <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
          <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
          <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
        </section>

        {/* --- CARDS --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
            Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              <p>Golge ile yukseltilmis kart.</p>
            </Card>
            <Card variant="outlined" title="Outlined Card">
              <p>Cerceveli kart.</p>
            </Card>
            <Card
              variant="filled"
              title="Filled Card"
              footer={<Button size="sm">Detay</Button>}
            >
              <p>Dolgulu arka plan.</p>
            </Card>
          </div>
        </section>

        {/* --- ALERTS --- */}
        <section className="space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
            Alerts
          </h2>
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesaji.
          </Alert>
          <Alert variant="success" title="Basarili">
            Islem tamamlandi.
          </Alert>
          <Alert variant="warning" title="Uyari">
            Dikkat edilmesi gereken durum.
          </Alert>
          {showError && (
            <Alert
              variant="error"
              title="Hata"
              dismissible
              onDismiss={() => setShowError(false)}
            >
              Bir hata olustu. Tekrar deneyin.
            </Alert>
          )}
        </section>
      </main>
    </div>
  )
}

