## How to use the app

Install NodeJs from [NodeJs](https://nodejs.org/en/) if you haven’t done so already. 
Install Angular from terminal rpm install -g @angular/cli
cd into education city cd education-city
Once in the folder run npm install 
Once installed run ng serve or npm start to start the app
On local browser go to [LocalHost](http://localhost:4200/)
To fetch all the data on the top right-hand corner of the app go to manage and click on fetch data to fetch the data from the database
If you want to add a new test click on the new test, input the results and press save. If you want to save it to the database then go to manage tests then save to database. 

## The Assignment
________________________________________________________________________
## As a Teacher I can enter and view test scores for my Students so that I can track their progress.
Explanation and Customer Benefit
Springfield Primary is looking to update their pupil management systems; one part of this is to create an area where staff can track their student’s performance in their web browsers, giving them the ability to easily identify students that might benefit from additional tutoring.
Details of Criteria
Each term students take tests in the core subjects (English, Maths, and Science) for a total of 9 tests. Teachers need to be able to enter percentage marks for students for each test.
Once the test scores are populated, teachers will be able to view statistics about them. The application will have a page containing Test Overview and Student Overview sections; detailed below.
## Test Overview
Teachers will be shown a list of all tests, along with the average score for the students who have completed them.
Teachers can select a test to see additional details about it:
After selecting a test, the teacher can see which student(s) got the highest and lowest scores, the total number of students who have a score logged, and the average score for all students with a score.
Additionally, they will see a list of all of the scores for the test ordered by score (Highest to Lowest) and then Student Name (A-Z)
## Student Overview
Teachers will be presented with a list of all students, ordered by name.
For each student, the teacher will be able to see their score for each test, and an overall average score for tests they have taken.
________________________________________________________________________
## Please note:
• You should aim to complete as much of the above as you can in 4-5 hours.
• User authentication is not required, you can assume that this application is being
used by the correct user.
• We’re more interested in seeing how you approach the functionality as opposed to
the aesthetics; however, the application should usable.
• The application should be written in such a way that there are isolated back-end and
front-end portions.
• There should be a database behind the application, this needs to encompass
student, test and score information. Please design this as you see fit.
o For the scope of this application students and tests do not need to be
managed from the UI and can be populated with queries as part of the
application setup.
• The front-end portion should run in modern web browsers.
• Where appropriate the front-end application should fetch and submit data without
requiring a page reload.
Continued...
________________________________________________________________________
## Deliverables:
Please provide a Zip file containing:
1. Your completed application source code.
2. Any queries needed to create the application’s database, and to populate an initial
set of data.
3. A document detailing:
a Breakdown of time spent on each portion of the application, and any issues or restrictions encountered.
b Any steps required to install/run the application.
c Any other associated documentation.
________________________________________________________________________

## My Time breakdown

## Hour 1
planning / rough layout
reading documentation making sure that I have understood all the requirements. 
doing a rough sketch of the app and how I would like to structure it.
Rough sketch of how I would like the pages to turn out. 
Generate components according to the plan using the CLI

## Hour 2 
The overall structure including buttons and navigating the pages. 
Start creating a mockup using dummy data 
Creating the models of the data which I would like to implement

## Hour 3
Creating data models. And the services so that they could be used. 
Creating the forms 
Connecting it to the database (firebase)

## Hour 4 
Creating the student overview page and outputting the data on to the Dom as per plan. 
Getting an array of all the tests to result, turning them to numbers, removing the zero’s then dividing them by the length of the array. 
Creating the layout for the test-overview section

## Hour 5/6
Creating the test-overview section
Loop through all the results and getting the results for the test and the name of the student and then create a different array.
Remove the 0 then gets the length of the array to get tests completed. 
Sort the array based on the score. 
To get the highest score get the first element in the array 
To get the lowest score get the last element in the array 
To get the average used the same method as I did for the student overview. 
Creating the layout of how I would like to present the data as in the plan. 
Create the functions from the student data to create the data for the test overview page. 
Such as the average, highest score, lowest score, tests completed and ranked list. 
Looking over the app making sure that it was usable and was working for all the different tests. 

## Issues
There are some issues with the app and the way that it works. The main one being if you want to edit a test it chooses it based on the index not on the name. I would make other changes to the app that I would change. 
I would also create a different model and service for the functions that I used to get the test results to make the code  DRY and not to abuse the single responsibility principle. 
Other issues with the app can be found that are not mentioned above including ui and ux.

## Update
This test did get me through to the next stage of the interview and the candidates where happy with the end results. 
I have not touched this test since and have deliberately left it unchanged as it is a good indicator of my skill level at the time. 