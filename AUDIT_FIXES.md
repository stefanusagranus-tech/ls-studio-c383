# Catatan Audit & Hotfix V0.2

## Temuan dari ZIP sumber
- README sumber menyebut workflow `.github/workflows/build-apk.yml`, tetapi file tersebut tidak ada di ZIP.
- `loginOverlay` pada sumber memiliki kelas `hidden`, sehingga login memang disembunyikan pada fresh launch.
- Input password berisi default `123456`, tetapi handler login lama tidak memverifikasi password dan mengizinkan username yang tidak terdaftar.
- Navigasi bergantung pada JavaScript utama dan kelas Tailwind `hidden`.
- `renderChart()` memanggil `new Chart(...)` tanpa memeriksa apakah CDN Chart.js berhasil dimuat.
- File `index.html` dan `www/index.html` serta modul mirror identik.
- Ada dependensi CDN sehingga sebagian fungsi tidak tersedia offline.

## Yang diperbaiki
- Login overlay tampil saat fresh launch; password default dihapus.
- Login sekarang menolak akun tidak terdaftar/nonaktif dan memeriksa password/PIN terhadap `password_hash` atau `pin_hash` memakai bcryptjs.
- CSS `.hidden` dan gaya dasar login ditambahkan sebagai safety layer.
- Navigasi diberi delegated click handler dan hanya menampilkan halaman target yang valid.
- Render chart aman saat Chart.js tidak tersedia.
- Root dan `www` HTML disinkronkan.
- GitHub Actions workflow ditambahkan.

## Batas pengujian
- Pemeriksaan sintaks JavaScript dilakukan dengan Node.js.
- Belum ada uji end-to-end pada perangkat Android nyata.
- Keberhasilan login memerlukan kecocokan password/PIN dengan hash akun yang sudah ada dan library bcryptjs termuat.
- Kebenaran konfigurasi Supabase dan kebijakan RLS perlu diverifikasi terpisah.
