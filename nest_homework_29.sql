/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100432
Source Host           : localhost:3306
Source Database       : nest_homework_29

Target Server Type    : MYSQL
Target Server Version : 100432
File Encoding         : 65001

Date: 2024-05-02 17:53:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('Phone', '123', '12', 'Nice', '1');
INSERT INTO `product` VALUES ('Airpod', '123', '12', 'Nice', '2');
INSERT INTO `product` VALUES ('Mac', '123', '12', 'Nice', '3');

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `comment` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of review
-- ----------------------------
INSERT INTO `review` VALUES ('Hello', '2 May 2024', '1');
INSERT INTO `review` VALUES ('Hello', '2 May 2024', '3');
INSERT INTO `review` VALUES ('How are you', '2 May 2024', '4');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Lilit', 'Anyan', '23', '1@gmail.com', '111111');
INSERT INTO `user` VALUES ('3', 'Lena', 'Anyan', '23', '1@gmail.com', '111111');
SET FOREIGN_KEY_CHECKS=1;
