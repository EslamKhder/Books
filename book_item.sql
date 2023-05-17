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
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `request_order_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa4pt0fa9ixwms98soad2ao61v` (`request_order_id`),
  CONSTRAINT `FKa4pt0fa9ixwms98soad2ao61v` FOREIGN KEY (`request_order_id`) REFERENCES `request_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'book1img.jpg',120,6,1),(2,'book4img.jpg',120,2,1),(3,'book12img.jpg',100,2,1),(4,'book1img.jpg',120,3,2),(5,'book1img.jpg',120,2,3),(6,'book1img.jpg',120,4,4),(7,'book1img.jpg',120,7,5),(8,'book1img.jpg',120,6,6),(9,'book1img.jpg',120,4,8),(10,'book1img.jpg',120,5,10),(11,'book1img.jpg',120,5,13),(12,'book1img.jpg',120,5,14),(13,'book1img.jpg',120,8,15),(14,'book1img.jpg',120,4,16),(15,'book10img.jpg',150,4,17),(16,'book9img.jpg',150,1,18),(17,'book4img.jpg',120,2,18),(18,'book1img.jpg',120,1,18),(19,'book1img.jpg',120,3,20),(20,'book9img.jpg',150,2,20),(21,'book10img.jpg',150,2,20),(22,'book5img.jpg',120,5,20),(23,'book2img.jpg',120,3,21),(24,'book2img.jpg',120,7,22),(25,'book1img.jpg',120,4,23),(26,'book1img.jpg',120,3,24),(27,'book1img.jpg',120,4,25),(28,'book1img.jpg',120,5,26),(29,'book2img.jpg',120,3,27),(30,'book1img.jpg',120,4,28),(31,'book1img.jpg',120,3,29),(32,'book1img.jpg',120,4,30),(33,'book1img.jpg',120,5,31),(34,'book1img.jpg',120,5,32),(35,'book1img.jpg',120,4,33),(36,'book1img.jpg',120,4,34);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18  2:25:11
