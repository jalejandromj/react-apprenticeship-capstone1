import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import axios from 'axios';

import FavouritesPage from './Favourites.page.jsx';
import AuthProvider from '../../providers/Auth';

const url = 'https://www.googleapis.com/youtube/v3/videos';
const params = {
  maxResults: null,
  part: 'snippet',
  type: null,
  q: null,
  id: null,
};
jest.mock("axios", () => ({
  get: jest.fn((url, params) => { 
    return new Promise((resolve) => {
      url = url
      params = params
      resolve(false)
    })
  })
}))

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavouritesPage />, div);
});

test('Initial search with the YT API', async () => {
  await act( async () => render(<FavouritesPage/>));

  const response = {
    "data": {
        "kind": "youtube#searchListResponse",
        "etag": "XfPk4IHqlBWBBCD6n1dXfatKrb8",
        "nextPageToken": "CAgQAA",
        "regionCode": "MX",
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "QvPwv8AW21jIyqmLCLdOM74uMWU",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "RzOFBwiwBec"
                },
                "snippet": {
                    "publishedAt": "2021-12-22T21:33:28Z",
                    "channelId": "UCX9c0-oMl9j03kDgfhY4Y0A",
                    "title": "VBLOG PLAYA ALIENS Y MAPACHES EN TAMPICO",
                    "description": "Las cosas divertidas que puedes encontrar en playa Miramar de Tampico, Mapaches, Aliens y muchas cosas mas. DISCORD ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/RzOFBwiwBec/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/RzOFBwiwBec/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/RzOFBwiwBec/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Tio Beto",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-12-22T21:33:28Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "uN-nKBapaTvN0sK5BH6VrF7d070",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "XJtw6AhuKDY"
                },
                "snippet": {
                    "publishedAt": "2020-01-13T18:12:11Z",
                    "channelId": "UCUsm-fannqOY02PNN67C0KA",
                    "title": "Playa Miramar, hogar de mapaches que conviven con turistas - Despierta",
                    "description": "La Playa Miramar de Ciudad Madero, en Tamaulipas, es hogar de mapaches que conviven con turistas Suscríbete aquí: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XJtw6AhuKDY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XJtw6AhuKDY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XJtw6AhuKDY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Noticieros Televisa",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-01-13T18:12:11Z"
                }
            }
        ]
    }
}

  act(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
  });

  expect(axios.get).toHaveBeenCalledTimes(2);
})