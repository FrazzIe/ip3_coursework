-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for quiz_manager
CREATE DATABASE IF NOT EXISTS `quiz_manager` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quiz_manager`;

-- Dumping structure for table quiz_manager.answers
CREATE TABLE IF NOT EXISTS `answers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) NOT NULL,
  `label` varchar(100) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `answers_fk0` (`question_id`),
  CONSTRAINT `answers_fk0` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=latin1;

-- Dumping data for table quiz_manager.answers: ~0 rows (approximately)
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` (`id`, `question_id`, `label`, `is_correct`) VALUES
	(1, 1, 'Africa', 0),
	(2, 1, 'Asia', 1),
	(3, 1, 'Antarctica', 0),
	(4, 1, 'Africa', 0),
	(5, 2, '1', 0),
	(6, 2, '0', 0),
	(7, 2, '2', 1),
	(8, 2, '-1', 0),
	(9, 3, '4', 1),
	(10, 3, '8', 0),
	(11, 3, '0', 0),
	(12, 3, '5', 0),
	(13, 4, 'Europe', 0),
	(14, 4, 'South America', 0),
	(15, 4, 'Australia', 1),
	(16, 4, 'North America', 0),
	(17, 5, '156', 0),
	(18, 5, '144', 1),
	(19, 5, '24', 0),
	(20, 5, '256', 0),
	(21, 6, '11', 0),
	(22, 6, '9', 0),
	(23, 6, '5', 0),
	(24, 6, '10', 1),
	(25, 7, 'Asia', 1),
	(26, 7, 'Europe', 0),
	(27, 7, 'Africa', 0),
	(28, 7, 'Australia', 0),
	(29, 8, '0', 0),
	(30, 8, '1', 1),
	(31, 8, '2', 0),
	(32, 8, '199', 0),
	(33, 9, 'North America', 1),
	(34, 9, 'South America', 0),
	(35, 9, 'Europe', 0),
	(36, 9, 'Russia', 0),
	(37, 10, 'Ayrton Senna', 0),
	(38, 10, 'Fernando Alonso ', 0),
	(39, 10, 'Lewis Hamiliton', 0),
	(40, 10, 'Michael Schumacher', 1),
	(41, 11, 'Gheazoden', 0),
	(42, 11, 'Mharken', 0),
	(43, 11, 'Pangaea', 1),
	(44, 11, 'Bhardizben', 0),
	(45, 12, '0', 0),
	(46, 12, '2', 0),
	(47, 12, '1', 1),
	(48, 12, '5', 0),
	(49, 13, '2', 0),
	(50, 13, '8', 0),
	(51, 13, '4', 1),
	(52, 13, '0', 0),
	(53, 14, '9', 1),
	(54, 14, '6', 0),
	(55, 14, '3', 0),
	(56, 14, '0', 0),
	(57, 15, 'Eminem', 0),
	(58, 15, 'Jay-Z', 0),
	(59, 15, 'Nas', 0),
	(60, 15, 'Soulja Boy', 1),
	(61, 16, 'Michael Schumacher', 0),
	(62, 16, 'Lewis Hamilton ', 0),
	(63, 16, 'Jenson Button', 0),
	(64, 16, 'Sebastian Vettel', 1),
	(65, 17, '8', 0),
	(66, 17, '16', 1),
	(67, 17, '32', 0),
	(68, 17, '4', 0),
	(69, 18, 'Herbert Randall Wright III', 1),
	(70, 18, 'Gregory Marthal Burnthal II', 0),
	(71, 18, 'Joseph William Bailey Jr.', 0),
	(72, 18, 'Ernest Edwin Fitzgerald', 0),
	(73, 19, '25', 1),
	(74, 19, '15', 0),
	(75, 19, '5', 0),
	(76, 19, '0', 0),
	(77, 20, 'Max Verstappen', 1),
	(78, 20, 'Lance Stroll', 0),
	(79, 20, 'Lando Norris', 0),
	(80, 20, 'Daniil Kvyat', 0),
	(81, 21, 'Lil Wayne', 0),
	(82, 21, 'Dr. Dre', 1),
	(83, 21, 'Diddy', 0),
	(84, 21, 'Eminem', 0),
	(85, 22, 'Eminem', 1),
	(86, 22, 'Jay-Z', 0),
	(87, 22, 'Notorious B.I.G', 0),
	(88, 22, 'Tupac Shakur', 0),
	(89, 23, '2', 1),
	(90, 23, '1', 0),
	(91, 23, '4', 0),
	(92, 23, '0', 0),
	(93, 24, 'Nico Rosberg', 0),
	(94, 24, 'Ayrton Senna', 0),
	(95, 24, 'Lewis Hamilton', 1),
	(96, 24, 'Michael Schumacher', 0),
	(97, 25, 'Chief Keef', 0),
	(98, 25, 'Kanye West', 0),
	(99, 25, 'Kendrick Lamar', 1),
	(100, 25, 'Drake', 0),
	(101, 26, '3', 0),
	(102, 26, '5', 1),
	(103, 26, '8 remainder 2', 0),
	(104, 26, '1', 0),
	(105, 27, '8', 0),
	(106, 27, '4', 0),
	(107, 27, '3', 1),
	(108, 27, '6', 0),
	(109, 28, 'Ferrari', 1),
	(110, 28, 'Williams', 0),
	(111, 28, 'McLaren', 0),
	(112, 28, 'Mercedes', 0),
	(113, 29, '50', 0),
	(114, 29, '10', 1),
	(115, 29, '20', 0),
	(116, 29, '33', 0),
	(117, 30, '8', 1),
	(118, 30, '16', 0),
	(119, 30, '34', 0),
	(120, 30, '125', 0),
	(121, 31, '110', 0),
	(122, 31, '10', 0),
	(123, 31, '-90', 1),
	(124, 31, '-10', 0),
	(125, 32, '30', 0),
	(126, 32, '25', 1),
	(127, 32, '40', 0),
	(128, 32, '5', 0),
	(129, 33, '7', 0),
	(130, 33, '5', 1),
	(131, 33, '10', 0),
	(132, 33, '35', 0),
	(133, 34, '1', 1),
	(134, 34, '4', 0),
	(135, 34, '5', 0),
	(136, 34, '0', 0),
	(137, 35, '97', 0),
	(138, 35, '99', 0),
	(139, 35, '98', 1),
	(140, 35, '100', 0),
	(141, 36, 'Blue', 1),
	(142, 36, 'Orange', 0),
	(143, 36, 'Pink', 0),
	(144, 36, 'Grey', 0),
	(145, 37, 'Red', 0),
	(146, 37, 'Green', 1),
	(147, 37, 'Blue', 0),
	(148, 37, 'Purple', 0),
	(149, 38, 'Blue', 1),
	(150, 38, 'Red', 0),
	(151, 38, 'Pink', 0),
	(152, 38, 'Violet', 0),
	(153, 39, 'Black', 0),
	(154, 39, 'Magenta', 0),
	(155, 39, 'Brown', 1),
	(156, 39, 'Yellow', 0),
	(157, 40, 'White', 1),
	(158, 40, 'Fuschia', 0),
	(159, 40, 'Dark Blue', 0),
	(160, 40, 'Blood Red', 0),
	(161, 41, '40', 1),
	(162, 41, '20', 0),
	(163, 41, '30', 0),
	(164, 41, '45', 0),
	(165, 42, '400', 0),
	(166, 42, '20', 0),
	(167, 42, '200', 1),
	(168, 42, '250', 0),
	(169, 43, 'Chelsea', 0),
	(170, 43, 'Manchester United', 0),
	(171, 43, 'Manchester City', 0),
	(172, 43, 'Liverpool', 1),
	(173, 44, '6000', 0),
	(174, 44, '6750', 1),
	(175, 44, '7000', 0),
	(176, 44, '7200', 0),
	(177, 45, '2', 1),
	(178, 45, '4', 0),
	(179, 45, '5', 0),
	(180, 45, '7', 0),
	(181, 46, 'Alex Ferguson', 1),
	(182, 46, 'Pep Guardiola ', 0),
	(183, 46, 'Arsène Wenger', 0),
	(184, 46, 'José Mourinho', 0),
	(185, 47, '25', 0),
	(186, 47, '50', 1),
	(187, 47, '33', 0),
	(188, 47, '1', 0),
	(189, 48, 'Wayne Rooney', 0),
	(190, 48, 'Alan Shearer', 1),
	(191, 48, 'Sergio Agüero', 0),
	(192, 48, ' Thierry Henry', 0),
	(193, 49, 'Harry Maguire', 0),
	(194, 49, 'Virgil van Dijk', 0),
	(195, 49, ' Ángel Di María', 0),
	(196, 49, 'Paul Pogba', 1),
	(197, 50, 'Frank Lampard', 0),
	(198, 50, 'Emile Heskey', 0),
	(199, 50, 'Ryan Giggs', 0),
	(200, 50, 'Gareth Barry', 1);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;

-- Dumping structure for table quiz_manager.questions
CREATE TABLE IF NOT EXISTS `questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quiz_id` bigint(20) NOT NULL,
  `label` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_fk0` (`quiz_id`),
  CONSTRAINT `questions_fk0` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- Dumping data for table quiz_manager.questions: ~0 rows (approximately)
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`id`, `quiz_id`, `label`) VALUES
	(1, 1, 'Which continent is the largest, in terms of area?'),
	(2, 2, '1+1'),
	(3, 2, '2+2'),
	(4, 1, 'Which continent is the smallest, in terms of area?'),
	(5, 2, '12 x 12'),
	(6, 2, '5+5'),
	(7, 1, 'In which continent does the country Russia reside in?'),
	(8, 2, '100 - 99'),
	(9, 1, 'In which continent does the Central America region reside in?'),
	(10, 3, 'Who has the most wins in formula one '),
	(11, 1, 'During the late Paleozoic and early Mesozioc era, the super continent was called'),
	(12, 4, '1 x 1'),
	(13, 4, '2 x 2'),
	(14, 4, '3 x 3'),
	(15, 5, 'Who rapped the song \'Crank Dat\'?'),
	(16, 3, 'Which Formula 1 driver won the championship between 2010-2013'),
	(17, 4, '4 x 4'),
	(18, 5, 'What is the real name of Chicago rapper \'G-Herbo?\''),
	(19, 4, '5 x 5'),
	(20, 3, 'Who was the youngest Formula 1 driver '),
	(21, 5, 'Who is considered the richest rapper?'),
	(22, 5, 'Who created the song \'Stan\'?'),
	(23, 6, '4 ÷ 2'),
	(24, 3, 'Who has the most pole positions in Formula 1'),
	(25, 5, 'To whom does the album "To Pimp A Butterfly" belong to?'),
	(26, 6, '15 ÷ 3'),
	(27, 6, '24 ÷ 8'),
	(28, 3, 'Which Formula 1 team has the most titles'),
	(29, 6, '100 ÷ 10'),
	(30, 6, '64 ÷ 8'),
	(31, 7, '10 - 100'),
	(32, 7, '50 - 25'),
	(33, 7, '75 - 70'),
	(34, 7, '2 - 1'),
	(35, 7, '99 - 1'),
	(36, 8, 'What color is the sky?'),
	(37, 8, 'What color is grass?'),
	(38, 8, 'What color is the water?'),
	(39, 8, 'What color is wood?'),
	(40, 8, 'What is the color of a cloud?'),
	(41, 9, 'What is 80% of 50'),
	(42, 9, 'What is 20% of 1000'),
	(43, 10, 'Who won the 2019-20 Championship'),
	(44, 9, 'What is 75% of 9000'),
	(45, 9, 'What is 20% of 10'),
	(46, 10, 'Which manager has the most wins'),
	(47, 9, 'What is 50% of 100'),
	(48, 10, 'Which EPL player has the most goals '),
	(49, 10, 'Which player was the highest transfer fee at £89m'),
	(50, 10, 'Which player has the most appearances ');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;

