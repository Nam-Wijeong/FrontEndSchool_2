## HTML Living Standard

- HTML Living Standard(html.spec.whatwg.org) Multipage Version

## HTML 정리

- 시맨틱한 마크업 : 유지보수 측면에서 사람이나 기계(특히 검색엔진)가 해당 마크업을 읽었을 때 그 의도를 파악할 수 있는 코드로 작성하는 것

- h1 ~ h6는 익명 영역을 생성.
- meta에 "og:title"
  - Open Graph Protocol(Facebook...)
  - https://ogp.me/
  ```
  html
  <head>
  <title>The Rock (1996)</title>
  <meta property="og:title" content="The Rock" />
  <meta property="og:type" content="video.movie" />
  <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
  <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
  ...
  </head>
  ```

* meta에 "twitter : description"

  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

- Entity Code
  - https://entitycode.com/

* table : div 만으로도 table을 만들 수 있으나 요즘은 사용하지 않습니다.
