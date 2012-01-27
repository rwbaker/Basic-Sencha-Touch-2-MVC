Ext.data.JsonP.Ext_Router({"subclasses":[],"tagname":"class","singleton":false,"inheritdoc":null,"statics":{"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[],"property":[]},"requires":[],"code_type":"assignment","superclasses":[],"mixins":[],"component":false,"uses":[],"meta":{},"members":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[{"tagname":"method","owner":"Ext.Router","meta":{},"name":"callback","id":"method-callback"},{"tagname":"method","owner":"Ext.Router","meta":{},"name":"setAppInstance","id":"method-setAppInstance"}],"property":[{"tagname":"property","owner":"Ext.Router","meta":{},"name":"isReady","id":"property-isReady"}]},"mixedInto":[],"html_meta":{},"private":false,"name":"Ext.Router","aliases":{},"inheritable":false,"allMixins":[],"extends":null,"id":"class-Ext.Router","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ext-more.html#Ext-Router' target='_blank'>Ext-more.js</a></div></pre><div class='doc-contents'><p>Restores compatibility for the old Ext.Router.draw syntax. This needs to be here because apps often include\nroutes.js just after app.js, so this is our only opportunity to hook this in. There is a small piece of code\ninside Application's onDependenciesLoaded that sets up the other end of this</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isReady' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Router'>Ext.Router</span><br/><a href='source/Ext-more.html#Ext-Router-property-isReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Router-property-isReady' class='name expandable'>isReady</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True when the document is fully initialized and ready for action ...</div><div class='long'><p>True when the document is fully initialized and ready for action</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-callback' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Router'>Ext.Router</span><br/><a href='source/Ext-more.html#Ext-Router-method-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Router-method-callback' class='name expandable'>callback</a>( <span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope], [<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> args], [<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> delay]</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The callback to execute</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The scope to execute in</p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>The arguments to pass to the function</p>\n</div></li><li><span class='pre'>delay</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Pass a number to delay the call by a number of milliseconds.</p>\n</div></li></ul></div></div></div><div id='method-setAppInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Router'>Ext.Router</span><br/><a href='source/Ext-more.html#Ext-Router-method-setAppInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Router-method-setAppInstance' class='name expandable'>setAppInstance</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> app</span> )</div><div class='description'><div class='short'>Application's onDependenciesLoaded has a deprecated-wrapped line that calls this. ...</div><div class='long'><p>Application's onDependenciesLoaded has a deprecated-wrapped line that calls this. Basic idea is that once an\napp has been instantiated we set that at <a href=\"#!/api/Ext.Router\" rel=\"Ext.Router\" class=\"docClass\">Ext.Router</a>'s appInstance and then redirect any calls to\nExt.Router.draw to that app's Router. We keep a drawStack above so that we can call Ext.Router.draw one or\nmore times before the application is even instantiated and it will simply link it up once everything is\npresent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>app</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"files":[{"href":"Ext-more.html#Ext-Router","filename":"Ext-more.js"}]});