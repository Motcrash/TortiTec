-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2024 at 06:10 PM
-- Server version: 8.0.36
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tortitec_db`
--
CREATE DATABASE IF NOT EXISTS `tortitec_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `tortitec_db`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `img_source` varchar(100) DEFAULT NULL,
  `quantity` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `img_source`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, '1Kg de tortillas', 'Un kilogramo de tortillas de maíz', 25, '/src/assets/img/tortillas.jpg', 0, '2024-05-15 16:31:05', '2024-05-15 16:58:45'),
(2, '0.5Kg de tortillas', 'Medio kilogramo de tortillas de maíz', 15, '/src/assets/img/tortillas-2.jpg', 0, '2024-05-15 16:31:05', '2024-05-15 16:58:51'),
(3, 'Paquete de frijoles', 'Un paquete de frijoles cocidos', 25, '/src/assets/img/frijoles.jpg', 0, '2024-05-15 16:31:05', '2024-05-15 16:59:14'),
(4, '0.5Kg de Chicharrón', '500gr de chicharrón a granél', 130, '/src/assets/img/chicharron.jpg', 0, '2024-05-15 16:31:05', '2024-05-16 15:30:37'),
(5, '250gr de Chicharrón', '250gr de chicharrón a granél', 80, '/src/assets/img/chicharron-2.jpg', 0, '2024-05-15 16:31:05', '2024-05-16 15:30:27'),
(6, 'Conito de cajeta', 'Cono de galleta relleno de cajeta', 20, '/src/assets/img/cajeta.jpg', 0, '2024-05-15 16:52:38', '2024-05-15 16:59:57'),
(8, 'Chiles rellenos', 'Paquete de dos chiles rellenos', 30, '/src/assets/img/chiles.jpg', 0, '2024-05-16 14:57:07', '2024-05-16 14:57:07'),
(9, 'Requesón', 'Queso tipo requesón de 200gr', 25, '/src/assets/img/requeson.jpg', 0, '2024-05-16 14:57:46', '2024-05-16 14:57:46'),
(10, 'Chile colorado', 'Paquete de 400ml de chile colorado', 28, '/src/assets/img/chileColorado.jpg', 0, '2024-05-16 14:59:01', '2024-05-16 14:59:01');

-- --------------------------------------------------------

--
-- Table structure for table `sells`
--

DROP TABLE IF EXISTS `sells`;
CREATE TABLE `sells` (
  `id` int NOT NULL,
  `sellDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` double NOT NULL,
  `details` json DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sells`
--

INSERT INTO `sells` (`id`, `sellDate`, `total`, `details`, `createdAt`, `updatedAt`) VALUES
(34, '2024-05-19 21:22:38', 340, '[{\"id\": 1, \"quantity\": 3}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 2}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 1}, {\"id\": 6, \"quantity\": 1}, {\"id\": 8, \"quantity\": 3}, {\"id\": 9, \"quantity\": 1}, {\"id\": 10, \"quantity\": 0}]', '2024-05-19 21:22:38', '2024-05-19 21:22:38'),
(35, '2024-05-19 21:23:00', 170, '[{\"id\": 1, \"quantity\": 1}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 1}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 1}, {\"id\": 6, \"quantity\": 2}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-19 21:23:00', '2024-05-19 21:23:00'),
(36, '2024-05-19 21:24:36', 196, '[{\"id\": 1, \"quantity\": 2}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 2}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 2}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 2}]', '2024-05-19 21:24:36', '2024-05-19 21:24:36'),
(38, '2024-05-19 23:21:31', 363, '[{\"id\": 1, \"quantity\": 0}, {\"id\": 2, \"quantity\": 4}, {\"id\": 3, \"quantity\": 1}, {\"id\": 4, \"quantity\": 1}, {\"id\": 5, \"quantity\": 1}, {\"id\": 6, \"quantity\": 2}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 1}]', '2024-05-19 23:21:31', '2024-05-19 23:21:31'),
(39, '2024-05-20 04:53:01', 216, '[{\"id\": 1, \"quantity\": 1}, {\"id\": 2, \"quantity\": 3}, {\"id\": 3, \"quantity\": 2}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 2}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 2}]', '2024-05-20 04:53:01', '2024-05-20 04:53:01'),
(40, '2024-05-20 14:34:02', 570, '[{\"id\": 1, \"quantity\": 5}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 2}, {\"id\": 4, \"quantity\": 2}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 2}, {\"id\": 9, \"quantity\": 3}, {\"id\": 10, \"quantity\": 0}]', '2024-05-20 14:34:02', '2024-05-20 14:34:02'),
(41, '2024-05-20 14:34:24', 25, '[{\"id\": 1, \"quantity\": 1}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-20 14:34:24', '2024-05-20 14:34:24'),
(42, '2024-05-20 14:53:49', 731, '[{\"id\": 1, \"quantity\": 4}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 2}, {\"id\": 5, \"quantity\": 3}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 3}, {\"id\": 10, \"quantity\": 2}]', '2024-05-20 14:53:49', '2024-05-20 14:53:49'),
(43, '2024-05-20 14:54:08', 25, '[{\"id\": 1, \"quantity\": 1}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-20 14:54:08', '2024-05-20 14:54:08'),
(44, '2024-05-20 14:56:57', 75, '[{\"id\": 1, \"quantity\": 2}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 1}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-20 14:56:57', '2024-05-20 14:56:57'),
(45, '2024-05-20 15:01:23', 180, '[{\"id\": 1, \"quantity\": 3}, {\"id\": 2, \"quantity\": 2}, {\"id\": 3, \"quantity\": 3}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-20 15:01:23', '2024-05-20 15:01:23');

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
CREATE TABLE `stocks` (
  `id` int NOT NULL,
  `quantity` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`id`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 6, '2024-05-18 21:41:44', '2024-05-20 15:01:33'),
(2, 0, '2024-05-18 21:41:44', '2024-05-20 15:01:23'),
(3, 3, '2024-05-18 21:41:44', '2024-05-20 14:56:57'),
(4, 7, '2024-05-18 21:41:44', '2024-05-20 14:53:49'),
(5, 6, '2024-05-18 21:41:44', '2024-05-20 14:53:49'),
(6, 14, '2024-05-18 21:41:44', '2024-05-20 04:53:01'),
(8, 13, '2024-05-18 21:41:44', '2024-05-20 14:34:02'),
(9, 6, '2024-05-18 21:41:44', '2024-05-20 14:53:49'),
(10, 7, '2024-05-18 21:41:44', '2024-05-20 14:53:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test', '2024-05-16 14:25:18', '2024-05-16 14:25:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sells`
--
ALTER TABLE `sells`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
