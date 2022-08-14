# stop_watch

In this project I will be aiming to create an app that will have the following features:

- Start the stop watch
- Pause the stop watch
- Reset the stop watch

What New things I have learned completing this project:

- function vs function() inside of addEventListener gives different results.

When using addEventListener and click event, the call back function should be called without the parenthesis otherwise the function is called immediately and does not act as call back function. NOTE: when using onclick event the result is different.

- What is setTimeOut function.

This function takes two arguments, the first is a callback function and the second argument is a time. Basically the setTimeOut function calls the callback function in given time. In our case the callback function is called after 1000 ms or 1 sec.
