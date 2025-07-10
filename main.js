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
    "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQBgCdASoeAC0APpE8mEelo6KhKrgN+LASCWMAtvuFBCArttUDzAIdNS5zL85CFIk+KNqJAswfSvzj4AD+8dp+fKIHMjAqcrT1VoZkgG6rqxXmpG0P/yk8Be+cci3piE45nOJVYmulIpXwon3HuMw/DkAAAA=="
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
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lukebarky-2407128.webp",
    "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwBACdASoeAC0APpFCmUq3I6IhpWsy4BIJZQDE2A6ZB1qOR4WlVtR4qSKxtX5AAP72I6G1Ur72Im7DvQfGV0Bn4vFp7BD/etRJph/FmG1A8leRAX12PlOijhJIeWeMhDo/uQnJaK8cNgAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-manfred-legasto-francisco-598911-1557848.webp",
    "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACQAwCdASoeABQAPpE+mUiro6KhMBgIAXASCWcAtsgVWy8WroEgAP7uHq8kmby/J+kxdxV+zfCk2Ox9detKW7XnzQ8zvu/U6UKAAAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-michael-morse-1533907.webp",
    "blur": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAwBACdASoeABQAPpE6l0elo6IhMAgAsBIJZwCzgBsjhtotmFFPF9895sgA9f4TVKTgHwAmSv7z4wmP6gmZVZlSg2Ne+a5PoKsRwMICD8AAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6931886.webp",
    "blur": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAACwBQCdASoeAC0APoE0kkemoyGhNVv8ANAQCWUAuwAbAAJO/lghNrupc/9Q+OUFI8uRPqKVaNAA/joQwfkoEudZhGKKBZTdQwzsnc7lhOFO9CKWKVrnEt9A+fbFS+Au/81wtPluvy8mbgOT5o+8AA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6932085.webp",
    "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAwCdASoeAC0APpFCm0qvo6khpWmZ8BIJZQCdMt8BfuxYY/CjzVoAAP7oI03WBnSfKJsbu+2eVw7wUkne/wEv0wO3RBrx9IOZe+1/P4I5j8go+U2H6ltFbdS7aCnFMAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944351.webp",
    "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwBgCdASoeAC0APoEwlUelIqIhNVv8AKAQCWkA0JAhX73tGc13fTNuzKdyMzhJuySEZ/j4+FHIirm6wAAA/vxJdYMKJel8smyp3lroKTIAZBVSlWRn4FY2pWDbHEQAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944357.webp",
    "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwBACdASoeAC0APok4mEelI6qhKq35UBEJZwDA3BSkWUrUP1pch0XrkTbwIOk1uAAA/u3QJ6EVL1dJ6Q9b17sw7GOJEo/0gJ9AKD6j11dNNoY5A3wIjV4VssRtzNAA4AA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mohamedelaminemsiouri-2097442.webp",
    "blur": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAACwBACdASoeAC0APpE8mUkloyIhMBVYALASCWNqoFCj/gBjobxDvTXqm4FIUm4AAP7r1Df8xNlhf/QN3Fx51g8/0K0Dux/PAhGzq8pl1FzVAmcDY/jS1hVokW2uMScFBu/YqD2HB+FYPDhcDhLFfiTlKzYYNeZnUIAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-monstera-3611406.webp",
    "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACQBACdASoeABQAPpE4mEezLCKhMBgMAmASCWUAnTlBVKAOgF0d/Uz1Ml2GnAAA/r+19TR52ZbwsZqG0RzdoSDBEsuzMVcgtCLne462DnPgHlQAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-nout-gons-80280-248159.webp",
    "blur": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoeABQAPpE+mkkzIzEhKAqqYBIJZwC2yBWEkSY1LGNgAP7wdfOv7fP4vXt8yzokzUSFVVAFeuiK8RMPvzn0UxHAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1252893.webp",
    "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAACQBACdASoeAC0APnUwkkekoyGhOqgAkA6JZQCsM5hF1PiF2Rv7BWgfjD/BQngA/urOAUj7MeNJ6z++szq8XHbsrcXmFsI//kYOM4+EyRkF/KmisFWQz51j2aReBUTHIfhXYA+t9Ge3DDRLAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1296265.webp",
    "blur": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAABwBQCdASoeAC0APo04k0elKSGhNVQMASARiWNpH07jKACKpuDih6Tq77meE9hrlbIK7gl0AP7pPGGq1M3SYor69ZQ07UpWhBLlLAk+2bZGWGnm5n1OPFFrNHl/c4mXWoSCOVCgtLI3fM/voV24/SVJrTFdltnQic/set6JoAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-1078981.webp",
    "blur": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACQBACdASoeACoAPn0sk0ewoiGhOrzIAhAPiWIAtRvaxgWC8yH2aWOHxAqMxAAA/u63mlyz/i061yPaBW//KV/43f2C9cf+e80YIVzibazkZc6HnNQWrUEHUOfVJaC9rwTdVgEfMnCMMZdqI+eEB7IZKUATY6yJGJgm4uTtPHuAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-931018.webp",
    "blur": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAwCdASoeACgAPpFAmUm3I6WhJWzK4BIJYwC/OBA+hiR20D/M0K8AAP7wJll9JneLPkelb4ZqS7Dyl+26RzqP94A34K9xZYHQ67OIPKBCooD93ZIhszpm4/BnEK1FNP8rGsAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-olly-800323.webp",
    "blur": "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAAAQBQCdASoeAC0APnkwkkekoyGhOrzIAJAPCUATpygqNAUvLbPHB2+tY1NBAvb+FIkAAP74eOwNdBvW6BfjNwEybA8tiFTmZHC4+8j8hdMM/bZO1TamboT55Y/McsN1ODMAgyB06pfJQRES6Ql7m1QL711Ep4qhl0FkxzP4xbIkXBJSZXUZ09qhxvf8rAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-orange-ocean-243774902-32920052.webp",
    "blur": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAAAwBgCdASoeADUAPpFAmEklpCImLBVbMMASCWMAwRAAwNQSmlQj7zanB3Gdepeuhe71lQ2lxf0quHQAAP7qsP79buWP6435w2LDfD+KHY/YbZQIjAOYnX26Ht0nyLYNjYhdmUhJS8F6vnPrNr/vMy4n/q/CqZQU0eGNxQEUcb1CyN9Y5WXckNO5YExQ2M5wAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ozgomz-2893685.webp",
    "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwBACdASoeAC0APok4lkelI6IhMBqtUKARCWMAvdAUNGSaDH9Cz7rpFcmJKxZrdCgAypHKeaCmxGDKbtyzOB9VBbBJYjetdVQdY7HfEm3wv3JjpGX1ipP9DP4IQzZMKpxk+Ga2sHrn1kAAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-packermann-1666012.webp",
    "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQBQCdASoeAC0APnkskkekoqGhOrzIAJAPCWcAyrQiKa6ZQ3EKrWEVvBXTGBCXC5o+HVDgLP2YAP7NdqnERsnEXYmzIt4CT8g2dp84NuGaEE4Hxx9styIPlshMVjPAs9i838eqXmPn8AAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pawelkalisinski-1076758.webp",
    "blur": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAACQBQCdASoeACIAPpFAmEilpCqhKrgMAVASCUAVJPtYH+z4RVtn6SzlpumYVKcfWwlZzdx2IAD92WT51QVUfH7U6me5jY//jCB62/0kyd+DtbyRu5jkmqRL/AvXyRSyVcNBCeFmOW95cNK78rAUokAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-peterfazekas-905690.webp",
    "blur": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQBACdASoeABQAPpE6mUgloyshKA1RYBIJaQDPoBEPlj7zt9lka5brWAD+6Mr8VDFA+OxUCIbmCoaotn8q8CzQk0E7jEyAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-235990.webp",
    "blur": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAwCdASoeABQAPpFAmkmro6uhKAqpcBIJYwCsL3WBKmKGHwpNou/wAP7hFYrSF+Rr216h+bJLmuBrER5+aebme5VLfQtTxyGdXreidAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-237272.webp",
    "blur": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQBACdASoeABIAPpE6l0evoyIhMAgB8BIJQBOmUABpuH6eDrySii0qAAD+VkI8OAjde+KGwjNWF/+A+evNbm0zBqz6f9eXHNyAy8H8YR0dyEsYQGAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-261292.webp",
    "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACQBACdASoeABQAPpE6lkeloyIhMAgAsBIJYwCdMt69C39Ak+JdTtWKWgJWXIAA+dLs1Bx0vMD71u35zIAfw3fm/ytdm9uZ3WneMcZg5ndzrXQLJkbrPho62vwAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-267559.webp",
    "blur": "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAACQBQCdASoeAC0APpE4l0eloyIhMBqqqLASCUAVhnYARfMoZbJIwoue3OV25UTVIOeWXjQ+AAD+9ZOGdU/ay0DeUJXf9wfly+IKfsTo310rSTCf+1y75qpS/cuTgUqVBIsQNWumCRWdan8lW5NrFig7vMM5fthcGFcLcAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-273886.webp",
    "blur": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAwCdASoeABQAPpE+l0kvoyIhKA1R8BIJZwC2yBaeMiTIj23wAAD+75V4BnRLsK0VkoHg2SKY2t360qMEuDv+Gl+2sCbi8LuAyDIAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-314958.webp",
    "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQBQCdASoeABQAPoU0lUelIyIhN/qoAKAQiWMAnTMhg0kThr0jkr1+4jnM28o/eYGAAP76qQ63XQFPWdnNbNSyie+I00wnC2yvk4XERKaF9B5v/aDEwcVgmJ8kr5PP2+FQqrJfBAAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-326168.webp",
    "blur": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAQBQCdASoeACoAPok6lkelI6IhNVgIAKARCUATpl2oRt98hndn76EMFBCc7OdisnogAP7xzX2rbT4cayf+Fa+LetrnMP1ExnIlQqmpxGBuccXSxt0K8b04BwNZxOwB9O8/qsB8D/316i/2fJFin4vBDxj9hVlfJ+mNfjxONAAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-33109.webp",
    "blur": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADQBACdASoeABQAPpE8mUiloyKhMBgIALASCUAWI9tINUKFRV3SkZJPpFsaRcnU0AD+4wXVV0GvX/dDoHp4U/6u9seMJ2qExjGe9pk5kA1wHt1fqpMIQSGxtgAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-39694.webp",
    "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwBQCdASoeABQAPpE8mEiloyIhMBgIALASCUATplxvMW/oEY3gpUHGAVvjg9V8/QXRoAD+6o9vHuUX4TMuDyH+fnqO2zfeA76H+s9DT2y8L6d5hSgw+4tZX0d4jR82FLj4XHuDoAAAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-415571.webp",
    "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABwAwCdASoeABEAPpE+mEglraKhMBgIAbASCUAXYAFk1lvkoSAA/g+JIjecKY182X+vvfVVvAC/62z5UzuX79fI9ThM9LPdnEXxt5sxHGiau/AQAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rakicevic-nenad-233369-1262304.webp",
    "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAABwBQCdASoeAB8APpE6mEe/I6KhMAgD4BIJaACdL5AT+gVoRPUo4wYSus44mH2sgbbRO3vAAP653UkEVQ4Dx/BH86/nWc/t0BMYb//Vkm5zN/O7fBtynNGctgdu/98xdotcqe13WFgAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-5875024.webp",
    "blur": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAABwBACdASoeABQAPpE8mEelo6KhMAgAsBIJZwCw7CmQ6EstsEapXB+NPq3YsAD+7Nn0b+WvYEhKHjCaSdEpudwXwR9pGxdPav1ubLSNDcRd0131UOLlCAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806399.webp",
    "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwBACdASoeABQAPpE+mEglo6IhMBgIALASCWUAsR7yAcX+qDxVwoSFn5XNfcgcVgAA/vLXmIxulcCK0u3lrhs2HYEdmSrU+5sxRzB18td4QmkFac/LxTiYJBwcSoqAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806421.webp",
    "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQBQCdASoeAC0APoE0lEelIyIhNUgAoBAJZwDD6CzZoNUB4jEZmPBWD+AtG6u+8mil44AA/vTR/0LVjNLQn3lWKXo332ksRkuhqFvsz7puNVY2g/z2vx3p9ZZILBuTL3R3ls9vgAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806443.webp",
    "blur": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACwBQCdASoeAC0APnk0k0ekoyGhOrzIAJAPCWctgAm2AW72M93iP0q3MoB1GpC+1vfAfGLxkwAA/Rryr2Q6S5uoOeIa/jxpK7NksrYJhcNmO+HmjNME3T6paC8/FRO1MQc1vCzUMSlNfPWfZJwoQzKU3ElijAs4ji6QFUNxUAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-roman-odintsov-4555779.webp",
    "blur": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAwCdASoeABQAPpFAmEmvo6IhKAqp8BIJZQCo9BXmKlAA/uo+PBiRcFREpdW++VluDLekbjw+AKP9l7bjri5siDsbTi2SdQBLggAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-189349.webp",
    "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQBACdASoeABQAPo02lkelIyIhN/VYAKARiWMAAClE/uAGWFmWecfJkAD92WT58P0fty51JJ8//HL87sopj/+R2EE7dBKStBWuHqv74zQAkc+OAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-palomino-933481-1955134.webp",
    "blur": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwBACdASoeAC0APoU0lkelIyIhNVv4AKAQiWdo/FlbjnLGjd2uH8L3YUBf4AD+00dFTSqmhLHkddONwzwg+IVxTAt1KbKhSgPz59FpntIM+QeGSPDnsYNXxbj1tdPZQAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-1323550.webp",
    "blur": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAwCdASoeABMAPok2l0elIyIhMAwAoBEJZQC7ACHWnfQtzL/aiAAA/tMIyoLuKwQSoc0owghGxUaMkz8kCcGnt7cYK05wHMNluj5lNWMF30ckAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-953241.webp",
    "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQBQCdASoeABcAPpE8l0elo6IhMAgAsBIJYwCdMzRCmCkJvaB91dQR9hVzHDgkKH9wAP6vSOcZX0/jY+bGzVb9xr7kP8fTkz1AAuUH0HAzoiuTgKwObZv06nl3LmpqdA8BCKsAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-steve-2179374.webp",
    "blur": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAwBACdASoeABUAPoUwlUelIqIhN/qoAKAQiWMAtOgUAZHqgCx6IOIFbgAAdFTTQ7+C6mrccjeVwlGmNkIqWD9lK46VqDdQt3d8tBV7HLTxEFMxsTr0CzXVpZufAAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sunsetoned-5913193.webp",
    "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABwBACdASoeACYAPoE0lUelIyIhNUgAoBAJZ2o3WSabORlZRbiADsB4HRligAD+7BQvv7T/DgfM/MwvlbX98WSohrCtvD1K1unH2mNaTodBM9rjD43SX6X97db+9/4nU5tdovAAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-taryn-elliott-3889928.webp",
    "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACQBQCdASoeAC0APo02lUe6IqIhNVgIA0ARiWUAnTMhgjdnNTb+MbM7VLckLHz3PK3ZxrxeAAD9RSlcDj//+0bRfuvBKgjuD5L1/DVMQMgYMtN2Ar4aXWZiN69YoXduI0zj5XgFVD69dgAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tdcat-59321.webp",
    "blur": "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAABwBgCdASoeACoAPpE+mEilo6IhMBVYALASCUAVhygq48M/s1L/AbDHAbvq0dot0DC6G6NlWzussuP8GJAA/nbAi5Mp1unkR075grFeqyN0gkAUs/f6+K3nQzeeynaW5ulJGHgE4FTZHa1lyOiRbg8coRZZ6zAtKHSAbCGDVG5MKAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-thais-araujo-808424-1681147.webp",
    "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQBgCdASoeAC0APpFAmUo3I6IhpWzK4BIJZwC9WAt3Q9SnLI5nFAtwTbb02RppcVB5eip//W1JaC0tAAD++cQeOZ2oaHggalboylOGtmZcX0D/EzVDinuUmuA2gDdTNsUUVhQAAAA="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tima-miroshnichenko-5988915.webp",
    "blur": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAwCdASoeABQAPpE+mUmloyIhKAqosBIJZwC90Adknk1bvX/jAAD9CuRYCJ2Cl7kHSu78406sDsh9X5Xl/UT3yMJAQ8QA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tracehudson-2365457.webp",
    "blur": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwBQCdASoeACYAPoU2lkelIyIhMA1QoBCJZwCdM22BhCNL7eXLaga9Ygw1GTgOejKugAD9IPY4d6t4Q1MqOAoXdFif5e0JV0iyonDicuyRXWCFapFoivtIcZ4rHQd70/eUTLwsFJD0UydbqDgAAA=="
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-unknown6user-1646753.webp",
    "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwBACdASoeAC0APpFAl0glpCIhMBqoALASCWUArwxGFV8QLb7BYfRb4AltAecAAP7QNwqp9PMvLY42FDmvw7c0RNtkaSXcXi8wDGvg9kuoyOrXGIAxkJwDMYUKs7hIILKOQrVWaoZGHAAA"
  },
  {
    "full": "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-victorfreitas-1072842.webp",
    "blur": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADQBACdASoeAC0APoUylUelIqIhOrZoAKAQiWMAtRuYRX/TNN++pN7jGZ5xCLq2qAD5rH4keeL//JLb1b8B//Kc7/KOXytXfD2ZJNWZS9vwfgly6vMn14toTwEwQfPOXVA7AfwkdsR/3vd12nCV4YWwNhCRgFcAAAA="
  }
];
  
