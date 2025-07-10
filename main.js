// 图片对象数组，已自动生成
const images = [
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tracehudson-2365457.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tracehudson-2365457-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jean-christophe-andre-1336424-2574997.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jean-christophe-andre-1336424-2574997-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419115.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419115-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014733.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014733-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sunsetoned-5913193.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sunsetoned-5913193-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431486.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431486-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-8391652.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-8391652-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431489.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20431489-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419194.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419194-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arina-krasnikova-6998579.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arina-krasnikova-6998579-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766458.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766458-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944351.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944351-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766454.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766454-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-manfred-legasto-francisco-598911-1557848.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-manfred-legasto-francisco-598911-1557848-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekamelev-813870.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekamelev-813870-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1252893.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1252893-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-didsss-2932089.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-didsss-2932089-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1540321.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1540321-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aeppli-2828554.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aeppli-2828554-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arts-1547815.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arts-1547815-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-connor-danylenko-534256-1414535.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-connor-danylenko-534256-1414535-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947792.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947792-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-danielle-rangel-342268-3363674.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-danielle-rangel-342268-3363674-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-2437299.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-2437299-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766514.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766514-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-7445007.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-7445007-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-innature-1032814.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-innature-1032814-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jani-tisler-526626-1313399.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jani-tisler-526626-1313399-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonastogo-2648337.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonastogo-2648337-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kaip-1056670.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kaip-1056670-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-3050829.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-3050829-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944357.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6944357-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-monstera-3611406.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-monstera-3611406-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-orange-ocean-243774902-32920052.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-orange-ocean-243774902-32920052-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-237272.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-237272-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-314958.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-314958-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-33109.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-33109-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-5875024.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-5875024-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806399.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806399-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806421.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806421-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tdcat-59321.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tdcat-59321-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-261292.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-261292-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-palomino-933481-1955134.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-palomino-933481-1955134-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-thais-araujo-808424-1681147.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-thais-araujo-808424-1681147-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tima-miroshnichenko-5988915.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tima-miroshnichenko-5988915-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-victorfreitas-1072842.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-victorfreitas-1072842-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-elly-fairytale-3865676.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-elly-fairytale-3865676-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1563604.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1563604-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1928491.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-japy-1928491-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonas-horsch-102497290-32893878.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonas-horsch-102497290-32893878-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lily-lili-17626726-32928703.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lily-lili-17626726-32928703-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lukebarky-2407128.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lukebarky-2407128-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6931886.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6931886-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1296265.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-obviouslyarthur-1296265-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-931018.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-931018-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-peterfazekas-905690.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-peterfazekas-905690-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-adonyi-foto-1558916.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-adonyi-foto-1558916-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-alexazabache-3214944.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-alexazabache-3214944-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014735.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6014735-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-andy-dufresne-1782800-15722322.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-andy-dufresne-1782800-15722322-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-athena-1586795.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-athena-1586795-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-berend-1452701.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-berend-1452701-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-bertellifotografia-2868224.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-bertellifotografia-2868224-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-895501.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-895501-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-castorlystock-3725743.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-castorlystock-3725743-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-23021463.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-chris-liu-753004655-23021463-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947796.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947796-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766259.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766259-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766266.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766266-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-10180294.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-10180294-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6932085.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mikhail-nilov-6932085-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806443.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-6806443-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-steve-2179374.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-steve-2179374-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6015518.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-anastasia-shuraeva-6015518-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-902204.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-902204-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766254.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-6766254-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419148.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-gabby-k-20419148-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kevin-blanzy-440998-1130692.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kevin-blanzy-440998-1130692-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-235990.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-235990-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-267559.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-267559-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-273886.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-273886-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-326168.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-326168-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-415571.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-415571-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rakicevic-nenad-233369-1262304.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rakicevic-nenad-233369-1262304-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-roman-odintsov-4555779.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-roman-odintsov-4555779-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-189349.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-189349-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-1323550.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-1323550-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-953241.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-simon73-953241-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-taryn-elliott-3889928.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-taryn-elliott-3889928-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-unknown6user-1646753.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-unknown6user-1646753-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kellie-churchman-371878-1001682.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kellie-churchman-371878-1001682-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-1600139.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-1600139-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lastly-937783.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lastly-937783-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1041103.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-1041103-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-michael-morse-1533907.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-michael-morse-1533907-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mohamedelaminemsiouri-2097442.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-mohamedelaminemsiouri-2097442-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-nout-gons-80280-248159.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-nout-gons-80280-248159-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-1078981.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ollivves-1078981-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-olly-800323.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-olly-800323-blur.webp" },
  { full: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ozgomz-2893685.webp", blur: "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ozgomz-2893685-blur.webp" }
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
  
