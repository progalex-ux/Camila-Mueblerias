-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2023 a las 18:14:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `muebleria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `identificador` varchar(4) NOT NULL,
  `especificaciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `image`, `precio`, `titulo`, `identificador`, `especificaciones`) VALUES
(10, 'public/img/productos/sello-phone.webp', '13899', 'Iphone 13 128gb Color Lila', 'CE', ''),
(11, 'public/img/productos/portada.webp', '8499', ' Laptop Gamer Hp Victus Ryzen 5 7535hs 8 Ram 512 Ssd Rtx 2050 Color Mica Silver', 'LA', ''),
(12, 'public/img/productos/portada.webp', '6999', 'Laptop Lenovo Ideapad 3 15.6\'\' Ryzen 7 16gb Ram 512gb Ssd Color Sand', 'LA', ''),
(13, 'public/img/productos/portada.webp', '6999', 'Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Plata', 'LA', ''),
(14, 'public/img/productos/portada.webp', '6499', 'Laptop HP 14-FQ1025cl azul táctil AMD Ryzen 7 16GB de RAM 512GB SSD, AMD Radeon Graphics Windows 11 ', 'LA', ''),
(15, 'public/img/productos/portada.webp', '4555', ' Laptop Hp 14-dq0518la Celeron N4120 Ram 4gb Ssd 128gb W11h Color Plateado', 'LA', ''),
(16, 'public/img/productos/sofa.webp', '5999', 'Sofa', 'SO', ''),
(17, 'public/img/productos/salamodu.webp', '12999', 'Sala Modular Cafe', 'SA', ''),
(18, 'public/img/productos/sofacama1.png', '5699', 'Sofa Cama', 'SCA', ''),
(19, 'public/img/productos/micro1.jpg', '2499', 'Microondas Winia', 'MI', ''),
(20, 'public/img/productos/Captura de pantalla 2023-11-01 111508.png', '8990', 'Lavadora WINIA 21kg', 'LAV', ''),
(21, 'public/img/productos/Captura de pantalla 2023-11-08 122053.png', '7990', 'Lavadora Winia Automatica 19kg', 'LAV', ''),
(22, 'public/img/productos/Captura de pantalla 2023-11-03 144543.png', '2490', 'Microondas Winia', 'MI', ''),
(23, 'public/img/productos/cine5.jpg', '3499', 'Teatro en casa DVD', 'BO', ''),
(24, 'public/img/productos/mabe1.jpg', '9999', 'Refrigerador Acero Inoxidable 19\'ft', 'REF', ''),
(25, 'public/img/productos/recamara paris.png', '59999', 'Recamara Paris Premier', 'RE', ''),
(27, 'public/img/productos/colchon.jpg', '3499', 'Colchon Matrinonial Restonic', 'CO', ''),
(28, 'public/img/productos/sello-basematri.png', '1500', 'Base Matrimonial', 'BA', ''),
(29, 'public/img/productos/motoe13.webp', '2999', 'Celular Moto E13 64 GB 2GB Blanco Desbloqueado', 'CE', ''),
(30, 'public/img/productos/pococ40.jpg', '2990', 'Xiaomi poco c40 3gb ram', 'CE', ''),
(31, 'public/img/productos/redmi10c.png', '2990', 'Xiaomi Redmi 10C Dual SIM 128 GB gris grafito 4 GB RAM', 'CE', ''),
(32, 'public/img/productos/hisensev40s.webp', '2990', 'Celular Hisense V40s 64 Gb 4 Ram Negro', 'CE', ''),
(33, 'public/img/productos/hisensev40i.webp', '2990', 'Hisense V40i 64 GB dorado 3 GB RAM', 'CE', ''),
(34, 'public/img/productos/samusng01core.jpg', '1499', 'Samsung Galaxy A01 Core (16 GB, 1 GB RAM) 5.3 pulgadas, batería de 3000 mAh', 'CE', ''),
(35, 'public/img/productos/pocom5s.webp', '2899', 'Xiaomi Pocophone Poco M5s Dual Sim 256 Gb Azul 8 Gb Ram', 'CE', ''),
(36, 'public/img/productos/iphone 11.webp', '6999', 'Apple iPhone 11 (64 GB) - Blanco 4.3 Calificación 4.5 de 5 (342)', 'CE', ''),
(37, 'public/img/productos/iphonexr.webp', '5499', 'Apple iPhone XR 64 GB - Negro', 'CE', ''),
(38, 'public/img/productos/iphonexr128.webp', '9199', 'Apple iPhone XR 128 GB - Azul', 'CE', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contrasena`) VALUES
(1, 'Admin', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