// 128句中文短句
const quotes = [
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
    "可能会发生一些令人吃惊的事",
    "它将会带来好运",
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
    "当然",
    "你知道现在比以前更好了",
    "相信你的直觉",
    "考虑到它的机会",
    "问问你的母亲",
    "可能当你老的时候",
    "只能做一次",
    "可能",
    "千万别在这上面押宝",
    "采取一个大胆的态度",
    "不行",
    "行",
    "你的行动将会改善一切",
    "别傻了",
    "千万别在这上面押宝",
    "采取一个大胆的态度",
    "听取专家的意见",
    "你会发现你自己无法妥协",
    "专注在你的生活上吧",
    "研究然后享受它",
    "当然",
    "他仍将无法预测",
    "绝对不",
    "带着好奇心去探索它",
    "欣然地确定它",
    "最好等等看",
    "对别人保密",
    "可能会发生一些令人吃惊的事",
    "问问你的父亲",
    "绝不",
    "答案会以另一种形式来到你身边",
    "你将需要适当调整一下",
  ];
  
function updateContent() {
  const imgObj = images[Math.floor(Math.random() * images.length)];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
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

  document.getElementById('quote').textContent = `“ ${quote} ”`;
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

// 初始化
updateContent();
document.getElementById('timestamp').textContent = formatTimestamp(new Date());
  
