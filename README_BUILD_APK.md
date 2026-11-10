# Panduan Build APK Resmi: LS Studio Monitoring C383 (v0.1.2026)

Paket ini sudah dilengkapi dengan konfigurasi **CapacitorJS v6** dan **GitHub Actions Otomatis**.
Anda bisa memilih **Jalur 1 (Otomatis via Cloud GitHub tanpa install Android Studio)** atau **Jalur 2 (Lokal di PC/Laptop)**.

---

## 🚀 JALUR 1: Build Otomatis di Cloud via GitHub Actions (Paling Praktis & Tanpa Install Software Berat)
Anda tidak perlu menginstal Android Studio atau SDK puluhan GB. Server GitHub yang akan merakit file `.apk` untuk Anda secara gratis:

1. Buat repositori baru di akun GitHub Anda (misal: `ls-studio-c383`).
2. Ekstrak seluruh isi file ZIP ini, lalu *upload / push* semua file dan foldernya (termasuk folder `.github/workflows/build-apk.yml`, `www/`, `package.json`, dan `capacitor.config.json`) ke repositori GitHub tersebut.
3. Buka tab **Actions** di repositori GitHub Anda.
4. Workflow **"Build Android APK (LS Studio C383)"** akan otomatis berjalan selama ~2–3 menit.
5. Setelah centang hijau ✅, scroll ke bagian **Artifacts** di bawah halaman Actions, lalu klik **`LS-Studio-C383-v0.1.2026-APK`** untuk mengunduh file `app-debug.apk` yang siap diinstal di HP Android!

---

## 💻 JALUR 2: Build Lokal via Terminal (VS Code + Node.js)
Jika Anda ingin mem-build di laptop sendiri:

1. Ekstrak file ZIP ini dan buka foldernya di terminal / VS Code.
2. Jalankan perintah berikut secara berurutan:
   ```bash
   npm install
   npx cap add android
   npx cap sync android
   ```
3. Untuk langsung mem-build file APK lewat baris perintah:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```
4. File APK siap pakai akan berada di:
   `android/app/build/outputs/apk/debug/app-debug.apk`
