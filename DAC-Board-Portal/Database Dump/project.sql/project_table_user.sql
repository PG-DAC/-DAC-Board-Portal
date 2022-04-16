
-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `email`, `password`, `username`) VALUES
(101, 'nikamrohini22@gmail.com', '123456789', 'Rohini'),
(201, 'puja@gmail.com', '123456', 'puja'),
(103, 'rakesh@gmail.com', '123456', 'rakesh'),
(104, 'malikomal71@gmail.com', 'komal', 'komalll'),
(105, 'amolmote@gmail.com', '123456', 'amol'),
(106, 'diptisarwade@gmail.com', '123456', 'dipti'),
(107, 'priyanka@gmail.com', '123456', 'Priyanka'),
(102, 'dipti@gmail.com', '123456', 'dipti'),
(202, 'ganesh@gmail.com', '123456', 'ganesh'),
(203, 'onkar@gmail.com', '123456', 'onkar');
