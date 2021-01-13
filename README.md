# express-simple-restapi
Membuat REST API sederhana menggunakan Express JS

## API Endoint 
+-----------------------------------+------------+--------+
| Operasi                           | API Route  | Method |
+-----------------------------------+------------+--------+
| Membuat artikel baru              | /posts     | POST   |
+-----------------------------------+------------+--------+
| Mengambil semua artikel           | /posts     | GET    |
+-----------------------------------+------------+--------+
| Mengambil artikel berdasarkan ID  | /posts/{id}| GET    |
+-----------------------------------+------------+--------+
| Mengupdate artikel berdasarkan ID | /posts/{id}| PUT    |
+-----------------------------------+------------+--------+
| Menghapus artikel berdasarkan ID  | /posts/{id}| DELETE |
+-----------------------------------+------------+--------+

## Yang dibutuhkan:

 - Node.js 8.2.0 atau diatasnya
 - Mysql 5.7 atau diatasnya
 

## Cara Instalasi

```bash
npm install
```
 

## Cara Menjalankan Aplikasi

```bash
npm run server
```

Buka alamat [localhost:3000](http://localhost:3000)  pada browser untuk melihat hasilnya.