# Host: localhost  (Version: 5.5.5-10.4.21-MariaDB)
# Date: 2021-11-08 20:31:55
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "comment"
#

CREATE TABLE `comment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL DEFAULT '匿名' COMMENT '昵称',
  `content` varchar(255) NOT NULL DEFAULT '' COMMENT '留言',
  `datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'time',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论';

#
# Data for table "comment"
#

REPLACE INTO `comment` VALUES (1,'匿名','2345','0000-00-00 00:00:00');

insert INTO `comment` VALUES (1,'匿名','2345','2021-11-08 20:00:08');
insert INTO `comment` VALUES (3,'apple','apple','2021-11-08 20:00:14');
insert INTO `comment` VALUES (4,'123','123','2021-11-08 20:00:18');