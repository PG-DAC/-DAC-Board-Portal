
-- --------------------------------------------------------

--
-- Table structure for table `recording`
--

CREATE TABLE `recording` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `passcode` varchar(255) DEFAULT NULL,
  `topic_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recording`
--

INSERT INTO `recording` (`id`, `date`, `link`, `passcode`, `topic_name`) VALUES
(1, '31-03-2022', 'https://us06web.zoom.us/j/89997761292?pwd=Y2R5amJjQ0NVUThuWm9Udk1XWWJHZz09', '111111112233', 'Java2a'),
(2, '2022-04-15', 'https://us06web.zoom.us/j/89997761292?pwd=Y2R5amJjQ0NVUThuWm9Udk1XWWJHZz09', 'aaaa', 'J2EE'),
(11, '2022-04-14', 'asdfaaaa', '13456aa', 'J2EE'),
(23, '2022-04-05', 'asdf', '13456', 'J2EE'),
(41, '2022-04-16', 'asdf', '13456', 'J2EE');
