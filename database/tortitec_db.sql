-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 23, 2024 at 08:35 AM
-- Server version: 8.0.36
-- PHP Version: 8.2.12

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
USE tortitec_db;

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
(2, '0.5Kg de tortillas', 'Medio kilogramo de tortillas de maíz', 15, '/src/assets/img/tortillas-2.jpg', 0, '2024-05-15 16:31:05', '2024-05-22 02:17:30'),
(3, 'Paquete de frijoles', 'Un paquete de frijoles cocidos', 25, '/src/assets/img/frijoles.jpg', 0, '2024-05-15 16:31:05', '2024-05-22 02:17:30'),
(4, '0.5Kg de Chicharrón', '500gr de chicharrón a granél', 130, '/src/assets/img/chicharron.jpg', 0, '2024-05-15 16:31:05', '2024-05-16 15:30:37'),
(5, '250gr de Chicharrón', '250gr de chicharrón a granél', 80, '/src/assets/img/chicharron-2.jpg', 0, '2024-05-15 16:31:05', '2024-05-22 02:17:30'),
(6, 'Conito de cajeta', 'Cono de galleta relleno de cajeta', 20, '/src/assets/img/cajeta.jpg', 0, '2024-05-15 16:52:38', '2024-05-22 02:17:30'),
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
(37, '2024-05-19 23:21:23', 160, '[{\"id\": 1, \"quantity\": 1}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 1}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 1}, {\"id\": 9, \"quantity\": 1}, {\"id\": 10, \"quantity\": 0}]', '2024-05-19 23:21:23', '2024-05-19 23:21:23'),
(38, '2024-05-19 23:21:31', 363, '[{\"id\": 1, \"quantity\": 0}, {\"id\": 2, \"quantity\": 4}, {\"id\": 3, \"quantity\": 1}, {\"id\": 4, \"quantity\": 1}, {\"id\": 5, \"quantity\": 1}, {\"id\": 6, \"quantity\": 2}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 1}]', '2024-05-19 23:21:31', '2024-05-19 23:21:31'),
(39, '2024-05-22 01:07:19', 270, '[{\"id\": 1, \"quantity\": 0}, {\"id\": 2, \"quantity\": 5}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 3}, {\"id\": 8, \"quantity\": 2}, {\"id\": 9, \"quantity\": 3}, {\"id\": 10, \"quantity\": 0}]', '2024-05-22 01:07:19', '2024-05-22 01:07:19'),
(72, '2024-05-22 03:15:22', 75, '[{\"id\": 1, \"quantity\": 3}, {\"id\": 2, \"quantity\": 0}, {\"id\": 3, \"quantity\": 0}, {\"id\": 4, \"quantity\": 0}, {\"id\": 5, \"quantity\": 0}, {\"id\": 6, \"quantity\": 0}, {\"id\": 8, \"quantity\": 0}, {\"id\": 9, \"quantity\": 0}, {\"id\": 10, \"quantity\": 0}]', '2024-05-22 03:15:22', '2024-05-22 03:15:22');

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
(1, 11, '2024-05-18 21:41:44', '2024-05-22 03:15:22'),
(2, 17, '2024-05-18 21:41:44', '2024-05-22 03:15:02'),
(3, 17, '2024-05-18 21:41:44', '2024-05-22 03:15:03'),
(4, 18, '2024-05-18 21:41:44', '2024-05-22 03:15:04'),
(5, 20, '2024-05-18 21:41:44', '2024-05-22 03:15:05'),
(6, 21, '2024-05-18 21:41:44', '2024-05-22 03:15:06'),
(8, 17, '2024-05-18 21:41:44', '2024-05-22 01:07:19'),
(9, 13, '2024-05-18 21:41:44', '2024-05-22 03:15:07'),
(10, 20, '2024-05-18 21:41:44', '2024-05-22 03:15:08');

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

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_details`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_details`;
CREATE TABLE `vw_details` (
`details` json
,`id` int
,`price` double
,`title` varchar(50)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_main`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_main`;
CREATE TABLE `vw_main` (
`createdAt` timestamp
,`id` int
,`img_source` varchar(100)
,`price` double
,`quantity` int
,`stock` int
,`title` varchar(50)
,`updatedAt` timestamp
);

-- --------------------------------------------------------

--
-- Structure for view `vw_details`
--
DROP TABLE IF EXISTS `vw_details`;

DROP VIEW IF EXISTS `vw_details`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_details`  AS SELECT `products`.`id` AS `id`, `products`.`title` AS `title`, `products`.`price` AS `price`, `sells`.`details` AS `details` FROM (`products` join `sells`) WHERE (json_extract(`sells`.`details`,'$.id') = `products`.`id`) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_main`
--
DROP TABLE IF EXISTS `vw_main`;

DROP VIEW IF EXISTS `vw_main`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_main`  AS SELECT `products`.`id` AS `id`, `products`.`title` AS `title`, `products`.`price` AS `price`, `products`.`quantity` AS `quantity`, `products`.`img_source` AS `img_source`, `stocks`.`quantity` AS `stock`, `products`.`createdAt` AS `createdAt`, `products`.`updatedAt` AS `updatedAt` FROM (`products` join `stocks`) WHERE (`stocks`.`id` = `products`.`id`) ;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
