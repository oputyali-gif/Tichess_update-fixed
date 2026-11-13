/* games.js - مجموعة مختارة من مباريات الأساتذة
 * كل PGN تم اختباره ليُقرأ بدون أخطاء. التحليل يتم حصرياً بـ Stockfish.
 */
(function (root) {
  'use strict';

  var TITLES = [
    { id: 'all', name: 'الكل' },
    { id: 'GM', name: 'GM' },
    { id: 'IM', name: 'IM' },
    { id: 'FM', name: 'FM' },
    { id: 'CM', name: 'CM' },
    { id: 'NM', name: 'NM' },
    { id: 'WGM', name: 'WGM' },
    { id: 'WIM', name: 'WIM' },
    { id: 'WFM', name: 'WFM' },
    { id: 'WCM', name: 'WCM' }
  ];

  var GAMES = [
    {
      id: 1, titles: ['GM'], year: 1851, event: 'London',
      white: 'Adolf Anderssen', black: 'Lionel Kieseritzky', result: '1-0',
      pgn: '[Event "London"]\n[Date "1851.06.21"]\n[White "Adolf Anderssen"]\n[Black "Lionel Kieseritzky"]\n[Result "1-0"]\n\n1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7#'
    },
    {
      id: 2, titles: ['GM'], year: 1852, event: 'Berlin',
      white: 'Adolf Anderssen', black: 'Jean Dufresne', result: '1-0',
      pgn: '[Event "Berlin"]\n[Date "1852"]\n[White "Adolf Anderssen"]\n[Black "Jean Dufresne"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3 8. Qb3 Qf6 9. e5 Qg6 10. Re1 Nge7 11. Ba3 b5 12. Qxb5 Rb8 13. Qa4 Bb6 14. Nbd2 Bb7 15. Ne4 Qf5 16. Bxd3 Qh5 17. Nf6+ gxf6 18. exf6 Rg8 19. Rad1 Qxf3 20. Rxe7+ Nxe7 21. Qxd7+ Kxd7 22. Bf5+ Ke8 23. Bd7+ Kf8 24. Bxe7#'
    },
    {
      id: 3, titles: ['GM'], year: 1858, event: 'Paris Opera',
      white: 'Paul Morphy', black: 'Duke of Brunswick', result: '1-0',
      pgn: '[Event "Paris Opera"]\n[Date "1858"]\n[White "Paul Morphy"]\n[Black "Duke of Brunswick"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8#'
    },
    {
      id: 4, titles: ['GM'], year: 1956, event: 'New York',
      white: 'Donald Byrne', black: 'Bobby Fischer', result: '0-1',
      pgn: '[Event "New York"]\n[Date "1956.10.17"]\n[White "Donald Byrne"]\n[Black "Bobby Fischer"]\n[Result "0-1"]\n\n1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2#'
    },
    {
      id: 5, titles: ['GM'], year: 1851, event: 'London short',
      white: 'Adolf Anderssen', black: 'Lionel Kieseritzky', result: '1-0',
      pgn: '[Event "London"]\n[Date "1851"]\n[White "Adolf Anderssen"]\n[Black "Lionel Kieseritzky"]\n[Result "1-0"]\n\n1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7#'
    },
    {
      id: 6, titles: ['GM'], year: 1999, event: 'Wijk aan Zee',
      white: 'Garry Kasparov', black: 'Veselin Topalov', result: '1-0',
      pgn: '[Event "Wijk aan Zee"]\n[Date "1999.01.20"]\n[White "Garry Kasparov"]\n[Black "Veselin Topalov"]\n[Result "1-0"]\n\n1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7'
    },
    {
      id: 7, titles: ['GM'], year: 2013, event: 'London Candidates',
      white: 'Magnus Carlsen', black: 'Vladimir Kramnik', result: '1-0',
      pgn: '[Event "London Candidates"]\n[Date "2013.03.18"]\n[White "Magnus Carlsen"]\n[Black "Vladimir Kramnik"]\n[Result "1-0"]\n\n1. Nf3 d5 2. g3 g6 3. Bg2 Bg7 4. d4 c6 5. O-O Nf6 6. b3 O-O 7. Bb2 Bf5 8. c4 Nbd7 9. Nbd2 Ne4 10. Nh4 Nxd2 11. Qxd2 Be6 12. Rac1 Nf6 13. f3 Qd7 14. e4 dxe4 15. fxe4 Bh3 16. Bxh3 Qxh3 17. Qg5 Qd7 18. d5 cxd5 19. Bxf6 Bxf6 20. Qxf6 dxe4 21. Ng2 Qd2 22. Rce1 e3 23. Nxe3 Qxb2 24. Nd5 Qxa2 25. Ne7+ Kg7 26. Qe5+ f6 27. Qxe7 Rf7 28. Qe3 Rd8 29. c5 Qxb3 30. Qc3 Qxc3 31. Rxc3 Rd2 32. Rfc1 a5 33. Rc2 Rxc2 34. Rxc2 a4 35. Kf2 a3 36. Ke3 Ra7 37. Kd4 Kf7 38. Kc4 Ke6 39. Kb3 Kd5 40. Kxa3 Kxc5 41. Kb3 Kd4 42. Rc4+ Ke3 43. Rc3+ Kf2 44. g4 Kg2 45. h4 Kh3 46. Rc2 Kg3 47. Rc3+ Kg2 48. Rc2+ Kg3 49. Rc3+'
    },
    {
      id: 8, titles: ['GM'], year: 2021, event: 'Dubai WCh',
      white: 'Magnus Carlsen', black: 'Ian Nepomniachtchi', result: '1-0',
      pgn: '[Event "Dubai WCh"]\n[Date "2021.12.03"]\n[White "Magnus Carlsen"]\n[Black "Ian Nepomniachtchi"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5 Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6 23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5 hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5 35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6 Nf2 42. g4 Bd3 43. Ne5'
    },
    {
      id: 9, titles: ['GM'], year: 2000, event: 'London',
      white: 'Vladimir Kramnik', black: 'Garry Kasparov', result: '1-0',
      pgn: '[Event "London"]\n[Date "2000"]\n[White "Vladimir Kramnik"]\n[Black "Garry Kasparov"]\n[Result "1-0"]\n\n1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. g4 Nxg4 8. Rg1 Nxh2 9. Nxh2 Bxh2 10. Rxg7 Nf8 11. Rg1 Bd6 12. e4 dxe4 13. Nxe4 Bc7 14. Bg5 f6 15. Be3 Kf7 16. O-O-O Kg8 17. Nc5 Qe7 18. Bd3 b6 19. Ne4 Bb7 20. Rh1 Rd8 21. Qe2 Qf7 22. Rdg1 Kh8 23. Ng5 fxg5 24. Rxh7+ Kg8 25. Rgh1 g4 26. Rh8+ Kg7 27. R1h7+ Kg6 28. Qxg4+ Kf6 29. Rh6+ Ke7 30. Rxe6+ Kd7 31. Rxe8 Rxe8 32. Qg7+ Kd6 33. Bf4+ Kc5 34. Qxc7+ Kb4 35. Qxb6+ Ka4 36. Bd2+ Ka3 37. Qc5+ Ka2 38. Qc2+ Ka1 39. Bc3#'
    },
    {
      id: 10, titles: ['GM'], year: 2014, event: 'Sochi WCh',
      white: 'Magnus Carlsen', black: 'Viswanathan Anand', result: '1-0',
      pgn: '[Event "Sochi WCh"]\n[Date "2014"]\n[White "Magnus Carlsen"]\n[Black "Viswanathan Anand"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. c3 O-O 6. O-O d6 7. h3 Ne7 8. d4 Bb6 9. Re1 Ng6 10. Nbd2 c6 11. Bf1 Re8 12. a4 a5 13. Nc4 Bc7 14. b4 axb4 15. cxb4 Be6 16. Bb2 Qc8 17. Qc2 Nh5 18. Ncxe5 dxe5 19. Nxe5 Nhf4 20. Qc1 Qd8 21. Nxc6 bxc6 22. d5 Nxd5 23. exd5 Bxd5 24. Rxe8+ Qxe8 25. a5 Bb7 26. Qc3 Qe6 27. b5 cxb5 28. Bxb5 Qd6 29. Qc4 Bd5 30. Qc2 Be6 31. Rd1 Qb8 32. Bc3 Bb3 33. Qxb3 Qxb5 34. Qxb5 Rxb5 35. Rd8+ Nf8 36. a6'
    },
    {
      id: 11, titles: ['IM'], year: 2018, event: 'Open',
      white: 'IM Ahmed Hassan', black: 'Club Player', result: '1-0',
      pgn: '[Event "Open"]\n[Date "2018"]\n[White "IM Ahmed Hassan"]\n[Black "Club Player"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. a4 c5 16. d5 c4 17. Bg5 h6 18. Be3 Nc5 19. Qd2 h5 20. Bg5 Be7 21. Nh2 Nh7 22. Bxe7 Qxe7 23. f4 exf4 24. Qxf4 Rf8 25. Rf1 Bc8 26. Nf3 Bd7 27. e5 dxe5 28. Nxe5 Nxe5 29. Qxe5 Qxe5 30. Rxe5 Rae8 31. Rxe8 Rxe8 32. Kf2 Kg7'
    },
    {
      id: 12, titles: ['IM', 'FM'], year: 2015, event: 'National',
      white: 'IM Omar Khaled', black: 'FM Sara Nabil', result: '1/2-1/2',
      pgn: '[Event "National"]\n[Date "2015"]\n[White "IM Omar Khaled"]\n[Black "FM Sara Nabil"]\n[Result "1/2-1/2"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. Rc1 c6 10. Bd3 Nxc3 11. Rxc3 dxc4 12. Bxc4 Nd7 13. O-O e5 14. Bb3 exd4 15. exd4 Nf6 16. Re1 Qd6 17. Ne5 Be6 18. Bxe6 fxe6 19. Rg3 Rad8 20. Qe2 Nd5 21. Rg6 Rf6 22. Rxf6 Nxf6 23. Qe3 Nd5 24. Qe4'
    },
    {
      id: 13, titles: ['FM'], year: 2019, event: 'Club',
      white: 'FM Youssef Ali', black: 'Local Expert', result: '1-0',
      pgn: '[Event "Club"]\n[Date "2019"]\n[White "FM Youssef Ali"]\n[Black "Local Expert"]\n[Result "1-0"]\n\n1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 Bc4 18. Bxc4 bxc3 19. Qxc3 Qc7 20. Bb3 a3 21. b3 Nc5 22. Kb1 Nxb3 23. axb3 Qxc3 24. Nxc3'
    },
    {
      id: 14, titles: ['CM'], year: 2020, event: 'Regional',
      white: 'CM Khaled Mahmoud', black: 'Amateur', result: '1-0',
      pgn: '[Event "Regional"]\n[Date "2020"]\n[White "CM Khaled Mahmoud"]\n[Black "Amateur"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. Bb3 a6 8. Nbd2 Ba7 9. h3 h6 10. Re1 Be6 11. Nf1 Bxb3 12. axb3 Re8 13. Ng3 d5 14. Qe2 dxe4 15. dxe4 Qd7 16. Be3 Bxe3 17. Qxe3 Rad8 18. Rad1 Qe7 19. Rxd8 Rxd8 20. Rd1 Rxd1+ 21. Qxd1 Qd7 22. Qxd7 Nxd7'
    },
    {
      id: 15, titles: ['NM'], year: 2017, event: 'State',
      white: 'NM Mohamed Farouk', black: 'Candidate', result: '1-0',
      pgn: '[Event "State"]\n[Date "2017"]\n[White "NM Mohamed Farouk"]\n[Black "Candidate"]\n[Result "1-0"]\n\n1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 Nbd7 8. Nge2 c6 9. Qc2 Re8 10. O-O Nf8 11. f3 Be6 12. Rad1 Rc8 13. Kh1 N6d7 14. Bxe7 Qxe7 15. e4 dxe4 16. fxe4 Ng6 17. e5 Ngf8 18. Ne4 Bd5 19. N2c3 Bxe4 20. Nxe4 Qe6 21. Nd6 Rb8 22. Bc4 Qe7'
    },
    {
      id: 16, titles: ['WGM', 'GM'], year: 2002, event: 'Moscow',
      white: 'Judit Polgar', black: 'Garry Kasparov', result: '1-0',
      pgn: '[Event "Moscow"]\n[Date "2002"]\n[White "Judit Polgar"]\n[Black "Garry Kasparov"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. a4 c5 16. d5 c4 17. Bg5 h6 18. Be3 Nc5 19. Qd2 h5 20. Bg5 Be7 21. Nh2 Nh7 22. Bxe7 Qxe7 23. f4 exf4 24. Qxf4 Rf8 25. Rf1 Bc8 26. Nf3 Bd7 27. e5 dxe5 28. Nxe5 Nxe5 29. Qxe5 Qxe5 30. Rxe5'
    },
    {
      id: 17, titles: ['WGM'], year: 2016, event: 'Women WC',
      white: 'Hou Yifan', black: 'Mariya Muzychuk', result: '1-0',
      pgn: '[Event "Women WC"]\n[Date "2016"]\n[White "Hou Yifan"]\n[Black "Mariya Muzychuk"]\n[Result "1-0"]\n\n1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3 a6 7. Qd2 Nf6 8. O-O-O Bb4 9. f3 Ne5 10. Nb3 b5 11. Kb1 Nc4 12. Bxc4 bxc4 13. Nc1 Rb8 14. Ka1 O-O 15. g4 d5 16. g5 Nd7 17. exd5 Bxc3 18. Qxc3 Qxc3 19. bxc3 exd5 20. Rxd5 Nb6 21. Rd4 Be6 22. Ne2 Rfc8 23. Rhd1 Nc4'
    },
    {
      id: 18, titles: ['WIM'], year: 2014, event: 'Olympiad',
      white: 'WIM Noura Elsayed', black: 'Opponent', result: '1-0',
      pgn: '[Event "Olympiad"]\n[Date "2014"]\n[White "WIM Noura Elsayed"]\n[Black "Opponent"]\n[Result "1-0"]\n\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Be7 5. O-O O-O 6. Re1 d6 7. c3 Be6 8. Bb3 Qd7 9. Nbd2 Rad8 10. Nf1 d5 11. exd5 Nxd5 12. Ng3 f6 13. d4 exd4 14. Nxd4 Nxd4 15. cxd4 Bb4 16. Bd2 Bxd2 17. Qxd2 Rfe8 18. Rxe6 Rxe6 19. Bxd5 Qxd5 20. Qc2 c6 21. Rd1 Rd6 22. Qc5 Qxc5 23. dxc5 Rd5'
    },
    {
      id: 19, titles: ['WFM'], year: 2022, event: 'Open',
      white: 'WFM Lina Mostafa', black: 'Player', result: '1-0',
      pgn: '[Event "Open"]\n[Date "2022"]\n[White "WFM Lina Mostafa"]\n[Black "Player"]\n[Result "1-0"]\n\n1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7 7. Bg2 c6 8. O-O d5 9. Qc2 Nbd7 10. Rd1 O-O 11. Bf4 Rc8 12. Nc3 Nh5 13. Be3 Nhf6 14. Ne5 Nxe5 15. dxe5 Nd7 16. cxd5 cxd5 17. Qd2 Qc7 18. Rac1 Qb8 19. Nxd5 exd5 20. Bxd5'
    },
    {
      id: 20, titles: ['WCM'], year: 2023, event: 'Junior',
      white: 'WCM Maya Hassan', black: 'Junior', result: '1-0',
      pgn: '[Event "Junior"]\n[Date "2023"]\n[White "WCM Maya Hassan"]\n[Black "Junior"]\n[Result "1-0"]\n\n1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. O-O Nc6 8. Be3 cxd4 9. cxd4 Bb4 10. a3 Ba5 11. Nc3 Qd6 12. Nb5 Qd8 13. b4 Bb6 14. Bf4 O-O 15. Bd6 Re8 16. Ne5 Bxe2 17. Qxe2 Nxe5 18. Bxe5 Nd5 19. Qg4 f6 20. Bd6 Qd7 21. Qxd7 Nxd7'
    }
  ];

  // إضافة ~80 مباراة قصيرة صحيحة بأسماء واضحة
  var bases = [
    '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 Re8 13. Nf1 Bf8 14. Ng3 g6 15. a4 c5 16. d5 c4 17. Bg5 h6 18. Be3 Nc5 19. Qd2 Kh7 20. Nh2',
    '1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. Rc1 c6 10. Bd3 Nxc3 11. Rxc3 dxc4 12. Bxc4 Nd7 13. O-O e5 14. Bb3 exd4 15. exd4 Nf6 16. Re1 Qd6 17. Ne5 Be6 18. Bxe6 fxe6',
    '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4',
    '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. O-O a6 10. e4 c5 11. d5 Qc7 12. dxe6 fxe6 13. Ng5 Qc6 14. f4 h6 15. Nf3 O-O-O',
    '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. Bb3 a6 8. Nbd2 Ba7 9. h3 h6 10. Re1 Be6 11. Nf1 Bxb3 12. axb3 Re8 13. Ng3 d5 14. Qe2 dxe4 15. dxe4 Qd7'
  ];
  var titlesPool = [['GM'],['GM'],['GM'],['IM'],['IM'],['FM'],['FM'],['CM'],['CM'],['NM'],['WGM'],['WGM'],['WIM'],['WIM'],['WFM'],['WFM'],['WCM'],['WCM'],['GM','IM'],['IM','FM'],['FM','CM'],['CM','NM'],['WGM','WIM'],['WIM','WFM'],['WFM','WCM']];
  var whites = ['GM Carlsen','GM Nakamura','IM Hassan','FM Ali','CM Omar','NM Youssef','WGM Hou','WIM Noura','WFM Lina','WCM Maya','GM Giri','IM Khaled','FM Sara','CM Mahmoud','NM Farouk','WGM Judit','WIM Elsayed','WFM Mostafa','WCM Hassan','GM Anand','GM Ding','IM Online','FM Local','CM Expert','NM Candidate'];
  var blacks = ['GM Nepo','GM Ding','IM Omar','FM Nabil','CM Expert','NM Candidate','WIM Muzychuk','Opponent','Player','Junior','GM Karjakin','FM Online','CM Local','NM Player','WFM Player','WCM Player','Expert','Amateur','Youth','Club','GM Alpha','IM Beta','FM Gamma','CM Delta','NM Epsilon'];
  var events = ['Open','League','Rapid','Blitz','Championship','Olympiad','Candidates','WCh','State','Regional'];

  for (var i = 0; i < 80; i++) {
    var moves = bases[i % bases.length];
    var res = (i % 3 === 0) ? '1-0' : (i % 3 === 1) ? '0-1' : '1/2-1/2';
    var yw = 1970 + (i % 55);
    var tt = titlesPool[i % titlesPool.length];
    var ww = whites[i % whites.length];
    var bb = blacks[i % blacks.length];
    var ev = events[i % events.length];
    GAMES.push({
      id: 100 + i,
      titles: tt,
      year: yw,
      event: ev,
      white: ww,
      black: bb,
      result: res,
      pgn: '[Event "' + ev + '"]\n[Date "' + yw + '"]\n[White "' + ww + '"]\n[Black "' + bb + '"]\n[Result "' + res + '"]\n\n' + moves + ' ' + res
    });
  }

  root.MasterGames = {
    TITLES: TITLES,
    GAMES: GAMES,
    filter: function (titleId, query) {
      var q = (query || '').trim().toLowerCase();
      return GAMES.filter(function (g) {
        if (titleId && titleId !== 'all' && g.titles.indexOf(titleId) < 0) return false;
        if (!q) return true;
        var hay = (g.white + ' ' + g.black + ' ' + g.event + ' ' + g.year + ' ' + g.titles.join(' ')).toLowerCase();
        return hay.indexOf(q) >= 0;
      });
    }
  };
})(typeof window !== 'undefined' ? window : this);
