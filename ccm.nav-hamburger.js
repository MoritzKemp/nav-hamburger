/* 
 * The MIT License
 *
 * Copyright 2017 Moritz Kemp <moritz at kemp-thelen.de>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* global ccm */

(function() {
    var component = {
        name: 'nav-hamburger',
        ccm: 'https://akless.github.io/ccm/ccm.js',
        config: {
            'html': {
                'sidebar': {
                    'tag': 'aside',
                    'class': 'sidebar',
                    'inner':
                        {
                            'tag': 'nav',
                            'class': 'sidebar-container',
                            'inner': [
                                {
                                    'tag': 'div',
                                    'class': 'sidebar-header',
                                    'inner': [
                                         {
                                            'tag': 'button',
                                            'type': 'button',
                                            'class': 'button-close',
                                            'inner': 'Close'
                                        },
                                        {
                                            'tag': 'div',
                                            'inner': 'Navigation'
                                        }
                                    ]
                                }
                            ]

                        }
                },
                'header': {
                    'tag': 'div',
                    'class': 'header',
                    'inner':[
                        {
                            'tag': 'button',
                            'type': 'button',
                            'class': 'button-open',
                            'inner': 'Menu'
                        }
                    ]
                },
                'list': {
                    'tag': 'ul',
                    'inner': [
                        {
                            'tag': 'li',
                            'inner': 'Section 1'
                        },
                        {
                            'tag': 'li',
                            'inner': 'Section 2'
                        }
                    ]
                }
            },
            'css': ['ccm.load', './resources/style.css']
        },
        
        Instance: function() {
            var self = this;
            var my;
            
            this.ready = function( callback ) {
                my = self.ccm.helper.privatize( self );
                
                if( callback ) callback();
            };
            
            this.start = function( callback ) {
                
                // build the view
                var header  = self.ccm.helper.html(my.html.header);
                var sidebar = self.ccm.helper.html(my.html.sidebar);
                var list    = self.ccm.helper.html(my.html.list);
                self.element.appendChild( header );
                sidebar.querySelector('.sidebar-container')
                       .appendChild( list );
                self.element.appendChild( sidebar );
             
                // add interaction functionality
                self.element.querySelector('.button-open')
                        .addEventListener('click', function( e ) {
                            sidebar.classList.add('visible');
                        });
                self.element.querySelector('.button-close')
                        .addEventListener('click', function( e ) {
                            sidebar.classList.remove('visible');
                        });
                sidebar.addEventListener('click', function( e ) {
                     sidebar.classList.remove('visible');
                });
                
                
                if( callback ) callback();
            };
        }
    };
    
    //The following code gets the framework and registers component from above
    function p(){
        window.ccm[v].component(component);
    }
    var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}
    
}());