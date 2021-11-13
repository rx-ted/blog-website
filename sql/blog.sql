# Host: localhost  (Version: 5.5.5-10.4.21-MariaDB)
# Date: 2021-11-08 15:19:31
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "article"
#

CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '标题',
  `introduce` varchar(255) NOT NULL DEFAULT '' COMMENT '说明',
  `image` varchar(255) NOT NULL DEFAULT '' COMMENT '图片',
  `time` date NOT NULL DEFAULT '0000-00-00',
  `author` varchar(20) NOT NULL DEFAULT '',
  `from` varchar(255) DEFAULT NULL COMMENT '来自哪个网站',
  `fromUrl` varchar(255) NOT NULL DEFAULT '',
  `likecount` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='文章';

#
# Data for table "article"
#

insert INTO `article` VALUES (1,'基于百度语音的识别语音，转文字','基于百度语音的识别语音，转文字。<br>运行软件时候，若无GUI界面则运行` python asr.py `;想要界面则运行` python asr_ui.py`','./img/001.jpg','2021-06-01','rx-ted','gitee个人博客',' https://gitee.com/rx-ted/baidu-asr',1200);

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

insert INTO `comment` VALUES (1,'高敬义','欢迎来到我的博客，请期待我的作品',2021-11-08);

