# Skill-iT_Cognition
An Online Education portal for Cognition hackathon conducted by VITMAS

<!-- explaining the objective of the project, technology used and brief description about the project -->
## Objective

> With the advent in technology and with the perpetual increase in the strength of the students and the number of departments in the educational institutions, it is hard for the students to learn from rigid teaching styles and laborious to exchange the study materials between the students and the faculties.

The main objective of our website is to help the students get over the caveats of traditional learning methods and make them accustomed to e-learning where the student can choose his/her comfortable style of learning from any instructor who provides the relevant courses. Students are to be provided with necessary material which enhances their learning experience.

***

## Technology Used

#### The project is developed on MERN stack
- **MongoDB** is used since there are limited relations between the models used in the project
- **NodeJS** and **ExpressJS** are used for necessary routing and database injections
- **ReactJS** for seamless user experience and maintaining modularity of the project 

***

## Description

The student and instructor both have their login portals which are hashed and salted. Sessions are also implemented.
On creating the account the students side will be displayed with all courses uploaded by every instructor.
Student can select content of any  creator and start watching video.
For the instructors, there will be a create option where they can add the course details and upload the video file along with other resourse links. After filling the details the video will be uploaded and a thank you page will be loaded for uploading.

The student viewing portal is dynamically updated if any new video is uploaded. They can like the video, comment on it , wishlist the videos and can subscribe
to the Instructor if they wish to.

The Instructor dashboard will have all the courses uploaded by them, along with the data of how many views each video got.
