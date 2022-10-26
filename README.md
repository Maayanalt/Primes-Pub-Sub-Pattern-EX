# Primes - Publisher Subscriber Exercise
> This exercise follows the publisher-subscriber design pattern in nodeJS.

*The Publish/Subscribe pattern, also referred to as pub/sub, is an architectural design pattern that provides communication between publishers and subscribers.*
<br/>
<br/>
*The pub/sub pattern involves a middleware that is also referred to as the pub/sub broker. The pub/sub broker handles interactions between the publishers and the subscribers. Publishers publish contents or publications to the pub/sub broker and it handles the delivery of these contents to the appropriate subscriber.*
<br/>
## Prime Numbers Generator instructions:
Create a prime number "service" that emits the next prime number on every second (starting from 1 until a certain limit the user chooses).
<br/>
<br/>
Create 3 "clients":
1. Mersenne - needs to be informed whenever a new prime number appears so it can determine if it is a Mersenne number. It will print it out if it is.
2. Prime1 - when a prime number ends with 1, prints it with red color
3. prime4Digits - If a prime number is 4 digits, print the subtraction of it from 10,000 (like if prime number is 9973, then print 27)
