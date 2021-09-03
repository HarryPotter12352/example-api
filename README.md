# Example API

This is an example API, using a normal array as it's small database.

# Details

This API has 4 endpoints.
They are as follows.

- Homepage. This is our home which returns a simple Http Response

- /api/get. From this we can fetch a language's object from our array.

- /api/add. Using this endpoint, we can add objects to our array.

- /api/random. Using this one, we get a random object from our array.


# Running

Make sure you have Node.js and express.js installed.
If not, download node from https://nodejs.org and then run `npm i express` to install express

Download the code, and in the main directory, run `node index`, and you're all set!
- Note. If your post 5500 is occupied, then you change it using a `.env` file or changing the vairable on line 3