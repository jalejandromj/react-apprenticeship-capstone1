(this['webpackJsonpreact-certification-2020'] =
  this['webpackJsonpreact-certification-2020'] || []).push([
  [0],
  {
    100: function (e, t, a) {},
    101: function (e, t, a) {},
    102: function (e, t, a) {},
    103: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(56),
        c = a.n(r),
        o = a(3),
        i = a(17),
        s = a(10),
        u = l.a.createContext({
          name: null,
          search: null,
          setSearch: function () {},
        }),
        m =
          (a(68),
          function (e) {
            try {
              var t = window.localStorage.getItem(e);
              return JSON.parse(t);
            } catch (a) {
              return (
                console.error('Error parsing storage item "'.concat(e, '".')),
                null
              );
            }
          }),
        d = function (e, t) {
          window.localStorage.setItem(e, JSON.stringify(t));
        },
        p = l.a.createContext(null);
      function g() {
        var e = Object(n.useContext)(p);
        if (!e)
          throw new Error('Can\'t use "useAuth" without an AuthProvider!');
        return e;
      }
      var E,
        f,
        h,
        v,
        b,
        y,
        O = function (e) {
          var t = e.children,
            a = m('wa_cert_authenticated'),
            r = Object(n.useState)(a),
            c = Object(o.a)(r, 2),
            i = c[0],
            s = c[1];
          Object(n.useEffect)(function () {
            var e = m('wa_cert_authenticated'),
              t = Boolean(e);
            s(t);
          }, []);
          var u = Object(n.useCallback)(function () {
              s(!0), d('wa_cert_authenticated', !0);
            }, []),
            g = Object(n.useCallback)(function () {
              s(!1), d('wa_cert_authenticated', !1);
            }, []);
          return l.a.createElement(
            p.Provider,
            { value: { login: u, logout: g, authenticated: i } },
            t
          );
        },
        w = a(4),
        S = ['component'],
        j = function (e) {
          var t = e.component,
            a = Object(w.a)(e, S),
            n = g().authenticated;
          return l.a.createElement(
            s.b,
            Object.assign({}, a, {
              render: function (e) {
                return n
                  ? l.a.createElement(t, e)
                  : l.a.createElement(s.a, { to: '/login' });
              },
            })
          );
        },
        x = a(21),
        C = a.n(x),
        I = a(25),
        N = a(9),
        _ = a(7),
        k = (a(93), a(13)),
        R = a(14),
        T = R.b.h2(
          E || (E = Object(k.a)(['\n  font-size: 20px;\n  ', ';\n'])),
          function (e) {
            return (
              e.mini &&
              Object(R.a)(
                f || (f = Object(k.a)(['\n    font-size: 0.8rem;\n  ']))
              )
            );
          }
        ),
        A = R.b.li(
          h ||
            (h = Object(k.a)([
              '\n  position: relative;\n  background-color: white;\n  overflow-y: scroll;\n  &.videoImg {\n    \n  }\n  &.videoImg>img {\n    width: 100%;\n  }\n  &.videoDescr {\n    color: gray;\n    font-size: 15px;\n  } \n  &.videoChannel{\n    color: black;\n    font-size: 15px;\n    font-weight: bold;\n  }\n',
            ]))
        ),
        F = R.b.span(v || (v = Object(k.a)(['\n\n']))),
        U = R.b.ul(
          b ||
            (b = Object(k.a)([
              '\n  display: grid;\n  display: -ms-grid;\n  grid-row-gap: 0px;\n  \n  grid-template-rows: 60% 15% 20% 5%;\n  -ms-grid-rows: 100px 60% 15% 20% 5%;\n  \n  grid-template-columns: 100%;\n  -ms-grid-columns: 100%;\n\n  height: 46vh;\n  background: white;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);\n  -moz-box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);\n  box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.55);\n  cursor: pointer;\n  list-style-type: none;\n  margin: 0;\n  padding: 30px 30px;\n  ',
              ';\n',
            ])),
          function (e) {
            return (
              e.mini &&
              Object(R.a)(
                y ||
                  (y = Object(k.a)([
                    '\n    grid-template-rows: auto 10%;\n    -ms-grid-rows: auto 10%;\n    height: 25vh;\n    padding: 20px 30px;\n  ',
                  ]))
              )
            );
          }
        );
      var P = function (e) {
        return l.a.createElement(
          U,
          {
            'data-testid': 'videoCard',
            className: 'video_card_ul',
            onClick: e.onClick,
            mini: e.mini,
          },
          l.a.createElement(
            A,
            { className: 'videoImg' },
            l.a.createElement('img', { src: e.img, alt: '' })
          ),
          l.a.createElement(
            A,
            { className: 'videoTitle' },
            l.a.createElement(T, { className: '', mini: !0 }, e.name)
          ),
          e.mini
            ? null
            : l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  A,
                  { className: 'videoDescr' },
                  l.a.createElement(F, { className: '' }, e.description)
                ),
                l.a.createElement(
                  A,
                  { className: 'videoChannel' },
                  l.a.createElement(F, { className: '' }, e.channel)
                )
              )
        );
      };
      var B = function () {
        var e = Object(s.g)(),
          t = Object(n.useRef)(null),
          a = Object(n.useState)(null),
          r = Object(o.a)(a, 2),
          c = (r[0], r[1], Object(n.useState)(null)),
          i = Object(o.a)(c, 2),
          m = i[0],
          d = i[1],
          p = Object(n.useContext)(u),
          g = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ][new Date().getDay()];
        return (
          Object(n.useEffect)(
            function () {
              console.log(
                Object({
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  REACT_APP_YT_API_KEY:
                    'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                })
              ),
                console.log('[EXEC] GET videos...'),
                C.a
                  .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                      key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                      maxResults: 10,
                      part: 'snippet',
                      type: 'video',
                      q: p.search,
                    },
                  })
                  .then(function (e) {
                    console.log('[SUCCESS] Videos retrieved...', e),
                      d(e.data.items);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            },
            [p.search]
          ),
          l.a.createElement(
            'section',
            {
              'data-testid': 'homePage',
              className: 'section homepage',
              ref: t,
            },
            l.a.createElement(
              I.a,
              { fluid: !0 },
              l.a.createElement(
                N.a,
                null,
                l.a.createElement(
                  _.a,
                  { sm: 12 },
                  'Welcome and wonderful ',
                  g,
                  '! Enjoy your ',
                  p.search,
                  ' videos...'
                )
              ),
              m
                ? l.a.createElement(
                    N.a,
                    null,
                    m.map(function (t) {
                      return l.a.createElement(
                        _.a,
                        {
                          key: t.etag,
                          sm: 12,
                          md: 3,
                          lg: 4,
                          style: { padding: '20px 10px' },
                        },
                        l.a.createElement(P, {
                          name: t.snippet.title,
                          channel: t.snippet.channelTitle,
                          description: t.snippet.description,
                          img: t.snippet.thumbnails.high.url,
                          mini: !1,
                          onClick: function (a) {
                            return e.push('/watch-video/'.concat(t.id.videoId));
                          },
                        })
                      );
                    })
                  )
                : l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(_.a, { sm: 12 }, 'Loading...')
                  )
            )
          )
        );
      };
      a(96);
      var H,
        V,
        X,
        z = function () {
          var e = a(21),
            t = Object(s.g)(),
            r = Object(n.useRef)(null),
            c = Object(n.useState)(null),
            i = Object(o.a)(c, 2),
            u = i[0],
            m = i[1],
            d = JSON.parse(localStorage.getItem('favourites'));
          return (
            Object(n.useEffect)(function () {
              if ((console.log(d), d)) {
                var t = d.join();
                console.log('[EXEC] GET favourite videos...'),
                  e
                    .get('https://www.googleapis.com/youtube/v3/videos', {
                      params: {
                        key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                        part: 'snippet',
                        id: t,
                      },
                    })
                    .then(function (e) {
                      console.log('[SUCCESS] Favourite Videos retrieved...', e),
                        m(e.data.items);
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }
            }, []),
            l.a.createElement(
              'section',
              {
                'data-testid': 'favouritesPage',
                className: 'section favouritespage',
                ref: r,
              },
              l.a.createElement(
                I.a,
                { fluid: !0 },
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { sm: 12 },
                    l.a.createElement('h2', null, 'Favourites')
                  )
                ),
                u
                  ? l.a.createElement(
                      N.a,
                      null,
                      u.map(function (e) {
                        return l.a.createElement(
                          _.a,
                          {
                            key: e.etag,
                            sm: 12,
                            md: 3,
                            lg: 4,
                            style: { padding: '20px 10px' },
                          },
                          l.a.createElement(P, {
                            name: e.snippet.title,
                            channel: e.snippet.channelTitle,
                            description: e.snippet.description,
                            img: e.snippet.thumbnails.high.url,
                            mini: !1,
                            onClick: function (a) {
                              return t.push(
                                '/favourites/watch-video/'.concat(e.id)
                              );
                            },
                          })
                        );
                      })
                    )
                  : l.a.createElement(
                      N.a,
                      null,
                      l.a.createElement(
                        _.a,
                        { sm: 12 },
                        "You don't have any favourite video!"
                      )
                    )
              )
            )
          );
        },
        J = a(26),
        Z = R.b.div(
          H ||
            (H = Object(k.a)([
              '\n  display: grid;\n  display: -ms-grid;\n  height: 100%;\n\n  grid-row-gap: 2%;\n  \n  grid-template-rows: 70% 30%;\n  -ms-grid-rows: 60% 40%;\n  \n  grid-template-columns: 75% 25%;\n  -ms-grid-columns: 75% 25%;\n\n  grid-template-areas:\n    "player relatedVideos"\n    "details relatedVideos";\n',
            ]))
        ),
        G = R.b.div(
          V ||
            (V = Object(k.a)([
              '\n  grid-area: relatedVideos;\n  overflow-y: scroll;\n  padding: 0px 8%;\n',
            ]))
        ),
        q = R.b.div(
          X ||
            (X = Object(k.a)([
              '\n  grid-area: details;\n  overflow-y: scroll;\n',
            ]))
        );
      function L(e) {
        var t = JSON.parse(localStorage.getItem('favourites'));
        return t ? (t.includes(e) ? 1 : 0) : 3;
      }
      var K,
        D,
        Y,
        Q = function (e) {
          var t = Object(s.g)(),
            a = Object(n.useRef)(null),
            r = g().authenticated,
            c = Object(s.h)().videoId,
            i = Object(n.useState)(null),
            u = Object(o.a)(i, 2),
            m = u[0],
            d = u[1],
            p = Object(n.useState)(),
            E = Object(o.a)(p, 2),
            f = E[0],
            h = E[1],
            v = Object(n.useState)(null),
            b = Object(o.a)(v, 2),
            y = b[0],
            O = b[1],
            w = Object(n.useState)(!1),
            S = Object(o.a)(w, 2),
            j = S[0],
            x = S[1];
          return (
            Object(n.useEffect)(
              function () {
                c !== m &&
                  (m && (c = m),
                  1 === L(c) ? x(!0) : x(!1),
                  console.log('[EXEC] Get video details...'),
                  C.a
                    .get('https://www.googleapis.com/youtube/v3/videos', {
                      params: {
                        key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                        part: 'snippet',
                        id: c,
                      },
                    })
                    .then(function (e) {
                      console.log('[SUCCESS] Video details retrieved...', e),
                        console.log('[EXEC] Get related videos...'),
                        O(e.data.items[0]),
                        C.a
                          .get('https://www.googleapis.com/youtube/v3/search', {
                            params: {
                              key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                              maxResults: 5,
                              part: 'snippet',
                              relatedToVideoId: c,
                              type: 'video',
                            },
                          })
                          .then(function (e) {
                            console.log(
                              '[SUCCESS] Related videos retrieved...',
                              e
                            ),
                              h(e.data.items);
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                    })
                    .catch(function (e) {
                      console.log(e);
                    })),
                  t.push('/watch-video/'.concat(c)),
                  d(c);
              },
              [m, j]
            ),
            l.a.createElement(
              'section',
              {
                'data-testid': 'watchVideoPage',
                className: 'section watchvideopage',
                ref: a,
              },
              l.a.createElement(
                Z,
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement('iframe', {
                    id: 'ytplayer',
                    title: 'watchVideoIframe',
                    type: 'text/html',
                    width: '100%',
                    height: '100%',
                    src: 'https://www.youtube.com/embed/'.concat(c),
                    frameBorder: '0',
                    allowFullScreen: !0,
                  })
                ),
                l.a.createElement(
                  G,
                  null,
                  f
                    ? f.map(function (e) {
                        if (e.snippet)
                          return l.a.createElement(
                            N.a,
                            { style: { paddingBottom: '30px' } },
                            l.a.createElement(
                              _.a,
                              { sm: 12 },
                              l.a.createElement(P, {
                                name: e.snippet.title,
                                img: e.snippet.thumbnails.default.url,
                                onClick: function (t) {
                                  d(e.id.videoId);
                                },
                                mini: !0,
                              })
                            )
                          );
                      })
                    : l.a.createElement('p', null, 'Loading...')
                ),
                l.a.createElement(
                  q,
                  null,
                  l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(
                      _.a,
                      { sm: 12, style: { textAlign: 'right' } },
                      r
                        ? [
                            j
                              ? l.a.createElement(
                                  J.a,
                                  {
                                    variant: 'secondary',
                                    onClick: function (e) {
                                      return (function (e) {
                                        console.log(
                                          '[EXEC] Remove Favourite funct'
                                        );
                                        var t = JSON.parse(
                                            localStorage.getItem('favourites')
                                          ),
                                          a = t.indexOf(e);
                                        t.splice(a, 1),
                                          localStorage.setItem(
                                            'favourites',
                                            JSON.stringify(t)
                                          ),
                                          x(!1),
                                          console.log(
                                            JSON.parse(
                                              localStorage.getItem('favourites')
                                            )
                                          );
                                      })(m);
                                    },
                                  },
                                  'Un-favourite'
                                )
                              : l.a.createElement(
                                  J.a,
                                  {
                                    variant: 'secondary',
                                    onClick: function (e) {
                                      return (function (e) {
                                        console.log(
                                          '[EXEC] Set Favourite funct'
                                        );
                                        var t = JSON.parse(
                                          localStorage.getItem('favourites')
                                        );
                                        1 === L(e)
                                          ? alert('Alredy fav')
                                          : 0 === L(e)
                                          ? (console.log('Set Favourite'),
                                            t.push(e),
                                            localStorage.setItem(
                                              'favourites',
                                              JSON.stringify(t)
                                            ),
                                            x(!0))
                                          : 3 === L(e) &&
                                            (console.log('Set FIRST Favourite'),
                                            (t = []).push(e),
                                            localStorage.setItem(
                                              'favourites',
                                              JSON.stringify(t)
                                            ),
                                            x(!0)),
                                          console.log(
                                            JSON.parse(
                                              localStorage.getItem('favourites')
                                            )
                                          );
                                      })(m);
                                    },
                                  },
                                  'Favourite'
                                ),
                          ]
                        : null
                    )
                  ),
                  y
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement('h2', null, y.snippet.title)
                          )
                        ),
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement('p', null, y.snippet.description)
                          )
                        ),
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement(
                              'h4',
                              null,
                              y.snippet.channelTitle
                            )
                          )
                        )
                      )
                    : l.a.createElement('p', null, 'Loading...')
                )
              )
            )
          );
        },
        W = R.b.div(
          K ||
            (K = Object(k.a)([
              '\n  display: grid;\n  display: -ms-grid;\n  height: 100%;\n\n  grid-row-gap: 2%;\n  \n  grid-template-rows: 70% 30%;\n  -ms-grid-rows: 60% 40%;\n  \n  grid-template-columns: 75% 25%;\n  -ms-grid-columns: 75% 25%;\n\n  grid-template-areas:\n    "player relatedVideos"\n    "details relatedVideos";\n',
            ]))
        ),
        M = R.b.div(
          D ||
            (D = Object(k.a)([
              '\n  grid-area: relatedVideos;\n  overflow-y: scroll;\n  padding: 0px 8%;\n',
            ]))
        ),
        $ = R.b.div(
          Y ||
            (Y = Object(k.a)([
              '\n  grid-area: details;\n  overflow-y: scroll;\n',
            ]))
        );
      var ee = function () {
          var e = Object(s.g)(),
            t = Object(s.h)().videoId,
            a = Object(n.useRef)(null),
            r = Object(n.useState)(),
            c = Object(o.a)(r, 2),
            i = c[0],
            u = c[1],
            m = Object(n.useState)(null),
            d = Object(o.a)(m, 2),
            p = d[0],
            g = d[1],
            E = Object(n.useState)(null),
            f = Object(o.a)(E, 2),
            h = f[0],
            v = f[1];
          return (
            Object(n.useEffect)(
              function () {
                h && (t = h),
                  console.log('[EXEC] Get video details...'),
                  C.a
                    .get('https://www.googleapis.com/youtube/v3/videos', {
                      params: {
                        key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                        part: 'snippet',
                        id: t,
                      },
                    })
                    .then(function (e) {
                      console.log('[SUCCESS] Video details retrieved...', e),
                        g(e.data.items[0]),
                        console.log('[EXEC] Get other FAVOURITES...');
                      var a = JSON.parse(localStorage.getItem('favourites')),
                        n = a.indexOf(t);
                      a.splice(n, 1);
                      var l = a.join();
                      C.a
                        .get('https://www.googleapis.com/youtube/v3/videos', {
                          params: {
                            key: 'AIzaSyBTHqXQZ_H5AnKGg82YtlRRx0eZ5Orx2U4',
                            part: 'snippet',
                            id: l,
                          },
                        })
                        .then(function (e) {
                          console.log(
                            '[SUCCESS] Other FAVOURITE retrieved...',
                            e
                          ),
                            u(e.data.items);
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                  e.push('/favourites/watch-video/'.concat(t)),
                  v(t);
              },
              [h]
            ),
            l.a.createElement(
              'section',
              {
                'data-testid': 'watchFavouritePage',
                className: 'section watchfavouritepage',
                ref: a,
              },
              l.a.createElement(
                W,
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement('iframe', {
                    id: 'ytplayer',
                    title: 'watchVideoIframe',
                    type: 'text/html',
                    width: '100%',
                    height: '100%',
                    src: 'https://www.youtube.com/embed/'.concat(t),
                    frameBorder: '0',
                    allowFullScreen: !0,
                  })
                ),
                l.a.createElement(
                  M,
                  null,
                  i
                    ? i.map(function (e) {
                        if (e.snippet)
                          return l.a.createElement(
                            N.a,
                            { style: { paddingBottom: '30px' } },
                            l.a.createElement(
                              _.a,
                              { sm: 12 },
                              l.a.createElement(P, {
                                name: e.snippet.title,
                                img: e.snippet.thumbnails.default.url,
                                onClick: function (t) {
                                  v(e.id);
                                },
                                mini: !0,
                              })
                            )
                          );
                      })
                    : l.a.createElement('p', null, 'Loading...')
                ),
                l.a.createElement(
                  $,
                  null,
                  p
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement('h2', null, p.snippet.title)
                          )
                        ),
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement('p', null, p.snippet.description)
                          )
                        ),
                        l.a.createElement(
                          N.a,
                          null,
                          l.a.createElement(
                            _.a,
                            { sm: 12 },
                            l.a.createElement(
                              'h4',
                              null,
                              p.snippet.channelTitle
                            )
                          )
                        )
                      )
                    : l.a.createElement('p', null, 'Loading...')
                )
              )
            )
          );
        },
        te = a(30),
        ae = a.n(te),
        ne = a(38),
        le = {
          id: '123',
          name: 'Wizeline',
          avatarUrl:
            'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        };
      function re(e, t) {
        return ce.apply(this, arguments);
      }
      function ce() {
        return (ce = Object(ne.a)(
          ae.a.mark(function e(t, a) {
            return ae.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(function (e, n) {
                        setTimeout(function () {
                          return 'wizeline' === t && 'Rocks!' === a
                            ? e(le)
                            : n(new Error('Username or password invalid'));
                        }, 500);
                      })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      a(98);
      var oe = function () {
        var e = g().login,
          t = Object(s.g)(),
          a = Object(n.useState)(!1),
          r = Object(o.a)(a, 2),
          c = r[0],
          i = r[1];
        function u() {
          return (u = Object(ne.a)(
            ae.a.mark(function a(n) {
              return ae.a.wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        n.preventDefault(),
                        (a.next = 3),
                        re(n.target.username.value, n.target.password.value)
                          .then(function (a) {
                            console.log('[SUCCESS] Logged in...', a),
                              e(),
                              t.push('/');
                          })
                          .catch(function (e) {
                            console.log('[ERROR] Failed to log in...', e),
                              i(!0);
                          })
                      );
                    case 3:
                    case 'end':
                      return a.stop();
                  }
              }, a);
            })
          )).apply(this, arguments);
        }
        return l.a.createElement(
          'section',
          { className: 'login' },
          l.a.createElement('h1', null, 'Welcome back!'),
          l.a.createElement(
            'form',
            {
              onSubmit: function (e) {
                return u.apply(this, arguments);
              },
              className: 'login-form',
            },
            l.a.createElement(
              'div',
              { className: 'form-group' },
              l.a.createElement(
                'label',
                { htmlFor: 'username' },
                l.a.createElement('strong', null, 'username '),
                l.a.createElement('input', {
                  required: !0,
                  type: 'text',
                  id: 'username',
                })
              )
            ),
            l.a.createElement(
              'div',
              { className: 'form-group' },
              l.a.createElement(
                'label',
                { htmlFor: 'password' },
                l.a.createElement('strong', null, 'password '),
                l.a.createElement('input', {
                  required: !0,
                  type: 'password',
                  id: 'password',
                })
              )
            ),
            c
              ? l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'p',
                    { style: { color: 'red' } },
                    'Failed to log in. Please check your credentials.'
                  )
                )
              : null,
            l.a.createElement('button', { type: 'submit' }, 'login')
          )
        );
      };
      a(99);
      var ie = function () {
        return l.a.createElement(
          'section',
          { className: 'not-found' },
          l.a.createElement(i.b, { to: '/', className: 'home-link' }, 'home'),
          l.a.createElement('img', { src: '404.gif', alt: 'page not found' })
        );
      };
      var se = function () {
          return l.a.createElement(
            'section',
            null,
            l.a.createElement(
              'pre',
              null,
              'welcome, voyager...',
              l.a.createElement(i.b, { to: '/' }, ' \u2190 go back')
            ),
            l.a.createElement('iframe', {
              width: '800',
              height: '450',
              allowFullScreen: !0,
              frameBorder: '0',
              title: 'rick roll',
              src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1',
              allow:
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
            })
          );
        },
        ue = ['children'];
      var me = function (e) {
        var t = e.children,
          a = Object(w.a)(e, ue),
          n = g().authenticated;
        return l.a.createElement(
          s.b,
          Object.assign({}, a, {
            render: function () {
              return n ? t : l.a.createElement(s.a, { to: '/' });
            },
          })
        );
      };
      a(100);
      var de,
        pe,
        ge,
        Ee,
        fe,
        he,
        ve,
        be,
        ye,
        Oe,
        we,
        Se,
        je,
        xe,
        Ce,
        Ie,
        Ne = function () {
          return l.a.createElement('div', null);
        },
        _e = a(43),
        ke = a(61),
        Re = a(27),
        Te = (a(101), ['svgRef', 'title']);
      function Ae() {
        return (Ae =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Fe(e, t) {
        if (null == e) return {};
        var a,
          n,
          l = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              l = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++)
              (a = r[n]), t.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      var Ue = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = Fe(e, Te);
          return l.a.createElement(
            'svg',
            Ae(
              {
                id: 'Layer_1',
                className: 'menu_svg',
                x: '0px',
                y: '0px',
                viewBox: '0 0 377 377',
                style: { enableBackground: 'new 0 0 377 377', height: '100%' },
                xmlSpace: 'preserve',
                ref: t,
              },
              n
            ),
            a ? l.a.createElement('title', null, a) : null,
            de ||
              (de = l.a.createElement(
                'g',
                null,
                l.a.createElement('circle', { cx: 15, cy: 88.5, r: 15 }),
                l.a.createElement('rect', {
                  x: 75,
                  y: 73.5,
                  width: 302,
                  height: 30,
                }),
                l.a.createElement('circle', { cx: 15, cy: 288.5, r: 15 }),
                l.a.createElement('rect', {
                  x: 75,
                  y: 273.5,
                  width: 302,
                  height: 30,
                }),
                l.a.createElement('circle', { cx: 15, cy: 188.5, r: 15 }),
                l.a.createElement('rect', {
                  x: 75,
                  y: 173.5,
                  width: 302,
                  height: 30,
                })
              )),
            pe || (pe = l.a.createElement('g', null)),
            ge || (ge = l.a.createElement('g', null)),
            Ee || (Ee = l.a.createElement('g', null)),
            fe || (fe = l.a.createElement('g', null)),
            he || (he = l.a.createElement('g', null)),
            ve || (ve = l.a.createElement('g', null)),
            be || (be = l.a.createElement('g', null)),
            ye || (ye = l.a.createElement('g', null)),
            Oe || (Oe = l.a.createElement('g', null)),
            we || (we = l.a.createElement('g', null)),
            Se || (Se = l.a.createElement('g', null)),
            je || (je = l.a.createElement('g', null)),
            xe || (xe = l.a.createElement('g', null)),
            Ce || (Ce = l.a.createElement('g', null)),
            Ie || (Ie = l.a.createElement('g', null))
          );
        },
        Pe = l.a.forwardRef(function (e, t) {
          return l.a.createElement(Ue, Ae({ svgRef: t }, e));
        });
      a.p;
      var Be = function (e) {
        var t = e.children,
          a = g(),
          r = a.authenticated,
          c = a.logout,
          i = Object(n.useContext)(u),
          m = Object(s.g)(),
          d = Object(n.useState)(!1),
          p = Object(o.a)(d, 2),
          E = p[0],
          f = p[1];
        return l.a.createElement(
          'div',
          { id: 'layout', className: E ? 'sidebar_display' : 'sidebar_hidden' },
          l.a.createElement(
            'div',
            { id: 'header' },
            l.a.createElement(
              I.a,
              { fluid: !0 },
              l.a.createElement(
                N.a,
                null,
                l.a.createElement(
                  _.a,
                  { sm: 2, md: 1, style: { justifyContent: 'center' } },
                  l.a.createElement(
                    'figure',
                    {
                      onClick: function (e) {
                        return f(!E);
                      },
                    },
                    l.a.createElement(Pe, null)
                  )
                ),
                l.a.createElement(
                  _.a,
                  { sm: 6, md: 8, style: { alignItems: 'center' } },
                  l.a.createElement(
                    _e.a,
                    {
                      style: { width: '100%' },
                      onSubmit: function (e) {
                        e.preventDefault(), i.setSearch(e.target.search.value);
                      },
                    },
                    l.a.createElement(
                      ke.a,
                      null,
                      l.a.createElement(_e.a.Control, {
                        placeholder: 'Tampico alien abduction',
                        'aria-label': 'Tampico alien abduction',
                        'aria-describedby': 'basic-addon2',
                        name: 'search',
                      }),
                      l.a.createElement(
                        J.a,
                        {
                          variant: 'outline-secondary',
                          id: 'button-addon2',
                          type: 'submit',
                        },
                        'Search'
                      )
                    )
                  )
                ),
                l.a.createElement(
                  _.a,
                  {
                    sm: 2,
                    md: 2,
                    style: { alignItems: 'center', justifyContent: 'center' },
                  },
                  'Theme'
                ),
                l.a.createElement(
                  _.a,
                  {
                    sm: 2,
                    md: 1,
                    style: { alignItems: 'center', justifyContent: 'center' },
                  },
                  l.a.createElement(
                    Re.a,
                    null,
                    l.a.createElement(
                      Re.a.Toggle,
                      { variant: 'success', id: 'dropdown-basic' },
                      'Profile'
                    ),
                    l.a.createElement(
                      Re.a.Menu,
                      null,
                      l.a.createElement(Re.a.Item, null, 'Account'),
                      r
                        ? l.a.createElement(
                            Re.a.Item,
                            {
                              onClick: function (e) {
                                return c();
                              },
                            },
                            'Log out'
                          )
                        : l.a.createElement(
                            Re.a.Item,
                            {
                              onClick: function (e) {
                                return m.push('/login');
                              },
                            },
                            'Log in'
                          )
                    )
                  )
                )
              )
            )
          ),
          E
            ? l.a.createElement(
                'div',
                { id: 'sidebar' },
                l.a.createElement(
                  I.a,
                  { fluid: !0 },
                  l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(
                      _.a,
                      {
                        sm: 12,
                        className: 'sidebar_col',
                        onClick: function (e) {
                          return m.push('/');
                        },
                      },
                      l.a.createElement(
                        'button',
                        { className: 'sidebar_btn' },
                        'Home'
                      )
                    )
                  ),
                  r
                    ? l.a.createElement(
                        N.a,
                        null,
                        l.a.createElement(
                          _.a,
                          { sm: 12, className: 'sidebar_col' },
                          l.a.createElement(
                            'button',
                            {
                              className: 'sidebar_btn',
                              onClick: function (e) {
                                return m.push('/favourites');
                              },
                            },
                            'Favourites'
                          )
                        )
                      )
                    : null,
                  l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(
                      _.a,
                      { sm: 12, className: 'sidebar_col' },
                      l.a.createElement(
                        'button',
                        { className: 'sidebar_btn' },
                        'Music'
                      )
                    )
                  ),
                  l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(
                      _.a,
                      { sm: 12, className: 'sidebar_col' },
                      l.a.createElement(
                        'button',
                        { className: 'sidebar_btn' },
                        'Sports'
                      )
                    )
                  )
                )
              )
            : null,
          l.a.createElement('main', { className: 'main_container' }, t)
        );
      };
      var He = function () {
        Object(n.useLayoutEffect)(function () {}, []);
        var e = Object(n.useContext)(u),
          t = l.a.useState(),
          a = Object(o.a)(t, 2),
          r = a[0],
          c = a[1];
        return l.a.createElement(
          i.a,
          { 'data-testid': 'app' },
          l.a.createElement(
            O,
            null,
            l.a.createElement(
              u.Provider,
              { value: { name: e.name, search: r, setSearch: c } },
              l.a.createElement(
                Be,
                null,
                l.a.createElement(
                  s.d,
                  null,
                  l.a.createElement(
                    s.b,
                    { exact: !0, path: '/' },
                    l.a.createElement(B, null)
                  ),
                  l.a.createElement(
                    s.b,
                    { exact: !0, path: '/watch-video/:videoId' },
                    l.a.createElement(Q, null)
                  ),
                  l.a.createElement(
                    s.b,
                    { exact: !0, path: '/login' },
                    l.a.createElement(oe, null)
                  ),
                  l.a.createElement(j, {
                    component: z,
                    path: '/favourites',
                    exact: !0,
                  }),
                  l.a.createElement(j, {
                    component: ee,
                    path: '/favourites/watch-video/:videoId',
                    exact: !0,
                  }),
                  l.a.createElement(
                    me,
                    { exact: !0, path: '/secret' },
                    l.a.createElement(se, null)
                  ),
                  l.a.createElement(
                    s.b,
                    { path: '*' },
                    l.a.createElement(ie, null)
                  )
                ),
                l.a.createElement(Ne, null)
              )
            )
          )
        );
      };
      a(102);
      c.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(He, null)),
        document.getElementById('root')
      );
    },
    63: function (e, t, a) {
      e.exports = a(103);
    },
    93: function (e, t, a) {},
    96: function (e, t, a) {},
    98: function (e, t, a) {},
    99: function (e, t, a) {},
  },
  [[63, 1, 2]],
]);
//# sourceMappingURL=main.d014e1b8.chunk.js.map
