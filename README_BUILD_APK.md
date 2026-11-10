# LS Studio Retail OS — C383 Karang Satria (Hotfix UI V0.2)

## Perbaikan pada paket ini
- Login overlay ditampilkan saat aplikasi dibuka pertama kali.
- CSS inti untuk `.hidden` dan tampilan login tidak lagi bergantung pada Tailwind CDN.
- Navigasi halaman diberi event delegation sebagai lapisan pemulihan.
- Chart.js dibuat opsional agar kegagalan CDN tidak menghentikan render seluruh aplikasi.
- Login memeriksa akun aktif dan hash password/PIN dengan bcrypt; akun tak dikenal dan password kosong ditolak.
- File `index.html` root dan `www/index.html` disamakan.
- Workflow GitHub Actions disertakan.

## Catatan penting
1. Paket ini tetap memuat library eksternal dari CDN; koneksi internet masih diperlukan untuk sebagian fitur dan verifikasi bcrypt.
2. Pastikan password/PIN yang benar diketahui oleh pemilik akun. Tidak ada password default yang dijamin.
3. Kredensial Supabase tidak boleh berupa service-role key di aplikasi klien. Gunakan anon/publishable key dengan RLS yang benar.
4. APK debug cocok untuk uji coba, bukan distribusi produksi. Untuk rilis publik diperlukan signing key dan build release.
5. Workflow menjalankan `npx cap add android` dari proyek bersih pada runner GitHub. Jangan commit folder `android/` hasil build sebelumnya ke repository untuk alur ini.

## Build APK lewat GitHub
1. Upload seluruh isi folder proyek ke repository GitHub (jangan upload ZIP sebagai satu file).
2. Pastikan file `.github/workflows/build-apk.yml` ikut terunggah.
3. Buka tab Actions → Build Android APK (LS Studio C383) → Run workflow.
4. Setelah berhasil, unduh artifact `LS-Studio-C383-APK`.
5. Ekstrak artifact dan instal `app-debug.apk` di Android.

## Struktur utama
- `index.html`: salinan sumber web utama.
- `www/index.html`: web asset yang dipaketkan oleh Capacitor.
- `capacitor.config.json`: konfigurasi Capacitor.
- `.github/workflows/build-apk.yml`: workflow build APK.
