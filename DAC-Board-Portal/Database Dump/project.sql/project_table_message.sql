
-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_userid` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `message`, `user_id`, `user_userid`) VALUES
(110, 'plz provide java notes', NULL, 101),
(109, 'tata byby', NULL, 106),
(107, 'hhhhhhhhhhh', NULL, 101),
(108, 'dipti hii', NULL, 101),
(111, 'hiii', NULL, 101),
(112, 'plz provide os notes', NULL, 101),
(113, 'hiii', NULL, 101),
(114, 'aazz', NULL, 101),
(115, '', NULL, 101),
(116, 'good best', NULL, 101);
