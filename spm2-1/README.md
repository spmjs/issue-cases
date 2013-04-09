# Example Case

This is an example. It is not a bug report.

Let's play with the latest spm2:

    npm install spm@ninja -g

## spm install

Try spm install:

    spm install arale/class

Have a look at `sea-modules`.

And then, we can edit `.spmrc`:

```
[install]
format = {{family}}/{{name}}/{{filename}}
```

And try spm install again:

    spm install arale/class

You can change the directory:

    spm install arale/class -d js

Now change it back to:

```
[install]
format = {{family}}/{{filename}}
```

## spm build

Let's try `spm build`.

First, we should get all the dependencies:

    spm install

We can build it now:

    spm build
