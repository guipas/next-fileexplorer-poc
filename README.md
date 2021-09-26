
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