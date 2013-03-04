# Example Case

This is an example. It is not a bug report.

Let's play with latest spm2:

    npm install spm@ninja


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

    spm install arale/class js
