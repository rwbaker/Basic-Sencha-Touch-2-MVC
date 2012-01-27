Ext.data.JsonP.Ext_Class({"subclasses":[],"tagname":"class","singleton":false,"inheritdoc":null,"statics":{"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[],"property":[]},"requires":[],"code_type":"nop","superclasses":[],"mixins":[],"component":false,"uses":[],"meta":{"docauthor":["Jacky Nguyen <jacky@sencha.com>"],"author":["Jacky Nguyen <jacky@sencha.com>"]},"members":{"css_var":[],"cfg":[{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"alias","id":"cfg-alias"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"alternateClassName","id":"cfg-alternateClassName"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"config","id":"cfg-config"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"extend","id":"cfg-extend"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"inheritableStatics","id":"cfg-inheritableStatics"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"mixins","id":"cfg-mixins"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"singleton","id":"cfg-singleton"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"statics","id":"cfg-statics"},{"tagname":"cfg","owner":"Ext.Class","meta":{},"name":"uses","id":"cfg-uses"}],"css_mixin":[],"event":[],"method":[{"tagname":"method","owner":"Ext.Class","meta":{},"name":"constructor","id":"method-constructor"}],"property":[]},"mixedInto":[],"html_meta":{"docauthor":null,"author":null},"private":false,"name":"Ext.Class","aliases":{},"inheritable":false,"allMixins":[],"extends":null,"id":"class-Ext.Class","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Class.html#Ext-Class' target='_blank'>Class.js</a></div></pre><div class='doc-contents'><p>Handles class creation throughout the whole framework. Note that most of the time <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> should\nbe used instead, since it's a higher level wrapper that aliases to Ext.ClassManager.create\nto enable namespacing and dynamic dependency resolution.</p>\n\n<h1>Basic syntax:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>(className, properties);\n</code></pre>\n\n<p>in which <code>properties</code> is an object represent a collection of properties that apply to the class. See\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> for more detailed instructions.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n     name: 'Unknown',\n\n     constructor: function(name) {\n         if (name) {\n             this.name = name;\n         }\n\n         return this;\n     },\n\n     eat: function(foodType) {\n         alert(\"I'm eating: \" + foodType);\n\n         return this;\n     }\n});\n\nvar aaron = new Person(\"Aaron\");\naaron.eat(\"Sandwich\"); // alert(\"I'm eating: Sandwich\");\n</code></pre>\n\n<p><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> has a powerful set of extensible pre-processors which takes care of\neverything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.</p>\n\n<h1>Inheritance:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n     extend: 'Person',\n\n     constructor: function(name, isGeek) {\n         this.isGeek = isGeek;\n\n         // Apply a method from the parent class' prototype\n         this.callParent([name]);\n\n         return this;\n\n     },\n\n     code: function(language) {\n         alert(\"I'm coding in: \" + language);\n\n         this.eat(\"Bugs\");\n\n         return this;\n     }\n});\n\nvar jacky = new Developer(\"Jacky\", true);\njacky.code(\"JavaScript\"); // alert(\"I'm coding in: JavaScript\");\n                          // alert(\"I'm eating: Bugs\");\n</code></pre>\n\n<p>See <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">Ext.Base.callParent</a> for more details on calling superclass' methods</p>\n\n<h1>Mixins:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanPlayGuitar', {\n     playGuitar: function() {\n        alert(\"F#...G...D...A\");\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanComposeSongs', {\n     composeSongs: function() { ... }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canComposeSongs: 'CanComposeSongs',\n         canSing: 'CanSing'\n     }\n})\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CoolPerson', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canSing: 'CanSing'\n     },\n\n     sing: function() {\n         alert(\"Ahem....\");\n\n         this.mixins.canSing.sing.call(this);\n\n         alert(\"[Playing guitar at the same time...]\");\n\n         this.playGuitar();\n     }\n});\n\nvar me = new CoolPerson(\"Jacky\");\n\nme.sing(); // alert(\"Ahem...\");\n           // alert(\"I'm on the highway to hell...\");\n           // alert(\"[Playing guitar at the same time...]\");\n           // alert(\"F#...G...D...A\");\n</code></pre>\n\n<h1>Config:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n\n     isExpensive: false,\n\n     constructor: function(config) {\n         this.initConfig(config);\n\n         return this;\n     },\n\n     applyPrice: function(price) {\n         this.isExpensive = (price &gt; 500);\n\n         return price;\n     },\n\n     applyOperatingSystem: function(operatingSystem) {\n         if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {\n             return 'Other';\n         }\n\n         return operatingSystem;\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n\niPhone.isExpensive; // false;\niPhone.setPrice(600);\niPhone.getPrice(); // 600\niPhone.isExpensive; // true;\n\niPhone.setOperatingSystem('AlienOS');\niPhone.getOperatingSystem(); // 'Other'\n</code></pre>\n\n<h1>Statics:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Computer', {\n     statics: {\n         factory: function(brand) {\n            // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n\n<p>Also see <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a> and <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a> for more details on accessing\nstatic properties within class methods</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alias' class='name expandable'>alias</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>List of short aliases for class names. ...</div><div class='long'><p>List of short aliases for class names.  Most useful for defining xtypes for widgets:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('MyApp.CoolPanel', {\n    extend: 'Ext.panel.Panel',\n    alias: ['widget.coolpanel'],\n    title: 'Yeah!'\n});\n\n// Using <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>\n<a href=\"#!/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a>('widget.coolpanel');\n// Using the shorthand for widgets and in xtypes\n<a href=\"#!/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a>('panel', {\n    items: [\n        {xtype: 'coolpanel', html: 'Foo'},\n        {xtype: 'coolpanel', html: 'Bar'}\n    ]\n});\n</code></pre>\n</div></div></div><div id='cfg-alternateClassName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alternateClassName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alternateClassName' class='name expandable'>alternateClassName</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>Defines alternate names for this class. ...</div><div class='long'><p>Defines alternate names for this class.  For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n    alternateClassName: ['Coder', 'Hacker'],\n    code: function(msg) {\n        alert('Typing... ' + msg);\n    }\n});\n\nvar joe = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Developer');\njoe.code('stackoverflow');\n\nvar rms = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Hacker');\nrms.code('hack hack');\n</code></pre>\n</div></div></div><div id='cfg-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-config' class='name expandable'>config</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of configuration options with their default values, for which automatically\naccessor methods are generated. ...</div><div class='long'><p>List of configuration options with their default values, for which automatically\naccessor methods are generated.  For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n     constructor: function(cfg) {\n         this.initConfig(cfg);\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n</code></pre>\n</div></div></div><div id='cfg-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-extend' class='name expandable'>extend</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The parent class that this class extends. ...</div><div class='long'><p>The parent class that this class extends. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n    say: function(text) { alert(text); }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n    extend: 'Person',\n    say: function(text) { this.callParent([\"print \"+text]); }\n});\n</code></pre>\n</div></div></div><div id='cfg-inheritableStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-inheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-inheritableStatics' class='name expandable'>inheritableStatics</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of inheritable static methods for this class. ...</div><div class='long'><p>List of inheritable static methods for this class.\nOtherwise just like <a href=\"#!/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a> but subclasses inherit these methods.</p>\n</div></div></div><div id='cfg-mixins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-mixins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-mixins' class='name expandable'>mixins</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of classes to mix into this class. ...</div><div class='long'><p>List of classes to mix into this class. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canSing: 'CanSing'\n     }\n})\n</code></pre>\n</div></div></div><div id='cfg-singleton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-singleton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-singleton' class='name expandable'>singleton</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>When set to true, the class will be instantiated as singleton. ...</div><div class='long'><p>When set to true, the class will be instantiated as singleton.  For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Logger', {\n    singleton: true,\n    log: function(msg) {\n        console.log(msg);\n    }\n});\n\nLogger.log('Hello');\n</code></pre>\n</div></div></div><div id='cfg-statics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-statics' class='name expandable'>statics</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>List of static methods for this class. ...</div><div class='long'><p>List of static methods for this class. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Computer', {\n     statics: {\n         factory: function(brand) {\n             // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n</div></div></div><div id='cfg-uses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Loader.html#Ext-Class-cfg-uses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-uses' class='name expandable'>uses</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span></div><div class='description'><div class='short'>List of optional classes to load together with this class. ...</div><div class='long'><p>List of optional classes to load together with this class. These aren't neccessarily loaded before\nthis class is created, but are guaranteed to be available before <a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> listeners are\ninvoked</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Class-method-constructor' class='name expandable'>Ext.Class</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> data, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> onCreated</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></div><div class='description'><div class='short'>Create a new anonymous class. ...</div><div class='long'><p>Create a new anonymous class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object represent the properties of this class</p>\n</div></li><li><span class='pre'>onCreated</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Optional, the callback function to be executed when this class is fully created.\nNote that the creation process can be asynchronous depending on the pre-processors used.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>The newly created class</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"files":[{"href":"Class.html#Ext-Class","filename":"Class.js"}]});