-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2023 a las 18:40:05
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
-- Estructura de tabla para la tabla `basescama`
--

CREATE TABLE `basescama` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `basescama`
--

INSERT INTO `basescama` (`id`, `image`, `precio`, `titulo`) VALUES
(1, 'public/img/IMG-20230907-WA0006.jpg', '1500', 'Base Matrimonial ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bocinas`
--

CREATE TABLE `bocinas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buros`
--

CREATE TABLE `buros` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabeceras`
--

CREATE TABLE `cabeceras` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `celulares`
--

CREATE TABLE `celulares` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colchones`
--

CREATE TABLE `colchones` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comedores`
--

CREATE TABLE `comedores` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estufas`
--

CREATE TABLE `estufas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laptops`
--

CREATE TABLE `laptops` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lavadoras`
--

CREATE TABLE `lavadoras` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `licuadoras`
--

CREATE TABLE `licuadoras` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `microondas`
--

CREATE TABLE `microondas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parrillas`
--

CREATE TABLE `parrillas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recamarass`
--

CREATE TABLE `recamarass` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roperos`
--

CREATE TABLE `roperos` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salamodular`
--

CREATE TABLE `salamodular` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secadoras`
--

CREATE TABLE `secadoras` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sillas`
--

CREATE TABLE `sillas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sofacama`
--

CREATE TABLE `sofacama` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sofas`
--

CREATE TABLE `sofas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablets`
--

CREATE TABLE `tablets` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `televisiones`
--

CREATE TABLE `televisiones` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'admin', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vitrinas`
--

CREATE TABLE `vitrinas` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `precio` varchar(9) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `basescama`
--
ALTER TABLE `basescama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bocinas`
--
ALTER TABLE `bocinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `buros`
--
ALTER TABLE `buros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cabeceras`
--
ALTER TABLE `cabeceras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `celulares`
--
ALTER TABLE `celulares`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colchones`
--
ALTER TABLE `colchones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comedores`
--
ALTER TABLE `comedores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estufas`
--
ALTER TABLE `estufas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `laptops`
--
ALTER TABLE `laptops`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lavadoras`
--
ALTER TABLE `lavadoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `licuadoras`
--
ALTER TABLE `licuadoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `microondas`
--
ALTER TABLE `microondas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `parrillas`
--
ALTER TABLE `parrillas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recamarass`
--
ALTER TABLE `recamarass`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roperos`
--
ALTER TABLE `roperos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salamodular`
--
ALTER TABLE `salamodular`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `secadoras`
--
ALTER TABLE `secadoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sillas`
--
ALTER TABLE `sillas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sofacama`
--
ALTER TABLE `sofacama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sofas`
--
ALTER TABLE `sofas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tablets`
--
ALTER TABLE `tablets`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `televisiones`
--
ALTER TABLE `televisiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vitrinas`
--
ALTER TABLE `vitrinas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `basescama`
--
ALTER TABLE `basescama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `bocinas`
--
ALTER TABLE `bocinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `buros`
--
ALTER TABLE `buros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cabeceras`
--
ALTER TABLE `cabeceras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `celulares`
--
ALTER TABLE `celulares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colchones`
--
ALTER TABLE `colchones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comedores`
--
ALTER TABLE `comedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estufas`
--
ALTER TABLE `estufas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `laptops`
--
ALTER TABLE `laptops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lavadoras`
--
ALTER TABLE `lavadoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `licuadoras`
--
ALTER TABLE `licuadoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `microondas`
--
ALTER TABLE `microondas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parrillas`
--
ALTER TABLE `parrillas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recamarass`
--
ALTER TABLE `recamarass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roperos`
--
ALTER TABLE `roperos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salamodular`
--
ALTER TABLE `salamodular`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `secadoras`
--
ALTER TABLE `secadoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sillas`
--
ALTER TABLE `sillas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sofacama`
--
ALTER TABLE `sofacama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sofas`
--
ALTER TABLE `sofas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tablets`
--
ALTER TABLE `tablets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `televisiones`
--
ALTER TABLE `televisiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vitrinas`
--
ALTER TABLE `vitrinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
