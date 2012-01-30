# Basic MVC app for Sencha Touch 2 PR4

## Folder Structure

    app.js
    app
        controller
        model
        proxy
        store
        view
    data
    lib
        touch
            (sencha touch library)
    resources
        css
        images
    themes



### `app`

The `app` folder holds all the JS resources written for the application. This folder contains the `model`, `view`, `controller`, `store`, and `proxy` folders.

It is a reserved folder name ; when used correctly, your various models, views, controllers, stores and proxies will be automatically found.

### `data`

The `data` folder holds any static data files, such as json. 

It is a reserved folder name; when used correctly, your application will automatically find your stored data. However, automatically loading it is a config setting.

### `lib`

The `lib` folder is used to hold all your library packages used to build the application. In this case, we're just using the Sencha Touch 2 PR4 library.

The `lib` folder doesn't appear to be a reserved folder name, though, it seems standard practice in most other ST apps.

### `resources`

The `resources` folder is used to hold other application-related files such as your CSS or images.

The resources folder is not a reserved folder name in Sencha Touch, however, it does seem to be a common location for these type of files among other ST apps.

### `themes`

The `themes` folder is used to house your custom Sencha Touch application theme.