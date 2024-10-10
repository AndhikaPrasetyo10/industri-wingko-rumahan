-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Okt 2024 pada 20.11
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbfresh.co`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_user` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_user`, `username`, `password`) VALUES
(1, '123', '123'),
(3, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_income`
--

CREATE TABLE `data_income` (
  `id_keuntungan` int(50) NOT NULL,
  `tanggal` date NOT NULL,
  `laba_wingko_keju` int(50) NOT NULL,
  `laba_wingko_wijen` int(50) NOT NULL,
  `Total_keuntungan` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_income`
--

INSERT INTO `data_income` (`id_keuntungan`, `tanggal`, `laba_wingko_keju`, `laba_wingko_wijen`, `Total_keuntungan`) VALUES
(1, '2023-09-03', 40000, 40000, 80000),
(2, '2023-09-03', 80000, 40000, 120000),
(3, '2023-09-03', 40000, 0, 40000),
(4, '2023-09-04', 40000, 0, 40000),
(5, '2023-09-05', 120000, 0, 120000),
(6, '2023-09-05', 40000, 40000, 80000),
(7, '2024-06-01', 80000, 40000, 120000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_modal`
--

CREATE TABLE `data_modal` (
  `id_modal` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `modal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_modal`
--

INSERT INTO `data_modal` (`id_modal`, `tanggal`, `modal`) VALUES
(6, '2023-09-01', 1000),
(7, '2023-09-03', 150000),
(8, '2023-09-04', 0),
(9, '2023-09-05', 0),
(10, '2023-09-05', 0),
(11, '2023-09-05', 0),
(12, '2023-09-05', 0),
(13, '2023-09-05', 20000),
(14, '2023-09-05', 50000),
(15, '2023-11-06', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemesanan`
--

CREATE TABLE `pemesanan` (
  `id_pemesanan` int(255) NOT NULL,
  `tanggal_pesanan` date NOT NULL,
  `pemilik` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `kontak` text NOT NULL,
  `catatan` text NOT NULL,
  `Jumlah_harga` int(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pemesanan`
--

INSERT INTO `pemesanan` (`id_pemesanan`, `tanggal_pesanan`, `pemilik`, `alamat`, `kontak`, `catatan`, `Jumlah_harga`, `status`) VALUES
(28, '2023-09-05', 'Raihan Pangestu', 'Dusun ngawen,Trinhanggo kec.gamping,Kab.Sleman Yogyakarta', '08823417699', 'untuk besok', 40000, 'Sedang Dibuat'),
(29, '2023-09-05', 'Andhika Prasetyo ', 'Kuningan,kadugede,jawa barat', '08818232199', 'tidak usah terlalu kering', 40000, 'Sedang Dibuat'),
(31, '2023-09-05', 'Atin mubaroh', 'SMAN 1 Kuningan', '08333452871', 'Antarkan ke kantor jam 10 pagi saat jam istirahat sekolah', 120000, 'Dalam Antrian'),
(32, '2023-09-05', 'Zaidan Al ghofari', 'Jl.desa kadugede rt.3 rw 5 block pahing', '08888123321', 'Buat Oleh Oleh tanggal 17 september antarkan dengan box kardus', 400000, 'Dalam Antrian'),
(33, '2023-09-05', 'Bapak dadi luragung', 'Desa luragung rt 05 rw 01 nomor rumah 64,Kuningan,jawa barat', '08333452871', 'minta jangan pakai gula pasir dan pakai gula dari tropicana diabetes', 40000, 'Dalam Antrian'),
(34, '2023-09-05', 'Andhika Prasetyo ', 'Kuningan,kadugede,jawa barat', '08818232199', 'untuk tanggal 10 agustus', 120000, 'Dalam Antrian'),
(35, '2023-09-05', 'Andhika Prasetyo ', 'Kuningan,kadugede,jawa barat', '08818232199', 'jangan di antarkan saat hari kerja', 40000, 'Menunggu Konfirmasi'),
(36, '2023-09-05', 'yulia tyas', 'Bandung,Dago,Kost Ibu Surtini kamar 12', '0859487622', 'hubungi saya bila pesanan sedang di antar', 40000, 'Menunggu Konfirmasi'),
(37, '2023-10-05', 'asnakcnc', '', '', '', 120000, 'Menunggu Konfirmasi'),
(38, '2023-11-06', 'Andhika Prasetyo ', '', '', '', 120000, 'Menunggu Konfirmasi'),
(39, '2024-06-01', 'Andhika Prasetyo', 'Nusaherang, Desa Bakom rt1 rw 1', '1231231', 'keju nya yang kering', 200000, 'Menunggu Konfirmasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemesanan_produk`
--

CREATE TABLE `pemesanan_produk` (
  `id_pemesanan_produk` int(255) NOT NULL,
  `id_pemesanan` int(255) NOT NULL,
  `id_menu` int(50) NOT NULL,
  `nama_menu` varchar(50) NOT NULL,
  `jumlah` int(255) NOT NULL,
  `harga` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pemesanan_produk`
--

INSERT INTO `pemesanan_produk` (`id_pemesanan_produk`, `id_pemesanan`, `id_menu`, `nama_menu`, `jumlah`, `harga`) VALUES
(34, 28, 1, 'Wingko Keju', 1, 40000),
(35, 29, 2, 'Wingko Wijen', 1, 40000),
(37, 31, 1, 'Wingko Keju', 1, 40000),
(38, 31, 2, 'Wingko Wijen', 2, 80000),
(39, 32, 1, 'Wingko Keju', 9, 360000),
(40, 32, 2, 'Wingko Wijen', 1, 40000),
(41, 33, 1, 'Wingko Keju', 1, 40000),
(42, 34, 1, 'Wingko Keju', 2, 80000),
(43, 34, 2, 'Wingko Wijen', 1, 40000),
(44, 35, 2, 'Wingko Wijen', 1, 40000),
(45, 36, 2, 'Wingko Wijen', 1, 40000),
(46, 37, 1, 'Wingko Keju', 2, 80000),
(47, 37, 2, 'Wingko Wijen', 1, 40000),
(48, 38, 1, 'Wingko Keju', 2, 80000),
(49, 38, 2, 'Wingko Wijen', 1, 40000),
(50, 39, 1, 'Wingko Keju', 2, 80000),
(51, 39, 2, 'Wingko Wijen', 3, 120000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id_menu` int(50) NOT NULL,
  `nama_menu` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id_menu`, `nama_menu`, `image`, `price`) VALUES
(1, 'Wingko Keju', '', 40000),
(2, 'Wingko Wijen', '', 40000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `nama_bahan` varchar(50) NOT NULL,
  `komposisi_wingko_keju` int(50) NOT NULL,
  `komposisi_wingko_wijen` int(50) NOT NULL,
  `stock` int(50) NOT NULL,
  `harga` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stock`
--

INSERT INTO `stock` (`id_stock`, `nama_bahan`, `komposisi_wingko_keju`, `komposisi_wingko_wijen`, `stock`, `harga`) VALUES
(1, 'kelapa', 1, 1, 15, 8000),
(2, 'telor', 1, 1, 647, 2000),
(3, 'tepung ketan', 165, 165, 2555, 3600),
(4, 'margarin', 70, 70, 1090, 2300),
(5, 'gula pasir', 165, 165, -655, 2500),
(6, 'susu kental', 1, 1, 17, 2500),
(7, 'keju', 50, 0, 0, 5000),
(8, 'wijen', 0, 50, -100, 5000),
(9, 'kemasan', 1, 1, 17, 2000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_user`);

--
-- Indeks untuk tabel `data_income`
--
ALTER TABLE `data_income`
  ADD PRIMARY KEY (`id_keuntungan`);

--
-- Indeks untuk tabel `data_modal`
--
ALTER TABLE `data_modal`
  ADD PRIMARY KEY (`id_modal`);

--
-- Indeks untuk tabel `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`id_pemesanan`);

--
-- Indeks untuk tabel `pemesanan_produk`
--
ALTER TABLE `pemesanan_produk`
  ADD PRIMARY KEY (`id_pemesanan_produk`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_user` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `data_income`
--
ALTER TABLE `data_income`
  MODIFY `id_keuntungan` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `data_modal`
--
ALTER TABLE `data_modal`
  MODIFY `id_modal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `id_pemesanan` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT untuk tabel `pemesanan_produk`
--
ALTER TABLE `pemesanan_produk`
  MODIFY `id_pemesanan_produk` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id_menu` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
