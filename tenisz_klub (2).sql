-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Jún 01. 12:47
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
-- Adatbázis: `tenisz_klub`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekos`
--

CREATE TABLE `jatekos` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jatekos`
--

INSERT INTO `jatekos` (`id`, `nev`) VALUES
(1, 'Felgi Glubglab'),
(2, 'Taravis Amg'),
(3, 'Szádeczky-Kardoss Iván'),
(4, 'Sarajev Emdev'),
(5, 'Ace Visconti'),
(6, 'Michael János Miklós');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `meccs`
--

CREATE TABLE `meccs` (
  `id` int(11) NOT NULL,
  `versenyid` int(11) NOT NULL,
  `jatekos1id` int(11) NOT NULL,
  `jatekos2id` int(11) NOT NULL,
  `gyoztesid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `meccs`
--

INSERT INTO `meccs` (`id`, `versenyid`, `jatekos1id`, `jatekos2id`, `gyoztesid`) VALUES
(1, 1, 1, 2, 2),
(2, 1, 3, 4, 4),
(3, 2, 5, 6, 5),
(4, 3, 1, 3, 1),
(5, 4, 2, 5, 5),
(6, 5, 4, 6, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `verseny`
--

CREATE TABLE `verseny` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `verseny`
--

INSERT INTO `verseny` (`id`, `nev`) VALUES
(1, 'Galisz Galván-Pizza Hut kupa'),
(2, 'Seton kupa'),
(3, 'Wewalka hot prizes'),
(4, 'Cellcomp open'),
(5, 'Kentucky trophy');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `jatekos`
--
ALTER TABLE `jatekos`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `meccs`
--
ALTER TABLE `meccs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `versenyid` (`versenyid`),
  ADD KEY `jatekos1id` (`jatekos1id`),
  ADD KEY `jatekos2id` (`jatekos2id`),
  ADD KEY `gyoztesid` (`gyoztesid`);

--
-- A tábla indexei `verseny`
--
ALTER TABLE `verseny`
  ADD PRIMARY KEY (`id`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `meccs`
--
ALTER TABLE `meccs`
  ADD CONSTRAINT `meccs_ibfk_1` FOREIGN KEY (`versenyid`) REFERENCES `verseny` (`id`),
  ADD CONSTRAINT `meccs_ibfk_2` FOREIGN KEY (`jatekos1id`) REFERENCES `jatekos` (`id`),
  ADD CONSTRAINT `meccs_ibfk_3` FOREIGN KEY (`jatekos2id`) REFERENCES `jatekos` (`id`),
  ADD CONSTRAINT `meccs_ibfk_4` FOREIGN KEY (`gyoztesid`) REFERENCES `jatekos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
