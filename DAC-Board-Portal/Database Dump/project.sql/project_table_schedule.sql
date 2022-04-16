
-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `meeting_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `topic_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `date`, `meeting_id`, `password`, `time`, `topic_name`) VALUES
(2, '14-04-2022', 'https://us06web.zoom.us/j/89997761292?pwd=Y2R5amJjQ0NVUThuWm9Udk1XWWJHZz09', '12345679aaaammmm', '11', 'J2EE'),
(3, '14-04-2022', 'https://us06web.zoom.us/j/89997761292?pwd=Y2R5amJjQ0NVUThuWm9Udk1XWWJHZz09', 'rrrraa', '10 am', 'J2EE');
