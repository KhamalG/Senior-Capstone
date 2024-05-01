For the University of Toledo's School of Engineering Senior Capstone class, we as Team A-5 (Khamal Goodwin, Merith Hutyera, Justin Stephens, Andrew Schock), aimed to develop a delivery rover drone with a mock delivery service that would allow us to showcase how our delivery drone would interact with systems in a realistic setting. For the delivery rover drone, we designed a 3-D printed cargo container, that fits on top of our tank chassis that was assembled. To control the drone it was equipped with a Rasberry Pi that was wired to a motor driver module that controlled the power input to motors. Our initial goal was to implement ROS2 to give the drone autonomous driving and obstacle avoidance capabilities, but we fell short of that goal due to time and the learning curve of the powerful tool. We were still able to achieve our goal of developing a mock delivery service by creating user interfaces that allow the delivery drone to receive and deliver orders to customers with a user-selected drop zone. Most of the group members had little experience with developing software with JavaScript but were able to adapt and learn quickly to successfully engineer the mock infrastructure.

Khamal Goodwin
A graduating senior this semester from the Computer Science and Engineering Technology program at the University of Toledo.  Interested in full-stack software engineering, with previous internship experience from Cargomatic, where a programming skillset was accumulated. Responsible for the design and development of user interfaces, assisting with server development and database integration, assembly of the robot, and development of script to drive the robot. 

Merith Hutyera 
A fourth-year Computer Science and Engineering Technology student at the University of Toledo.  Interested in networking and information technology and have been working for the University’s technology support department for the past two and a half years.  Handled the web page functionality, some graphic design, and server development as well as some database integration, helped make many design decisions, and assisted with paperwork. 

Justin Stephens
A fourth-year Computer Science and Engineering Technology student-athlete who plays football at the University of Toledo. Interested in network security and will be working towards certifications over the summer and will graduate in Fall 2024. Designed web pages, documented the timeline with a Gantt chart, designed a logo, helped with decisions on design, and assisted with paperwork. 

Andrew Schock
A graduating Information Technology student at the University of Toledo. Enjoys designing websites and databases. Built and maintained the database for the project, participated in decisions and solving design problems, and wrote sections of the final paper, and the first draft of the pamphlet. 

The Robot_WS contains the script for the manual navigation controls for the delivery rover drone
The front-end contains the React JS website suited to manage inventory and orders
The mobile/ contains the mobile app engineered with React Native for customers to place orders and track delivery progress
The server/ contains the server scripting for the logic needed for the delivery system and communicates to the MySQL database developed using Node JS