# CSS Kararlari (LAB-3)

## 1. Breakpoint Secimi
- Bu projede mobile-first yaklasimi ile **mobil varsayilan (0–639px)**, **tablet (640px+)** ve **masaustu (1024px+)** kirilimlarini kullandim.
- 640px sonrasinda “Hakkimda” bolumundeki icerik yan yana sigacak kadar genisliyor; 1024px sonrasinda ise sayfa icerigini max-width ile sinirlayip kartlari 3 sutunlu yapiya cekmek daha dengeli gorunuyor.

## 2. Layout Tercihleri
- **Header / navigasyon** icin Flexbox sectim; logo-baslik ile nav’i tek eksende hizalamak ve satira sigmadiginda wrap davranisi almak icin uygun.
- **Proje kartlari** icin CSS Grid sectim; kartlarin 1/2/3+ sutuna otomatik dagilmasi icin `repeat(auto-fit, minmax(280px, 1fr))` yapisi pratik.
- Grid icinde kart icerigini esitlemek icin kartlari `display: flex; flex-direction: column;` yaptim ve aciklama metnine `flex-grow: 1` vererek alt kisimlari hizaladim.

## 3. Design Tokens
- Renk, spacing, radius ve tipografi degerlerini `src/styles/tokens.css` icinde `:root` altinda topladim.
- Bu sayede sayfanin farkli yerlerinde ayni renk/bosluk/tipografi seti tutarli kullaniliyor ve degisiklik yapmak tek noktadan yonetiliyor.
- Tipografi icin `clamp()` kullanarak (rem + vw karisimi) yazilarin ekran genisligine gore akici olceklenmesini sagladim.

## 4. Responsive Stratejiler
- **Mobile-first** yazdim: temel stiller mobil icin; sadece gerekli yerlerde `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile genis ekran iyilestirmeleri ekledim.
- Mobilde “Hakkimda” tek sutun ve ortali; tablette figure + metin yan yana; masaustunde icerik genisligi sinirli ve proje grid’i 3 sutunlu.
- Gorseller icin `max-width: 100%` ve kart gorsellerinde `object-fit: cover` kullanarak oranlar bozulmadan responsive davranis hedefledim.

## 5. Ekran Goruntuleri (Teslim)
`web-lab-hello/screenshots/` klasorune su dosyalari ekle:
- `screenshot-mobile.png` (375px genislik)
- `screenshot-tablet.png` (768px genislik)
- `screenshot-desktop.png` (1280px genislik)

DevTools ile: **Toggle device toolbar** → genisligi ayarla → Command Palette → **Capture full size screenshot**.

