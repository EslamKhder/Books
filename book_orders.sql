-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: book
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `data_create` datetime(6) DEFAULT NULL,
  `data_update` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `image` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `id_category` bigint DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `number_of_pages` varchar(255) DEFAULT NULL,
  `orderscol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbsymv27e2i4fti6obehercca` (`id_category`),
  CONSTRAINT `FKbsymv27e2i4fti6obehercca` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'2023-05-14 01:11:19.000000',NULL,'book 1 science','This book 1 is a type of science book that is concerned with talking about science and the most important topics related to science','book1img.jpg',120,1,'cat','eslam','500',NULL),(3,'2023-05-14 01:11:19.000000',NULL,'book 2 science','This book 2 is a type of science book that is concerned with talking about science and the most important topics related to science','book2img.jpg',120,1,'cat','eslam','500',NULL),(4,'2023-05-14 01:11:19.000000',NULL,'book 3 science','This book 3 is a type of science book that is concerned with talking about science and the most important topics related to science','book3img.jpg',120,1,'cat','eslam','500',NULL),(5,'2023-05-14 01:11:19.000000',NULL,'book 4 science','This book 4 is a type of science book that is concerned with talking about science and the most important topics related to science','book4img.jpg',120,1,'cat','eslam','500',NULL),(6,'2023-05-14 01:11:19.000000',NULL,'book 5 science','This book 5 is a type of science book that is concerned with talking about science and the most important topics related to science','book5img.jpg',120,1,'cat','eslam','500',NULL),(7,'2023-05-14 01:11:19.000000',NULL,'book 6 literature','This book 6 is a type of literature book that is concerned with talking about literature and the most important topics related to literature','book6img.jpg',150,1,'cat','eslam','500',NULL),(8,'2023-05-14 01:11:19.000000',NULL,'book 7 literature','This book 7 is a type of literature book that is concerned with talking about literature and the most important topics related to literature','book7img.jpg',150,1,'cat','eslam','500',NULL),(9,'2023-05-14 01:11:19.000000',NULL,'book 8 literature','This book 8 is a type of literature book that is concerned with talking about literature and the most important topics related to literature','book8img.jpg',150,1,'cat','eslam','500',NULL),(10,'2023-05-14 01:11:19.000000',NULL,'book 9 literature','This book 9 is a type of literature book that is concerned with talking about literature and the most important topics related to literature','book9img.jpg',150,1,'cat','eslam','500',NULL),(11,'2023-05-14 01:11:19.000000',NULL,'book 10 literature','This book 10 is a type of literature book that is concerned with talking about literature and the most important topics related to literature','book10img.jpg',150,1,'cat','eslam','500',NULL),(12,'2023-05-14 01:11:19.000000',NULL,'book 11 engineering','This book 11 is a type of engineering book that is concerned with talking about engineering and the most important topics related to engineering','book11img.jpg',100,1,'cat','eslam','500',NULL),(13,'2023-05-14 01:11:19.000000',NULL,'book 12 engineering','This book 12 is a type of engineering book that is concerned with talking about engineering and the most important topics related to engineering','book12img.jpg',100,1,'cat','eslam','500',NULL),(14,'2023-05-14 01:11:19.000000',NULL,'book 13 engineering','This book 13 is a type of engineering book that is concerned with talking about engineering and the most important topics related to engineering','book13img.jpg',100,1,'cat','eslam','500',NULL),(15,'2023-05-14 01:11:19.000000',NULL,'book 14 engineering','This book 14 is a type of engineering book that is concerned with talking about engineering and the most important topics related to engineering','book14img.jpg',100,1,'cat','eslam','500',NULL),(16,'2023-05-14 01:11:19.000000',NULL,'book 15 engineering','This book 15 is a type of engineering book that is concerned with talking about engineering and the most important topics related to engineering','book15img.jpg',100,1,'cat','eslam','500',NULL),(17,'2023-05-14 01:11:19.000000',NULL,'book 16 medicine','This book 16 is a type of medicine book that is concerned with talking about medicine and the most important topics related to medicine','book16img.jpg',130,1,'cat','eslam','500',NULL),(18,'2023-05-14 01:11:19.000000',NULL,'book 17 medicine','This book 17 is a type of medicine book that is concerned with talking about medicine and the most important topics related to medicine','book17img.jpg',130,1,'cat','eslam','500',NULL),(19,'2023-05-14 01:11:19.000000',NULL,'book 18 medicine','This book 18 is a type of medicine book that is concerned with talking about medicine and the most important topics related to medicine','book18img.jpg',130,1,'cat','eslam','500',NULL),(20,'2023-05-14 01:11:19.000000',NULL,'book 19 medicine','This book 17 is a type of medicine book that is concerned with talking about medicine and the most important topics related to medicine','book19img.jpg',130,1,'cat','eslam','500',NULL),(21,'2023-05-14 01:11:19.000000',NULL,'book 20 medicine','This book 20 is a type of medicine book that is concerned with talking about medicine and the most important topics related to medicine','book20img.jpg',130,1,'cat','eslam','500',NULL),(22,'2023-05-14 01:11:19.000000',NULL,'book 21 history','This book 21 is a type of history book that is concerned with talking about history and the most important topics related to history','book21img.jpg',90,1,'cat','eslam','500',NULL),(23,'2023-05-14 01:11:19.000000',NULL,'book 22 history','This book 22 is a type of history book that is concerned with talking about history and the most important topics related to history','book22img.jpg',90,1,'cat','eslam','500',NULL),(24,'2023-05-14 01:11:19.000000',NULL,'book 23 history','This book 23 is a type of history book that is concerned with talking about history and the most important topics related to history','book23img.jpg',90,1,'cat','eslam','500',NULL),(25,'2023-05-14 01:11:19.000000',NULL,'book 24 history','This book 24 is a type of history book that is concerned with talking about history and the most important topics related to history','book24img.jpg',90,1,'cat','eslam','500',NULL),(26,'2023-05-14 01:11:19.000000',NULL,'book 25 history','This book 25 is a type of history book that is concerned with talking about history and the most important topics related to history','book25img.jpg',90,1,'cat','eslam','500',NULL),(27,'2023-05-14 01:11:19.000000',NULL,'book 26 fantasy','This book 26 is a type of fantasy book that is concerned with talking about fantasy and the most important topics related to fantasy','book26img.jpg',115,1,'cat','eslam','500',NULL),(28,'2023-05-14 01:11:19.000000',NULL,'book 27 fantasy','This book 27 is a type of fantasy book that is concerned with talking about fantasy and the most important topics related to fantasy','book27img.jpg',115,1,'cat','eslam','500',NULL),(29,'2023-05-14 01:11:19.000000',NULL,'book 28 fantasy','This book 28 is a type of fantasy book that is concerned with talking about fantasy and the most important topics related to fantasy','book28img.jpg',115,1,'cat','eslam','500',NULL),(30,'2023-05-14 01:11:19.000000',NULL,'book 29 fantasy','This book 29 is a type of fantasy book that is concerned with talking about fantasy and the most important topics related to fantasy','book29img.jpg',115,1,'cat','eslam','500',NULL),(31,'2023-05-14 01:11:19.000000',NULL,'book 30 fantasy','This book 30 is a type of fantasy book that is concerned with talking about fantasy and the most important topics related to fantasy','book30img.jpg',115,1,'cat','eslam','500',NULL),(32,'2023-05-14 01:11:19.000000',NULL,'book 31 novelist','This book 31 is a type of novelist book that is concerned with talking about novelist and the most important topics related to novelist','book31img.jpg',210,1,'cat','eslam','500',NULL),(33,'2023-05-14 01:11:19.000000',NULL,'book 32 novelist','This book 32 is a type of novelist book that is concerned with talking about novelist and the most important topics related to novelist','book32img.jpg',210,1,'cat','eslam','500',NULL),(34,'2023-05-14 01:11:19.000000',NULL,'book 33 novelist','This book 33 is a type of novelist book that is concerned with talking about novelist and the most important topics related to novelist','book33img.jpg',210,1,'cat','eslam','500',NULL),(35,'2023-05-14 01:11:19.000000',NULL,'book 34 novelist','This book 34 is a type of novelist book that is concerned with talking about novelist and the most important topics related to novelist','book34img.jpg',210,1,'cat','eslam','500',NULL),(36,'2023-05-14 01:11:19.000000',NULL,'book 35 novelist','This book 35 is a type of novelist book that is concerned with talking about novelist and the most important topics related to novelist','book35img.jpg',210,1,'cat','eslam','500',NULL),(37,'2023-05-14 01:11:19.000000',NULL,'book 36 education','This book 36 is a type of education book that is concerned with talking about education and the most important topics related to education','book36img.jpg',175,1,'cat','eslam','500',NULL),(38,'2023-05-14 01:11:19.000000',NULL,'book 37 education','This book 37 is a type of education book that is concerned with talking about education and the most important topics related to education','book37img.jpg',175,1,'cat','eslam','500',NULL),(39,'2023-05-14 01:11:19.000000',NULL,'book 38 education','This book 38 is a type of education book that is concerned with talking about education and the most important topics related to education','book38img.jpg',175,1,'cat','eslam','500',NULL),(40,'2023-05-14 01:11:19.000000',NULL,'book 39 education','This book 39 is a type of education book that is concerned with talking about education and the most important topics related to education','book39img.jpg',175,1,'cat','eslam','500',NULL),(41,'2023-05-14 01:11:19.000000',NULL,'book 40 education','This book 40 is a type of education book that is concerned with talking about education and the most important topics related to education','book40img.jpg',175,1,'cat','eslam','500',NULL),(54,'2023-05-17 19:32:43.402000','2023-05-17 19:32:43.402000','bb','dsfsad','bewbook.jpg',30,NULL,'b1111','esa','50',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18  2:25:09
