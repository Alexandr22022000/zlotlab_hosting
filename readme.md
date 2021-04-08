### Startup

1) Install dependencies
    ```
    yarn
    ```
2) Create folder for your site in `sites`
    ```
    mkdir my_site
    ```
3) Copy your site files into new folder
    ```
    cp PATH_TO_MY_SITE/index.html sites/my_site/index.html
    ```
4) Create your `manifest.json` from `manifest.json.example`
    ```
    cp manifest.json.example manifest.json
    ```
5) Add your site name and port into `manifest.json`
    ```
    {
      "example": 7000,
      "my_site": 7001,
    }
    ```
6) Run hosting
    ```
    node ./
    ```   
