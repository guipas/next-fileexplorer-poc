
*POC of a small file browser built with next.js*

To run it:

```bash
git clone git@github.com:guipas/next-fileexplorer-poc.git
cd next-fileexplorer-poc
npm install
npm start
# By default, we will list the current directory, but
# you can define which folders you want to list by passing and env variable (comma-separated list of paths)
BASE_DIRS=.,/home/user/Downloads npm start
```

## Details

### Scope
This is a very minimal explorer that basically list all files and folder and allows you to navigate them. You should be able to expand/collapse folders to see their content. Small icons will be displayed next to each node to visually mark them as files, hidden files or directories. The content of each directory that you expand is cached and re-validated regularly (and when you expand/collapse the folder) thanks to the [SWR](https://swr.vercel.app/docs/getting-started) library.

### Tech stack
I wanted to play with [Next.js](https://nextjs.org), that's why I used it, we won't really leverage Server-Side-Rendering but the part I was intersted in was the ease of use and spending as less time as possible on boilerplate. And it absolutely delivers on that part. Especially thanks to the [built-in API routes](https://nextjs.org/docs/api-routes/introduction), that allow to create API routes really easily. I also wanted to play with the SWR library, and I'm quite pleased by it, it enables easy caching and re-validation of backend data. I also used a bit of the [bootstrap](https://getbootstrap.com/) library and their icons, and the monokai color palette. 