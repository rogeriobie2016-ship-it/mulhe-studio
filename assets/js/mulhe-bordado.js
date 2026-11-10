/* MULHÉ · kit de bordado. Gera SVG bordado (logo, cobra, gotas, texto, tecido, patch). Sem dependências. */
var MK = (function () {
  var C = { anil: '#13567F', rosa: '#D6336C', oliva: '#6B7A22', flor: '#EE8FA0', capim: '#B9C552', linho: '#F5E1C0', linhoClaro: '#FBF1DF', creme: '#FFF8EA', tinta: '#0B2E45' };
  C.rosaClaro = C.flor;
  var G = {"L":{"M":{"ch":"M","d":"M91.7 -22.6Q91.7 -11.2 85.2 -5.6Q78.7 0 67.7 0H22.8Q12 0 5.5 -5.2Q-1 -10.4 -1 -21.8Q-1 -31.4 2.7 -36.1Q6.4 -40.8 11.5 -43.9Q16.6 -47 20.6 -51.6Q24.6 -56.1 25.2 -65.3L35.2 -211.8V-213.6Q35.2 -221.2 31.2 -225.1Q27.2 -229 22 -232.2Q16.8 -235.4 12.8 -240.5Q8.8 -245.6 8.8 -255.2Q8.8 -266.5 15.4 -271.8Q22 -277.1 32.6 -277.1H103.7Q123.7 -277.1 133.9 -265.5Q144.1 -253.8 149.9 -236.6L182.6 -140.7L214.4 -236.6Q220.2 -254.4 230.4 -265.8Q240.6 -277.1 261.1 -277.1H333.3Q344.1 -277.1 350.7 -271.9Q357.3 -266.7 357.3 -255.2Q357.3 -245.8 353.3 -240.5Q349.3 -235.2 344 -231.8Q338.7 -228.4 334.7 -224.7Q330.7 -221 330.7 -214.6V-213.6L339.1 -65.5Q339.7 -55.7 343.4 -51.4Q347.1 -47 351.7 -44.4Q356.3 -41.8 359.9 -37.5Q363.4 -33.2 363.4 -23.2Q363.4 -12 357 -6Q350.7 0 339.5 0H239.4Q228.6 0 222.1 -5.2Q215.6 -10.4 215.6 -21.8Q215.6 -30.8 219.6 -36.1Q223.6 -41.4 228.9 -44.9Q234.2 -48.4 238.2 -52.1Q242.2 -55.7 242.2 -61.7V-62.9L235.4 -158.2L194.6 -40.4Q191.6 -31.6 187.3 -23.3Q183 -15 176.2 -9.7Q169.4 -4.4 158.6 -4.4Q144.7 -4.4 138.1 -9.2Q131.5 -14 125.1 -25.6Q120.5 -33.8 117.5 -42.6L75.9 -160.4L69.5 -65.3V-63.7Q69.5 -56.9 72.9 -52.6Q76.3 -48.2 80.6 -44.6Q84.9 -41 88.3 -36Q91.7 -31 91.7 -22.6Z","w":362.4},"u":{"ch":"u","d":"M83.1 5.8Q64.1 5.8 51.4 -3.9Q38.6 -13.6 32.4 -29.2Q26.2 -44.8 26.2 -62.1V-130.1Q26.2 -137.5 25 -140.6Q23.8 -143.7 18.2 -148.7Q13.8 -152.7 9.9 -156.3Q6 -159.8 6 -166.6Q6 -174.4 11.1 -178.9Q16.2 -183.4 22.8 -186L66.9 -203.4Q74.7 -206.6 82.6 -209Q90.5 -211.4 99.1 -211.4Q107.3 -211.4 111.7 -205.7Q116.1 -200 116.1 -192.4V-83.7Q116.1 -78.1 117.4 -71.7Q118.7 -65.3 122.5 -60.8Q126.3 -56.3 133.5 -56.3Q140.9 -56.3 146.5 -59.6Q152.1 -62.9 156.8 -67.7V-130.1Q156.8 -137.7 155.5 -141.2Q154.2 -144.7 147.9 -149.5Q143.3 -153.1 139.9 -156.6Q136.5 -160 136.5 -166.6Q136.5 -174.4 141.6 -178.9Q146.7 -183.4 153.3 -186L197.4 -203.4Q205.2 -206.6 213.1 -209Q221 -211.4 229.6 -211.4Q237.8 -211.4 242.3 -205.8Q246.8 -200.2 246.8 -192.4V-60.3Q246.8 -54.7 247.3 -49.1Q247.8 -43.6 251.8 -39Q256.9 -33.6 260.7 -30Q264.5 -26.4 264.5 -18.2Q264.5 -9.2 259.1 -4.6Q253.6 0 244.8 0H199.2Q184 0 172.5 -11.4Q161 -22.8 161 -37.8Q149.9 -27.2 136.9 -17.2Q123.9 -7.2 110.2 -0.7Q96.5 5.8 83.1 5.8Z","w":277.9},"l":{"ch":"l","d":"M104.9 -301.1Q113.1 -301.1 117.6 -295.5Q122.1 -289.9 122.1 -282.1V-60.3Q122.1 -54.5 122.7 -48.9Q123.3 -43.4 127.7 -39Q133.1 -33.6 137 -30.3Q140.9 -27 140.9 -18.2Q140.9 -9.2 135.3 -4.6Q129.7 0 121.1 0H33Q24.4 0 18.8 -4.6Q13.2 -9.2 13.2 -18.2Q13.2 -25.8 16 -29.3Q18.8 -32.8 22.6 -35.4Q26.4 -38 29.2 -42.7Q32 -47.4 32 -57.7V-220Q32 -229.6 28.8 -234Q25.6 -238.4 21.3 -240.7Q17 -243 13.8 -246.1Q10.6 -249.2 10.6 -256.2Q10.6 -264.3 15.8 -268.7Q21 -273.1 27.6 -275.7L72.3 -293.1Q80.3 -296.3 88.3 -298.7Q96.3 -301.1 104.9 -301.1Z","w":149.7},"h":{"ch":"h","d":"M103.1 -301.1Q111.3 -301.1 115.7 -295.4Q120.1 -289.7 120.1 -282.1V-173.8Q136.1 -188.4 155.3 -199.9Q174.4 -211.4 193.6 -211.4Q213 -211.4 226.1 -201.9Q239.2 -192.4 245.8 -177Q252.4 -161.6 252.4 -143.5V-60.3Q252.4 -53.3 252.8 -49.4Q253.2 -45.6 255.3 -42.5Q257.5 -39.4 262.3 -34Q266.3 -29.6 267.9 -27Q269.5 -24.4 269.5 -18.2Q269.5 -9.4 264.1 -4.7Q258.7 0 250 0H165.6Q157.2 0 152.5 -5Q147.9 -10 147.9 -18.2Q147.9 -25.8 151.5 -29.8Q155.2 -33.8 158.8 -38.7Q162.4 -43.6 162.4 -53.3V-121.9Q162.4 -131.7 158.5 -140.5Q154.6 -149.3 142.7 -149.3Q135.5 -149.3 130.1 -146.6Q124.7 -143.9 120.1 -139.7V-55.1Q120.1 -45.8 122.3 -41.1Q124.5 -36.4 127.4 -33.6Q130.3 -30.8 132.5 -27.6Q134.7 -24.4 134.7 -18.2Q134.7 -10 130.1 -5Q125.5 0 117.1 0H32.6Q24 0 18.5 -4.6Q13 -9.2 13 -18.2Q13 -25 15.6 -28.7Q18.2 -32.4 21.5 -35.3Q24.8 -38.2 27.4 -42.8Q30 -47.4 30 -56.1V-220Q30 -229 27.1 -233.5Q24.2 -238 20.3 -240.6Q16.4 -243.2 13.5 -246.4Q10.6 -249.6 10.6 -256.2Q10.6 -264.1 15.8 -268.6Q21 -273.1 27.4 -275.7L71.1 -293.1Q78.7 -296.1 86.7 -298.6Q94.7 -301.1 103.1 -301.1Z","w":278.3},"e":{"ch":"e","d":"M209.6 -132.3Q209.6 -114.5 199.1 -105.3Q188.6 -96.1 171.4 -96.1H90.7Q95.3 -78.9 107.1 -67.2Q118.9 -55.5 141.1 -55.5Q149.9 -55.5 158.7 -59.2Q167.4 -62.9 175.1 -67.9Q182.8 -72.9 188.6 -76.6Q194.4 -80.3 197.4 -80.3Q203.2 -80.3 205.8 -76.2Q208.4 -72.1 208.4 -66.9Q208.4 -48.6 199.9 -34.9Q191.4 -21.2 177.5 -12.2Q163.6 -3.2 147 1.3Q130.5 5.8 114.5 5.8Q83.1 5.8 59.1 -7.2Q35 -20.2 21.5 -43.7Q8 -67.3 8 -99.1Q8 -133.1 21.1 -158.4Q34.2 -183.6 58.9 -197.5Q83.5 -211.4 117.9 -211.4Q141.7 -211.4 162.7 -202.4Q183.6 -193.4 196.6 -175.8Q209.6 -158.2 209.6 -132.3ZM87.1 -126.9Q87.1 -124.7 87.1 -122.5H107.9Q115.5 -122.5 118.3 -126Q121.1 -129.5 121.1 -136.7Q121.1 -141.5 119.9 -149.3Q118.7 -157.2 115.2 -163.4Q111.7 -169.6 105.1 -169.6Q99.1 -169.6 95.5 -164.7Q91.9 -159.8 90.1 -152.4Q88.3 -145.1 87.7 -138.1Q87.1 -131.1 87.1 -126.9Z","w":217.4}},"tag":{"d":"M3 0V-28H13.4Q16.4 -28 18.7 -26.8Q21 -25.6 22.2 -23.5Q23.5 -21.4 23.5 -18.7Q23.5 -16 22.3 -13.8Q21 -11.7 18.9 -10.5Q16.7 -9.3 13.9 -9.3H8.5V0ZM8.5 -14.3H13.8Q15.6 -14.3 16.8 -15.5Q18 -16.8 18 -18.7Q18 -20.6 16.7 -21.8Q15.4 -23 13.3 -23H8.5ZM50.2 0.5Q48 0.5 46.2 -0Q44.4 -0.6 42.9 -1.5Q41.5 -2.4 40.5 -3.6Q39.6 -4.8 39.3 -6L44.7 -7.6Q45.2 -6.3 46.5 -5.3Q47.8 -4.3 49.8 -4.3Q52 -4.2 53.3 -5.2Q54.6 -6.2 54.6 -7.7Q54.6 -9 53.6 -9.9Q52.5 -10.8 50.7 -11.3L47 -12.2Q45 -12.8 43.4 -13.8Q41.9 -14.9 41 -16.4Q40.1 -18 40.1 -20.1Q40.1 -24 42.7 -26.3Q45.4 -28.5 50.2 -28.5Q52.8 -28.5 54.9 -27.7Q56.9 -26.9 58.2 -25.5Q59.6 -24 60.3 -22.1L55 -20.4Q54.5 -21.8 53.2 -22.8Q52 -23.7 50 -23.7Q48 -23.7 46.9 -22.8Q45.7 -21.9 45.7 -20.2Q45.7 -18.9 46.6 -18.1Q47.5 -17.4 49.1 -17L52.8 -16Q56.4 -15.2 58.4 -12.9Q60.4 -10.6 60.4 -7.8Q60.4 -5.3 59.2 -3.5Q58 -1.6 55.7 -0.6Q53.4 0.5 50.2 0.5ZM78.6 0V-28H84.1V0ZM116.2 0.5Q112.1 0.5 108.9 -1.4Q105.8 -3.2 104 -6.5Q102.2 -9.8 102.2 -14Q102.2 -18.2 104 -21.5Q105.8 -24.8 108.9 -26.6Q112 -28.5 116.1 -28.5Q119 -28.5 121.5 -27.5Q124 -26.4 125.8 -24.6Q127.7 -22.8 128.7 -20.4L123.6 -18.6Q122.9 -20 121.8 -21.1Q120.7 -22.2 119.2 -22.9Q117.8 -23.5 116.1 -23.5Q113.7 -23.5 111.8 -22.3Q109.9 -21 108.8 -18.9Q107.8 -16.8 107.8 -14Q107.8 -11.2 108.8 -9.1Q109.9 -6.9 111.8 -5.7Q113.8 -4.5 116.2 -4.5Q118 -4.5 119.4 -5.1Q120.8 -5.8 121.9 -7Q123 -8.1 123.7 -9.6L128.8 -7.8Q127.8 -5.4 125.9 -3.5Q124 -1.6 121.6 -0.6Q119.1 0.5 116.2 0.5ZM159.2 0.5Q155 0.5 151.7 -1.4Q148.4 -3.2 146.6 -6.5Q144.8 -9.8 144.8 -14Q144.8 -18.2 146.6 -21.5Q148.4 -24.8 151.7 -26.6Q154.9 -28.4 159.1 -28.4Q163.3 -28.4 166.5 -26.6Q169.8 -24.7 171.6 -21.5Q173.4 -18.2 173.4 -14Q173.4 -9.8 171.6 -6.5Q169.8 -3.2 166.6 -1.4Q163.4 0.5 159.2 0.5ZM159.2 -4.5Q161.8 -4.5 163.7 -5.7Q165.6 -7 166.7 -9.1Q167.8 -11.2 167.8 -14Q167.8 -16.8 166.7 -18.9Q165.6 -21 163.6 -22.2Q161.7 -23.4 159.1 -23.4Q156.6 -23.4 154.6 -22.2Q152.6 -21 151.5 -18.9Q150.4 -16.8 150.4 -14Q150.4 -11.2 151.5 -9.1Q152.6 -7 154.6 -5.7Q156.6 -4.5 159.2 -4.5ZM191.5 0V-28H197V-5H209.3V0ZM239.4 0.5Q235.1 0.5 231.9 -1.4Q228.6 -3.2 226.8 -6.5Q224.9 -9.8 224.9 -14Q224.9 -18.2 226.8 -21.5Q228.6 -24.8 231.8 -26.6Q235 -28.4 239.2 -28.4Q243.5 -28.4 246.7 -26.6Q249.9 -24.7 251.8 -21.5Q253.6 -18.2 253.6 -14Q253.6 -9.8 251.8 -6.5Q250 -3.2 246.7 -1.4Q243.5 0.5 239.4 0.5ZM239.4 -4.5Q241.9 -4.5 243.9 -5.7Q245.8 -7 246.9 -9.1Q248 -11.2 248 -14Q248 -16.8 246.9 -18.9Q245.8 -21 243.8 -22.2Q241.8 -23.4 239.2 -23.4Q236.7 -23.4 234.7 -22.2Q232.8 -21 231.6 -18.9Q230.5 -16.8 230.5 -14Q230.5 -11.2 231.6 -9.1Q232.8 -7 234.8 -5.7Q236.8 -4.5 239.4 -4.5ZM284.6 0.5Q280.4 0.5 277.1 -1.4Q273.8 -3.2 271.9 -6.5Q270 -9.8 270 -14Q270 -18.2 271.9 -21.5Q273.8 -24.8 277.1 -26.6Q280.4 -28.5 284.6 -28.5Q287.2 -28.5 289.4 -27.7Q291.5 -27 293.2 -25.6Q294.8 -24.3 296 -22.6L291.5 -19.8Q290.8 -20.8 289.7 -21.7Q288.6 -22.5 287.3 -23Q286 -23.5 284.6 -23.5Q282 -23.5 280 -22.3Q277.9 -21 276.8 -18.9Q275.6 -16.8 275.6 -14Q275.6 -11.2 276.7 -9.1Q277.9 -6.9 280 -5.7Q282 -4.5 284.8 -4.5Q286.8 -4.5 288.4 -5.3Q290 -6 291 -7.4Q291.9 -8.8 292 -10.7H285.6V-15H297.3V-11.6Q297.2 -7.8 295.6 -5.1Q294 -2.4 291.1 -0.9Q288.3 0.5 284.6 0.5ZM315 0V-28H320.4V0ZM337.4 0 348.4 -28H354.3L365.3 0H359.5L357.1 -6.2H345.6L343.2 0ZM347.4 -11H355.3L351.4 -21.2ZM417.8 0.5Q413.7 0.5 410.5 -1.4Q407.4 -3.2 405.6 -6.5Q403.8 -9.8 403.8 -14Q403.8 -18.2 405.6 -21.5Q407.4 -24.8 410.5 -26.6Q413.6 -28.5 417.7 -28.5Q420.6 -28.5 423.1 -27.5Q425.6 -26.4 427.4 -24.6Q429.3 -22.8 430.3 -20.4L425.2 -18.6Q424.5 -20 423.4 -21.1Q422.3 -22.2 420.8 -22.9Q419.4 -23.5 417.7 -23.5Q415.3 -23.5 413.4 -22.3Q411.5 -21 410.4 -18.9Q409.4 -16.8 409.4 -14Q409.4 -11.2 410.4 -9.1Q411.5 -6.9 413.4 -5.7Q415.4 -4.5 417.8 -4.5Q419.6 -4.5 421 -5.1Q422.4 -5.8 423.5 -7Q424.6 -8.1 425.3 -9.6L430.4 -7.8Q429.4 -5.4 427.5 -3.5Q425.6 -1.6 423.2 -0.6Q420.7 0.5 417.8 0.5ZM460.8 0.5Q456.6 0.5 453.3 -1.4Q450 -3.2 448.2 -6.5Q446.4 -9.8 446.4 -14Q446.4 -18.2 448.2 -21.5Q450 -24.8 453.3 -26.6Q456.5 -28.4 460.7 -28.4Q464.9 -28.4 468.1 -26.6Q471.4 -24.7 473.2 -21.5Q475 -18.2 475 -14Q475 -9.8 473.2 -6.5Q471.4 -3.2 468.2 -1.4Q465 0.5 460.8 0.5ZM460.8 -4.5Q463.4 -4.5 465.3 -5.7Q467.2 -7 468.3 -9.1Q469.4 -11.2 469.4 -14Q469.4 -16.8 468.3 -18.9Q467.2 -21 465.2 -22.2Q463.3 -23.4 460.7 -23.4Q458.2 -23.4 456.2 -22.2Q454.2 -21 453.1 -18.9Q452 -16.8 452 -14Q452 -11.2 453.1 -9.1Q454.2 -7 456.2 -5.7Q458.2 -4.5 460.8 -4.5ZM493.1 0V-28H499L507.2 -15.9L515.4 -28H521.3V0H515.8V-19.4L507.2 -6.7L498.6 -19.4V0ZM573.5 0.5Q571.4 0.5 569.5 -0Q567.7 -0.6 566.2 -1.5Q564.8 -2.4 563.9 -3.6Q562.9 -4.8 562.6 -6L568 -7.6Q568.5 -6.3 569.8 -5.3Q571.2 -4.3 573.2 -4.3Q575.3 -4.2 576.6 -5.2Q578 -6.2 578 -7.7Q578 -9 576.9 -9.9Q575.8 -10.8 574 -11.3L570.4 -12.2Q568.3 -12.8 566.8 -13.8Q565.2 -14.9 564.3 -16.4Q563.4 -18 563.4 -20.1Q563.4 -24 566.1 -26.3Q568.7 -28.5 573.5 -28.5Q576.2 -28.5 578.2 -27.7Q580.2 -26.9 581.6 -25.5Q582.9 -24 583.6 -22.1L578.3 -20.4Q577.8 -21.8 576.6 -22.8Q575.3 -23.7 573.3 -23.7Q571.3 -23.7 570.2 -22.8Q569 -21.9 569 -20.2Q569 -18.9 569.9 -18.1Q570.8 -17.4 572.4 -17L576.1 -16Q579.7 -15.2 581.7 -12.9Q583.7 -10.6 583.7 -7.8Q583.7 -5.3 582.5 -3.5Q581.3 -1.6 579 -0.6Q576.7 0.5 573.5 0.5ZM614.8 0.5Q610.5 0.5 607.3 -1.4Q604 -3.2 602.2 -6.5Q600.3 -9.8 600.3 -14Q600.3 -18.2 602.2 -21.5Q604 -24.8 607.2 -26.6Q610.4 -28.4 614.6 -28.4Q618.9 -28.4 622.1 -26.6Q625.3 -24.7 627.2 -21.5Q629 -18.2 629 -14Q629 -9.8 627.2 -6.5Q625.4 -3.2 622.1 -1.4Q618.9 0.5 614.8 0.5ZM614.8 -4.5Q617.3 -4.5 619.3 -5.7Q621.2 -7 622.3 -9.1Q623.4 -11.2 623.4 -14Q623.4 -16.8 622.3 -18.9Q621.2 -21 619.2 -22.2Q617.2 -23.4 614.6 -23.4Q612.1 -23.4 610.1 -22.2Q608.2 -21 607 -18.9Q605.9 -16.8 605.9 -14Q605.9 -11.2 607 -9.1Q608.2 -7 610.2 -5.7Q612.2 -4.5 614.8 -4.5ZM653 0V-23H644.6V-28H666.8V-23H658.4V0ZM681.3 0 692.3 -28H698.2L709.2 0H703.4L701 -6.2H689.5L687.1 0ZM691.3 -11H699.2L695.2 -21.2ZM749.4 1.7 746.4 -1.5Q744.8 -0.5 742.9 -0Q741 0.5 739 0.5Q734.7 0.5 731.5 -1.4Q728.2 -3.2 726.4 -6.5Q724.5 -9.8 724.5 -14Q724.5 -17.2 725.6 -19.8Q726.6 -22.5 728.6 -24.4Q730.5 -26.4 733.1 -27.4Q735.7 -28.5 738.8 -28.5Q743.1 -28.5 746.3 -26.6Q749.5 -24.8 751.4 -21.5Q753.2 -18.2 753.2 -14Q753.2 -11.2 752.4 -8.8Q751.6 -6.4 750.1 -4.6L752.9 -1.7ZM739 -4.5Q740 -4.5 740.8 -4.8Q741.6 -5 742.4 -5.5L739.1 -8.8L742.6 -12.1L746.1 -8.6Q746.8 -9.7 747.2 -11Q747.6 -12.4 747.6 -14Q747.6 -16.8 746.5 -18.9Q745.4 -21 743.4 -22.3Q741.4 -23.5 738.8 -23.5Q736.3 -23.5 734.3 -22.3Q732.4 -21 731.2 -18.9Q730.1 -16.8 730.1 -14Q730.1 -11.2 731.2 -9.1Q732.4 -7 734.4 -5.7Q736.4 -4.5 739 -4.5ZM782.3 0.6Q778.8 0.6 776.2 -0.8Q773.7 -2.2 772.3 -4.6Q770.9 -7.1 770.9 -10.4V-28H776.4V-10.4Q776.4 -8.6 777.1 -7.3Q777.9 -6 779.2 -5.2Q780.6 -4.5 782.4 -4.5Q784.2 -4.5 785.5 -5.2Q786.8 -6 787.6 -7.3Q788.3 -8.6 788.3 -10.4V-28H793.8V-10.4Q793.8 -7.1 792.4 -4.6Q791 -2.2 788.4 -0.8Q785.8 0.6 782.3 0.6ZM813.1 0V-28H830.8V-23H818.6V-16.6H829.1V-11.8H818.6V-5H831V0Z","w":833.6},"adv":{" ":0.25,"!":0.3081,"\"":0.4321,"#":0.6001,"$":0.6001,"%":0.8105,"&":0.8691,"'":0.228,"(":0.4985,")":0.4985,"*":0.6001,"+":0.6001,",":0.2998,"-":0.2842,".":0.2998,"/":0.4717,"0":0.6001,"1":0.6001,"2":0.6001,"3":0.6001,"4":0.6001,"5":0.6001,"6":0.6001,"7":0.6001,"8":0.6001,"9":0.6001,":":0.2998,";":0.2998,"<":0.5,"=":0.6001,">":0.5,"?":0.4819,"@":0.7988,"A":0.8267,"B":0.7173,"C":0.7197,"D":0.8022,"E":0.6909,"F":0.6611,"G":0.7939,"H":0.8018,"I":0.4136,"J":0.627,"K":0.8271,"L":0.6328,"M":0.8838,"N":0.8301,"O":0.7783,"P":0.6841,"Q":0.7812,"R":0.7764,"S":0.645,"T":0.7007,"U":0.8198,"V":0.8027,"W":1.0396,"X":0.7949,"Y":0.7798,"Z":0.686,"[":0.4985,"\\":0.4717,"]":0.4985,"^":0.5,"_":0.5,"`":0.5,"a":0.5669,"b":0.6323,"c":0.5264,"d":0.6504,"e":0.5303,"f":0.4243,"g":0.5781,"h":0.6787,"i":0.3564,"j":0.3691,"k":0.7339,"l":0.3652,"m":0.9644,"n":0.6709,"o":0.6021,"p":0.6655,"q":0.6479,"r":0.5347,"s":0.4766,"t":0.4629,"u":0.6777,"v":0.6274,"w":0.9888,"x":0.6016,"y":0.6191,"z":0.5142,"{":0.4985,"|":0.5,"}":0.4985,"~":0.6665,"á":0.5669,"à":0.5669,"â":0.5669,"ã":0.5669,"é":0.5303,"ê":0.5303,"í":0.3564,"ó":0.6021,"ô":0.6021,"õ":0.6021,"ú":0.6777,"ç":0.5264,"Á":0.8267,"À":0.8267,"Â":0.8267,"Ã":0.8267,"É":0.6909,"Ê":0.6909,"Í":0.4136,"Ó":0.7783,"Ô":0.7783,"Õ":0.7783,"Ú":0.8198,"Ç":0.7202,"—":0.854,"’":0.3003,"“":0.5591,"”":0.5591}};
  var ANG = [0, 30, 45, 60, 90, 120, 135, 150];
  function f(n) { return Math.round(n * 10) / 10; }
  function col(c) { return C[c] || c; }

  /* ---------- defs ---------- */
  function defs() {
    var s = '';
    s += '<filter id="mk-emb" x="-8%" y="-12%" width="116%" height="124%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.42" numOctaves="2" seed="11" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="4.5" xChannelSelector="R" yChannelSelector="G" result="r"/>' +
      '<feGaussianBlur in="r" stdDeviation="3.2" result="b"/>' +
      '<feDiffuseLighting in="b" surfaceScale="6" diffuseConstant="1.14" lighting-color="#fff" result="dl"><feDistantLight azimuth="235" elevation="61"/></feDiffuseLighting>' +
      '<feBlend in="r" in2="dl" mode="multiply" result="sh"/>' +
      '<feComposite in="sh" in2="r" operator="in" result="shi"/>' +
      '<feSpecularLighting in="b" surfaceScale="6" specularConstant="0.6" specularExponent="38" lighting-color="#fff" result="sp"><feDistantLight azimuth="235" elevation="52"/></feSpecularLighting>' +
      '<feComposite in="sp" in2="r" operator="in" result="spi"/>' +
      '<feGaussianBlur in="r" stdDeviation="3.5" result="sb"/>' +
      '<feOffset in="sb" dx="2.5" dy="4.5" result="so"/>' +
      '<feColorMatrix in="so" type="matrix" values="0 0 0 0 0.16  0 0 0 0 0.09  0 0 0 0 0.04  0 0 0 0.42 0" result="sd"/>' +
      '<feMerge><feMergeNode in="sd"/><feMergeNode in="shi"/><feMergeNode in="spi"/></feMerge></filter>';
    s += '<filter id="mk-linha" x="-5%" y="-30%" width="110%" height="160%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="1" seed="4" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" result="r"/>' +
      '<feGaussianBlur in="r" stdDeviation="1" result="sb"/><feOffset in="sb" dx="1" dy="1.6" result="so"/>' +
      '<feColorMatrix in="so" type="matrix" values="0 0 0 0 0.16  0 0 0 0 0.09  0 0 0 0 0.04  0 0 0 0.4 0" result="sd"/>' +
      '<feMerge><feMergeNode in="sd"/><feMergeNode in="r"/></feMerge></filter>';
    s += '<filter id="mk-tecido" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="5" result="n"/>' +
      '<feColorMatrix in="n" type="matrix" values="0 0 0 0 0.25  0 0 0 0 0.12  0 0 0 0 0.02  0.5 0 0 0 -0.19" result="g"/>' +
      '<feComposite in="g" in2="SourceGraphic" operator="in"/></filter>';
    s += '<filter id="mk-adesivo" x="-10%" y="-10%" width="120%" height="124%" color-interpolation-filters="sRGB">' +
      '<feGaussianBlur in="SourceAlpha" stdDeviation="7"/><feOffset dx="0" dy="7" result="o"/>' +
      '<feColorMatrix in="o" type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.07  0 0 0 0 0.05  0 0 0 0.3 0" result="s"/>' +
      '<feMerge><feMergeNode in="s"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    for (var i = 0; i < ANG.length; i++) {
      s += '<pattern id="mk-th-' + ANG[i] + '" patternUnits="userSpaceOnUse" width="8" height="4.6" patternTransform="rotate(' + ANG[i] + ')">' +
        '<rect width="8" height="1.6" fill="#fff" opacity=".17"/><rect y="2.3" width="8" height="1.7" fill="#000" opacity=".24"/></pattern>';
    }
    s += '<pattern id="mk-trama" patternUnits="userSpaceOnUse" width="5" height="5">' +
      '<rect width="5" height="1.1" fill="#fff" opacity=".13"/><rect y="2.5" width="5" height="1.1" fill="#000" opacity=".035"/>' +
      '<rect width="1.1" height="5" fill="#000" opacity=".04"/><rect x="2.5" width="1.1" height="5" fill="#fff" opacity=".08"/></pattern>';
    return s;
  }
  function defsSvg() { return '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' + defs() + '</defs></svg>'; }

  /* ---------- primitivas ---------- */
  function near(a) { var b = ANG[0], d = 999; for (var i = 0; i < ANG.length; i++) { var e = Math.abs(ANG[i] - ((a % 180) + 180) % 180); if (e < d) { d = e; b = ANG[i]; } } return b; }
  function fio(d, cor, ang, flat, tr) {
    var t = tr ? ' transform="' + tr + '"' : '';
    return '<path d="' + d + '" fill="' + col(cor) + '"' + t + '/>' + (flat ? '' : '<path d="' + d + '" fill="url(#mk-th-' + near(ang == null ? 45 : ang) + ')"' + t + '/>');
  }
  function circ(cx, cy, r, cor, ang, flat) {
    var a = 'cx="' + f(cx) + '" cy="' + f(cy) + '" r="' + f(r) + '"';
    return '<circle ' + a + ' fill="' + col(cor) + '"/>' + (flat ? '' : '<circle ' + a + ' fill="url(#mk-th-' + near(ang == null ? 45 : ang) + ')"/>');
  }
  function emb(inner, flat) { return flat ? '<g>' + inner + '</g>' : '<g filter="url(#mk-emb)">' + inner + '</g>'; }
  /* fita: traço de cetim com nervuras atravessadas (bordas, ondas, cordas) */
  function fita(d, cor, w, flat) {
    var a = 'd="' + d + '" fill="none" stroke-width="' + w + '"';
    return '<path ' + a + ' stroke="' + col(cor) + '" stroke-linecap="round" stroke-linejoin="round"/>' + (flat ? '' :
      '<path ' + a + ' stroke="#000" stroke-opacity=".24" stroke-dasharray="1.8 2.8" stroke-linejoin="round"/><path ' + a + ' stroke="#fff" stroke-opacity=".16" stroke-dasharray="1.8 2.8" stroke-dashoffset="2.3" stroke-linejoin="round"/>');
  }
  /* tecido: pano com trama e grão */
  function tecido(x, y, w, h, cor, rx) {
    var a = 'x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"' + (rx ? ' rx="' + rx + '"' : '');
    return '<rect ' + a + ' fill="' + col(cor) + '"/><rect ' + a + ' fill="url(#mk-trama)"/><rect ' + a + ' fill="#000" filter="url(#mk-tecido)"/>';
  }
  function tecidoD(d, cor) { return '<path d="' + d + '" fill="' + col(cor) + '"/><path d="' + d + '" fill="url(#mk-trama)"/><path d="' + d + '" fill="#000" filter="url(#mk-tecido)"/>'; }
  /* patch: adesivo recortado com pano e borda de caseado */
  function patch(d, o) {
    o = o || {}; var bw = o.bw || 16, corte = o.corte == null ? 20 : o.corte;
    return (corte ? '<g filter="url(#mk-adesivo)"><path d="' + d + '" fill="#fff" stroke="#fff" stroke-width="' + (bw + corte * 2) + '" stroke-linejoin="round"/></g>' : '') +
      tecidoD(d, o.bg || 'linho') + emb(fita(d, o.borda || 'rosa', bw, o.flat), o.flat);
  }

  function gotaD(len, w) {
    var r = w / 2, cx = len - r;
    return 'M0,0C' + f(len * .3) + ',' + f(-w * .06) + ' ' + f(len * .52) + ',' + f(-r) + ' ' + f(cx) + ',' + f(-r) + 'A' + f(r) + ',' + f(r) + ' 0 1 1 ' + f(cx) + ',' + f(r) + 'C' + f(len * .52) + ',' + f(r) + ' ' + f(len * .3) + ',' + f(w * .06) + ' 0,0Z';
  }
  function gota(x, y, len, w, rot, cor, flat) {
    return '<g transform="translate(' + f(x) + ',' + f(y) + ') rotate(' + f(rot) + ')">' + fio(gotaD(len, w), cor, 60, flat) + '</g>';
  }
  function raio(x, y, dir, cores, opt, flat) {
    opt = opt || {}; var n = cores.length, sp = opt.abre || 26, len = opt.len || 92, w = opt.w || 34, gap = opt.gap || 26, s = '';
    for (var i = 0; i < n; i++) {
      var a = dir + (i - (n - 1) / 2) * sp, rad = a * Math.PI / 180, l = len * (i === Math.floor(n / 2) && n % 2 ? 1.1 : .92);
      s += gota(x + Math.cos(rad) * gap, y + Math.sin(rad) * gap, l, w, a, cores[i], flat);
    }
    return emb(s, flat);
  }

  /* ---------- cobra ---------- */
  function spline(pts, n) {
    var o = [], P = pts, L = P.length;
    for (var i = 0; i < L - 1; i++) {
      var a = P[Math.max(i - 1, 0)], b = P[i], c = P[i + 1], d = P[Math.min(i + 2, L - 1)];
      for (var j = 0; j < n; j++) {
        var t = j / n, t2 = t * t, t3 = t2 * t, q = [];
        for (var k = 0; k < 2; k++) q.push(.5 * (2 * b[k] + (-a[k] + c[k]) * t + (2 * a[k] - 5 * b[k] + 4 * c[k] - d[k]) * t2 + (-a[k] + 3 * b[k] - 3 * c[k] + d[k]) * t3));
        o.push(q);
      }
    }
    o.push(P[L - 1]); return o;
  }
  function cobra(pts, opt) {
    opt = opt || {}; var W = opt.w || 27, cor = col(opt.cor || 'oliva'), pinta = col(opt.pinta || 'flor'), flat = opt.flat;
    var raw = spline(pts, 40), S = [0], i, j;
    for (i = 1; i < raw.length; i++) S.push(S[i - 1] + Math.hypot(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]));
    var Lt = S[S.length - 1], Nt = Math.round(Lt / 2), p = [];
    for (i = 0, j = 0; i <= Nt; i++) {
      var s = Lt * i / Nt; while (j < S.length - 2 && S[j + 1] < s) j++;
      var u = (s - S[j]) / Math.max(1e-6, S[j + 1] - S[j]);
      p.push([raw[j][0] + (raw[j + 1][0] - raw[j][0]) * u, raw[j][1] + (raw[j + 1][1] - raw[j][1]) * u]);
    }
    var ate = opt.ate == null ? 1 : opt.ate, N = Math.max(6, Math.round(Nt * ate)), L = Lt * N / Nt, tail = Math.min(8 * W, Lt * .3);
    p = p.slice(0, N + 1);
    var hs = Math.min(1, L / (5 * W)); /* cabeça encolhe enquanto a cobra é curta */
    function hw(s) {
      var d = L - s, Wh = W * hs, base = s < tail ? W * (.07 + .93 * Math.pow(s / tail, .75)) : W;
      if (d < 1.25 * Wh) { var k = 1 - d / (1.25 * Wh); return 1.28 * Wh * Math.sqrt(Math.max(0, 1 - k * k)); }
      if (d < 3 * Wh) { var m = (d - 1.25 * Wh) / (1.75 * Wh); return Math.max(Wh * (1.28 - .4 * m * m * (3 - 2 * m)), Math.min(base, Wh * 1.28)); }
      if (d < 4.4 * Wh) { var q = (d - 3 * Wh) / (1.4 * Wh); return Math.min(base, W * (.88 + .12 * q)); }
      return base;
    }
    var Lf = [], Rt = [], ribA = '', ribB = '', T = [];
    for (i = 0; i <= N; i++) {
      var a = p[Math.max(i - 1, 0)], b = p[Math.min(i + 1, N)], tx = b[0] - a[0], ty = b[1] - a[1], tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
      T.push([tx, ty]); var h = hw(L * i / N), nx = -ty, ny = tx;
      Lf.push([p[i][0] + nx * h, p[i][1] + ny * h]); Rt.push([p[i][0] - nx * h, p[i][1] - ny * h]);
      if (!flat && i % 2 === 0 && h > 1.5) {
        var seg = 'M' + f(Lf[i][0]) + ',' + f(Lf[i][1]) + 'L' + f(Rt[i][0]) + ',' + f(Rt[i][1]);
        if ((i / 2) % 2) ribA += seg; else ribB += seg;
      }
    }
    var d = 'M' + Lf.map(function (q) { return f(q[0]) + ',' + f(q[1]); }).join('L') + 'L' + Rt.reverse().map(function (q) { return f(q[0]) + ',' + f(q[1]); }).join('L') + 'Z';
    var body = '<path d="' + d + '" fill="' + cor + '"/>';
    if (!flat) body += '<path d="' + ribA + '" stroke="#fff" stroke-opacity=".17" stroke-width="1.7" fill="none"/><path d="' + ribB + '" stroke="#000" stroke-opacity=".22" stroke-width="1.7" fill="none"/>';
    var sp = '', step = 2.7 * W, k2 = 0;
    for (var s2 = tail * .75; s2 < L - 4.6 * W; s2 += step, k2++) {
      var ix = Math.round(s2 / L * N), off = (k2 % 2 ? -1 : 1) * .22 * W, ang = Math.atan2(T[ix][1], T[ix][0]) * 180 / Math.PI;
      var cx = p[ix][0] - T[ix][1] * off, cy = p[ix][1] + T[ix][0] * off, rx = .56 * W, ry = .4 * W;
      sp += '<g transform="translate(' + f(cx) + ',' + f(cy) + ') rotate(' + f(ang) + ')"><ellipse rx="' + f(rx) + '" ry="' + f(ry) + '" fill="' + pinta + '"/>' + (flat ? '' : '<ellipse rx="' + f(rx) + '" ry="' + f(ry) + '" fill="url(#mk-th-90)"/>') + '</g>';
    }
    var Wh = W * hs, ie = Math.max(0, Math.round((L - 1.75 * Wh) / L * N)), up = opt.olho === -1 ? -1 : 1, ex = p[ie][0] + T[ie][1] * .5 * Wh * up, ey = p[ie][1] - T[ie][0] * .5 * Wh * up;
    var eye = '<circle cx="' + f(ex) + '" cy="' + f(ey) + '" r="' + f(.3 * Wh) + '" fill="' + C.creme + '"/><circle cx="' + f(ex + T[ie][0] * .05 * Wh) + '" cy="' + f(ey + T[ie][1] * .05 * Wh) + '" r="' + f(.15 * Wh) + '" fill="' + C.tinta + '"/>';
    var lg = opt.lingua == null ? 1 : opt.lingua, lingua = '';
    if (lg > 0) {
      var tn = T[N], t0 = [p[N][0] - tn[0] * 2, p[N][1] - tn[1] * 2], t1 = [t0[0] + tn[0] * 1.25 * W * lg, t0[1] + tn[1] * 1.25 * W * lg], th = Math.atan2(tn[1], tn[0]);
      var pr = function (a) { return f(t1[0] + Math.cos(th + a) * .8 * W * lg) + ',' + f(t1[1] + Math.sin(th + a) * .8 * W * lg); };
      lingua = '<path d="M' + f(t0[0]) + ',' + f(t0[1]) + 'L' + f(t1[0]) + ',' + f(t1[1]) + 'L' + pr(-.5) + 'M' + f(t1[0]) + ',' + f(t1[1]) + 'L' + pr(.5) + '" stroke="' + col(opt.corLingua || 'rosa') + '" stroke-width="' + f(.2 * W) + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
    }
    return { svg: emb(lingua + body + sp + eye, flat), L: Lt, W: W };
  }

  /* ---------- texto ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  /* texto bordado (Caprasimo carregada na página) */
  function texto(str, o) {
    o = o || {}; var a = 'x="' + (o.x || 0) + '" y="' + (o.y || 0) + '" font-family="Caprasimo, Georgia, serif" font-size="' + (o.size || 80) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.ls ? ' letter-spacing="' + o.ls + '"' : '');
    var t = '<text ' + a + ' fill="' + col(o.cor || 'anil') + '">' + esc(str) + '</text>' + (o.flat ? '' : '<text ' + a + ' fill="url(#mk-th-' + near(o.ang == null ? 45 : o.ang) + ')">' + esc(str) + '</text>');
    return (o.rot ? '<g transform="rotate(' + o.rot + ' ' + (o.x || 0) + ' ' + (o.y || 0) + ')">' : '<g>') + emb(t, o.flat) + '</g>';
  }
  /* texto liso (Figtree) */
  function txt(str, o) {
    o = o || {};
    return '<text x="' + (o.x || 0) + '" y="' + (o.y || 0) + '" font-family="Figtree, system-ui, sans-serif" font-size="' + (o.size || 28) + '" font-weight="' + (o.peso || 600) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' fill="' + col(o.cor || 'tinta') + '"' + (o.op ? ' opacity="' + o.op + '"' : '') + '>' + esc(str) + '</text>';
  }
  function ponto(d, cor, o) {
    o = o || {}; var w = o.w || 5, da = o.dash || '16 11';
    var p = '<path d="' + d + '" stroke="' + col(cor || 'rosa') + '" stroke-width="' + w + '" stroke-dasharray="' + da + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
    if (o.flat) return p;
    var m = /M\s*(-?[\d.]+)[ ,]+(-?[\d.]+)/.exec(d), bx = m ? '<path d="M' + (parseFloat(m[1]) - 40) + ',' + (parseFloat(m[2]) - 40) + 'h80v80" fill="none"/>' : '';
    return '<g filter="url(#mk-linha)">' + bx + p + '</g>';
  }

  /* ---------- logo ---------- */
  var LET = [['M', 92, 560, -2, 45], ['u', 444, 566, 2, 135], ['l', 708, 556, -1, 45], ['h', 846, 562, 1, 135], ['e', 1112, 570, -3, 45]];
  var COBRA = [[476, 410], [468, 325], [538, 250], [640, 256], [740, 268], [840, 262], [930, 222], [1030, 238], [1108, 262], [1176, 214], [1262, 182]];
  var PAL = {
    linho: { L: ['anil', 'rosa', 'oliva', 'anil', 'rosa'], cobra: 'oliva', pinta: 'flor', rE: 'rosa', rD: 'anil', ac: 'rosa', tag: 'anil', pt: 'rosa', lingua: 'rosa' },
    anil: { L: ['creme', 'flor', 'capim', 'creme', 'flor'], cobra: 'capim', pinta: 'flor', rE: 'flor', rD: 'creme', ac: 'flor', tag: 'creme', pt: 'flor', lingua: 'flor' },
    rosa: { L: ['creme', 'tinta', 'creme', 'tinta', 'creme'], cobra: 'tinta', pinta: 'creme', rE: 'creme', rD: 'tinta', ac: 'creme', tag: 'creme', pt: 'creme', lingua: 'creme' },
    oliva: { L: ['creme', 'tinta', 'creme', 'tinta', 'creme'], cobra: 'creme', pinta: 'flor', rE: 'creme', rD: 'tinta', ac: 'creme', tag: 'creme', pt: 'creme', lingua: 'flor' }
  };
  function pal(o) {
    if (o.mono) { var m = o.mono; return { L: [m, m, m, m, m], cobra: m, pinta: o.vazio || 'linho', rE: m, rD: m, ac: m, tag: m, pt: m, lingua: m }; }
    return PAL[o.pal || 'linho'];
  }
  /* conteúdo do logo em viewBox -60 0 1570 (720 | 830 com assinatura). o.anim = {l:[0..1 x5], cobra, lingua, ac, rE, rD, tag} */
  function logo(o) {
    o = o || {}; var P = pal(o), flat = o.flat, A = o.anim, s = '', i;
    function pop(k, cx, cy, inner) { if (!A) return inner; var v = A[k]; if (v <= 0) return ''; return '<g transform="translate(' + cx + ',' + cy + ') scale(' + f(v * 100) / 100 + ') translate(' + (-cx) + ',' + (-cy) + ')">' + inner + '</g>'; }
    s += pop('rE', 92, 420, raio(92, 420, 180, [P.rE, P.rE, P.rE], { len: 84, w: 31, abre: 30, gap: 30 }, flat));
    for (i = 0; i < LET.length; i++) {
      var l = LET[i], g = G.L[l[0]], tr = 'translate(' + l[1] + ',' + l[2] + ') rotate(' + l[3] + ')', inner = fio(g.d, P.L[i], l[4], flat, tr);
      if (A) {
        var v = A.l[i]; if (v <= 0) continue;
        if (v < 1) { /* enche na diagonal, como ponto cheio */
          var cx = l[1] + g.w / 2, cy = l[2] - 150, R = 330;
          inner = '<clipPath id="mk-c' + i + '"><rect x="' + f(cx - R) + '" y="' + f(cy - R) + '" width="' + f(2 * R * v) + '" height="' + (2 * R) + '" transform="rotate(' + (l[4] === 45 ? -45 : 45) + ' ' + f(cx) + ' ' + f(cy) + ')"/></clipPath><g clip-path="url(#mk-c' + i + ')">' + inner + '</g>';
        }
      }
      s += emb(inner, flat);
    }
    if (!A || A.cobra > 0) s += cobra(COBRA, { w: 27, flat: flat, cor: P.cobra, pinta: P.pinta, corLingua: P.lingua, ate: A ? A.cobra : 1, lingua: A ? A.lingua : 1 }).svg;
    s += pop('ac', 1232, 366, emb(gota(1232, 366, 96, 40, -52, P.ac, flat), flat));
    s += pop('rD', 1352, 470, raio(1352, 470, 0, [P.rD, P.rD, P.rD], { len: 84, w: 31, abre: 30, gap: 30 }, flat));
    if (o.tag && (!A || A.tag > 0)) {
      var tw = G.tag.w, tx = 725 - tw / 2, ty = 770, t = A ? A.tag : 1, x0 = 120, x1 = 1330;
      var tg = '<path d="' + G.tag.d + '" transform="translate(' + f(tx) + ',' + ty + ')" fill="' + col(P.tag) + '"' + (flat ? '' : ' filter="url(#mk-linha)"') + '/>' +
        ponto('M' + x0 + ',' + (ty - 14) + 'H' + f(tx - 36), P.pt, { flat: flat }) + ponto('M' + f(tx + tw + 36) + ',' + (ty - 14) + 'H' + x1, P.pt, { flat: flat });
      s += t < 1 ? '<clipPath id="mk-ct"><rect x="' + f(725 - 700 * t) + '" y="700" width="' + f(1400 * t) + '" height="130"/></clipPath><g clip-path="url(#mk-ct)">' + tg + '</g>' : tg;
    }
    return s;
  }
  function logoSvg(o) {
    o = o || {}; var h = o.tag ? 830 : 720;
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 0 1570 ' + h + '"' + (o.attrs ? ' ' + o.attrs : '') + '>' + (o.defs ? '<defs>' + defs() + '</defs>' : '') + logo(o) + '</svg>';
  }
  /* logo posicionado dentro de outra peça */
  function logoEm(x, y, w, o) { o = o || {}; var h = o.tag ? 830 : 720; return '<svg x="' + f(x) + '" y="' + f(y) + '" width="' + f(w) + '" height="' + f(w * h / 1570) + '" viewBox="-60 0 1570 ' + h + '">' + logo(o) + '</svg>'; }
  /* letra M do logo, centrada na origem (monograma) */
  function letraM(cor, flat) { return emb(fio(G.L.M.d, cor || 'anil', 45, flat, 'translate(' + f(-G.L.M.w / 2) + ',138)'), flat); }

  return { C: C, col: col, G: G, defs: defs, defsSvg: defsSvg, fio: fio, circ: circ, emb: emb, fita: fita, tecido: tecido, tecidoD: tecidoD, patch: patch, gota: gota, gotaD: gotaD, raio: raio, cobra: cobra, texto: texto, txt: txt, ponto: ponto, logo: logo, logoSvg: logoSvg, logoEm: logoEm, letraM: letraM, PAL: PAL, esc: esc, f: f };
})();
if (typeof module !== 'undefined') module.exports = MK;
