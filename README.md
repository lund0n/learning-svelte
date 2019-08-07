# Svelte Training

This repository contains all of the exercises for working through the the ["Learning Svelte" Workshop](https://docs.google.com/presentation/d/1jZGKLem2hxIEC4eWNIpLyPO5z_erSdmvbx8i8pacFq0/edit?usp=sharing).

## Getting Started

This workshop assumes that you have a few tools available on your computer. Here are the tools, along with
the versions that I used to create and work through the exercises:

- Node.js 10.16
- npm 6.10.2
- git 2.22.0

I imagine that unless you have a really old version of these tools you will most likely not have any problems running these exercises. But, if you do, that is the first play I would look.

Once you've ensured that you have Node.js, npm, and git available, run the following commands:

```shell
git clone https://github.com/lund0n/learning-svelte.git
cd learning-svelte
npm run setup
```

This will check out the project to your computer, and install the necessary npm dependencies for running the workshop on your computer. If everything was successful, you should see a message letting you know that you're set up!

## Working Through the Exercises

To start the app containing the exercises, run the following in your terminal:

```shell
npm run dev
```

and then open a web browser to `http://localhost:5000`. You should see a list of exercises.

All of the exercise files can be found in the `src/exercises` directory, and my solution to the exercises and found in the `src/solutions` directory.

You can also write and run tests, which are found in the `src/__tests__` directory, but running the following in your terminal:

```shell
npm test
```

Note that there are currently only tests for exercise 1. I hope to add more tests in the future.
