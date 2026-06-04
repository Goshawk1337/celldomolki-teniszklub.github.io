-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Máj 28. 10:28
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `tenisz klub`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyek`
--

CREATE TABLE `versenyek` (
  `Versenyek` varchar(100) NOT NULL,
  `Versenyzők` varchar(100) NOT NULL,
  `Meccsek` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyzők`
--

CREATE TABLE `versenyzők` (
  `Helyezes` int(100) NOT NULL,
  `Nev` varchar(100) NOT NULL,
  `Versenyszam` varchar(100) NOT NULL,
  `Pontszam` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `versenyzők`
--

INSERT INTO `versenyzők` (`Helyezes`, `Nev`, `Versenyszam`, `Pontszam`) VALUES
(2, 'Kiss Béla', 'Férfi egyes', '87'),
(4, 'Nagy Zoltán', 'Férfi egyes', '76'),
(1, 'Kempf Dominik', 'Férfi egyes', '95'),
(3, 'Horváth Lilla', 'női egyes', '80'),
(5, 'Kis Rozália', 'női egyes', '74'),
(6, 'Tamás Márk', 'Férfi egyes', '70');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
