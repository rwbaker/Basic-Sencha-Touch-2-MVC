Ext.data.JsonP.dataview({"title":"Using DataViews","guide":"<h1>Using DataViews in Sencha Touch 2</h1>\n\n<p>DataView makes it easy to create lots of components dynamically, usually based off a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>.\nIt's great for rendering lots of data from your server backend or any other data source and is what powers\ncomponents like <a href=\"#!/api/Ext.dataview.List\" rel=\"Ext.dataview.List\" class=\"docClass\">Ext.List</a>.</p>\n\n<p>Use DataView whenever you want to show sets of the same component many times, for examples in apps like these:</p>\n\n<ul>\n<li>List of messages in an email app</li>\n<li>Showing latest news/tweets</li>\n<li>Tiled set of albums in an HTML5 music player</li>\n</ul>\n\n\n<h2>Creating a Simple DataView</h2>\n\n<p>At its simplest, a DataView is just a Store full of data and a simple template that we use to render each item:</p>\n\n<pre><code>var touchTeam = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.dataview.DataView\" rel=\"Ext.dataview.DataView\" class=\"docClass\">Ext.DataView</a>', {\n    store: {\n        fields: ['name', 'age'],\n        data: [\n            {name: 'Jamie Avins',  age: 100},\n            {name: 'Rob Dougan',   age: 21},\n            {name: 'Tommy Maintz', age: 24},\n            {name: 'Jacky Nguyen', age: 24},\n            {name: 'Ed Spencer',   age: 26}\n        ]\n    },\n\n    itemConfig: {\n        tpl: '{name} is {age} years old'\n    }\n});\n</code></pre>\n\n<p>Here we just defined everything inline so it's all local with nothing being loaded from a server. For each of the 5\ndata items defined in our Store, DataView will render a <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> and pass in the name and age\ndata. The component will use the tpl we provided above, rendering the data in the curly bracket placeholders we\nprovided.</p>\n\n<p>Because DataView is integrated with Store, any changes to the Store are immediately reflected on the screen. For\nexample, if we add a new record to the Store it will be rendered into our DataView:</p>\n\n<pre><code>touchTeam.getStore().add({\n    name: 'Abe Elias',\n    age: 33\n});\n</code></pre>\n\n<p>We didn't have to manually update the DataView, it's just automatically updated. The same happens if we modify one\nof the existing records in the Store:</p>\n\n<pre><code>touchTeam.getStore().getAt(0).set('age', 42);\n</code></pre>\n\n<p>This will get the first record in the Store (Jamie), change the age to 42 and automatically update what's on the\nscreen.</p>\n\n<h2>Loading data from a server</h2>\n\n<p>We often want to load data from our server or some other web service so that we don't have to hard code it all\nlocally. Let's say we want to load all of the latest tweets about Sencha Touch into a DataView, and for each one\nrender the user's profile picture, user name and tweet message. To do this all we have to do is modify the\n<a href=\"#!/api/Ext.dataview.DataView-cfg-store\" rel=\"Ext.dataview.DataView-cfg-store\" class=\"docClass\">store</a> and <a href=\"#!/api/Ext.dataview.DataView-cfg-itemConfig\" rel=\"Ext.dataview.DataView-cfg-itemConfig\" class=\"docClass\">itemConfig</a> a little:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.dataview.DataView\" rel=\"Ext.dataview.DataView\" class=\"docClass\">Ext.DataView</a>', {\n    fullscreen: true,\n    store: {\n        autoLoad: true,\n        fields: ['from_user', 'text', 'profile_image_url'],\n\n        proxy: {\n            type: 'jsonp',\n            url: 'http://search.twitter.com/search.json?q=Sencha Touch',\n\n            reader: {\n                type: 'json',\n                root: 'results'\n            }\n        }\n    },\n\n    itemConfig: {\n        tpl: '&lt;img src=\"{profile_image_url}\" /&gt;&lt;h2&gt;{from_user}&lt;/h2&gt;&lt;p&gt;{text}&lt;/p&gt;'\n    }\n});\n</code></pre>\n\n<p>The Store no longer has hard coded data, instead we've provided a <a href=\"#!/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, which fetches\nthe data for us. In this case we used a JSON-P proxy so that we can load from Twitter's JSON-P search API. We also\nspecified the fields present for each tweet, and used Store's <a href=\"#!/api/Ext.data.Store-cfg-autoLoad\" rel=\"Ext.data.Store-cfg-autoLoad\" class=\"docClass\">autoLoad</a> configuration\nto load automatically. Finally, we configured a Reader to decode the response from Twitter, telling it to expect\nJSON and that the tweets can be found in the 'results' part of the JSON response.</p>\n\n<p>The last thing we did is update our template to render the image, twitter username and message. All we need to do\nnow is add a little CSS to style the list the way we want it and we end up with this</p>\n"});