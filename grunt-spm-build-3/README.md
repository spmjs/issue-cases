# Learn the build process.

This is an example case for
https://github.com/spmjs/grunt-spm-build/issues/3.


## Step 1

You need spm2 installed.

Install `arale/class`:

    spm install arale/class

It will install in `static/js`. Find the mystery in [spmrc](./.spmrc).

## Step 2

Dig into the [Gruntfile.js](./Gruntfile.js).

And install grunt-spm-build:

    npm install grunt-spm-build@ninja

## Step 3

Build `mycode` with spm:

    spm build

Or build with grunt:

    grunt build
