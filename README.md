
## Week 1 Assignment: Flixster

Submitted by: **Adriana Morales**

Estimated time spent: **30** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://amm33.github.io/flixster_adriana/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<div style="position: relative; padding-bottom: 44.99999999999999%; height: 0;">
<iframe src="https://www.loom.com/embed/6369364cca3c458db788e5b4626e1770" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

Link As Well 
- https://www.loom.com/share/6369364cca3c458db788e5b4626e1770

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Add your response here
I do believe the topics featured in the last 3 labs have prepared me for this project. One of the main factors in this project was using an API, and getting and displaying the data. Before this past week, I had very little knowledge of using APIs, but after the lessons and labs, I had a better understanding on how to use them. Additionally, we worked with some styling and accessibility features which were used for the project. The feature that I had a bit more difficulty with was displaying the images and data from the movie API. I had similar difficulties with the Giphy Party lab hence why I was worried about the project. I was able to solve my issues by doing some research and asking for help. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Add your response here
If I had more time, I would make comments for each function and CSS selector explaining what it is for. I found that when coding, I was not keeping track of my code and as more code was typed, it became harder to find certain functions. I would make things more organized so that it is easy to track. One feature that I would have loved to add to the project are filters. Filtering by genre, director, rating, etc. would be a nice feature to incorporate. Alongside this, I would add additional information to the movie descriptions, such as the director, genre, and cast. Additionally, I would love to have figured out a different way to display the movie pages. Rather than having all movies on one page and loading more, I could figure out how to have multiple pages. Another thing I would work on is fixing the way the trailers are displayed. Perhaps I would add buttons that can go to the next trailer than having all the trailers together. Lastly, I would figure out how to make the attribution a bit smaller. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here
This project was slightly challenging in certain parts but overall, I have learned many new topics and how to properly use them. Getting the movie data from the API was easy for me but displaying the movies was a bit challenging. After help from the instructor and my fellow peers, this task was less confusing. Two features that I found the most challenging were the popup for each movie which would feature the overview and a trailer, and the load more button. From The Movie Database API, I was able to get the videos that they had and filter out the trailers. Various websites, which I cited in my code and will be included in the Open-source libraries used, were very helpful in getting the trailers and creating an overlay popup that will hold the trailer. For the load more feature, I tried utilizing the similar feature I had in my Giphy Party (Lab 3) but found that it would not work. I also consulted various videos, articles, and my peers for help. I found that my original code would have the next page of movies show up but would clear the last page; the movies were not being added to the page. As I was reading through my code, I found that one line would cause the page to start with an empty string, thus causing that whenever the load more button would be clicked, it would clear the page and add new data. By deleting this line, I was able to make the function work. I was surprised to see that features like the search bar and fetching data from the API which was challenging earlier this week were quite easy when doing the project. As I worked through the challenging features, I have learned even more about APIs and some styling components, like animations and transitions. I did notice that one of my peers created a different color border for each movie which made the movies pop, this is something I would like to play around with next time. 


### Open-source libraries used

- Add any links to open-source libraries used in your project.
  - https://www.themoviedb.org/documentation/api
  - https://developers.themoviedb.org/3/getting-started/introduction
  - https://developer.mozilla.org/en-US/ 

- Other useful links/resourses used 
  - https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
  - https://www.w3schools.com/css/css3_animations.asp
  - https://www.geeksforgeeks.org/html-adding-youtube-videos/#:~:text=Upload%20the%20video%20that%20you,the%20URL%20of%20the%20video.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
  - Learn CSS Animation in 15 Minutes - YouTube Video by Web Dev Simplified 
    - https://www.youtube.com/watch?v=YszONjKpgg4


### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout Out to Michelle Fox-Romero and Eva Seinrich as we helped each other in explaing topics. Shout Out to my instructor Moe for helping me understanding how to get the movie images from the API. 