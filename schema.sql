/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS `quiz_manager` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quiz_manager`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` char(95) NOT NULL,
  `admin` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `quiz` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `label` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quiz_fk0` (`user_id`),
  CONSTRAINT `quiz_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quiz_id` bigint(20) NOT NULL,
  `label` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_fk0` (`quiz_id`),
  CONSTRAINT `questions_fk0` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `answers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) NOT NULL,
  `label` varchar(100) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `answers_fk0` (`question_id`),
  CONSTRAINT `answers_fk0` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `quiz_answers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answer_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quiz_answers_fk1` (`user_id`),
  KEY `quiz_answers_fk0` (`answer_id`),
  CONSTRAINT `quiz_answers_fk0` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`),
  CONSTRAINT `quiz_answers_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
