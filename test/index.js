/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2014 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tape'),
  request = require('supertest'),
  testutil = require('./util'),
  path = require('path');

test('devtools', function (t) {

    t.test('returns a middleware chain using an empty config', function (te) {
        var app = testutil.createApp();

        request(app)
          .get('/')
          .expect(200, function (err) {
              t.error(err);
              testutil.cleanUp(t.end);
          });

    });

    t.test('returns a middleware chain using a non-empty config', function (t) {
        var app = testutil.createApp({
            copier: {
                module: path.resolve(__dirname, 'plugins/copier'),
                files: '**/*'
            }
        });

        request(app)
          .get('/')
          .expect(200, function (err) {
              t.error(err);
              testutil.cleanUp(t.end);
          });
    });
    t.test('returns a middleware chain using a non-empty config', function (t) {
        var app = testutil.createApp({
            copier: {
                module: path.resolve(__dirname, 'plugins/copier'),
                files: '**/*'
            },
            dopier: {
                module: path.resolve(__dirname, 'plugins/copier'),
                files: '**/*'
            }
        });

        request(app)
          .get('/')
          .expect(200, function (err) {
              t.error(err);
              testutil.cleanUp(t.end);
          });
    });
});