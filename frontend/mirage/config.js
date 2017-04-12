export default function() {
   this.namespace = '/api/v1/';
   let data = [{
         "id": "1",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай персонажа советского фильма",
           "description": "По описанию ситуации угадай персонажа советского фильма, который в ней участвовал",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "2",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай персонажа",
           "description": "Угадай персонажа по описанию",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "4",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай фильм по кадру",
           "description": "По представленному кадру из фильма угадай фильм",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "5",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай музыкальную группу",
           "description": "По биографии группы угадай название",
           "category": {
             "data": {
               "id": "2",
               "type": "categories",
               "attributes": {
                 "title": "Музыка"
               }
             }
           }
         }
      },{
      "type": "quizzes",
      "id": "6",
      "attributes": {
         "title": "На знание World of Warcraft",
         "description": "На 100% не пройден еще ни разу",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "6",
      "attributes": {
         "title": "Угадай кошачьего по фото!",
         "description": "Легкий, развлекательный тест",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "8",
      "attributes": {
         "title": "Чилийские леса полны опасностей",
         "description": "Ищем истину в слухах и домыслах",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "9",
      "attributes": {
         "title": "World of tanks: заурядная игра или народный феномен?",
         "description": "Выясняем мнение населения о популярной игре",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "10",
      "attributes": {
         "title": "АЗАЗАЗАЗ",
         "description": "Неадекватный тест",
         "category": {
            "data": {
               "id": 222,
               "type": "categories",
               "attributes": {
                  "title": "Непонятно что"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "11",
      "attributes": {
         "title": "Вулканы мира",
         "description": "Много ли вы знаете о настоящей мощи природы?",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "12",
      "attributes": {
         "title": "Начальный уровнь Lineage 2",
         "description": "Тест базовых знаний",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "13",
      "attributes": {
         "title": "Тестик про сумерки!!",
         "description": "Невообразимо прекрасный тест, обязательно к прохождению",
         "category": {
            "data": {
               "id": 444,
               "type": "categories",
               "attributes": {
                  "title": "Восхитительно"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "14",
      "attributes": {
         "title": "Давай пробни",
         "description": "Нереальный тест, непроходимый прям",
         "category": {
            "data": {
               "id": 444,
               "type": "categories",
               "attributes": {
                  "title": "Восхитительно"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "15",
      "attributes": {
         "title": "Готическая Барселона",
         "description": "Серия тестов о выживании в Европе",
         "category": {
            "data": {
               "id": 98,
               "type": "categories",
               "attributes": {
                  "title": "Помоги Маше выжить в Испании"
               }
            }
         }
      }
   }];
   this.get('/quizzes', function(db, request) {
      if(request.queryParams.category_id !== undefined) {
         let filteredData = data.filter(function(item) {
            return String(item.attributes.category.data.id) === String(request.queryParams.category_id);
         });
         return {
            data: filteredData
         };
      } else {
         return {
            data: data
         };
      }
   });
   let qData = [{"id":"1","type":"questions","attributes":{"text":"Среди ночи Пират поднялся и медле(1)о вышел из сеней. Он долго стоял на пороге облитый серебря(2)ым лу(3)ым светом и напряже(4)о слушал. Но даже настороже(5)ый волчий слух не мог уловить ни малейшего признака жизни вокруг.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"1","type":"answers","attributes":{"text":"1, 2, 3, 5"}},{"id":"2","type":"answers","attributes":{"text":"1, 2, 3, 4"}},{"id":"3","type":"answers","attributes":{"text":"1, 3, 4, 5"}},{"id":"4","type":"answers","attributes":{"text":"1, 2, 4, 5"}}]}}},{"id":"2","type":"questions","attributes":{"text":"Окрыле(1)ый успехом своей поэмы, Парни издал сборник «Украде(2)ый портфель», куда вошла забавная пародия на поэму Мильтона «Потеря(3)ый рай». Но все же наиболее известными остаются его любовные элегии, в которых соедине(4)ы ирония и меланхолия, изящество и глубина.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"5","type":"answers","attributes":{"text":"1, 2, 3"}},{"id":"6","type":"answers","attributes":{"text":"2, 3, 4"}},{"id":"7","type":"answers","attributes":{"text":"1, 3"}},{"id":"8","type":"answers","attributes":{"text":"1, 2, 4"}}]}}},{"id":"3","type":"questions","attributes":{"text":"Ели и сосны, скова(1)ые морозом, застыли черные и неподвижные, только изредка сухо потрескивали, словно простуже(2)о кашляли. Волк поднял голову и завыл — тоскливо и дли(3)о. В ответ ему испуга(4)о залаял в избе пес.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"9","type":"answers","attributes":{"text":"1, 2, 3"}},{"id":"10","type":"answers","attributes":{"text":"1, 2, 3, 4"}},{"id":"11","type":"answers","attributes":{"text":"1, 3"}},{"id":"12","type":"answers","attributes":{"text":"2, 4"}}]}}},{"id":"4","type":"questions","attributes":{"text":"Скоро Пират увидел вывороче(1)ую наполовину старую ель; трава и мох вокруг были утопта(2)ы. Пират стоял на крохотной прогали(3)е, окруже(4)ый волчатами, и блаже(5)о помахивал хвостом.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"13","type":"answers","attributes":{"text":"1, 2, 4"}},{"id":"14","type":"answers","attributes":{"text":"2, 3, 4"}},{"id":"15","type":"answers","attributes":{"text":"1, 3, 5"}},{"id":"16","type":"answers","attributes":{"text":"1, 4, 5"}}]}}},{"id":"5","type":"questions","attributes":{"text":"Казалось, Пират ждал, что хозяин неожида(1)о появится на том самом месте, откуда так таинстве(2)о исчез, но за дверью было тихо, только изредка слышался мыши(3)ый шорох и писк. Скоро настала пора, когда даже его звери(4)ый нос не мог уловить ни одного запаха, оставле(5)ого здесь человеком.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"17","type":"answers","attributes":{"text":"1, 4, 5"}},{"id":"18","type":"answers","attributes":{"text":"2, 3, 4"}},{"id":"19","type":"answers","attributes":{"text":"1, 2, 5"}},{"id":"20","type":"answers","attributes":{"text":"1, 2, 4"}}]}}},{"id":"6","type":"questions","attributes":{"text":"К  дому  была  пристрое(1)а  веранда,  краше(2)ая  масля(3)ой  краской.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"21","type":"answers","attributes":{"text":"1"}},{"id":"22","type":"answers","attributes":{"text":"1, 2"}},{"id":"23","type":"answers","attributes":{"text":"2, 3"}},{"id":"24","type":"answers","attributes":{"text":"2"}}]}}},{"id":"7","type":"questions","attributes":{"text":"Берестя(1)ые  грамоты,  найде(2)ые  при  раскопках,  были тщательно изуче(3)ы специалистами.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"25","type":"answers","attributes":{"text":"1, 2, 3"}},{"id":"26","type":"answers","attributes":{"text":"2, 3"}},{"id":"27","type":"answers","attributes":{"text":"2"}},{"id":"28","type":"answers","attributes":{"text":"3"}}]}}},{"id":"8","type":"questions","attributes":{"text":"Броше(1)ый  после  прошлогоднего  наводнения  дом,  с \r\nвылинявшими  беле(2)ыми  стенами,  с  безжизне(3)ыми  пустыми \r\nокнами, производил тяжелое впечатление.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"29","type":"answers","attributes":{"text":"1,2"}},{"id":"30","type":"answers","attributes":{"text":"1, 2, 3"}},{"id":"31","type":"answers","attributes":{"text":"1, 3"}},{"id":"32","type":"answers","attributes":{"text":"2"}}]}}},{"id":"9","type":"questions","attributes":{"text":"Избалова(1)ый расположением отличника Звездочетова, щенок порвал в клочки недавно купле(2)ый блокнот, где были реше(3)ы все задачи к завтрашнему уроку математики.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"33","type":"answers","attributes":{"text":"1"}},{"id":"34","type":"answers","attributes":{"text":"1, 2"}},{"id":"35","type":"answers","attributes":{"text":"2, 3"}},{"id":"36","type":"answers","attributes":{"text":"3"}}]}}},{"id":"10","type":"questions","attributes":{"text":"Двоечник Громобоев, вооруже(1)ый лишь ручкой и мобильником, увере(2)о шел сдавать экзамен, считая все свои проблемы реше(3)ыми.\r\n\r\nВ каком варианте ответа правильно указаны все цифры, на месте которых пишется НН?","answers":{"data":[{"id":"37","type":"answers","attributes":{"text":"1"}},{"id":"38","type":"answers","attributes":{"text":"1, 2, 3"}},{"id":"39","type":"answers","attributes":{"text":"1, 2"}},{"id":"40","type":"answers","attributes":{"text":"3"}}]}}}];
   this.get('/questions', function(db, request) {
      if(request.queryParams.quiz_id !== undefined) {
         return {
            data: qData
         };
      } else {
         return {
            data: qData
         };
      }
   });
   this.post('/answers', function() {});

   this.post('/users/sign_in', function() {
      return {
         auth_token: 'ufb3fb-3fn2-u3fh3ffuy3f2u3'
      };
   });
   
   this.post('/users/sign_up', function() {
      return {
         auth_token: 'ufb3fb-3fn2-u3fh3ffuy3f2u3'
      };
   });

   this.get('/results', function() {
      return {
         "data":{
            "id":"1",
            "type":"results",
            "attributes":{
               "value":2.0
            }
         }
      };
   });
}