-- Dumping structure for table quiz_manager.quiz
CREATE TABLE IF NOT EXISTS `quiz` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `label` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quiz_fk0` (`user_id`),
  CONSTRAINT `quiz_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table quiz_manager.quiz: ~0 rows (approximately)
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` (`id`, `user_id`, `label`) VALUES
	(1, 1, 'Continents'),
	(2, 1, 'Basic Mathematics'),
	(3, 1, 'Formula 1'),
	(4, 1, 'Timetables '),
	(5, 1, 'Rappers'),
	(6, 1, 'Division'),
	(7, 1, 'Subtraction'),
	(8, 1, 'Color of the World'),
	(9, 1, 'Percentages'),
	(10, 1, 'English Premier League');
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;

-- Dumping structure for table quiz_manager.quiz_answers
CREATE TABLE IF NOT EXISTS `quiz_answers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answer_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quiz_answers_fk0` (`answer_id`),
  KEY `quiz_answers_fk1` (`user_id`),
  CONSTRAINT `quiz_answers_fk0` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `quiz_answers_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table quiz_manager.quiz_answers: ~0 rows (approximately)
/*!40000 ALTER TABLE `quiz_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz_answers` ENABLE KEYS */;

-- Dumping structure for table quiz_manager.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` char(95) NOT NULL,
  `admin` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table quiz_manager.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `admin`, `created_at`) VALUES
	(1, 'aa', '$argon2i$v=19$m=4096,t=3,p=1$tl0jVLK562kG08YwAPPeSg$E1lrO/PJ7nRHXo0xqCWuJoTaHKQvCCjsJqHSdKo1Hy8', 1, '2020-08-23 09:56:15'),
	(2, 'bb', '$argon2i$v=19$m=4096,t=3,p=1$yULCMQjGkePQ36TV4o6bPQ$D+ftiQ8g8+jTxhpvtRzYTlagCHj9vhhUUx/lfZCprlc', 0, '2020-08-23 09:56:20'),
	(3, 'cc', '$argon2i$v=19$m=4096,t=3,p=1$Myhcptja4pGxx5/WdbS8Ww$4TJaukn+r+2kJYW2tZUqHRlt9Tiy0mqWrKMh0p5L8rg', 0, '2020-08-23 09:56:25'),
	(4, 'dd', '$argon2i$v=19$m=4096,t=3,p=1$lHaGPzkwmOjF3vTMXyGRIA$GXF9bYP/wDNbAkpD4h9lAvHP5N5Ku6C/3PsVuVH1M4E', 0, '2020-08-23 10:39:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;