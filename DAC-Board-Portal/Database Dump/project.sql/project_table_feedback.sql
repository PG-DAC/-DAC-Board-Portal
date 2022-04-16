
-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_userid` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `comments`, `user_id`, `user_userid`) VALUES
(204, 'Repeat OS', NULL, 101),
(203, 'tata byby', NULL, 106),
(202, 'good', NULL, 101),
(205, 'hi', NULL, 101),
(206, 'hello', NULL, 101),
(207, 'hiii', NULL, 101),
(208, 'Plz Repeat OS', NULL, 101),
(209, 'hiiiii', NULL, 101),
(210, 'hiiii', NULL, 101),
(211, 'aa', NULL, 101),
(212, 'aq', NULL, 101),
(213, 'azaz', NULL, 101),
(214, 'hinkk', NULL, 101),
(215, '', NULL, 101),
(216, '', NULL, 101),
(217, 'good best', NULL, 101),
(218, 'a', NULL, 101),
(219, 'aaaa', NULL, 101),
(220, 'aaaa', NULL, 101),
(221, 'aaaa', NULL, 101);
