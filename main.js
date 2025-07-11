// 获取用户首选语言，判断是否为中文
function shouldUseChineseByLang() {
  const lang = navigator.language || navigator.userLanguage;
  // 只要以zh开头都认为是中文（如zh-CN, zh-TW, zh-HK等）
  return lang && lang.toLowerCase().startsWith('zh');
}

const images = [
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aditya-aiyar-615049-1407325.webp",
      "blur": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAwCdASoeACgAPpFGnkslo6KnpWgA8BIJZwDH5A+f5zYAAP7zQSRmH/EXQTjWHGSLQpVxL8De29CBuIJaIyX9CU3zkAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-adonyi-foto-1558916.webp",
      "blur": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACQBgCdASoeAC0APnk0k0ekriGnOrmYAcAPCWMAnTMzhwx/SAYh848k64bdWnoc6arYtzUgBklUS5oQE7JQAP7+R7l7g/jLsEo+kRSMo6LCAd0obhhtxUqxvqXB9rbsN3R8mwK9AK3zyWiLnOIADY7aGCB3RY4IAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aeppli-2828554.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAwCdASoeACgAPpE+mkkvoyKhJWzJ8BIJZwC7AA52E+bnDYkE84AA/ur7lpgzzUho1EyKiiwHma4JPUW7+/5GC4w1u9y/hi6L6yFJT/o1WgSnndSAi6QAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aleksey-kuprikov-1883853-3551216.webp",
      "blur": "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAgCdASoeABQAPpFCm0olo6IhqAgAsBIJaQAAP9Mx2AD+9ZniroTsfgt/TN0/1kSCxs/pLI09sAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aleksey-kuprikov-1883853-3551227.webp",
      "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQBACdASoeACgAPpE6lUgloyIhMBVdULASCWUAw3APcn1LOTW0K3MsWAD+7sT9lA5mjxebfgy1O//jl+d7jvvtz4vL67FMH2O+haTCe209mVAZjueRLwQ3VDRoHUaut0fPw9rw1E3owAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-alexazabache-3214944.webp",
      "blur": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwBQCdASoeAC0APoEwlEelIqIhNVv8AKAQCWUAvkhKySDhxjvaGFmcmQilW6+46BwvQADuii0N2G2rWUd4Mi0xc9M1qIxIx4PATaH3b51fQq7J1Sq4axhh0JcHj4WGNJgVCRayf2lQdhesNUKJx+8O21J7PgAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014733.webp",
      "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwBACdASoeAC0APpE6l0i3OaIoKrgN+zASCWcBOq6xBDTmPRGl20MKg+xWVhAAAP7pCaXwmLlotIg8T3Mx9eeNIfi7Qn7i7hANHEdXwV8qzFe7zeWqkwFwO8xfZxTAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014735.webp",
      "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQBQCdASoeAC0APo02lkelIqIhMAqooBGJZwDGQC74o/V4oCYlD6drsRjIyZ5EDFFNdgAA/uqR4Jpvi3eITuzT2NcEYZn4gaAwTddao0IqNgdCY78OUZE39EnkXGFOZeYjOccs/tOu9JB+qGBb25SMzAAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6015518.webp",
      "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwBQCdASoeAC0APo06l0e2o6ohMBqqqtARiWcAxnO+y/oYHFUTEZlZ9R2etsYggCMwgAD+9pGVFQX/saA2yVkcXQgMYNkqXXf/IDAif8MosqpofzbBWvSC6g958R7o6XNHl/iQWMdOAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-andy-dufresne-1782800-15722322.webp",
      "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAACwBQCdASoeAC0APn0ylEe7IyIqtUwDYA+JZQC/7CzaeJ9IPpvMuJDjOWTPv7vJiH9P6Bg9dkAA/tNNG9pMocBCraYOzcd9tpVjLCm4aorPtYGjQn3+SIqZgpnvjtx8P//8TQggJgAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arina-krasnikova-6998579.webp",
      "blur": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwBQCdASoeAC0APoU0lkelIqIhNVv4AKAQiWcAvdAhVrE5vHnLfudCWA2N1XcOtCQZ/W2AAP5XJvwzpeiL9YjdyLIfw8+AIKvjX06W0maZSdjMgqa13Y12ilLM3RFbdXogAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aronvisuals-1643113.webp",
      "blur": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAACQBACdASoeACYAPpE4lkgrtSIhMBqqqqASCWUApd++R+w8g+g6f1dJMGz4bIgA8bGVsp/yaMfI5ohOfhru2HxGb+q9zHMxs9H/QsBSL9hx0IaB1BDC8xmyLxZRtqAdkwAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arts-1547815.webp",
      "blur": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAACwBACdASoeAC0APpE8l0elo6yhKq35kBIJZQC2yBZuh6W6ca+nqkjy4fSSSMRgAP75EyFMnKWAhyRrJ4ll67rIpTf6SE82eq74W3GxhXxyl07lGi8f65ZUN3A79sNLKTsyo1wv5oAn+0CttcLLtb7eWj4DYAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-asadphoto-3426870.webp",
      "blur": "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADwBACdASoeAC0APpFEnEslo6KlJWgAsBIJY2rDU1ah17+BMCyZhX65pjFCL+AVAQAA/txr3kJwGyf29dov7x+f2TrDUxK22vXVMKARMTJf8/zoPZlw/NoTqorzxgsjOYuEU0er7xAmw3s5oR5K7PbWuC/VLs+ViAFLAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-athena-1586795.webp",
      "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQBgCdASoeAC0APpE8mEelo6KhKrgN+LASCWMAtvuFBCArttUDzAIdNS5zL85CFIk+KNqJAswfSvzj4AD+8dp+fKIHMjAqcrT1VoZkgG6rqxXmpG0P/yk8Be+cci3piE45nOJVYulIpXwon3HuMw/DkAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aydinjpg-32910500.webp",
      "blur": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAADwBACdASoeACgAPo04lEeno6IhMAqo8BGJZQCnR22EsLiYK8xwQwCvKnNO38+0gAAA/u7N4fcPOo/8MXi81XhL9xtsBNRH2O8ZAFakd9Tj2LoxtmvlX1CyL+E2TDFiosl8RSIANS2RlcsWuSZNHAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-berend-1452701.webp",
      "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwBACdASoeABEAPpE+l0iloyIhMBgIALASCWMArAARDzVd4htbtphqyTt3b7GQsMAA3DuhYBsxUXBw7NlXrRPf/iv097LHafUbmHkZP5paScwjcyMbzFChPepYAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-bertellifotografia-2868224.webp",
      "blur": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACQBQCdASoeAC0APo00lkelIqIhOrM4AKARiWUArC/IA7azvKXSFFc0j/33xzcjd0Ghdg2sAAD+9w9b0TM5oQ4lmn8dGH1tkTfV57h+o20VR+6Xwr8MUrioqNfVBEDqnqTwDsro4YfXZBuqMUDiqNVJUAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blaque-x-264516-932638.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAwCdASoeABQAPpE4mUkloyIhMBgIALASCUATpm5INUAWZ5mP6AAA/u6OTjEK35vcoN0ABKT/5G3tG1YBNzuSDD4f6l/B1qN9MxuK2ozQcdBKeF+5G7kgAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-895501.webp",
      "blur": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACQAwCdASoeABQAPpE6l0elo6IhMAgAsBIJZwAAW9F9XFJgUikAAP4cLm5kRRRyFJvbJ3pdUAq2t6UE8Hhdee6kwAAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-902204.webp",
      "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwBACdASoeABQAPoE0lEelIyIhN/qoAKAQCWcAvkgh1r3U7+GGqjerlpIETVyCdWAA/tTvGV+Io2H/bytsVGghWTkuPsfdLcklWi1B8xKW2ndGMAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-brett-sayles-1322185.webp",
      "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQBACdASoeABQAPpE6mUgloyKhKA1QsBIJYgCdMoR5haaA2MIXtURcs57J4AmRcAD7MCxJsv/jlSuUSKETZ/9fWz/sqX7M8sbZWwZT4YjDu705K8TJkyDatvxGDpJMlKxCIFJ7u5ax1gAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-castorlystock-3725743.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAwBACdASoeABQAPn0wkkekoyGhN+gAkA+JZQDCgDIgFIN9j3WLKrIxhpAA/vY+RPizxayoW5eBYDyH6smRDLXdAKEA2AWOz/aFyar77jpBwAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-22710827.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQBgCdASoeAC0APn0wkkewoyGhOrzIAhAPiWkAAHooHsg+/0PYKkaXVrQsPuIs80Pic4LOZTsHpRi9gAD++fN+Z7De7tu3Y63czudUAHF7Gg1mAHc1WbAAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-22710969.webp",
      "blur": "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAABQAwCdASoeABQAPpFCnEo3I6KhqAgC4BIJaQAAQzbFNqAAAAD+76XPxCTk8x5O7hsI6xWxiAAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-22710979.webp",
      "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQBgCdASoeADEAPo02lkevIyIhMBgN+eARiWkA0ugWTuRYOAAeNSyywTePaQDRWBf9JfcxdqMNE+AA/vetxr3lMcD37Kp6Ai4Er2DMwzFglHzPv3HKNlyGvzdYAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-23021463.webp",
      "blur": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACwBACdASoeACwAPoE0lEelIyIhOrZoAKAQCWUArhwbDUnSPCU9pWNl/sGAnoEAAP7p3OkNm4p/twVCnZCYatlgxJpLpc1e4Awzwzy+dH3gS7OQK+G3ILAsibkaTU9vPnzg8sWSMQhoI9NcSq1bGz0noHiIESzkCOuWqJdrXjIAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-connor-danylenko-534256-1414535.webp",
      "blur": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABQAwCdASoeAC0APpFCmkqlo6IiJWmYsBIJZwDIIBdb/G2DgAD+8Whgj2f3i+4nGyhIIFGCq72fyPkzkWf9iu/VemEAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947792.webp",
      "blur": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAwBQCdASoeAC0APok2lkelIyIhMAqooBEJZwDGc19Ev89T2jITEcPV5tBfxI2fLCw0AAD+8O93jy4Ut1+tgwb9QivA/8nG+cL7s7+W70swN4ScksBchUzvB1MBDiQnviy0x/++/th1z8N4WZPKP4AA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947796.webp",
      "blur": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABQBgCdASoeAC0APpE8mkkloyIiMBVYALASCWcAy+AubVrAU6ol+yulzwVYovDEFWmF+ymC8jjPWYS0AAD+9O0cr17YbmFrh6shD9XvzWfNOPbTjyesQrcZmSIVt5I+uY3AAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-8391652.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACQAwCdASoeABQAPpE+mEiloyIhMBgIALASCWcAAESe6e7McKLAAP7vXyPryEk/ritlggccm603G7SEZMDqmCFUbpWbopHkhw1u2ROLPolTAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-danielle-rangel-342268-3363674.webp",
      "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACQBQCdASoeAC0APoU4lUelI64hMA1RwBCJZwDBD6aDTtiwEEr81TaxAfi4jQfZL1OCdjDqwAD++uyPe9o34clghIcVlsRXNhs4NJE05rNCWRiG/nt6ni1EQP3Pqy486E+ki+ZG4rvOgAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-didsss-2932089.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQBACdASoeAC0APpE4l0glrCKhMBVdUYASCWcAwZAOA47kU9HVZJjJoSZOTiQmAAD+9WqY7cumP5ejT3UCJSwtRxMOuqrq7UlQGxw34OfN69VyaIy/3hAAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-1367192.webp",
      "blur": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABQAwCdASoeABQAPoUwlUelIqIhN/qoAKAQiWkAAFucvFWGoAD+xL9FlnOs2kHjHDMyHbMoOR7fUEqb85TgzG4u6+gIAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-1612461.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABQAwCdASoeAC0APpFEmkqlo6InJWmY4BIJZwC7ABa9Cc18gAD+8WfSLcEnJ+aT6FdTRzym901H3yqG2rd83AZVEsNP/hnQ8V0YDl8y/Xl2wAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-2088203.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQAwCdASoeAC0APoU4lUenI6IhMA1Q4BCJQBVLhcUD5StAAAD+9RnDuMn6Xvxd2IyL/+C9jEYjShyI9qed3nuVWQy2vL6ZZTAEz5dO2MpsIIdIAMrmH6wAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-2437299.webp",
      "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABQAwCdASoeACYAPpFCm0qro6YhpWmZcBIJZwDImBEHy3KLoAD+6CJj7aVfXjItTqZZAcWISvx7ks21HQY5aTSfJMnTSm/B7eeF1gAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekamelev-813870.webp",
      "blur": "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAgCdASoeAA8APpE6mEeloyKhMAgAsBIJaQC7ADDWAAD+839VBxCTjC35GlZOBgAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766254.webp",
      "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAwCdASoeABQAPoE0lEelIyIhN/qoAKAQCWkswANwAHX5mzhblAAA/FyMIEW2ouwXFlPMPDf0MFUHn1fc4+lk7ctE+8n4IgstAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766259.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQBACdASoeAC0APpFAmEk7JCIhKqoDYBIJZwDCCB7H7oXHFhpSBDGegiEAAP7xAFtGf7SOIxQ8QTdl6LxBeaphoRf83OqPLe4r9ZeZZJdorNiGI7SdsYwcIAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766266.webp",
      "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAABQBACdASoeAC0APpE8mEkrs6IhKrgMAnASCWcAwoAOdN5BOpo6uD4yTAAAAP7z9IFMt0Fbk/S82TvS9RyE/piLk1KtvaphVlRZG8+veycUYmVDG5JOfFZaNG4AAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766454.webp",
      "blur": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQBQCdASoeAC0APpE+mUilo6KhKqoAsBIJaQDJTB3cRelZLDR/lM8CxQ05ZRHT//qAAP7s+v++Hy/wxeLvV2R4IXHMx7BRwGQ17P0RlrH2/BqD7NYS4Z/EB9MtM4NDAnAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766458.webp",
      "blur": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAwAwCdASoeABQAPpE+nEk/IywhKAqr4BIJZwDG9BXe8UwAAP7rfr+p6/cdeFAamB2b+BPsqyrHSBdHsAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766514.webp",
      "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACQBACdASoeAC0APpE6mEgvoyKhKrgN+fASCWcAxkAPboji2N7gfJAOVpZoPQAA/u3lezIgEHxhNJOjKvV6MjRih25uL2kQxERcbHpFk+dxpxCbkC+e2h3/CKCGrCEfbhBgs98MYAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-7445007.webp",
      "blur": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABQBACdASoeAC0APnUukUekoqGhOqgAkA6JZwDE2EyepvqnYXHYZFbrFmOAAP7v2Ump/kTsbpRb5LJ5mGvqOQUCR0yaOoSpQhQ2crCIfbAzPWW2lRvyueDP2GBRrYuSzp1ZRAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-elizabeth-tr-armstrong-128038-680230.webp",
      "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAwCdASoeABEAPpE8l0iloyohKA1RQBIJYwDCgBEd/qq9JGqsIAD+8yA5N3Lo/7U/ez56vyc3e6+xPqw17DYQw7rpqGLLJvVN1EAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-elly-fairytale-3865676.webp",
      "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABwBQCdASoeAC0APn00k0ekoyGhOrmYAJAPiWkAyngh387K4AvoboQGn4TkfcFNGeetam2oAP736XqAiDliSg/NTUOdCLEbs18N3XPl941YQ4yJ5SRhKTOt7dY9g8oeydcyUDuAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-entero-32930830.webp",
      "blur": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwBQCdASoeAC0APn00lEekoyIhMA1QkA+JZwDMWC4KMTFmBiiXuNpm6RsjhdWeDVuoAAD++Fu2H2ZDA8OP6Ag5c4QxKi66hQsTDY/WHY+XRCUQfz0krh+Qph0uUZUZHEkRRO0ODoX7SXU5DreheWQ68T7a8wWjwAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eyupbelen-1428634.webp",
      "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAABQBACdASoeABQAPpE6l0ero6IhMAgBcBIJQBWHKCpPxtAisJG/SUPWSPFAAPCdtXSe0Jka3keGwvbp/4I7LrSeBjC5uwwKqDtRLddrcMAsk49FDxlPk98oK+AAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-fabianwiktor-994605.webp",
      "blur": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAwCdASoeABcAPpE4lkeloyIhMBgMALASCWUAnQAjSXn7LGPIgYAA/f/vs0A/PHZ7h+kwt45AH717VyyrKhz64vNGYGw0QjlM1i4iXHDM2kgz4UE5ylAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-fotios-photos-1921336.webp",
      "blur": "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACQBQCdASoeAC0APoU2lEelIyIhNVgMAKAQiUAVhnVfjwN8sZaIwByA76ZyYsWKATyUDqQoAAD+5BgFuxn8n25/faVKrwO3M70zMBcZ2zfPHSSfxzN9h+OZ36aeloxkwBbtd4G0ON33271sQqi8ZNABlfo3P3qfHvh5XN7A84k/U+4AAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-francesco-ungaro-2325447.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAwCdASoeABQAPpFAmEgrpCKhMBgIAXASCWUApxQ4UebUeq0b15gA/qqbnrRjmjxeba1dcweGbsnWV+B+ebIqd4ZwSzo1+gY75vlV3H3ekAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419115.webp",
      "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQBACdASoeAC0APpE6mEkloyIosBVYARASCWcAyNQLM5eNXHdwUea5mM4QAP71luftJCHgXQeDMf5rjKpolsRmyI2WmKb8YHGz9+Ao7Rkw368PE2lFQyQAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419148.webp",
      "blur": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAwCdASoeAC0APpFEm0qvo6YkpWmZ8BIJaQDO7A45JVBjrbk/rNAA/tnVubptz4cGd07vRlcEZ2r9txv8GEV9tvxmAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419194.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABQAwCdASoeAC0APpFAmUmlo7YhJWzKwBIJZwCo9A7tjko/IgD+8N0Cun2Mczcrlz2X7+qyD5SAFv9uX49TSgq/lQH79sFNJ8KEUXwfdbHR8AAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431486.webp",
      "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABwAwCdASoeAC0APpFAmkizKiKhKrgMAmASCWcAxgQCSOh3vAAA/Q2b50dIW85ivx3kyy5cc463C7/T4NCGB8tW3mjR4igrAc17MAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431489.webp",
      "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwBQCdASoeAC0APpE0mEeloqKhMBqqqLASCWcAy+XnwSNEsUYB+S/O2bsQhYMXRaeEoKbzJQAA/tzJF/l9xU3IRecjHUryMEeb9tCcETHo7W2dFgTHRXAEYATAWfmwAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-hayatiilker-32924458.webp",
      "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwBgCdASoeAC0APpFGnUslo6KhpWgAsBIJZwC5IAt0JHu/i7j2Ymk0s84b5WtJ2PMdCT7hpHDAbRKgAP7xTXisMtQSILm4gWwkZ78vgMh7Duv/2TXvP26jPBKZPw4LSZUu+Tv0wtN4LNMAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-hikaique-775201.webp",
      "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAwCdASoeAC0APpE8lUgroyulqq35cBIJZwDH5BsO0fKlePTSAAD+71+Q+RtpvNbXjPS2lz3Shp6x2iUi5r/jgiQ0QVhy5l3YrgOWEas3X3LhAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-innature-1032814.webp",
      "blur": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABQBACdASoeACgAPpE8mUiroyKhKqoBcBIJZQC3QB82miRRmDQjEjrzlG7gAP6ra2e74H/8V/KruvudG9X2Fb0KsC8Su4tD9T5utbjMuDtW75w0WzEukjxCYXnyt4dZ/gAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-irenelasus-88517.webp",
      "blur": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoeAC0APpFAmEolo6IhpWzIsBIJY2tPSoh2IGuJdVd5Bt+CmJgA/ugc3zxj78cACfv+plJvbXx//vdexUsqkZK4zwmxAVzMUcVoL6Va/YvMtUCu16LDqf9LtbjxD/cuo3j/mbXlLPhR4wRpfGyxFuZo2AAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-italo-melo-248867-2356140.webp",
      "blur": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAABwBQCdASoeACcAPoEyk0e+oyGhOrmYA9AQCUAWdnHQygcleEBoy/emZS/XMK1FXxuXw8EAAP7rRn/JZ/y2ta7hMNcAIaSrWselAmmCFc4m2s5yxFkeoLKT8XXMnZsJohth/GuITVGcbeLeWT36zIeE5DuppbqltWgs7KGAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jani-tisler-526626-1313399.webp",
      "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQBQCdASoeAC0APo04lUelKSIhNVQMASARiWUAuzOOwRt98hQS9zHMyeWzVBcJFcQAAP7nXPXPAbwDt7gqrAuXLgCiLKcqVVQFDhaQwmCUpgQd/gaNwxJ4c3LZKoObHIuFHYAAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1563604.webp",
      "blur": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAABQBACdASoeABcAPo06mUelI6KhMBgMAKARiWcAvkgHVWGSeP//1ym67YmAAPnhPqN8wxQ0ZLRftLFsFurOdFXpkudJpvi5nbYxFdNC8NWMjZ5VS60AAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1928491.webp",
      "blur": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBQCdASoeACgAPpE+l0glo6IhMBqoALASCWUAt7gWboNirmVqSA1Ara5GP/zt8qEyAAD+00zxOEDvxixmUkDrLmwdJciyuKf+XQalxB5Q/ufoG6/B2PxZLqoKAQ8XeQ4sAGT6ikL4ivm6gWh8g+jMIt56s1Gq94gAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jean-christophe-andre-1336424-2574997.webp",
      "blur": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAABQAwCdASoeABAAPpFEmki3JCKhMAgC4BIJQBYjUAAlYbsGQAD+i6KXBSYM3t6iVP/4I7NrMU7ex/8gx289GFee7fgQfb4zcSAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonas-horsch-102497290-32893878.webp",
      "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAABQBACdASoeAC0APo04lkelIyIhNVQMAKARiWcAwzQLNrLvjzj1HlaudUAAAP77Kqh+tqytB9UxFSzKjn3BFS4Oh4Joe4cTF/Y71Hx3SRxSGEm8UL69JfeuUf+FrE2Vvp6SibY4cfzLEpgA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonastogo-2648337.webp",
      "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAQBQCdASoeACoAPpE+l0gzI6IhMBVaqmASCWUAnTMYBbp5gmwGkER5jv4KP8iAShwAAP7SDmhBVvlpVuDMOvfvkgL3DVCyjsVgDdzHPdU1zOUxL51EHeVP9Z3tYTBMbRLRW/yjo3WPqyYAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-joyston-judah-331625-933054.webp",
      "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAwBACdASoeABQAPpE4mUkloyIhMBgIALASCWcAuwAQ723mPCfPl6B1dAAA/tkNI4gCnh7fMJuyuuKL/t0aLmaupBvwz1eAF5v7/97wX9tm83wAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kaip-1056670.webp",
      "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwBACdASoeAC0APpFCmUolo6skpWsxYBIJaQDDNA+u5+jxP8WTrEStUmdjMyeAAP7xEBL8tVcOhmfiu3Hlf47gt7s0LYIw/1SdH/hLViV44IUAAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kellie-churchman-371878-1001682.webp",
      "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwBACdASoeABQAPpE6lUeloyIhMBgMALASCWUAnTKEhCAVHe6d3mBpB+qUAAD+302ZGuWSbF4hZuhfT5HrW8Vzo9kZHiicdjPM7xTz1KY3Jkuc7l5aWXff7E9AOfDUgAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kevin-blanzy-440998-1130692.webp",
      "blur": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACQBACdASoeABQAPok2lEelIyIhMAwAoBEJZwCdM6HDTpX5x/GXHWGXPGsCZ0AA/rEmdlmv4WpOAGfgr33rfFNoTcD4ghfhUI4ONKZGEjjFrsAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-10180294.webp",
      "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwAwCdASoeACkAPoU0lUexoyIhNVgMAjAQiWUAs4Ajw/rMIvIA/kfjlzP3Q8oegVS+pW/XRSM40t8PQuBkLSvcPisc5lxvD8DEgbww8yQQI+vNu2XW2RRcYF8Pa48AAAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-1600139.webp",
      "blur": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADQBACdASoeACsAPoU2lEelIyIhMA1QoBCJYwCdMuhISBOi0E/Dz60NJx2mshckAAD50SIolP+6F17rt48W/pvHM1q+D6UBeJ2s33342GlDE4MbTjRQKrGIPMK64HhAzyw1qhKJNuZHvFhachAAAA=="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lastly-937783.webp",
      "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQBACdASoeABUAPo06mEelI6KhMBgMAKARiWcAqPQMHVKuyJ6SFkK+xgmtjizjAAD+brpouHCY7eu1AGxwLmMhGrb+iZLwspUPfcPZWOpBwKN8AAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1041103.webp",
      "blur": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQBACdASoeAC0APok2lEe1oyIhNVv4ArARCWcAwgghVp7b1oMYpUyi31yAAP6O+KbKCVVk3s3bheEM3dmjV+cfgoVHdWx6fzHS4Ov8K705xYWqBXTtut0btcYTQAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1540321.webp",
      "blur": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQBgCdASoeAC0APn00kkekoyGhOrmYAJAPiWcAxnwh0pIx5UXuenjXNQp8Ch8Tukvu5FV+0555negA/sLxEURsXoN5kLDM4MISet0gQKJUL46shn8KO0b3vZyo9wXppzylAAAA"
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-3050829.webp",
      "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAACwBQCdASoeAC0APoEwlEelIqIhNVv8AKAQCWcAw6whb0I6c0vJ4ieIE6bsvQX2kr3JCct5NAAA/hsMbfdUqS1B5U/aQCZiP1EAsNuOSZEMfcXNTmoOCBIbPib9kmPa6dr8m/iqHTprr/laUAA="
    },
    {
      "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lily-lili-17626726-32928703.webp",
      "blur": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwBACdASoeAC0APpE+mUilo6KhKqoAsBIJZwDOOBZu17UvuoszocDmaoDPtQw9DAAA/ve7O2/S4qr0dAn0H8RRKG00SlJxRbnVydiUmn/nCGl+Qf8A+mG5CbxnWAAA"
    }
  ];
    
  const quotes = {
    zh: [
      "千万别在这上面押宝",
      "采取一个大胆的态度",
      "听取专家的意见",
      "你会发现你自己无法妥协",
      "专注在你的生活上吧",
      "研究然后享受它",
      "当然",
      "它将无法预测",
      "绝对不",
      "带着好奇心去探索它",
      "最好等等看",
      "它好像是确定的",
      "趁早做",
      "对别人保密",
      "可能会发生一些令人吃惊的事",
      "你需要适当调整一下",
      "怀疑它",
      "它将带来好运",
      "要有点耐心",
      "你会发现你所需要知道的一切",
      "会有另一种情况",
      "你将会很开心你这样做了",
      "把它写下来",
      "千万别陷入你的个人感情",
      "改变你的焦点",
      "这时候非常不顺利",
      "用任何你能做到的方式去提升",
      "如果你照你说的做",
      "如果不是就再也不要做它了",
      "这个时候不要要求更多",
      "避开第一个解决方案",
      "观察看看会发生什么事",
      "它会影响到其他人怎么看你",
      "你会说了算",
      "以一个更加轻松的速度进行吧",
      "最好的解决方法不是显而易见的",
      "保持灵活性",
      "这不是你所能控制的",
      "假如你说谢谢",
      "享受体验",
      "谨慎地处理",
      "注意细节",
      "当你要去做的时候小心行事",
      "毫无保留的把它说出来",
      "不要犹豫了",
      "它有着非常重要的意义",
      "更换一下重要事项的优先顺序",
      "这是一个做新计划的最好时机了",
      "继续前进",
      "列个为什么不要做的清单",
      "不要等待",
      "它将是你无法忘怀的事",
      "找出更多的选择",
      "履行你自己的义务",
      "稍后处理它",
      "跟随其他人的指引",
      "做一个为什么的清单",
      "冒险一试",
      "接受你习惯的改变",
      "你需要采取主动",
      "这可保证不了",
      "情况将会转变的非常快",
      "你将不得不妥协",
      "你需要更多的信息",
      "相信你最起初的想法",
      "它将引起一场轰动",
      "灾难是极有可能的",
      "迫切要求终止",
      "太多的选择难于太少",
      "是的",
      "仔细地聆听然后你将会知道",
      "答案就在你身边",
      "让它过去吧",
      "那将会是一种金钱的浪费",
      "全力以赴",
      "不要真正在意",
      "你需要考虑考虑其他方式",
      "从现在起的一年都没有所谓",
      "不要浪费你的时间了",
      "他可能是非凡的",
      "数到10再问一次",
      "装作它已经是真的了",
      "布置优先次序是必须的部分",
      "运用你的想象",
      "他一定会很好",
      "镇定下来 确保最好的决定",
      "等待",
      "当你行动时你将需要不断弥补",
      "一笑置之",
      "别人也同样取决于你的选择",
      "你将会后悔的",
      "无可非议",
      "你知道现在比以前更好了",
      "相信你的直觉",
      "考虑到它的机会",
      "问问你的母亲",
      "可能当你老的时候",
      "只能做一次",
      "可能",
      "不行",
      "行",
      "你的行动将会改善一切",
      "别傻了",
      "欣然地确定它",
      "问问你的父亲",
      "绝不",
      "答案会以另一种形式来到你身边"
    ],
    en: [
    "Don’t stake too much on this.",
    "Lean into boldness.",
    "Heed the experts’ word.",
    "Compromise won’t come easy here.",
    "Keep your eyes on your life.",
    "Study it, then savor it.",
    "Naturally.",
    "It defies prediction.",
    "Absolutely not.",
    "Explore with curious eyes.",
    "Patience serves you best now.",
    "It feels certain, doesn’t it?",
    "Act sooner rather than later.",
    "Keep this to yourself.",
    "Surprises may be in store.",
    "A small shift will help.",
    "Doubt lingers for a reason.",
    "Good fortune lies ahead.",
    "Patience is your ally.",
    "All you need to know will reveal itself.",
    "Another path will emerge.",
    "You’ll smile you did it this way.",
    "Put it to paper.",
    "Don’t let feelings cloud your step.",
    "Turn your focus elsewhere.",
    "The tide isn’t in your favor right now.",
    "Grow in whatever way you can.",
    "If you mean what you say, follow through.",
    "If not, let it go for good.",
    "Ask for no more in this moment.",
    "The first solution isn’t the right one.",
    "Watch closely—what unfolds will tell.",
    "Others’ views of you will shift.",
    "You’ll have the final say.",
    "Move at a gentler pace.",
    "The best answer isn't obvious.",
    "Stay flexible—adaptability wins.",
    "This is out of your hands.",
    "A simple “thank you” goes far.",
    "Relish the experience.",
    "Handle it with care.",
    "The details matter more than you think.",
    "Proceed with caution.",
    "Speak your truth without reserve.",
    "Hesitation won’t serve you.",
    "This carries weight—don’t dismiss it.",
    "Rearrange your priorities; clarity will come.",
    "Now’s the time to map new plans.",
    "Keep moving forward—no looking back.",
    "List the reasons to step away.",
    "Don’t wait for the “perfect” moment.",
    "This memory will stay with you.",
    "Dig deeper—more choices exist.",
    "Honor your obligations.",
    "Tend to it later—time eases the edge.",
    "Let others guide you for once.",
    "Write down why it matters.",
    "Take the risk—regret stings more.",
    "Embrace the change in routine.",
    "Initiative is your best move.",
    "No guarantees here—proceed lightly.",
    "Things will shift quickly; stay ready.",
    "Compromise is inevitable now.",
    "Seek more information before acting.",
    "Trust that first thought—it’s sharp.",
    "This will turn heads.",
    "Trouble looms—stay vigilant.",
    "Push for an end to this.",
    "Too many choices muddle the heart more than too few.",
    "Yes.",
    "Listen closely—the answer whispers.",
    "The truth is right beside you.",
    "Let it fade—holding on hurts more.",
    "This would waste your coin.",
    "Give it everything you’ve got.",
    "Don’t let it weigh on you.",
    "There’s another way—find it.",
    "A year from now, this won’t matter.",
    "Your time is better spent elsewhere.",
    "It might be extraordinary—don’t dismiss it.",
    "Count to ten, then ask again.",
    "Act as if it’s already true.",
    "Priorities must be set—order brings peace.",
    "Let your imagination run free.",
    "It will turn out well—trust that.",
    "Calm your mind; the best choice will clear.",
    "Wait—patience reveals all.",
    "Every step will need mending—proceed gently.",
    "Laugh it off—lightness heals.",
    "Others’ paths hinge on your choice.",
    "Regret will follow if you proceed.",
    "This is beyond reproach.",
    "You know it’s better now than then.",
    "Your gut speaks truth—listen.",
    "Consider its potential—don’t overlook it.",
    "Ask your mother—she’ll know.",
    "One day, when you’re older, this will make sense.",
    "This chance comes but once.",
    "Possibly.",
    "No.",
    "Yes.",
    "Your actions will tip the scales for good.",
    "Don’t be foolish—see clearly.",
    "Embrace the certainty of it.",
    "Ask your father—he’ll have wisdom.",
    "No—this door stays closed.",
    "The answer will find you in a different form."
  ]
  };
  // 修改后的 updateContent 函数，支持根据浏览器语言自动切换中英文
  async function updateContent() {
    const imgObj = images[Math.floor(Math.random() * images.length)];
    const bg = document.getElementById('bg');
    const blurImg = imgObj.blur;
    const fullImg = imgObj.full;
  
    // 先显示模糊图
    bg.style.backgroundImage = `url('${blurImg}')`;
    bg.style.transition = 'background-image 0.5s ease';
  
    // 预加载高清图，加载完成后再切换
    const img = new Image();
    img.src = fullImg;
    img.onload = () => {
      bg.style.backgroundImage = `url('${fullImg}')`;
    };
  
    // 只用浏览器语言判断是否用中文
    const useChinese = shouldUseChineseByLang();
    const selectedQuotes = useChinese ? quotes.zh : quotes.en;
    // 随机选择一条语录
    const quote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
    // 获取quote元素
    const quoteDiv = document.getElementById('quote');
    // 显示语录
    quoteDiv.textContent = `" ${quote} "`;
    // 英文时加en类，中文时移除en类
    if (!useChinese) {
      quoteDiv.classList.add('en');
    } else {
      quoteDiv.classList.remove('en');
    }
    // 调试信息（可选）
    console.log(`浏览器语言: ${navigator.language}, 使用语言: ${useChinese ? '中文' : '英文'}`);
  }
  // 时间戳格式化
  function formatTimestamp(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'p.m.' : 'a.m.';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    function getOrdinal(n) {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
    return `${month} ${day}${getOrdinal(day)}  ${hour12}:${minute} ${ampm}`;
  }
  
  // 初始化 - 使用异步方式调用 updateContent
  updateContent().catch(error => {
    console.error('初始化失败:', error);
    // 如果获取地理位置失败，默认显示英文
    const quote = quotes.en[Math.floor(Math.random() * quotes.en.length)];
    document.getElementById('quote').textContent = `" ${quote} "`;
  });
  document.getElementById('timestamp').textContent = formatTimestamp(new Date());
